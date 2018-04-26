var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
     * @returns Big integer version of trits.
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
     * @returns Big integer version of bytes.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50ZWdlckhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2JpZ0ludGVnZXJIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsdUNBQXVDO0FBQ3ZDLDhEQUFpQztBQUNqQyxzREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ0g7SUFhSTs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBZ0IsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUM1RSxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlELE1BQU0sSUFBSSx5QkFBVyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkseUJBQVcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEQsTUFBTSxJQUFJLHlCQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7U0FDbEY7UUFFRCxJQUFJLEtBQUssR0FBRyxxQkFBTSxDQUFDLElBQUksQ0FBQztRQUV4QixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxL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