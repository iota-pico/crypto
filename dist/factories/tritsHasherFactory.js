"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("@iota-pico/core/dist/factories/factoryBase");
const curl_1 = require("../tritsHashers/curl");
const kerl_1 = require("../tritsHashers/kerl");
/**
 * Factory to generate tritsHashers.
 */
class TritsHasherFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory and add some default instances.
     * @returns The factory instance.
     */
    static instance() {
        if (!TritsHasherFactory._instance) {
            TritsHasherFactory._instance = new TritsHasherFactory();
            TritsHasherFactory._instance.register("curl", (...args) => new curl_1.Curl(...args));
            TritsHasherFactory._instance.register("kerl", (...args) => new kerl_1.Kerl());
        }
        return TritsHasherFactory._instance;
    }
    /* @internal */
    getInstance() {
        return TritsHasherFactory.instance();
    }
}
exports.TritsHasherFactory = TritsHasherFactory;
