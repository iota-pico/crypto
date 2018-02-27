/**
 * Tests for Curl.
 */
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { Curl } from "../../src/sponges/curl";
import curlMultiAbsorbMultiSqueezeJson from "./curl-multi-absorb-multi-squeeze.json";
import curlMultiAbsorbSingleSqueezeJson from "./curl-multi-absorb-single-squeeze.json";
import curlSingleAbsorbMultiSqueezeJson from "./curl-single-absorb-multi-squeeze.json";
import curlSingleAbsorbSingleSqueezeJson from "./curl-single-absorb-single-squeeze.json";

describe("Curl", () => {
    it("can be created", () => {
        const obj = new Curl();
        chai.should().exist(obj);
    });

    describe("getConstants", () => {
        it("can get constants", () => {
            const obj = new Curl();
            chai.expect(obj.getConstants().HASH_LENGTH).to.equal(243);
            chai.expect(obj.getConstants().NUMBER_OF_ROUNDS).to.equal(81);
            chai.expect(obj.getConstants().STATE_LENGTH).to.equal(729);
        });
        it("can get constants with different rounds", () => {
            const obj = new Curl(27);
            chai.expect(obj.getConstants().HASH_LENGTH).to.equal(243);
            chai.expect(obj.getConstants().NUMBER_OF_ROUNDS).to.equal(27);
            chai.expect(obj.getConstants().STATE_LENGTH).to.equal(729);
        });
    });

    describe("getState", () => {
        it("when not initialized", () => {
            const obj = new Curl();
            chai.expect(obj.getState()).equal(undefined);
        });
        it("can get state when initialized", () => {
            const obj = new Curl();
            obj.initialize(new Int8Array([1, 2, 3]));
            chai.expect(Array.from(obj.getState())).to.deep.equal([1, 2, 3]);
        });
    });

    describe("initialize", () => {
        it("can initialize with no state", () => {
            const obj = new Curl();
            obj.initialize();
            chai.expect(Array.from(obj.getState())).to.deep.equal(Array.from(new Int8Array(729)));
        });
        it("can initialize with a state", () => {
            const obj = new Curl();
            obj.initialize(new Int8Array([1, 2, 3]));
            chai.expect(Array.from(obj.getState())).to.deep.equal([1, 2, 3]);
        });
    });

    describe("reset", () => {
        it("can be called", () => {
            const obj = new Curl();
            obj.reset();
            chai.expect(Array.from(obj.getState())).to.deep.equal(Array.from(new Int8Array(729)));
        });
    });

    describe("absorb", () => {
        it("can fail with no trits", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(undefined, 0, 0)).to.throw("non empty");
        });

        it("can fail with no offset", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), undefined, 0)).to.throw("number >= 0");
        });

        it("can fail with a negative offset", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), -1, 0)).to.throw("number >= 0");
        });

        it("can fail with no length", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, undefined)).to.throw("number >= 0");
        });

        it("can fail with a negative length", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, -1)).to.throw("number >= 0");
        });

        it("can fail with a offset + length > trits.length", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, 2)).to.throw("the trits");
        });

        it("can fail with a non zero offset + length > trits.length", () => {
            const obj = new Curl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 1, 1)).to.throw("the trits");
        });
    });

    describe("squeeze", () => {
        it("can fail with no trits", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(undefined, 0, 0)).to.throw("non empty");
        });

        it("can fail with no offset", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), undefined, 0)).to.throw("number >= 0");
        });

        it("can fail with a negative offset", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), -1, 0)).to.throw("number >= 0");
        });

        it("can fail with no length", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, undefined)).to.throw("number >= 0");
        });

        it("can fail with a negative length", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, -1)).to.throw("number >= 0");
        });

        it("can fail with a offset + length > trits.length", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, 2)).to.throw("the trits");
        });

        it("can fail with a non zero offset + length > trits.length", () => {
            const obj = new Curl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 1, 1)).to.throw("the trits");
        });
    });

    describe("can perform hash", () => {
        it("single absorb and single squeeze with non hash length", () => {
            const obj = new Curl();
            const trits = Trits.fromTrytes(Trytes.fromString("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(100);
            obj.squeeze(hashTrits, 0, 100);

            chai.expect(Array.from(hashTrits))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([1, 0, -1, 1, 0, 1, 0, 1, 1, -1, -1, -1, 0, 1, 1, -1, 0, -1, 0, 1, -1, 1, 1, -1, 0, -1, 1, 1, -1, -1, 1, 0, -1, 0, 1, 0, 0, 1, 0, 1, -1, 0, 0, 1, 1, 0, 0, -1, -1, -1, 1, 1, 0, 1, -1, -1, 1, -1, 0, 0, -1, 0, -1, 0, 0, 1, 0, 1, 0, -1, 1, -1, 1, 1, 1, -1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, -1, 0, -1, 1, 1, -1, 1, -1, -1, 0, -1, 0, 1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("SJLNLQUVFPSCCYLREJEZQICTMZJMIQVPX");
        });

        it("single absorb and single squeeze", () => {
            const obj = new Curl();
            const trits = Trits.fromTrytes(Trytes.fromString("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

            chai.expect(Array.from(hashTrits))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, -1, -1, -1, 0, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, 0, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, -1, 0, 1, 1, -1, 0, 0, 0, 0, -1, 1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1, 0, -1, 1, -1, -1, 0, 0, 1, -1, 0, 0, 0, 1, 1, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 1, 0, 0, -1, -1, 1, 1, -1, 1, 0, 0, 0, 1, 1, -1, -1, 0, -1, -1, -1, -1, -1, 1, 0, -1, -1, 0, 1, 1, -1, -1, 1, 1, -1, 1, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, 1, 0, 1, 0, 0, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 0, 0, -1, -1, 0, -1, 1, 0, 1, 1, 1, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, -1, 1, -1, 1, 1, 1, 1, 0, 1, 0, 1, -1, 1, -1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWRXCNNLPWIVWKVNYXLSBGYPYFNLZRJHHBHHXTZYIG9URVDHRKBIPONSHPVDFLYJRNGPRQJDFC9CGKDJT");
        });

        it("multi absorb and single squeeze", () => {
            const obj = new Curl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.fromString("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

            chai.expect(Array.from(hashTrits))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 1, 0, -1, 1, 0, 0, -1, -1, 0, 1, 1, 0, 0, -1, 0, -1, 1, 1, 0, 0, -1, -1, -1, 0, -1, -1, 1, 0, 0, 1, -1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1, 1, -1, 0, -1, 1, -1, 0, -1, 1, 0, 1, 1, -1, 0, -1, 0, -1, 0, -1, 1, 1, 0, 0, 0, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 0, 1, 0, -1, -1, 0, 0, -1, -1, 0, -1, 1, -1, 0, 0, 1, 0, 0, -1, 1, 0, -1, 1, 0, -1, 1, 1, 0, 0, 0, -1, -1, -1, 1, 1, -1, 0, 1, -1, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, 1, -1, 0, 1, -1, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 1, -1, 0, 0, -1, 0, 1, 0, -1, 1, 0, 1, -1, 1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, -1, 0, -1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1, -1, 0, 1, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 1, 1, -1, 0, -1, -1, 0, 0, 1, 1, 0, -1, 1, 1, 0, 0, -1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWCBOLRFANOAYQWXXTFQJYQFAUTEEBSZWTIRSSDREYGCNFRLHQVDZXYXSJKCQFQLJMMRHYAZKRRLQZDKR");
        });

        it("single absorb and multi squeeze", () => {
            const obj = new Curl();
            const trits = Trits.fromTrytes(Trytes.fromString("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

            chai.expect(Array.from(hashTrits))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, -1, -1, -1, 0, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, 0, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, -1, 0, 1, 1, -1, 0, 0, 0, 0, -1, 1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1, 0, -1, 1, -1, -1, 0, 0, 1, -1, 0, 0, 0, 1, 1, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 1, 0, 0, -1, -1, 1, 1, -1, 1, 0, 0, 0, 1, 1, -1, -1, 0, -1, -1, -1, -1, -1, 1, 0, -1, -1, 0, 1, 1, -1, -1, 1, 1, -1, 1, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, 1, 0, 1, 0, 0, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 0, 0, -1, -1, 0, -1, 1, 0, 1, 1, 1, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, -1, 1, -1, 1, 1, 1, 1, 0, 1, 0, 1, -1, 1, -1, 0, 0, 1, -1, -1, 1, 0, -1, -1, 0, 1, -1, 1, 1, 0, -1, 1, -1, 0, -1, 1, 0, -1, 0, 0, 0, -1, 1, -1, 1, 0, 0, 0, 1, 1, 1, 0, -1, 1, -1, -1, 1, 0, -1, -1, 0, 1, 1, 1, -1, 1, 0, 0, -1, 0, 0, -1, 1, 1, 1, 0, 1, 1, -1, -1, -1, 1, 0, -1, 1, 1, -1, -1, 1, -1, 1, 0, 1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, -1, 0, 0, -1, 1, -1, 0, -1, 1, 1, 0, -1, 0, 1, 1, 0, 0, -1, -1, 1, 1, -1, 0, 1, 1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 1, 1, -1, 1, 0, 1, -1, 1, -1, -1, 1, 0, -1, 1, 1, -1, 1, 0, -1, -1, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, 1, 0, 0, 0, 0, -1, 1, 0, 0, 0, 1, -1, -1, 1, 0, 0, -1, 1, 1, 0, 0, 1, 1, -1, 0, -1, 0, 0, 0, 1, -1, -1, -1, -1, 1, 0, -1, -1, -1, 1, 0, 0, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, -1, -1, -1, -1, 1, 0, -1, 1, -1, -1, -1, 1, 0, -1, -1, 0, 0, 1, -1, 0, 1, 0, 1, -1, 0, 0, 1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWRXCNNLPWIVWKVNYXLSBGYPYFNLZRJHHBHHXTZYIG9URVDHRKBIPONSHPVDFLYJRNGPRQJDFC9CGKDJTIEOUDTFXRG9MFEOLGRRMLNSVTJYXLYFQDHAEYDOAIGUPSVSWCCCRRDC9BIERDLQ9PEOBCFLYNBTEOIHUI");
        });

        it("multi absorb and multi squeeze", () => {
            const obj = new Curl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.fromString("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

            chai.expect(Array.from(hashTrits))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 1, 0, -1, 1, 0, 0, -1, -1, 0, 1, 1, 0, 0, -1, 0, -1, 1, 1, 0, 0, -1, -1, -1, 0, -1, -1, 1, 0, 0, 1, -1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1, 1, -1, 0, -1, 1, -1, 0, -1, 1, 0, 1, 1, -1, 0, -1, 0, -1, 0, -1, 1, 1, 0, 0, 0, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 0, 1, 0, -1, -1, 0, 0, -1, -1, 0, -1, 1, -1, 0, 0, 1, 0, 0, -1, 1, 0, -1, 1, 0, -1, 1, 1, 0, 0, 0, -1, -1, -1, 1, 1, -1, 0, 1, -1, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, 1, -1, 0, 1, -1, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 1, -1, 0, 0, -1, 0, 1, 0, -1, 1, 0, 1, -1, 1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, -1, 0, -1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1, -1, 0, 1, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 1, 1, -1, 0, -1, -1, 0, 0, 1, 1, 0, -1, 1, 1, 0, 0, -1, -1, 0, -1, 0, -1, 0, 1, 1, 1, -1, 1, -1, 1, -1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 1, 0, 1, 1, 1, 1, 1, -1, 0, 0, -1, 1, 1, 0, 1, -1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 0, 1, 0, -1, -1, -1, 1, 1, 0, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 0, 1, 1, 0, -1, 1, -1, 1, 1, -1, 0, 1, -1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, 0, 0, 0, -1, 0, 1, 1, -1, 0, -1, 0, 0, 1, 1, 0, -1, -1, -1, 1, -1, 0, 1, 0, 0, 1, 1, 0, 1, 1, -1, -1, 1, 1, 1, 1, 1, 0, -1, 1, 1, -1, 0, -1, 0, 0, -1, 0, -1, 1, 1, 1, 0, 0, 1, -1, -1, -1, -1, -1, 0, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 1, 1, -1, 0, 1, 1, -1, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, -1, -1, 0, 1, 1, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 1, 0, 0, 1, 1, -1, -1, 1, -1, 0, -1, 0, -1, 0, 1, -1, 0, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWCBOLRFANOAYQWXXTFQJYQFAUTEEBSZWTIRSSDREYGCNFRLHQVDZXYXSJKCQFQLJMMRHYAZKRRLQZDKRQXMTYWDGLMZKULKACNDTKENVLFKHHMCCQSHARLQISEHIJPMDKQRFDUNHQBGH9XLMHPBGYWVIONWAVTXHZ");
        });
    });

    describe("data matching", () => {
        it("single absorb and single squeeze", () => {
            const numTestRounds = 10000; // curlSingleAbsorbSingleSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Curl();
                const trits = Trits.fromTrytes(Trytes.fromString(curlSingleAbsorbSingleSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(curlSingleAbsorbSingleSqueezeJson[i].hash);
            }
        });

        it("multi absorb and single squeeze", () => {
            const numTestRounds = 10000; // curlMultiAbsorbSingleSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Curl();
                const trits = Trits.fromTrytes(Trytes.fromString(curlMultiAbsorbSingleSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(curlMultiAbsorbSingleSqueezeJson[i].hash);
            }
        });

        it("single absorb and multi squeeze", () => {
            const numTestRounds = 10000; // curlSingleAbsorbMultiSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Curl();
                const trits = Trits.fromTrytes(Trytes.fromString(curlSingleAbsorbMultiSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(curlSingleAbsorbMultiSqueezeJson[i].hash);
            }
        });

        it("multi absorb and multi squeeze", () => {
            const numTestRounds = 10000; // curlMultiAbsorbMultiSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Curl();
                const trits = Trits.fromTrytes(Trytes.fromString(curlMultiAbsorbMultiSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(curlMultiAbsorbMultiSqueezeJson[i].hash);
            }
        });
    });
});
