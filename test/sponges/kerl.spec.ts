/**
 * Tests for Kerl.
 */
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { Kerl } from "../../src/sponges/kerl";

describe("Kerl", () => {
    it("can be created", () => {
        const obj = new Kerl();
        chai.should().exist(obj);
    });

    describe("can perform hash", () => {
        it("single absorb and single squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.create("EMIDYNHBWMBCXVDEFOFWINXTERALUKYYPPHKP9JJFGJEIUY9MUDVNFZHMMWZUYUSWAIOWEVTHNWMHANBH")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);

            const hashTrits: number[] = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("EJEAOOZYSAWFPZQESYDHZCGYNSTWXUMVJOVDWUNZJXDGWCLUFGIMZRMGCAZGKNPLBRLGUNYWKLJTYEAQX");
        });

        it("multi absorb and single squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits: number[] = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPD");
        });

        it("single absorb and multi squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.create("9MIDYNHBWMBCXVDEFOFWINXTERALUKYYPPHKP9JJFGJEIUY9MUDVNFZHMMWZUYUSWAIOWEVTHNWMHANBH")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits: number[] = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH * 2);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA");
        });

        it("multi absorb and multi squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.create("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits: number[] = [];
            obj.squeeze(hashTrits, 0, Kerl.HASH_LENGTH * 2);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPDWQGNSCDCBAIRHAQCOWZEBSNHIJIGPZQITIBJQ9LNTDIBTCQ9EUWKHFLGFUVGGUWJONK9GBCDUIMAYMMQX");
        });
    });
});
