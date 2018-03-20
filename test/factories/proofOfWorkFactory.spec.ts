/**
 * Tests for ProofOfWorkFactory.
 */
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { ProofOfWorkFactory } from "../../src/factories/proofOfWorkFactory";
import { IProofOfWork } from "../../src/interfaces/IProofOfWork";

describe("ProofOfWorkFactory", () => {
    it("can be created", () => {
        const obj = ProofOfWorkFactory.instance();
        chai.should().exist(obj);
    });

    it("can register a type", () => {
        const obj = ProofOfWorkFactory.instance();
        class TestProofOfWork implements IProofOfWork {
            public async initialize(): Promise<void> {
                throw new Error("Method not implemented.");
            }
            public async pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]> {
                throw new Error("Method not implemented.");
            }
        }
        obj.register("test", () => new TestProofOfWork());
        chai.expect(obj.create("test") instanceof TestProofOfWork).to.be.equal(true);
    });
});
