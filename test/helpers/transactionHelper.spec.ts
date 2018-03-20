/**
 * Tests for TransactionHelper.
 */
import { Address } from "@iota-pico/data/dist/data/address";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { TransactionHelper } from "../../src/helpers/transactionHelper";

describe("TransactionHelper", () => {
    it("can be created", () => {
        const obj = new TransactionHelper();
        chai.should().exist(obj);
    });

    describe("hash", () => {
        it("can fail is no valid transaction", () => {
            chai.expect(() => TransactionHelper.hash(undefined)).to.throw("The transaction");
        });

        it("can succeed", () => {
            const obj = Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                               Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                               10,
                                               Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                               20,
                                               30,
                                               40,
                                               Hash.fromTrytes(Trytes.fromString("D".repeat(81))),
                                               Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                               Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                               Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                               50,
                                               60,
                                               70,
                                               Tag.fromTrytes(Trytes.fromString("H".repeat(27))));
            const res = TransactionHelper.hash(obj);
            chai.expect(res.toTrytes().toString()).to.equal("MBMJZMQUJLJW9YXJB9NXNRETRCMFSZQEHMRPCNUSMGGKWFZEGLIFZZWVGD9TJETZZMDDWDNRDDBQA9SBP");
        });
    });
});
