Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const cryptoError_1 = require("../error/cryptoError");
const spongeFactory_1 = require("../factories/spongeFactory");
/**
 * Helper class for transactions.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
class TransactionHelper {
    /**
     * Create the hash for a transaction.
     * @param transaction The transaction to generate the hash.
     * @returns The hash of the transaction.
     */
    static hash(transaction) {
        if (!objectHelper_1.ObjectHelper.isType(transaction, transaction_1.Transaction)) {
            throw new cryptoError_1.CryptoError("The transaction must be of type Transaction");
        }
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        const transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);
        const hashTrits = new Int8Array(curl.getConstant("HASH_LENGTH"));
        curl.squeeze(hashTrits, 0, hashTrits.length);
        return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
}
exports.TransactionHelper = TransactionHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25IZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy90cmFuc2FjdGlvbkhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLHlEQUFzRDtBQUN0RCx1RUFBb0U7QUFDcEUsMkRBQXdEO0FBQ3hELHNEQUFtRDtBQUNuRCw4REFBMkQ7QUFFM0Q7OztHQUdHO0FBQ0g7SUFDSTs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUF3QjtRQUN2QyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLHlCQUFXLENBQUMsRUFBRTtZQUNoRCxNQUFNLElBQUkseUJBQVcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsTUFBTSxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxPQUFPLFdBQUksQ0FBQyxVQUFVLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDSjtBQXRCRCw4Q0FzQkMifQ==