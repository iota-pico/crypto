import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { ISponge } from "../interfaces/ISponge";
import { Curl } from "../sponges/curl";
import { Kerl } from "../sponges/kerl";

/**
 * Factory to generate sponges.
 */
export class SpongeFactory extends FactoryBase<ISponge> {
    /* @internal */
    private static _instance: SpongeFactory;

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
    public static instance(): FactoryBase<ISponge> {
        if (!SpongeFactory._instance) {
            SpongeFactory._instance = new SpongeFactory();
            SpongeFactory._instance.register("curl", (...args) => new Curl(...args));
            SpongeFactory._instance.register("kerl", (...args) => new Kerl());
        }
        return SpongeFactory._instance;
    }

    /* @internal */
    protected getInstance(): FactoryBase<ISponge> {
        return SpongeFactory.instance();
    }
}
