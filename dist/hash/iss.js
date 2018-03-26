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
     * @param length The security level to create the key.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hhc2gvaXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwrREFBNEQ7QUFDNUQsK0VBQTRFO0FBQzVFLHlEQUFzRDtBQUN0RCxpR0FBOEY7QUFDOUYsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCxzREFBbUQ7QUFDbkQsOERBQTJEO0FBRTNEOzs7R0FHRztBQUNIO0lBa0JJOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZSxFQUFFLEtBQWEsRUFBRSxhQUFxQixRQUFRO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsNkJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSx5QkFBVyxDQUFDLGtDQUFrQyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUcsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FB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