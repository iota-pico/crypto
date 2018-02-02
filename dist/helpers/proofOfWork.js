"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wrap an ICurlProofOfWork and add logic to call it.
 * @interface
 */
class ProofOfWork {
    /**
     * Create a new instance of ProofOfWork.
     */
    constructor(curlProofOfWork) {
        this._curlProofOfWork = curlProofOfWork;
    }
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunk transaction for the pow.
     * @param branchTransaction The branch transaction for the pow.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @param trytes The trytes to perform the pow on.
     * @param progressCb Progress callback returns the current tryte index being processed.
     * @returns The trytes produces by the proof of work.
     */
    async pow(trunkTransaction, branchTransaction, minWeightMagnitude, trytes, progressCb) {
        await this._curlProofOfWork.pow(undefined, 10);
        return Promise.resolve([]);
    }
}
exports.ProofOfWork = ProofOfWork;
