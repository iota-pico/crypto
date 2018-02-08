import { FactoryBase } from "@iota-pico/core/dist/factories/factoryBase";
import { ITritsHasher } from "../interfaces/ITritsHasher";
/**
 * Factory to generate tritsHashers.
 */
export declare class TritsHasherFactory extends FactoryBase<ITritsHasher> {
    /**
     * Get the instance of the factory and add some default instances.
     * @returns The factory instance.
     */
    static instance(): FactoryBase<ITritsHasher>;
}
