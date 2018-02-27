var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const big_integer_1 = __importDefault(require("big-integer"));
const cryptoError_1 = require("../error/cryptoError");
/**
 * Helper class to convert between BigInteger and other types.
 * Converted from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
class BigIntegerHelper {
    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    static tritsToBigInteger(trits, offset, length) {
        if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array) || trits.length === 0) {
            throw new cryptoError_1.CryptoError("The trits must be a non empty Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new cryptoError_1.CryptoError("The length must be a number > 0");
        }
        if (offset + length > trits.length) {
            throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
        }
        let value = big_integer_1.default.zero;
        for (let i = length - 1; i >= 0; i--) {
            value = value.multiply(BigIntegerHelper.RADIX).add(big_integer_1.default(trits[offset + i]));
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
    static bigIntegerToTrits(value, trits, offset, length) {
        if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
            throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
        }
        if (!objectHelper_1.ObjectHelper.isType(trits, Int8Array)) {
            throw new cryptoError_1.CryptoError("The trits must be an Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new cryptoError_1.CryptoError("The length must be a number > 0");
        }
        if (offset + length > trits.length) {
            throw new cryptoError_1.CryptoError("The offset + length is beyond the length of the array");
        }
        let absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;
        for (let i = 0; i < length; i++) {
            const divRemainder = absoluteValue.divmod(BigIntegerHelper.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;
            if (remainder > BigIntegerHelper.MAX_TRIT_VALUE) {
                remainder = BigIntegerHelper.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
            }
            trits[offset + i] = remainder.toJSNumber();
        }
        if (value.compareTo(big_integer_1.default.zero) < 0) {
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
    static bigIntegerToBytes(value, destination, offset) {
        if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
            throw new cryptoError_1.CryptoError("The value must be a bigInteger type");
        }
        if (!objectHelper_1.ObjectHelper.isType(destination, ArrayBuffer) || destination.byteLength === 0) {
            throw new cryptoError_1.CryptoError("The destination must be an array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
        }
        if (destination.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
            throw new cryptoError_1.CryptoError(`Destination array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
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
    static bytesToBigInteger(source, offset, length) {
        if (!objectHelper_1.ObjectHelper.isType(source, ArrayBuffer) || source.byteLength === 0) {
            throw new cryptoError_1.CryptoError("The source must be a non empty number array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new cryptoError_1.CryptoError("The offset must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new cryptoError_1.CryptoError("The length must be a number > 0");
        }
        if (source.byteLength - offset < BigIntegerHelper.BYTE_HASH_LENGTH) {
            throw new cryptoError_1.CryptoError(`Source array has invalid size, it must be at least ${BigIntegerHelper.BYTE_HASH_LENGTH}`);
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
        return big_integer_1.default(hexString, 16);
    }
}
/* @internal */
BigIntegerHelper.RADIX = big_integer_1.default(3);
/* @internal */
BigIntegerHelper.MAX_TRIT_VALUE = BigIntegerHelper.RADIX.minus(1).divide(2);
/* @internal */
BigIntegerHelper.MIN_TRIT_VALUE = BigIntegerHelper.MAX_TRIT_VALUE.negate();
/* @internal */
BigIntegerHelper.BIT_HASH_LENGTH = 384;
/* @internal */
BigIntegerHelper.BYTE_HASH_LENGTH = BigIntegerHelper.BIT_HASH_LENGTH / 8;
exports.BigIntegerHelper = BigIntegerHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50ZWdlckhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsOERBQXFDO0FBQ3JDLHNEQUFtRDtBQUVuRDs7O0dBR0c7QUFDSDtJQWFJOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDNUUsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sSUFBSSx5QkFBVyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLHlCQUFXLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUkseUJBQVcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLHFCQUFVLENBQUMsSUFBSSxDQUFDO1FB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