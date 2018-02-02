/**
 * Represents an interface to curl proof of work.
 * @interface
 */
export interface ICurlProofOfWork {
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trytes: string, minWeightMagnitude: number): Promise<string>;
}
