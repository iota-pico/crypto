/**
 * Tests for CryptoError.
 */
import * as chai from "chai";
import { CryptoError } from "../../src/error/cryptoError";

describe("CryptoError", () => {
    it("can be created", () => {
        const obj = new CryptoError("message");
        chai.should().exist(obj);
    });
});
