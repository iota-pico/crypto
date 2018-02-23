/**
 * Tests for Sha3.
 */
import * as chai from "chai";
import { Sha3 } from "../../src/digests/sha3";

describe("Sha3", () => {
    it("can be created", () => {
        const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);
        chai.should().exist(obj);
    });

    describe("update", () => {
        it("can fail if if invalid input", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            chai.expect(() => obj.update(undefined)).to.throw("Input can not");
        });

        it("can succeed with ArrayBuffer", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const ab = new ArrayBuffer(50);
            const data = new Uint8Array(ab);
            data.fill(0);

            obj.update(ab);

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([59, 39, 30, 109, 175, 56, 211, 220, 41, 239, 119, 156, 28, 240, 101, 225, 200, 151, 245, 245, 18, 233, 234, 5, 109, 35, 185, 232, 37, 19, 114, 246, 236, 183, 147, 118, 186, 35, 104, 84, 15, 56, 96, 224, 229, 8, 148, 175]);
        });

        it("can succeed with Uint8Array", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const data = new Uint8Array(100);
            data.fill(0);

            obj.update(data);

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([222, 194, 149, 93, 150, 86, 53, 8, 63, 65, 234, 40, 189, 103, 190, 23, 109, 127, 13, 217, 240, 183, 162, 223, 101, 206, 181, 240, 37, 7, 64, 6, 54, 180, 147, 204, 150, 33, 233, 22, 139, 75, 228, 208, 102, 43, 212, 18]);
        });

        it("can succeed with number[]", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const data = new Uint8Array(1000);
            data.fill(0);

            obj.update(Array.from(data));

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([191, 207, 186, 105, 138, 251, 181, 35, 171, 31, 118, 165, 208, 202, 109, 181, 15, 124, 92, 6, 121, 234, 206, 196, 139, 63, 242, 58, 176, 241, 160, 56, 221, 207, 39, 175, 17, 55, 80, 175, 88, 128, 239, 128, 130, 21, 56, 188]);
        });

        it("can fail with unknown array type", () => {
            const obj = new Sha3(384, Sha3.KECCAK_PADDING, 384);

            const data = new Int8Array(100);

            chai.expect(() => obj.update(<any>data)).to.throw("Input is not of the valid types");
        });

        it("can succeed with extra bytes", () => {
            const obj = new Sha3(50, Sha3.KECCAK_PADDING, 50);

            const data = new Uint8Array(1000);
            data.fill(0);

            obj.update(Array.from(data));

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([3, 194, 98, 148, 97, 119]);
        });

        it("can succeed with matching block count", () => {
            const obj = new Sha3(50, Sha3.KECCAK_PADDING, 50);

            const data = new Uint8Array(50);
            data.fill(0);

            for (let i = 0; i < 100; i++) {
                obj.update(Array.from(data));
            }

            const res = obj.digest();
            const resData = new Uint8Array(res);

            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(resData)).to.deep.equal([67, 83, 69, 250, 126, 63]);
        });
    });
});
