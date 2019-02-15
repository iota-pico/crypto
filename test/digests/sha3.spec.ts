/**
 * Tests for Sha3.
 */
import * as chai from "chai";
import { Sha3 } from "../../src/digests/sha3";
// tslint:disable-next-line:no-default-import
import sha3Json from "./sha3.json";

describe("Sha3", () => {
    it("can be created", () => {
        const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);
        chai.should().exist(obj);
    });

    describe("update", () => {
        it("can fail if if invalid input", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            chai.expect(() => obj.update(undefined)).to.throw("type ArrayBuffer");
        });

        it("can succeed with ArrayBuffer", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const data = new Uint8Array(50);

            obj.update(data.buffer);

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([59, 39, 30, 109, 175, 56, 211, 220, 41, 239, 119, 156, 28, 240, 101, 225, 200, 151, 245, 245, 18, 233, 234, 5, 109, 35, 185, 232, 37, 19, 114, 246, 236, 183, 147, 118, 186, 35, 104, 84, 15, 56, 96, 224, 229, 8, 148, 175]);
        });

        it("can fail with unknown array type", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const data = new Int8Array(100);

            chai.expect(() => obj.update(<any>data)).to.throw("type ArrayBuffer");
        });

        it("can succeed with extra bytes", () => {
            const obj = new Sha3(50, Sha3.KECCAK_PADDING, 50);

            const data = new Uint8Array(1000);

            obj.update(data.buffer);

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([3, 194, 98, 148, 97, 119]);
        });

        it("can succeed with matching block count", () => {
            const obj = new Sha3(50, Sha3.KECCAK_PADDING, 50);

            const data = new Uint8Array(50);

            for (let i = 0; i < 100; i++) {
                obj.update(data.buffer);
            }

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([67, 83, 69, 250, 126, 63]);
        });

        it("can succeed with lastByteIndex equals byteCount", () => {
            const obj = new Sha3(0, Sha3.KECCAK_PADDING, 0);

            const data = new Uint8Array(1000);

            for (let i = 0; i < 1; i++) {
                obj.update(data.buffer);
            }

            const res = obj.digest();
            const resData = new Uint8Array(res);

            chai.expect(Array.from(resData)).to.deep.equal([]);
        });
    });

    describe("data matching", () => {
        it("hash matches", () => {
            const numTestRounds = sha3Json.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);
                const input = sha3Json[i].input;
                const ab = new ArrayBuffer(input.length);
                const dv = new DataView(ab);
                for (let j = 0; j < input.length; j++) {
                    dv.setInt8(j, input[j]);
                }

                obj.update(ab);

                const hash: ArrayBuffer = obj.digest();

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(sha3Json[i].hash).to.deep.equal(Array.from(new Int8Array(hash)), `Failed on ${i}`);
            }
        });
    });
});
