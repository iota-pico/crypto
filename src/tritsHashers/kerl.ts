import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { TritsWordConverter } from "@iota-pico/data/dist/converters/tritsWordConverter";
import { Trits } from "@iota-pico/data/dist/data/trits";
import * as CryptoJS from "crypto-js";
import { ITritsHasher } from "../interfaces/ITritsHasher";

/**
 * Implementation of ITritsHasher using Kerl algorithm.
 * https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js
 * @interface
 */
export class Kerl implements ITritsHasher {
    public static readonly HASH_LENGTH: number = 243;
    public static readonly BIT_HASH_LENGTH: number = 384;

    /* @internal */
    private readonly _hasher: CryptoJS.HashAlgorithm;

    /**
     * Create a new instance of Kerl.
     */
    constructor() {
        this._hasher = CryptoJS.algo.SHA3.create();
        this._hasher.init({
            outputLength: Kerl.BIT_HASH_LENGTH
        });
    }

    /**
     * Get the constant for the hasher.
     * @returns The constants.
     */
    public getConstants(): { [name: string]: number} {
        return {
            HASH_LENGTH: Kerl.HASH_LENGTH,
            BIT_HASH_LENGTH: Kerl.BIT_HASH_LENGTH
        };
    }

    /**
     * Get the state.
     * @returns The state.
     */
    public getState(): number[] {
        return undefined;
    }

    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    public initialize(state?: number[]): void {
    }

    /**
     * Reset the hasher.
     */
    public reset(): void {
        this._hasher.reset();
    }

    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    public absorb(trits: Trits, offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new CoreError("Illegal length provided");
        }

        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toTritsArray();

        do {
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;

            const tritState = tritsData.slice(localOffset, localOffset + limit);
            localOffset += limit;

            // convert trit state to words
            const wordsToAbsorb = TritsWordConverter.tritsToWords(Trits.fromTritsArray(tritState));

            // absorb the trit stat as wordarray
            this._hasher.update(CryptoJS.lib.WordArray.create(wordsToAbsorb));

            localLength -= Kerl.HASH_LENGTH;
        } while (localLength > 0);
    }

    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    public squeeze(trits: Trits, offset: number, length: number): void {
        if (trits === undefined || trits === null) {
            throw new CoreError("Trits can not be null or undefined");
        }
        if (offset === undefined || offset === null) {
            throw new CoreError("Offset can not be null or undefined");
        }
        if (length === undefined || length === null) {
            throw new CoreError("Length can not be null or undefined");
        }
        if (length && ((length % 243) !== 0)) {
            throw new CoreError("Illegal length provided");
        }

        let localOffset = offset;
        let localLength = length;
        const tritsData = trits.toTritsArray();

        do {
            // get the hash digest
            const kCopy = this._hasher.clone();
            const final = kCopy.finalize();

            // Convert words to trits and then map it into the internal state
            const tritState = TritsWordConverter.wordsToTrits(final.words).toTritsArray();

            let i = 0;
            const limit = localLength < Kerl.HASH_LENGTH ? localLength : Kerl.HASH_LENGTH;

            while (i < limit) {
                tritsData[localOffset++] = tritState[i++];
            }

            this.reset();

            for (i = 0; i < final.words.length; i++) {
                final.words[i] = final.words[i] ^ 0xFFFFFFFF;
            }

            this._hasher.update(final);

            localLength -= Kerl.HASH_LENGTH;
        } while (localLength > 0);
    }
}
