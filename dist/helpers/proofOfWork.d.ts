import { ICurlProofOfWork } from "../interfaces/ICurlProofOfWork";
/**
 * Wrap an ICurlProofOfWork and add logic to call it.
 * @interface
 */
export declare class ProofOfWork {
    /**
     * Create a new instance of ProofOfWork.
     */
    constructor(curlProofOfWork: ICurlProofOfWork);
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunk transaction for the pow.
     * @param branchTransaction The branch transaction for the pow.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @param trytes The trytes to perform the pow on.
     * @param progressCb Progress callback returns the current tryte index being processed.
     * @returns The trytes produces by the proof of work.
     */
    pow(trunkTransaction: string, branchTransaction: string, minWeightMagnitude: number, trytes: string[], progressCb: (tryteIndex: number) => void): Promise<string[]>;
}
