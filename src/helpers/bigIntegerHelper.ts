import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import bigInteger from "big-integer";
import { CryptoError } from "../error/cryptoError";

/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class BigIntegerHelper {
    /* @internal */
    private static readonly RADIX: bigInteger.BigInteger = bigInteger(3);
    /* @internal */
    private static readonly MAX_TRIT_VALUE: bigInteger.BigInteger = BigIntegerHelper.RADIX.minus(1).divide(2);
    /* @internal */
    private static readonly MIN_TRIT_VALUE: bigInteger.BigInteger = BigIntegerHelper.MAX_TRIT_VALUE.negate();

    /* @internal */
    private static readonly BIT_HASH_LENGTH: number = 384;
    /* @internal */
    private static readonly BYTE_HASH_LENGTH: number = BigIntegerHelper.BIT_HASH_LENGTH / 8;

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    public static tritsToBigInteger(trits: Int8Array, offset: number, length: number): bigInteger.BigInteger {
        if (!ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
            throw new CryptoError("The trits must be a non empty Int8Array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("The offset must be a number >= 0");
        }

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new CryptoError("The length must be a number > 0");
        }

        if (offset + length > trits.length) {
            throw new CryptoError("The offset + length is beyond the length of the array");
        }

        let value = bigInteger.zero;

        for (let i = length - 1; i >= 0; i--) {
            value = value.multiply(BigIntegerHelper.RADIX).add(bigInteger(trits[offset + i]));
        }

        return value;
    }

    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */
    public static bigIntegerToTrits(value: bigInteger.BigInteger, trits: Int8Array, offset: number, length: number): void {
        if (!ObjectHelper.isType(value, bigInteger)) {
            throw new CryptoError("The value must be a bigInteger type");
        }

        if (!ObjectHelper.isType(trits, Int8Array)) {
            throw new CryptoError("The trits must be an Int8Array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("The offset must be a number >= 0");
        }

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new CryptoError("The length must be a number > 0");
        }

        if (offset + length > trits.length) {
            throw new CryptoError("The offset + length is beyond the length of the array");
        }

        let absoluteValue = value.compareTo(bigInteger.zero) < 0 ? value.negate() : value;

        for (let i = 0; i < length; i++) {
            const divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;

            if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
                remainder = BigIntegerHelper.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(bigInteger["1"]);
            }
            trits[offset + i] = remainder.toJSNumber();
        }

        if (value.compareTo(bigInteger.zero) < 0) {
            for (let i = 0; i < length; i++) {
                // Avoid negative zero
                trits[offset + i] = trits[offset + i] === 0 ? 0 : -trits[offset + i];
            }
        }
    }

    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */
    public static bigIntegerToBytes(value: bigInteger.BigInteger, destination: ArrayBuffer, offset: number): void {
        if (!ObjectHelper.isType(value, bigInteger)) {
            throw new CryptoError("The value must be a bigInteger type");
        }

        if (!ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
            throw new CryptoError("The destination must be an array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("The offset must be a number >= 0");
        }

        if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
            throw new CryptoError(`Destination array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
        }

        // Remember if it is negative for later
        const isNeg = value.isNegative() ? -1 : 0;

        let hexString = value.toString(16);

        if (isNeg === -1) {
            // But remove it for now
            hexString = hexString.slice(1);
        }
        // Now make sure the hex string is an even length so the regex works
        if (hexString.length % 2 === 1) {
            hexString = `0${hexString}`;
        }
        const matches = hexString.match(/[0-9a-f]{2}/g);

        // Convert the hex to numbers
        const signedBytes = new Int8Array(matches
            .map(hex => parseInt(`0x${hex}`, 16)));

        // if the whole number is negative then
        // change to 2's complements by noting all the numbers
        // and adding 1 to the last i.e. ~bignum+1
        if (isNeg === -1) {
            for (let b = 0; b < signedBytes.length; b++) {
                signedBytes[b] = ~signedBytes[b];
            }
            // Add 1 to last number, if the number is 0xFF continue to carry
            let c = signedBytes.length - 1;
            do {
                signedBytes[c]++;
            } while (signedBytes[c--] === 0 && c > 0);
        }

        const dataView = new DataView(destination);

        // Pad the start of the buffer with the neg value
        let i = offset;
        while (i + signedBytes.length < BigIntegerHelper.BYTE_HASH_LENGTH) {
            dataView.setInt8(i++, isNeg);
        }
        // And copy in the actual bytes
        for (let j = signedBytes.length; j-- > 0;) {
            dataView.setInt8(i++, signedBytes[signedBytes.length - 1 - j]);
        }
    }

    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */
    public static bytesToBigInteger(source: ArrayBuffer, offset: number, length: number): bigInteger.BigInteger {
        if (!ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
            throw new CryptoError("The source must be a non empty number array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CryptoError("The offset must be a number >= 0");
        }

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new CryptoError("The length must be a number > 0");
        }

        if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
            throw new CryptoError(`Source array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
        }

        const dataView = new DataView(source);

        let signedBytes = new Int8Array(dataView.byteLength);
        for (let b = 0; b < dataView.byteLength; b++) {
            signedBytes[b] = dataView.getInt8(b + offset);
        }

        // Remove the initial padding leaving at least one byte
        let paddingOffset = 0;
        const firstByte = signedBytes[0];

        // If the first padding character is negative then reverse the 2s complement
        // but first strip of the leading padding
        if (firstByte === 0 || firstByte === -1) {
            while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
                paddingOffset++;
            }
            // Strip any padding
            signedBytes = signedBytes.slice(paddingOffset);
        }

        // if the whole number is negative then
        // change to 2's complements by noting all the numbers
        // and adding 1 to the last i.e. ~bignum+1
        if (firstByte < 0) {
            for (let b = 0; b < signedBytes.length; b++) {
                signedBytes[b] = ~signedBytes[b];
            }
            // Add 1 to last number, if the number is 0xFF continue to carry
            let c = signedBytes.length - 1;
            do {
                signedBytes[c]++;
            } while (signedBytes[c--] === 0 && c > 0);
        }

        let hexString = firstByte < 0 ? "-" : "";
        const dv = new DataView(signedBytes.buffer);
        for (let h = 0; h < dv.byteLength; h++) {
            hexString += `00${dv.getUint8(h).toString(16)}`.slice(-2);
        }

        return bigInteger(hexString, 16);
    }
}
