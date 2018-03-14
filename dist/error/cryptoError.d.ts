import { CoreError } from "@iota-pico/core/dist/error/coreError";
/**
 * A crypto implementation of an error.
 */
export declare class CryptoError extends CoreError {
    /**
     * Create an instance of CryptoError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: {
        [id: string]: any;
    }, innerError?: Error);
}
