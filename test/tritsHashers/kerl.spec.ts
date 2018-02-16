/**
 * Tests for Kerl.
 */
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { Kerl } from "../../src/tritsHashers/kerl";

describe("Kerl", () => {
    it("can be created", () => {
        const obj = new Kerl();
        chai.should().exist(obj);
    });

    describe("can perform hash", () => {
        it("single absorb and single squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.create("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, -1, -1, 0, -1, 0, 1, 0, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, -1, 0, 1, 0, 1, -1, -1, -1, -1, 1, 0, 0, -1, 0, 1, -1, -1, 0, 1, 1, 0, 0, 1, 1, -1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 0, 1, 1, -1, 1, -1, -1, 1, 0, 0, -1, 1, 0, 1, -1, 0, 1, 0, 1, 1, -1, -1, -1, 0, 0, 0, 0, -1, 1, 1, 0, 1, 1, 0, -1, 0, -1, 1, 1, 0, -1, -1, 1, -1, 1, -1, -1, 0, -1, -1, 1, 0, 0, -1, -1, 1, 1, -1, 1, -1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, 1, 1, 0, -1, 0, -1, 1, -1, -1, 1, 1, 0, -1, 1, -1, 1, 1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 0, -1, 0, 1, -1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, -1, 1, 0, 1, 0, -1, -1, -1, 1, 0, 0, 1, 0, -1, -1, -1, -1, -1, 0, -1, -1, 1, 0, -1, 1, 0, 1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, -1, -1, 0, -1, 1, -1, -1, -1, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("OXJCNFHUNAHWDLKKPELTBFUCVW9KLXKOGWERKTJXQMXTKFKNWNNXYD9DMJJABSEIONOSJTTEVKVDQEWTW");
        });

        it("multi absorb and single squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 1, 1, 0, 1, -1, 0, 1, 0, -1, 1, 1, -1, 0, -1, 1, 1, -1, 1, 0, 0, 0, 1, 0, 0, -1, -1, 1, -1, 1, -1, 1, 0, 0, -1, 1, 1, -1, 0, 1, 0, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 0, -1, 1, 0, -1, 0, -1, -1, 0, -1, 0, 1, 0, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, -1, 0, -1, -1, 0, -1, 0, 0, -1, -1, 0, -1, -1, 1, 1, 1, -1, -1, -1, 0, 0, 0, 1, 0, 0, 0, 0, -1, -1, -1, 0, -1, 0, 0, -1, 1, 1, 0, -1, 1, 1, 1, -1, 0, -1, -1, -1, -1, 0, 0, -1, -1, 0, -1, 0, 1, 0, 1, -1, 1, 1, -1, 1, 0, 1, -1, 0, 1, 1, 0, 0, 0, 0, -1, -1, -1, 0, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 0, 1, 1, 0, 1, 0, -1, -1, 1, 1, -1, -1, 1, -1, 0, -1, -1, -1, 1, -1, 1, 0, -1, 1, 1, 0, -1, 0, 0, 0, -1, -1, -1, -1, 0, 1, -1, 1, 0, 1, 1, 0, -1, 0, 0, -1, 0, -1, 0, 1, -1, 0, 1, 1, -1, -1, 0, 1, 1, 0, 1, -1, 1, -1, 0, -1, 0, -1, 1, 0, 1, -1, -1, 1, 1, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPD");
        });

        it("single absorb and multi squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.create("GYOMKVTSNHVJNCNFBBAH9AAMXLPLLLROQY99QN9DLSJUHDPBLCFFAIQXZA9BKMBJCYSFHFPXAHDWZFEIZ")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH * 2);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, -1, -1, 0, -1, 0, 1, 0, 1, 0, 1, 0, -1, -1, -1, 0, -1, 1, -1, 0, 1, 0, 1, -1, -1, -1, -1, 1, 0, 0, -1, 0, 1, -1, -1, 0, 1, 1, 0, 0, 1, 1, -1, 1, 1, -1, 1, 1, 1, -1, -1, -1, -1, 1, 0, 1, 1, -1, 1, -1, -1, 1, 0, 0, -1, 1, 0, 1, -1, 0, 1, 0, 1, 1, -1, -1, -1, 0, 0, 0, 0, -1, 1, 1, 0, 1, 1, 0, -1, 0, -1, 1, 1, 0, -1, -1, 1, -1, 1, -1, -1, 0, -1, -1, 1, 0, 0, -1, -1, 1, 1, -1, 1, -1, 1, 0, 1, 0, -1, 0, -1, 0, -1, 1, 1, 1, 0, -1, 0, -1, 1, -1, -1, 1, 1, 0, -1, 1, -1, 1, 1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 0, -1, 0, 1, -1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, -1, 1, 0, 1, 0, -1, -1, -1, 1, 0, 0, 1, 0, -1, -1, -1, -1, -1, 0, -1, -1, 1, 0, -1, 1, 0, 1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 1, -1, -1, 0, -1, 1, -1, -1, -1, 0, 1, -1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, -1, 0, -1, -1, 1, 0, -1, 1, -1, -1, -1, -1, 0, 1, 1, -1, 0, 0, -1, 0, 1, -1, -1, 1, 0, -1, 0, 1, 0, -1, 1, -1, -1, 0, 0, 0, 0, 1, 1, -1, 1, 0, 1, 1, -1, -1, 0, 0, -1, 0, -1, -1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, -1, -1, 0, 1, 1, 1, 1, -1, 0, -1, 0, 1, 1, -1, 0, 0, 1, 1, 1, 1, 1, -1, 1, 0, 1, -1, 1, 1, 0, 1, 0, -1, -1, 0, 0, 0, 1, -1, -1, -1, -1, 1, -1, 0, 1, 0, 1, -1, 0, 1, -1, 0, 1, 0, 1, -1, 1, 1, 1, -1, 0, 1, -1, 1, 0, 0, 0, -1, 0, -1, 0, -1, -1, 0, -1, -1, -1, -1, 0, 0, 1, -1, 0, 0, -1, -1, -1, 0, 1, 1, 0, 0, 1, -1, 0, 0, 1, 0, 1, -1, -1, -1, -1, 1, 0, -1, -1, 1, 1, 0, -1, 0, -1, -1, -1, 0, 0, 0, 0, 1, 1, 0, -1, 1, 1, 1, 1, 1, 1, 1, 0, 0, -1, 1, -1, 0, 0, 1, 0, 0, 1, 1, -1, -1, 0, 0, 1, -1, -1, -1, 0, 0, 1, 1, -1, 1, 1, 1, 0, 1, 0, 0, 1, -1, 1, -1, -1, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("OXJCNFHUNAHWDLKKPELTBFUCVW9KLXKOGWERKTJXQMXTKFKNWNNXYD9DMJJABSEIONOSJTTEVKVDQEWTWYLC9QBTNLZHEXSP9LBVZQB9LMWMYHYLMBGJO9PEHUUCGVUAXQQNIZNLIZJNBESOZISMMATIIPINIGDAGW");
        });

        it("multi absorb and multi squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH * 2);

            chai.expect(hashTrits)
                // tslint:disable-next-line:max-line-length
                .to.deep.equal([0, 1, 1, 0, 1, -1, 0, 1, 0, -1, 1, 1, -1, 0, -1, 1, 1, -1, 1, 0, 0, 0, 1, 0, 0, -1, -1, 1, -1, 1, -1, 1, 0, 0, -1, 1, 1, -1, 0, 1, 0, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, 0, -1, 1, 0, -1, 0, -1, -1, 0, -1, 0, 1, 0, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, -1, 0, -1, -1, 0, -1, 0, 0, -1, -1, 0, -1, -1, 1, 1, 1, -1, -1, -1, 0, 0, 0, 1, 0, 0, 0, 0, -1, -1, -1, 0, -1, 0, 0, -1, 1, 1, 0, -1, 1, 1, 1, -1, 0, -1, -1, -1, -1, 0, 0, -1, -1, 0, -1, 0, 1, 0, 1, -1, 1, 1, -1, 1, 0, 1, -1, 0, 1, 1, 0, 0, 0, 0, -1, -1, -1, 0, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 0, 1, 1, 0, 1, 0, -1, -1, 1, 1, -1, -1, 1, -1, 0, -1, -1, -1, 1, -1, 1, 0, -1, 1, 1, 0, -1, 0, 0, 0, -1, -1, -1, -1, 0, 1, -1, 1, 0, 1, 1, 0, -1, 0, 0, -1, 0, -1, 0, 1, -1, 0, 1, 1, -1, -1, 0, 1, 1, 0, 1, -1, 1, -1, 0, -1, 0, -1, 1, 0, 1, -1, -1, 1, 1, 0, -1, -1, 0, -1, 0, -1, 1, -1, 1, -1, -1, -1, 1, 0, -1, 0, 1, 0, 1, 1, 0, 0, 1, 0, -1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1, -1, 0, 1, 1, 0, 0, -1, 0, -1, 0, 1, 0, 0, -1, -1, -1, -1, 0, -1, 0, 0, -1, -1, 1, -1, 1, 0, 1, 0, -1, -1, -1, -1, -1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, -1, 1, 1, -1, -1, -1, 0, 0, -1, 0, -1, 0, 0, 1, -1, 1, -1, 0, 0, 1, -1, 1, 0, 1, 0, 1, -1, 0, -1, 0, 0, 0, 0, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, 0, 0, 0, 1, -1, 1, 0, -1, 1, -1, 0, 1, 0, -1, 0, -1, 0, 0, 0, -1, -1, 1, 0, 1, -1, -1, -1, 0, -1, 1, 1, -1, 0, 1, 0, -1, 1, 0, 1, 1, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 0, 1, -1, -1, -1, 0, 1, 0, 1, 0, -1, -1, -1, -1, -1, -1, 1, 1, 0, 0, 0, 1, -1, 1, -1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, -1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, -1, 0, 1, 1, 1, 1, 1, 1, -1, 0, -1, 0, -1, 0]);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPDWQGNSCDCBAIRHAQCOWZEBSNHIJIGPZQITIBJQ9LNTDIBTCQ9EUWKHFLGFUVGGUWJONK9GBCDUIMAYMMQX");
        });
    });
});
