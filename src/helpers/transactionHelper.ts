import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { CryptoError } from "../error/cryptoError";
import { SpongeFactory } from "../factories/spongeFactory";

/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class TransactionHelper {
    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of the transaction.
     */
    public static hash(transaction: Transaction): Hash {
        if (!ObjectHelper.isType(transaction, Transaction)) {
            throw new CryptoError("The transaction must be of type Transaction");
        }

        const curl = SpongeFactory.instance().create("curl");
        const transactionTrits = Trits.fromTrytes(transaction.toTrytes()).toArray();

        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);

        const hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
        curl.squeeze(hashTrits, 0, hashTrits.length);

        return Hash.fromTrytes(Trits.fromArray(hashTrits).toTrytes());
    }
}
