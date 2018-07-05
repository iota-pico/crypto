import { Hash } from "@iota-pico/data/dist/data/hash";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class TransactionHelper {
    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of the transaction.
     */
    static hash(transaction: Transaction): Hash;
}
