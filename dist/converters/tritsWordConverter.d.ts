/**
 * Helper class to convert between trits and words.
 * Converted from here https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/converter/words.js
 */
export declare class TritsWordConverter {
    private static readonly INT_LENGTH;
    private static readonly TRITS_LENGTH;
    private static readonly RADIX;
    private static readonly HALF_3;
    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    static tritsToWords(trits: number[]): Uint32Array;
    /**
     * Converts the given word array to trits.
     * @param words The words to convert to trits
     * @returns Trits array.
     */
    static wordsToTrits(words: Uint32Array): number[];
    /**
     * Negates the (unsigned) input array.
     */
    private static bigIntNot(arr);
    /**
     * TritsWordConverter.rightShift that works with up to 53
     * JS's shift operators only work on 32 bit integers
     * ours is up to 33 or 34 bits though, so
     * we need to implement shifting manually
     */
    private static rightShift(number, shift);
    /**
     * Swaps endianness.
     */
    private static swap32(val);
    /**
     * Add with carry.
     */
    private static fullAdd(lh, rh, carry);
    /**
     * Subtracts rh from base.
     */
    private static bigIntSubtract(base, rh);
    /**
     * Compares two (unsigned) big integers.
     */
    private static bigIntCompare(lh, rh);
    /**
     * Adds rh to base in place.
     */
    private static bigIntAdd(base, rh);
    /**
     * Adds a small (i.e. <32bit) number to base.
     */
    private static bigIntAddSmall(base, other);
    /**
     * Is the big int null.
     */
    private static isNull(arr);
}
