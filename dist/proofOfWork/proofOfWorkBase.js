Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const timeService_1 = require("@iota-pico/core/dist/services/timeService");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const tryteNumber_1 = require("@iota-pico/data/dist/data/tryteNumber");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const cryptoError_1 = require("../error/cryptoError");
const transactionHelper_1 = require("../helpers/transactionHelper");
/**
 * Base class for proof of work.
 */
class ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService) {
        this._timeService = timeService || new timeService_1.TimeService();
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    async initialize() {
        return Promise.resolve();
    }
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        if (!objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");
        }
        if (!objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
            throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
        }
        const finalTrytes = [];
        let previousTransactionHash;
        for (let i = 0; i < trytes.length; i++) {
            const transaction = transaction_1.Transaction.fromTrytes(trytes[i]);
            // Start with last index transaction
            // Assign it the trunk / branch which the user has supplied
            // If there is a bundle, chain the bundle transactions via
            // trunkTransaction together
            transaction.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
            transaction.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
            transaction.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE);
            // If this is the first transaction, to be processed
            // Make sure that it's the last in the bundle and then
            // assign it the supplied trunk and branch transactions
            if (objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                // Check if last transaction in the bundle
                if (transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber()) {
                    throw new cryptoError_1.CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");
                }
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
            }
            else {
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;
            }
            const newTrytes = transaction.toTrytes();
            const singleTrytes = await this.singlePow(newTrytes, minWeightMagnitude);
            transaction.nonce = tag_1.Tag.fromTrytes(singleTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH));
            // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry
            const returnTransaction = transaction_1.Transaction.fromTrytes(singleTrytes);
            previousTransactionHash = transactionHelper_1.TransactionHelper.hash(returnTransaction);
            finalTrytes.push(returnTransaction);
        }
        // reverse the order so that it's ascending from currentIndex
        return finalTrytes.reverse().map(transaction => transaction.toTrytes());
    }
}
/**
 * The maximum timestamp value used in proof of work.
 */
ProofOfWorkBase.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
exports.ProofOfWorkBase = ProofOfWorkBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtCYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb29mT2ZXb3JrL3Byb29mT2ZXb3JrQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQXVFO0FBQ3ZFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsMkVBQXdFO0FBQ3hFLHlEQUFzRDtBQUN0RCx1REFBb0Q7QUFDcEQsdUVBQW9FO0FBQ3BFLHVFQUFvRTtBQUNwRSw2REFBMEQ7QUFDMUQsc0RBQW1EO0FBQ25ELG9FQUFpRTtBQUdqRTs7R0FFRztBQUNIO0lBU0k7OztPQUdHO0lBQ0gsWUFBWSxXQUEwQjtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsSUFBSSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBc0IsRUFBRSxpQkFBdUIsRUFBRSxNQUFnQixFQUFFLGtCQUEwQjtRQUMxRyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsV0FBSSxDQUFDLEVBQUU7WUFDOUMsTUFBTSxJQUFJLHlCQUFXLENBQUMscURBQXFELENBQUMsQ0FBQztTQUNoRjtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxXQUFJLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkseUJBQVcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsRUFBRTtZQUN0QyxNQUFNLElBQUkseUJBQVcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFB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