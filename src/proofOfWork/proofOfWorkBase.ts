import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { TimeService } from "@iota-pico/core/dist/services/timeService";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { TryteNumber } from "@iota-pico/data/dist/data/tryteNumber";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { CryptoError } from "../error/cryptoError";
import { TransactionHelper } from "../helpers/transactionHelper";
import { IProofOfWork } from "../interfaces/IProofOfWork";

/**
 * Base class for proof of work.
 */
export abstract class ProofOfWorkBase implements IProofOfWork {
    /**
     * The maximum timestamp value used in proof of work.
     */
    public static readonly MAX_TIMESTAMP_VALUE: number = (Math.pow(3, 27) - 1) / 2;

    /* @internal */
    protected readonly _timeService: ITimeService;

    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService) {
        this._timeService = timeService || new TimeService();
    }

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     * @returns Promise.
     */
    public async initialize(): Promise<void> {
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
    public async pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]> {
        if (!ObjectHelper.isType(trunkTransaction, Hash)) {
            throw new CryptoError("The trunkTransaction must be an object of type Hash");
        }
        if (!ObjectHelper.isType(branchTransaction, Hash)) {
            throw new CryptoError("The branchTransaction must be an object of type Hash");
        }
        if (!ArrayHelper.isTyped(trytes, Trytes)) {
            throw new CryptoError("The trytes must be an array of type Trytes");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new CryptoError("The minWeightMagnitude must be > 0");
        }

        const finalTrytes = [];

        let previousTransactionHash: Hash;

        for (let i = 0; i < trytes.length; i++) {
            const transaction = Transaction.fromTrytes(trytes[i]);

            // Start with last index transaction
            // Assign it the trunk / branch which the user has supplied
            // If there is a bundle, chain the bundle transactions via
            // trunkTransaction together
            transaction.attachmentTimestamp = TryteNumber.fromNumber(this._timeService.msSinceEpoch());
            transaction.attachmentTimestampLowerBound = TryteNumber.fromNumber(0);
            transaction.attachmentTimestampUpperBound = TryteNumber.fromNumber(ProofOfWorkBase.MAX_TIMESTAMP_VALUE);

            // If this is the first transaction, to be processed
            // Make sure that it's the last in the bundle and then
            // assign it the supplied trunk and branch transactions

            if (ObjectHelper.isEmpty(previousTransactionHash)) {
                // Check if last transaction in the bundle
                if (transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber()) {
                    throw new CryptoError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");
                }
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
            } else {
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;
            }

            const newTrytes = transaction.toTrytes();

            const singleTrytes = await this.singlePow(newTrytes, minWeightMagnitude);

            transaction.nonce = Tag.fromTrytes(singleTrytes.sub(Transaction.LENGTH - Tag.LENGTH, Tag.LENGTH));

            // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry
            const returnTransaction = Transaction.fromTrytes(singleTrytes);
            previousTransactionHash = TransactionHelper.hash(returnTransaction);

            finalTrytes.push(returnTransaction);
        }
        // reverse the order so that it's ascending from currentIndex
        return finalTrytes.reverse().map(transaction => transaction.toTrytes());
    }

    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public abstract async singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
