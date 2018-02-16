/**
 * Tests for Curl.
 */
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { Curl } from "../../src/tritsHashers/curl";

describe("Curl", () => {
    it("can be created", () => {
        const obj = new Curl();
        chai.should().exist(obj);
    });

    describe("can perform hash", () => {
        it("single absorb and single squeeze", () => {
            const obj = new Curl();
            const trits = Trits.fromTrytes(Trytes.create("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Curl.HASH_LENGTH);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, -1, -1, -1, 0, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, 0, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, -1, 0, 1, 1, -1, 0, 0, 0, 0, -1, 1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1, 0, -1, 1, -1, -1, 0, 0, 1, -1, 0, 0, 0, 1, 1, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 1, 0, 0, -1, -1, 1, 1, -1, 1, 0, 0, 0, 1, 1, -1, -1, 0, -1, -1, -1, -1, -1, 1, 0, -1, -1, 0, 1, 1, -1, -1, 1, 1, -1, 1, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, 1, 0, 1, 0, 0, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 0, 0, -1, -1, 0, -1, 1, 0, 1, 1, 1, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, -1, 1, -1, 1, 1, 1, 1, 0, 1, 0, 1, -1, 1, -1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWRXCNNLPWIVWKVNYXLSBGYPYFNLZRJHHBHHXTZYIG9URVDHRKBIPONSHPVDFLYJRNGPRQJDFC9CGKDJT");
        });

        it("multi absorb and single squeeze", () => {
            const obj = new Curl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Curl.HASH_LENGTH);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 1, 0, -1, 1, 0, 0, -1, -1, 0, 1, 1, 0, 0, -1, 0, -1, 1, 1, 0, 0, -1, -1, -1, 0, -1, -1, 1, 0, 0, 1, -1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1, 1, -1, 0, -1, 1, -1, 0, -1, 1, 0, 1, 1, -1, 0, -1, 0, -1, 0, -1, 1, 1, 0, 0, 0, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 0, 1, 0, -1, -1, 0, 0, -1, -1, 0, -1, 1, -1, 0, 0, 1, 0, 0, -1, 1, 0, -1, 1, 0, -1, 1, 1, 0, 0, 0, -1, -1, -1, 1, 1, -1, 0, 1, -1, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, 1, -1, 0, 1, -1, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 1, -1, 0, 0, -1, 0, 1, 0, -1, 1, 0, 1, -1, 1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, -1, 0, -1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1, -1, 0, 1, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 1, 1, -1, 0, -1, -1, 0, 0, 1, 1, 0, -1, 1, 1, 0, 0, -1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWCBOLRFANOAYQWXXTFQJYQFAUTEEBSZWTIRSSDREYGCNFRLHQVDZXYXSJKCQFQLJMMRHYAZKRRLQZDKR");
        });

        it("single absorb and multi squeeze", () => {
            const obj = new Curl();
            const trits = Trits.fromTrytes(Trytes.create("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Curl.HASH_LENGTH * 2);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 0, -1, 0, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, 0, 1, 1, 1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, -1, -1, -1, 0, -1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, 0, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, 1, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, -1, 0, 1, 1, -1, 0, 0, 0, 0, -1, 1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 1, 0, -1, 0, 1, -1, 0, 1, 0, -1, 0, -1, 1, -1, -1, 0, 0, 1, -1, 0, 0, 0, 1, 1, -1, 1, 0, 0, 0, 0, 1, -1, 0, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 1, 0, 0, -1, -1, 1, 1, -1, 1, 0, 0, 0, 1, 1, -1, -1, 0, -1, -1, -1, -1, -1, 1, 0, -1, -1, 0, 1, 1, -1, -1, 1, 1, -1, 1, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, 1, 0, 1, 0, 0, -1, -1, -1, -1, 1, -1, 1, 1, -1, -1, 0, 0, -1, -1, 0, -1, 1, 0, 1, 1, 1, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, -1, 1, -1, 1, 1, 1, 1, 0, 1, 0, 1, -1, 1, -1, 0, 0, 1, -1, -1, 1, 0, -1, -1, 0, 1, -1, 1, 1, 0, -1, 1, -1, 0, -1, 1, 0, -1, 0, 0, 0, -1, 1, -1, 1, 0, 0, 0, 1, 1, 1, 0, -1, 1, -1, -1, 1, 0, -1, -1, 0, 1, 1, 1, -1, 1, 0, 0, -1, 0, 0, -1, 1, 1, 1, 0, 1, 1, -1, -1, -1, 1, 0, -1, 1, 1, -1, -1, 1, -1, 1, 0, 1, 1, -1, 0, 0, -1, 0, 0, 1, 1, 1, -1, 0, 0, -1, 1, -1, 0, -1, 1, 1, 0, -1, 0, 1, 1, 0, 0, -1, -1, 1, 1, -1, 0, 1, 1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 1, 1, -1, 1, 0, 1, -1, 1, -1, -1, 1, 0, -1, 1, 1, -1, 1, 0, -1, -1, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, 1, 0, 0, 0, 0, -1, 1, 0, 0, 0, 1, -1, -1, 1, 0, 0, -1, 1, 1, 0, 0, 1, 1, -1, 0, -1, 0, 0, 0, 1, -1, -1, -1, -1, 1, 0, -1, -1, -1, 1, 0, 0, 1, 0, 0, -1, 1, 0, 1, 1, 1, -1, 0, -1, -1, -1, -1, 1, 0, -1, 1, -1, -1, -1, 1, 0, -1, -1, 0, 0, 1, -1, 0, 1, 0, 1, -1, 0, 0, 1]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWRXCNNLPWIVWKVNYXLSBGYPYFNLZRJHHBHHXTZYIG9URVDHRKBIPONSHPVDFLYJRNGPRQJDFC9CGKDJTIEOUDTFXRG9MFEOLGRRMLNSVTJYXLYFQDHAEYDOAIGUPSVSWCCCRRDC9BIERDLQ9PEOBCFLYNBTEOIHUI");
        });

        it("multi absorb and multi squeeze", () => {
            const obj = new Curl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Curl.HASH_LENGTH * 2);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 0, -1, -1, -1, 0, 0, 1, 0, -1, 1, 0, 0, -1, -1, 0, 1, 1, 0, 0, -1, 0, -1, 1, 1, 0, 0, -1, -1, -1, 0, -1, -1, 1, 0, 0, 1, -1, 0, -1, 0, -1, -1, -1, 0, 0, -1, 0, 0, -1, 0, -1, 1, -1, 0, -1, 1, -1, 0, -1, 1, 0, 1, 1, -1, 0, -1, 0, -1, 0, -1, 1, 1, 0, 0, 0, 1, -1, -1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, 0, 1, 0, -1, -1, 0, 0, -1, -1, 0, -1, 1, -1, 0, 0, 1, 0, 0, -1, 1, 0, -1, 1, 0, -1, 1, 1, 0, 0, 0, -1, -1, -1, 1, 1, -1, 0, 1, -1, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, 1, -1, 0, 1, -1, 0, -1, 1, 1, -1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 1, -1, 0, 0, -1, 0, 1, 0, -1, 1, 0, 1, -1, 1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, -1, 0, -1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1, -1, 0, 1, 0, 0, -1, 0, 0, -1, 1, 1, 0, 0, -1, 0, 0, -1, 0, 1, 1, -1, 0, -1, -1, 0, 0, 1, 1, 0, -1, 1, 1, 0, 0, -1, -1, 0, -1, 0, -1, 0, 1, 1, 1, -1, 1, -1, 1, -1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 1, 0, 1, 1, 1, 1, 1, -1, 0, 0, -1, 1, 1, 0, 1, -1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 0, 1, 0, -1, -1, -1, 1, 1, 0, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 0, 1, 1, 0, -1, 1, -1, 1, 1, -1, 0, 1, -1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, 0, 0, 0, -1, 0, 1, 1, -1, 0, -1, 0, 0, 1, 1, 0, -1, -1, -1, 1, -1, 0, 1, 0, 0, 1, 1, 0, 1, 1, -1, -1, 1, 1, 1, 1, 1, 0, -1, 1, 1, -1, 0, -1, 0, 0, -1, 0, -1, 1, 1, 1, 0, 0, 1, -1, -1, -1, -1, -1, 0, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 1, 1, -1, 0, 1, 1, -1, -1, -1, 1, 0, 1, -1, 1, 1, -1, 0, -1, -1, 0, 1, 1, -1, 0, 0, 1, 0, -1, -1, -1, -1, -1, -1, -1, 0, 1, 0, 0, 1, 1, -1, -1, 1, -1, 0, -1, 0, -1, 0, 1, -1, 0, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("RWCBOLRFANOAYQWXXTFQJYQFAUTEEBSZWTIRSSDREYGCNFRLHQVDZXYXSJKCQFQLJMMRHYAZKRRLQZDKRQXMTYWDGLMZKULKACNDTKENVLFKHHMCCQSHARLQISEHIJPMDKQRFDUNHQBGH9XLMHPBGYWVIONWAVTXHZ");
        });
    });
});
