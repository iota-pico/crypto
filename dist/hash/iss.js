Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const address_1 = require("@iota-pico/data/dist/data/address");
const addressSecurity_1 = require("@iota-pico/data/dist/data/addressSecurity");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const signatureMessageFragment_1 = require("@iota-pico/data/dist/data/signatureMessageFragment");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const cryptoError_1 = require("../error/cryptoError");
const spongeFactory_1 = require("../factories/spongeFactory");
/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */
class ISS {
    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    static subseed(seed, index, spongeType = "curl27") {
        if (!objectHelper_1.ObjectHelper.isType(seed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The seed must be of type Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        const subseedPreimage = seed.slice();
        let localIndex = index;
        while (localIndex-- > 0) {
            for (let i = 0; i < subseedPreimage.length; i++) {
                if (++subseedPreimage[i] > ISS.MAX_TRIT_VALUE) {
                    subseedPreimage[i] = ISS.MIN_TRIT_VALUE;
                }
                else {
                    break;
                }
            }
        }
        const subseed = new Int8Array(hashLength);
        sponge.absorb(subseedPreimage, 0, subseedPreimage.length);
        sponge.squeeze(subseed, 0, subseed.length);
        return subseed;
    }
    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param security The security level to create the key.
     * @param spongeType The sponge type to use for operations.
     * @returns the key.
     */
    static key(seed, index, security, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The seed must be of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new cryptoError_1.CryptoError("The index must be an integer >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
            throw new cryptoError_1.CryptoError(`The security must be an integer >= 1 and <= 3`);
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const seedTrits = trits_1.Trits.fromTrytes(seed.toTrytes());
        const indexTrits = trits_1.Trits.fromNumber(index);
        const subseed = trits_1.Trits.add(seedTrits, indexTrits).toArray();
        const subseedLength = subseed.length;
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        sponge.absorb(subseed, 0, subseedLength);
        sponge.squeeze(subseed, 0, subseedLength);
        sponge.reset();
        sponge.absorb(subseed, 0, subseedLength);
        const key = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * hashLength * security);
        let offset = 0;
        const buffer = new Int8Array(subseedLength);
        let localLength = security;
        while (localLength-- > 0) {
            for (let i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
                sponge.squeeze(buffer, 0, subseedLength);
                for (let j = 0; j < hashLength; j++) {
                    key[offset++] = buffer[j];
                }
            }
        }
        return key;
    }
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @param spongeType The sponge type to use for operations.
     * @returns The digests.
     */
    static digests(subseed, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        const fragmentLength = hashLength * ISS.NUMBER_OF_FRAGMENT_CHUNKS;
        if (subseed.length % fragmentLength !== 0) {
            throw new cryptoError_1.CryptoError(`The subseed length must be a multiple of ${fragmentLength}`);
        }
        const tryteRange = ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE;
        const keyLenDiv = subseed.length / fragmentLength;
        const digests = new Int8Array(keyLenDiv * hashLength);
        let buffer;
        for (let i = 0; i < keyLenDiv; i++) {
            const iMul = i * fragmentLength;
            const keyFragment = subseed.slice(iMul, iMul + fragmentLength);
            for (let j = 0; j < ISS.NUMBER_OF_FRAGMENT_CHUNKS; j++) {
                const jMul = j * hashLength;
                buffer = keyFragment.slice(jMul, jMul + hashLength);
                for (let k = 0; k < tryteRange; k++) {
                    sponge.reset();
                    sponge.absorb(buffer, 0, buffer.length);
                    sponge.squeeze(buffer, 0, hashLength);
                }
                for (let k = 0; k < hashLength; k++) {
                    keyFragment[jMul + k] = buffer[k];
                }
            }
            sponge.reset();
            sponge.absorb(keyFragment, 0, keyFragment.length);
            sponge.squeeze(buffer, 0, hashLength);
            const iMul2 = i * hashLength;
            for (let j = 0; j < hashLength; j++) {
                digests[iMul2 + j] = buffer[j];
            }
        }
        return digests;
    }
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @param spongeType The sponge type to use for operations.
     * @returns the address trits.
     */
    static address(digests, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(digests, Int8Array)) {
            throw new cryptoError_1.CryptoError("The digests must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        if (digests.length % hashLength !== 0) {
            throw new cryptoError_1.CryptoError(`Invalid digests length, must be a multiple of ${hashLength}`);
        }
        sponge.initialize();
        sponge.absorb(digests, 0, digests.length);
        const addressTrits = new Int8Array(hashLength);
        sponge.squeeze(addressTrits, 0, addressTrits.length);
        return addressTrits;
    }
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest of the bundle and signature message fragment.
     */
    static digest(normalizedBundleFragment, signatureMessageFragment, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }
        if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The signatureMessageFragment must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        let buffer;
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();
        for (let i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
            buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));
            for (let j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
                const sponge2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
                sponge2.initialize();
                sponge2.absorb(buffer, 0, buffer.length);
                sponge2.squeeze(buffer, 0, sponge2.getConstant("HASH_LENGTH"));
            }
            sponge.absorb(buffer, 0, buffer.length);
        }
        sponge.squeeze(buffer, 0, sponge.getConstant("HASH_LENGTH"));
        return buffer;
    }
    /**
     * Get the digest for the subseed.
     * @param subseed The subseed to get the digest for.
     * @param security The security level.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest.
     */
    static subseedToDigest(subseed, security, spongeType = "curl27") {
        if (!objectHelper_1.ObjectHelper.isType(subseed, Int8Array)) {
            throw new cryptoError_1.CryptoError("The subseed must be of type Int8Array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
            throw new cryptoError_1.CryptoError(`The security must be an integer >= 1 and <= 3`);
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const c1 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const c2 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const c3 = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        c1.initialize();
        c2.initialize();
        c3.initialize();
        const hashLength = c1.getConstant("HASH_LENGTH");
        const keyLength = ((hashLength / 3) / ISS.RADIX) * hashLength;
        const length = security * keyLength / hashLength;
        let out = new Int8Array(hashLength);
        c1.absorb(subseed, 0, subseed.length);
        for (let i = 0; i < length; i++) {
            c1.squeeze(out, 0, out.length);
            for (let j = 0; j < (ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE + 1); j++) {
                c2.reset();
                c2.absorb(out, 0, out.length);
                out = c2.getState().slice(0, hashLength);
            }
            c3.absorb(out, 0, out.length);
        }
        c3.squeeze(out, 0, out.length);
        return out;
    }
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns the normalized bundle.
     */
    static normalizedBundle(bundleHash, spongeType = "curl81") {
        if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        const normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
        const hashString = bundleHash.toTrytes().toString();
        const normalizedFragmentLength = hashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;
        for (let i = 0; i < ISS.NUMBER_OF_SECURITY_LEVELS; i++) {
            let sum = 0;
            for (let j = 0; j < normalizedFragmentLength; j++) {
                const hashChar = hashString.charAt(i * normalizedFragmentLength + j);
                const val = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(hashChar)).toNumber();
                normalizedBundle[i * normalizedFragmentLength + j] = val;
                sum += val;
            }
            if (sum >= 0) {
                while (sum-- > 0) {
                    for (let j = 0; j < normalizedFragmentLength; j++) {
                        if (normalizedBundle[i * normalizedFragmentLength + j] > ISS.MIN_TRYTE_VALUE) {
                            normalizedBundle[i * normalizedFragmentLength + j]--;
                            break;
                        }
                    }
                }
            }
            else {
                while (sum++ < 0) {
                    for (let j = 0; j < normalizedFragmentLength; j++) {
                        if (normalizedBundle[i * normalizedFragmentLength + j] < ISS.MAX_TRYTE_VALUE) {
                            normalizedBundle[i * normalizedFragmentLength + j]++;
                            break;
                        }
                    }
                }
            }
        }
        return normalizedBundle;
    }
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns True if the signature message fragment are signed by the expected address.
     */
    static validateSignatures(expectedAddress, signatureMessageFragments, bundleHash, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(expectedAddress, address_1.Address)) {
            throw new cryptoError_1.CryptoError("The expectedAddress must be of type Hash");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(signatureMessageFragments, signatureMessageFragment_1.SignatureMessageFragment)) {
            throw new cryptoError_1.CryptoError("The signatureMessageFragments must be an array of type SignatureMessageFragment");
        }
        if (!objectHelper_1.ObjectHelper.isType(bundleHash, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The bundleHash must be of type Hash");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const normalizedBundleFragments = [];
        const normalizedBundleHash = ISS.normalizedBundle(bundleHash);
        const sponge = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        for (let f = 0; f < 3; f++) {
            normalizedBundleFragments[f] = normalizedBundleHash.slice(f * ISS.NUMBER_OF_FRAGMENT_CHUNKS, (f + 1) * ISS.NUMBER_OF_FRAGMENT_CHUNKS);
        }
        const digests = new Int8Array(signatureMessageFragments.length * hashLength);
        for (let i = 0; i < signatureMessageFragments.length; i++) {
            const digestBuffer = ISS.digest(normalizedBundleFragments[i % 3], trits_1.Trits.fromTrytes(signatureMessageFragments[i].toTrytes()).toArray());
            for (let j = 0; j < hashLength; j++) {
                digests[i * hashLength + j] = digestBuffer[j];
            }
        }
        return expectedAddress.toTrytes().toString() === trits_1.Trits.fromArray(ISS.address(digests)).toTrytes().toString();
    }
    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @returns The signed fragment.
     */
    static signatureMessageFragment(normalizedBundleFragment, keyFragment, spongeType = "kerl") {
        if (!objectHelper_1.ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }
        if (!objectHelper_1.ObjectHelper.isType(keyFragment, Int8Array)) {
            throw new cryptoError_1.CryptoError("The keyFragment must be of type Int8Array");
        }
        if (!spongeFactory_1.SpongeFactory.instance().exists(spongeType)) {
            throw new cryptoError_1.CryptoError(`The spongeType must be one of [${spongeFactory_1.SpongeFactory.instance().types().join(", ")}]`);
        }
        const signatureMessageFragment = keyFragment.slice();
        let hash;
        const kerl = spongeFactory_1.SpongeFactory.instance().create(spongeType);
        const hashLength = kerl.getConstant("HASH_LENGTH");
        for (let i = 0; i < 27; i++) {
            hash = signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength);
            for (let j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
                kerl.initialize();
                kerl.reset();
                kerl.absorb(hash, 0, hashLength);
                kerl.squeeze(hash, 0, hashLength);
            }
            for (let j = 0; j < hashLength; j++) {
                signatureMessageFragment[i * hashLength + j] = hash[j];
            }
        }
        return signatureMessageFragment;
    }
}
/* @internal */
ISS.NUMBER_OF_FRAGMENT_CHUNKS = 27;
/* @internal */
ISS.NUMBER_OF_SECURITY_LEVELS = 3;
/* @internal */
ISS.TRYTE_WIDTH = 3;
/* @internal */
ISS.MIN_TRYTE_VALUE = -13;
/* @internal */
ISS.MAX_TRYTE_VALUE = 13;
/* @internal */
ISS.MIN_TRIT_VALUE = -1;
/* @internal */
ISS.MAX_TRIT_VALUE = 1;
/* @internal */
ISS.RADIX = 3;
exports.ISS = ISS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhc2gvaXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwrREFBNEQ7QUFDNUQsK0VBQTRFO0FBQzVFLHlEQUFzRDtBQUN0RCxpR0FBOEY7QUFDOUYsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxzREFBbUQ7QUFDbkQsOERBQTJEO0FBRTNEOzs7R0FHRztBQUNILE1BQWEsR0FBRztJQWtCWjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWUsRUFBRSxLQUFhLEVBQUUsYUFBcUIsUUFBUTtRQUMvRSxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUkseUJBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLGtDQUFrQyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0c7UUFFRCxNQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELE1BQU0s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