/**
 * Tests for Kerl.
 */
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { Kerl } from "../../src/sponges/kerl";
import kerlMultiAbsorbMultiSqueezeJson from "./kerl-multi-absorb-multi-squeeze.json";
import kerlMultiAbsorbSingleSqueezeJson from "./kerl-multi-absorb-single-squeeze.json";
import kerlSingleAbsorbMultiSqueezeJson from "./kerl-single-absorb-multi-squeeze.json";
import kerlSingleAbsorbSingleSqueezeJson from "./kerl-single-absorb-single-squeeze.json";

describe("Kerl", () => {
    it("can be created", () => {
        const obj = new Kerl();
        chai.should().exist(obj);
    });

    describe("getConstants", () => {
        it("can get constants", () => {
            const obj = new Kerl();
            chai.expect(obj.getConstants().HASH_LENGTH).to.equal(243);
            chai.expect(obj.getConstants().BIT_HASH_LENGTH).to.equal(384);
            chai.expect(obj.getConstants().BYTE_HASH_LENGTH).to.equal(48);
        });
    });

    describe("getState", () => {
        it("when not initialized", () => {
            const obj = new Kerl();
            chai.expect(obj.getState()).equal(undefined);
        });
    });

    describe("initialize", () => {
        it("can initialize with no state", () => {
            const obj = new Kerl();
            obj.initialize();
            chai.expect(obj.getState()).equal(undefined);
        });
    });

    describe("reset", () => {
        it("can be called", () => {
            const obj = new Kerl();
            obj.reset();
            chai.expect(obj.getState()).equal(undefined);
        });
    });

    describe("absorb", () => {
        it("can fail with no trits", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(undefined, 0, 0)).to.throw("non empty");
        });

        it("can fail with no offset", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), undefined, 0)).to.throw("number >= 0");
        });

        it("can fail with a negative offset", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), -1, 0)).to.throw("number >= 0");
        });

        it("can fail with no length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, undefined)).to.throw("number >= 0");
        });

        it("can fail with a negative length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, -1)).to.throw("number >= 0");
        });

        it("can fail with a offset + length > trits.length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 0, 2)).to.throw("the trits");
        });

        it("can fail with a non zero offset + length > trits.length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array([1]), 1, 1)).to.throw("the trits");
        });

        it("can fail with length not a multiple of 243", () => {
            const obj = new Kerl();
            chai.expect(() => obj.absorb(new Int8Array(244), 0, 244)).to.throw("must be a multiple");
        });
    });

    describe("squeeze", () => {
        it("can fail with no trits", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(undefined, 0, 0)).to.throw("non empty");
        });

        it("can fail with no offset", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), undefined, 0)).to.throw("number >= 0");
        });

        it("can fail with a negative offset", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), -1, 0)).to.throw("number >= 0");
        });

        it("can fail with no length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, undefined)).to.throw("number >= 0");
        });

        it("can fail with a negative length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, -1)).to.throw("number >= 0");
        });

        it("can fail with a offset + length > trits.length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 0, 2)).to.throw("the trits");
        });

        it("can fail with a non zero offset + length > trits.length", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array([1]), 1, 1)).to.throw("the trits");
        });

        it("can fail with length not a multiple of 243", () => {
            const obj = new Kerl();
            chai.expect(() => obj.squeeze(new Int8Array(244), 0, 244)).to.throw("must be a multiple");
        });
    });

    describe("can perform hash", () => {
        it("single absorb and single squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.fromString("EMIDYNHBWMBCXVDEFOFWINXTERALUKYYPPHKP9JJFGJEIUY9MUDVNFZHMMWZUYUSWAIOWEVTHNWMHANBH")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);

            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("EJEAOOZYSAWFPZQESYDHZCGYNSTWXUMVJOVDWUNZJXDGWCLUFGIMZRMGCAZGKNPLBRLGUNYWKLJTYEAQX");
        });

        it("multi absorb and single squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.fromString("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPD");
        });

        it("single absorb and multi squeeze", () => {
            const obj = new Kerl();
            const trits = Trits.fromTrytes(Trytes.fromString("9MIDYNHBWMBCXVDEFOFWINXTERALUKYYPPHKP9JJFGJEIUY9MUDVNFZHMMWZUYUSWAIOWEVTHNWMHANBH")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA");
        });

        it("multi absorb and multi squeeze", () => {
            const obj = new Kerl();
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTrytes(Trytes.fromString("G9JYBOMPUXHYHKSNRNMMSSZCSHOFYOYNZRSZMAAYWDYEIMVVOGKPJBVBM9TDPULSFUNMTVXRKFIDOHUXXVYDLFSZYZTWQYTE9SPYYWYTXJYQ9IFGYOLZXWZBKWZN9QOOTBQMWMUBLEWUEEASRHRTNIQWJQNDWRYLCA")).toArray();

            obj.initialize();
            obj.absorb(trits, 0, trits.length);
            const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
            obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

            chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                .equal("LUCKQVACOGBFYSPPVSSOXJEKNSQQRQKPZC9NXFSMQNRQCGGUL9OHVVKBDSKEQEBKXRNUJSRXYVHJTXBPDWQGNSCDCBAIRHAQCOWZEBSNHIJIGPZQITIBJQ9LNTDIBTCQ9EUWKHFLGFUVGGUWJONK9GBCDUIMAYMMQX");
        });
    });

    describe("data matching", () => {
        it("single absorb and single squeeze", () => {
            const numTestRounds = 10000; // kerlSingleAbsorbSingleSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Kerl();
                const trits = Trits.fromTrytes(Trytes.fromString(kerlSingleAbsorbSingleSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(kerlSingleAbsorbSingleSqueezeJson[i].hash);
            }
        });

        it("multi absorb and single squeeze", () => {
            const numTestRounds = 10000; // kerlMultiAbsorbSingleSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Kerl();
                const trits = Trits.fromTrytes(Trytes.fromString(kerlMultiAbsorbSingleSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(kerlMultiAbsorbSingleSqueezeJson[i].hash);
            }
        });

        it("single absorb and multi squeeze", () => {
            const numTestRounds = 10000; // kerlSingleAbsorbMultiSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Kerl();
                const trits = Trits.fromTrytes(Trytes.fromString(kerlSingleAbsorbMultiSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(kerlSingleAbsorbMultiSqueezeJson[i].hash);
            }
        });

        it("multi absorb and multi squeeze", () => {
            const numTestRounds = 10000; // kerlMultiAbsorbMultiSqueezeJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                const obj = new Kerl();
                const trits = Trits.fromTrytes(Trytes.fromString(kerlMultiAbsorbMultiSqueezeJson[i].trytes)).toArray();

                obj.initialize();
                obj.absorb(trits, 0, trits.length);

                const hashTrits = new Int8Array(obj.getConstants().HASH_LENGTH * 2);
                obj.squeeze(hashTrits, 0, obj.getConstants().HASH_LENGTH * 2);

                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }

                chai.expect(Trits.fromArray(hashTrits).toTrytes().toString())
                    .equal(kerlMultiAbsorbMultiSqueezeJson[i].hash);
            }
        });
    });
});
