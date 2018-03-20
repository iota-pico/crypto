import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { IProofOfWork } from "../interfaces/IProofOfWork";
/**
 * Base class for proof of work.
 */
export declare abstract class ProofOfWorkBase implements IProofOfWork {
    /**
     * The maximum timestamp value used in proof of work.
     */
    static readonly MAX_TIMESTAMP_VALUE: number;
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService);
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    initialize(): Promise<void>;
    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]>;
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    abstract singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
