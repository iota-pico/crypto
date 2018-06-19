/**
 * Tests for BigIntegerHelper.
 */
import bigInt from "big-integer";
import * as chai from "chai";
import { BigIntegerHelper } from "../../src/helpers/bigIntegerHelper";

describe("BigIntegerHelper", () => {
    it("can be created", () => {
        const obj = new BigIntegerHelper();
        chai.should().exist(obj);
    });

    describe("tritsToBigInteger", () => {
        it("can fail to convert with undefined trits", () => {
            chai.expect(() => BigIntegerHelper.tritsToBigInteger(undefined, 0, 0)).to.throw("The trits");
        });

        it("can fail to convert with empty trits", () => {
            chai.expect(() => BigIntegerHelper.tritsToBigInteger(new Int8Array([]), 0, 0)).to.throw("The trits");
        });

        it("can fail to convert with invalid offset", () => {
            chai.expect(() => BigIntegerHelper.tritsToBigInteger(new Int8Array([1]), undefined, 0)).to.throw("The offset");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.tritsToBigInteger(new Int8Array([1]), 0, undefined)).to.throw("The length");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.tritsToBigInteger(new Int8Array([1, 2, 3]), 2, 4)).to.throw("offset + length");
        });

        it("can convert a trits to a big integer fixed -1", () => {
            // tslint:disable-next-line:max-line-length
            const trits = new Int8Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
            const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bigInteger.toString()).to.be.equal("-43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
        });
        it("can convert a trits to a big integer fixed 0", () => {
            // tslint:disable-next-line:max-line-length
            const trits = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bigInteger.toString()).to.be.equal("0");
        });
        it("can convert a trits to a big integer fixed 1", () => {
            // tslint:disable-next-line:max-line-length
            const trits = new Int8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
            const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bigInteger.toString()).to.be.equal("43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
        });
        it("can convert a trits to a big integer random", () => {
            // tslint:disable-next-line:max-line-length
            const trits = new Int8Array([1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, -1]);
            const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bigInteger.toString()).to.be.equal("-14904212390762556957762576168523208837087875624740470100089781100511276426277511101448811949885757797742060722336005");
        });
    });

    describe("bigIntegerToTrits", () => {
        it("can fail to convert with undefined big int", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(undefined, new Int8Array([]), 0, 0)).to.throw("The value");
        });

        it("can fail to convert with not a big int", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(<any>10, new Int8Array([]), 0, 0)).to.throw("The value");
        });

        it("can fail to convert with invalid trits", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(bigInt("0"), undefined, undefined, 0)).to.throw("The trits");
        });

        it("can fail to convert with invalid offset", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(bigInt("0"), new Int8Array([]), undefined, 0)).to.throw("The offset");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(bigInt("0"), new Int8Array([1]), 0, undefined)).to.throw("The length");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToTrits(bigInt("0"), new Int8Array([1, 2, 3]), 2, 4)).to.throw("offset + length");
        });

        it("can convert a trits to a big integer fixed -1", () => {
            const trits = new Int8Array(243);
            const bigInteger = bigInt("-43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
            BigIntegerHelper.bigIntegerToTrits(bigInteger, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(trits)).to.be.deep.equal([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
        });
        it("can convert a trits to a big integer fixed 0", () => {
            const trits = new Int8Array(243);
            const bigInteger = bigInt("0");
            BigIntegerHelper.bigIntegerToTrits(bigInteger, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(trits)).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it("can convert a trits to a big integer fixed 1", () => {
            const trits = new Int8Array(243);
            const bigInteger = bigInt("43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
            BigIntegerHelper.bigIntegerToTrits(bigInteger, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(trits)).to.be.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it("can convert a trits to a big integer random", () => {
            const trits = new Int8Array(243);
            const bigInteger = bigInt("-14904212390762556957762576168523208837087875624740470100089781100511276426277511101448811949885757797742060722336005");
            BigIntegerHelper.bigIntegerToTrits(bigInteger, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(trits)).to.be.deep.equal([1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, -1]);
        });
    });

    describe("bigIntegerToBytes", () => {
        it("can fail to convert with undefined big int", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(undefined, new ArrayBuffer(1), 0)).to.throw("The value");
        });

        it("can fail to convert with not a big int", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(<any>10, new ArrayBuffer(1), 0)).to.throw("The value");
        });

        it("can fail to convert with invalid destination", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(bigInt("0"), undefined, undefined)).to.throw("The destination");
        });

        it("can fail to convert with invalid destination", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(bigInt("0"), <any>[], undefined)).to.throw("The destination");
        });

        it("can fail to convert with invalid offset", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(bigInt("0"), new ArrayBuffer(1), undefined)).to.throw("The offset");
        });

        it("can fail to convert with invalid size", () => {
            chai.expect(() => BigIntegerHelper.bigIntegerToBytes(bigInt("0"), new Int8Array([1, 2, 3]).buffer, 2)).to.throw("invalid size");
        });

        it("can convert a big integer to bytes random", () => {
            const bytes = new ArrayBuffer(48);
            BigIntegerHelper.bigIntegerToBytes(bigInt("12345678901234567890"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(new Int8Array(bytes))).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -85, 84, -87, -116, -21, 31, 10, -46]);
        });

        it("can convert a big integer to bytes negative random", () => {
            const bytes = new ArrayBuffer(48);
            BigIntegerHelper.bigIntegerToBytes(bigInt("-12345678901234567890"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(new Int8Array(bytes))).to.be.deep.equal([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, -85, 86, 115, 20, -32, -11, 46]);
        });

        it("can convert a big integer to bytes zero", () => {
            const bytes = new ArrayBuffer(48);
            BigIntegerHelper.bigIntegerToBytes(bigInt("0"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(Array.from(new Int8Array(bytes))).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe("bytesToBigInteger", () => {
        it("can fail to convert with undefined Int8Array", () => {
            chai.expect(() => BigIntegerHelper.bytesToBigInteger(undefined, 0, 0)).to.throw("The source");
        });

        it("can fail to convert with not a big int", () => {
            chai.expect(() => BigIntegerHelper.bytesToBigInteger(<any>[], 0, 0)).to.throw("The source");
        });

        it("can fail to convert with invalid offset", () => {
            chai.expect(() => BigIntegerHelper.bytesToBigInteger(new ArrayBuffer(1), undefined, 0)).to.throw("The offset");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.bytesToBigInteger(new Int8Array([1]).buffer, 0, undefined)).to.throw("The length");
        });

        it("can fail to convert with invalid length", () => {
            chai.expect(() => BigIntegerHelper.bytesToBigInteger(new Int8Array([1]).buffer, 0, 1)).to.throw("invalid size");
        });

        it("can convert a random bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -85, 84, -87, -116, -21, 31, 10, -46];
            const bigInteger = BigIntegerHelper.bytesToBigInteger(new Int8Array(bytes).buffer, 0, bytes.length);
            chai.expect(bigInteger.toString()).to.be.equal("12345678901234567890");
        });

        it("can convert a negative random bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, -85, 86, 115, 20, -32, -11, 46];
            const bigInteger = BigIntegerHelper.bytesToBigInteger(new Int8Array(bytes).buffer, 0, bytes.length);
            chai.expect(bigInteger.toString()).to.be.equal("-12345678901234567890");
        });

        it("can convert a 0 bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const bigInteger = BigIntegerHelper.bytesToBigInteger(new Int8Array(bytes).buffer, 0, bytes.length);
            chai.expect(bigInteger.toString()).to.be.equal("0");
        });
    });

    describe("multiple conversion", () => {
        it("can convert lots of randoms trits to and from bigIntegers", () => {
            const numTestRounds = 10000;
            for (let c = 0; c < numTestRounds; c++) {
                const trits = new Int8Array(243);
                for (let i = 0; i < trits.length; i++) {
                    // tslint:disable-next-line:insecure-random
                    trits[i] = Math.floor(Math.random() * 3) - 1;
                }

                const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);

                const trits2 = new Int8Array(243);
                BigIntegerHelper.bigIntegerToTrits(bigInteger, trits2, 0, trits2.length);

                chai.expect(trits).to.be.deep.equal(trits2);

                if (c % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`           ${c} of ${numTestRounds}`);
                }
            }
        });

        it("can convert lots of randoms trits to and from bytes and bigIntegers", () => {
            const numTestRounds = 10000;
            for (let c = 0; c < numTestRounds; c++) {
                const trits = new Int8Array(243);
                for (let i = 0; i < trits.length; i++) {
                    // tslint:disable-next-line:insecure-random
                    trits[i] = Math.floor(Math.random() * 3) - 1;
                }
                trits[242] = 0;
                let failMessage = `trits: ${JSON.stringify(trits)}\n`;

                const bigInteger = BigIntegerHelper.tritsToBigInteger(trits, 0, trits.length);
                failMessage += `bigInt: ${bigInteger.toString()}\n`;

                const bytes = new ArrayBuffer(48);
                BigIntegerHelper.bigIntegerToBytes(bigInteger, bytes, 0);
                const bigInt2 = BigIntegerHelper.bytesToBigInteger(bytes, 0, bytes.byteLength);
                const trits2 = new Int8Array(243);
                BigIntegerHelper.bigIntegerToTrits(bigInt2, trits2, 0, trits2.length);

                chai.expect(trits).to.be.deep.equal(trits2, failMessage);

                if (c % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`           ${c} of ${numTestRounds}`);
                }
            }
        });
    });
});
