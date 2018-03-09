var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
// tslint:disable-next-line:import-name
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
        if (isNeg === -1) {
            BigIntegerHelper.twosComplement(signedBytes);
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
        const isNeg = firstByte < 0;
        // If the first padding character is negative then reverse the 2s complement
        // but first strip of the leading padding
        if (firstByte === 0 || firstByte === -1) {
            while (signedBytes[paddingOffset] === firstByte && paddingOffset < signedBytes.length - 1) {
                paddingOffset++;
            }
            // Strip any padding
            signedBytes = signedBytes.slice(paddingOffset);
        }
        if (isNeg) {
            BigIntegerHelper.twosComplement(signedBytes);
        }
        let hexString = isNeg ? "-" : "";
        const dv = new DataView(signedBytes.buffer);
        for (let h = 0; h < dv.byteLength; h++) {
            hexString += `00${dv.getUint8(h).toString(16)}`.slice(-2);
        }
        return big_integer_1.default(hexString, 16);
    }
    /* @internal */
    static twosComplement(signedBytes) {
        // if the whole number is negative then
        // change to 2's complements by noting all the numbers
        // and adding 1 to the last i.e. ~bignum+1
        for (let b = 0; b < signedBytes.length; b++) {
            signedBytes[b] = ~signedBytes[b];
        }
        // Add 1 to last number, if the number is 0xFF continue to carry
        let c = signedBytes.length - 1;
        do {
            signedBytes[c]++;
        } while (signedBytes[c--] === 0 && c > 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50ZWdlckhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsdUNBQXVDO0FBQ3ZDLDhEQUFpQztBQUNqQyxzREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ0g7SUFhSTs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFnQixFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQzVFLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLElBQUkseUJBQVcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sSUFBSSx5QkFBVyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxJQUFJLHlCQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLElBQUkseUJBQVcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxxQkFBTSxDQUFD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