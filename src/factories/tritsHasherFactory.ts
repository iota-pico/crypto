import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { ITritsHasher } from "../interfaces/ITritsHasher";
import { Curl } from "../tritsHashers/curl";
import { Kerl } from "../tritsHashers/kerl";

/**
 * Factory to generate tritsHashers.
 */
export class TritsHasherFactory extends FactoryBase<ITritsHasher> {
    /* @internal */
    private static _instance: TritsHasherFactory;

    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    private constructor() {
        super();
    }

    /**
     * Get the instance of the factory and add some default instances.
     * @returns The factory instance.
     */
    public static instance(): FactoryBase<ITritsHasher> {
        if (!TritsHasherFactory._instance) {
            TritsHasherFactory._instance = new TritsHasherFactory();
            TritsHasherFactory._instance.register("curl", (...args) => new Curl(...args));
            TritsHasherFactory._instance.register("kerl", (...args) => new Kerl());
        }
        return TritsHasherFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<ITritsHasher> {
        return TritsHasherFactory.instance();
    }
}
