import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { IProofOfWork } from "../interfaces/IProofOfWork";
/**
 * Factory to generate proof of work.
 */
export declare class ProofOfWorkFactory extends FactoryBase<IProofOfWork> {
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<IProofOfWork>;
}
