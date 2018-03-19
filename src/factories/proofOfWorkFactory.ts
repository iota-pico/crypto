import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { IProofOfWork } from "../interfaces/IProofOfWork";

/**
 * Factory to generate proof of work.
 */
export class ProofOfWorkFactory extends FactoryBase<IProofOfWork> {
    /* @internal */
    private static _instance: ProofOfWorkFactory;

    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    private constructor() {
        super();
    }

    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    public static instance(): FactoryBase<IProofOfWork> {
        if (!ProofOfWorkFactory._instance) {
            ProofOfWorkFactory._instance = new ProofOfWorkFactory();
        }
        return ProofOfWorkFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<IProofOfWork> {
        return ProofOfWorkFactory.instance();
    }
}
