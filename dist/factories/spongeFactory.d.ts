import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { ISponge } from "../interfaces/ISponge";
/**
 * Factory to generate sponges.
 */
export declare class SpongeFactory extends FactoryBase<ISponge> {
    /**
     * Get the instance of the factory and add some default instances.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<ISponge>;
}
