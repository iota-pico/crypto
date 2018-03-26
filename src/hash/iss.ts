import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { CryptoError } from "../error/cryptoError";
import { SpongeFactory } from "../factories/spongeFactory";

/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */
export class ISS {
    /* @internal */
    private static readonly NUMBER_OF_FRAGMENT_CHUNKS: number = 27;
    /* @internal */
    private static readonly NUMBER_OF_SECURITY_LEVELS: number = 3;
    /* @internal */
    private static readonly TRYTE_WIDTH: number = 3;
    /* @internal */
    private static readonly MIN_TRYTE_VALUE: number = -13;
    /* @internal */
    private static readonly MAX_TRYTE_VALUE: number = 13;
    /* @internal */
    private static readonly MIN_TRIT_VALUE: number = -1;
    /* @internal */
    private static readonly MAX_TRIT_VALUE: number = 1;
    /* @internal */
    private static readonly RADIX: number = 3;

    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @return The subseed.
     */
    public static subseed(seed: Int8Array, index: number, spongeType: string = "curl27"): Int8Array {
        if (!ObjectHelper.isType(seed, Int8Array)) {
            throw new CryptoError("The seed must be of type Int8Array");
        }

        if (!NumberHelper.isInteger(index) || index < 0) {
            throw new CryptoError("The index must be an integer >= 0");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();

        const subseedPreimage = seed.slice();
        let localIndex = index;

        while (localIndex-- > 0) {
            for (let i = 0; i < subseedPreimage.length; i++) {
                if (++subseedPreimage[i] > ISS.MAX_TRIT_VALUE) {
                    subseedPreimage[i] = ISS.MIN_TRIT_VALUE;
                } else {
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
    public static key(seed: Hash, index: number, security: AddressSecurity, spongeType: string = "kerl"): Int8Array {
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new CryptoError("The seed must be of type Hash");
        }

        if (!NumberHelper.isInteger(index) || index < 0) {
            throw new CryptoError("The index must be an integer >= 0");
        }

        if (!NumberHelper.isInteger(security) || security < AddressSecurity.low || security > AddressSecurity.high) {
            throw new CryptoError(`The security must be an integer >= 1 and <= 3`);
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const seedTrits = Trits.fromTrytes(seed.toTrytes());
        const indexTrits = Trits.fromNumber(index);
        const subseed = Trits.add(seedTrits, indexTrits).toArray();
        const subseedLength = subseed.length;

        const sponge = SpongeFactory.instance().create(spongeType);
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
    public static digests(subseed: Int8Array, spongeType: string = "kerl"): Int8Array {
        if (!ObjectHelper.isType(subseed, Int8Array)) {
            throw new CryptoError("The subseed must be of type Int8Array");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength: number = sponge.getConstant("HASH_LENGTH");
        const fragmentLength = hashLength * ISS.NUMBER_OF_FRAGMENT_CHUNKS;

        if (subseed.length % fragmentLength !== 0) {
            throw new CryptoError(`The subseed length must be a multiple of ${fragmentLength}`);
        }

        const tryteRange = ISS.MAX_TRYTE_VALUE - ISS.MIN_TRYTE_VALUE;

        const keyLenDiv = subseed.length / fragmentLength;

        const digests = new Int8Array(keyLenDiv * hashLength);
        let buffer: Int8Array;

        for (let i = 0; i < keyLenDiv; i++) {
            const iMul = i * fragmentLength;
            const keyFragment = subseed.slice(iMul, iMul + fragmentLength);

            for (let j = 0; j < ISS.NUMBER_OF_FRAGMENT_CHUNKS; j++) {
                const jMul: number = j * hashLength;
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
    public static address(digests: Int8Array, spongeType: string = "kerl"): Int8Array {
        if (!ObjectHelper.isType(digests, Int8Array)) {
            throw new CryptoError("The digests must be of type Int8Array");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");

        if (digests.length % hashLength !== 0) {
            throw new CryptoError(`Invalid digests length, must be a multiple of ${hashLength}`);
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
    public static digest(normalizedBundleFragment: Int8Array, signatureMessageFragment: Int8Array, spongeType: string = "kerl"): Int8Array {
        if (!ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }

        if (!ObjectHelper.isType(signatureMessageFragment, Int8Array)) {
            throw new CryptoError("The signatureMessageFragment must be of type Int8Array");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        let buffer: Int8Array;

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");
        sponge.initialize();

        for (let i = 0; i < ISS.NUMBER_OF_FRAGMENT_CHUNKS; i++) {
            buffer = new Int8Array(signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength));

            for (let j = normalizedBundleFragment[i] - ISS.MIN_TRYTE_VALUE; j > 0; j--) {
                const sponge2 = SpongeFactory.instance().create(spongeType);

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
    public static subseedToDigest(subseed: Int8Array, security: AddressSecurity, spongeType: string = "curl27"): Int8Array {
        if (!ObjectHelper.isType(subseed, Int8Array)) {
            throw new CryptoError("The subseed must be of type Int8Array");
        }

        if (!NumberHelper.isInteger(security) || security < AddressSecurity.low || security > AddressSecurity.high) {
            throw new CryptoError(`The security must be an integer >= 1 and <= 3`);
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const c1 = SpongeFactory.instance().create(spongeType);
        const c2 = SpongeFactory.instance().create(spongeType);
        const c3 = SpongeFactory.instance().create(spongeType);
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
    public static normalizedBundle(bundleHash: Hash, spongeType: string = "curl81"): Int8Array {
        if (!ObjectHelper.isType(bundleHash, Hash)) {
            throw new CryptoError("The bundleHash must be of type Hash");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");

        const normalizedBundle = new Int8Array(ISS.NUMBER_OF_FRAGMENT_CHUNKS * ISS.NUMBER_OF_SECURITY_LEVELS);
        const hashString = bundleHash.toTrytes().toString();

        const normalizedFragmentLength = hashLength / ISS.TRYTE_WIDTH / ISS.NUMBER_OF_SECURITY_LEVELS;

        for (let i = 0; i < ISS.NUMBER_OF_SECURITY_LEVELS; i++) {
            let sum = 0;
            for (let j = 0; j < normalizedFragmentLength; j++) {
                const hashChar = hashString.charAt(i * normalizedFragmentLength + j);
                const val = Trits.fromTrytes(Trytes.fromString(hashChar)).toNumber();
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
            } else {
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
    public static validateSignatures(expectedAddress: Address, signatureMessageFragments: SignatureMessageFragment[], bundleHash: Hash, spongeType: string = "kerl"): boolean {
        if (!ObjectHelper.isType(expectedAddress, Address)) {
            throw new CryptoError("The expectedAddress must be of type Hash");
        }

        if (!ArrayHelper.isTyped(signatureMessageFragments, SignatureMessageFragment)) {
            throw new CryptoError("The signatureMessageFragments must be an array of type SignatureMessageFragment");
        }

        if (!ObjectHelper.isType(bundleHash, Hash)) {
            throw new CryptoError("The bundleHash must be of type Hash");
        }

        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const normalizedBundleFragments = [];
        const normalizedBundleHash = ISS.normalizedBundle(bundleHash);

        const sponge = SpongeFactory.instance().create(spongeType);
        const hashLength = sponge.getConstant("HASH_LENGTH");

        for (let f = 0; f < 3; f++) {
            normalizedBundleFragments[f] = normalizedBundleHash.slice(f * ISS.NUMBER_OF_FRAGMENT_CHUNKS, (f + 1) * ISS.NUMBER_OF_FRAGMENT_CHUNKS);
        }

        const digests = new Int8Array(signatureMessageFragments.length * hashLength);

        for (let i = 0; i < signatureMessageFragments.length; i++) {
            const digestBuffer = ISS.digest(normalizedBundleFragments[i % 3], Trits.fromTrytes(signatureMessageFragments[i].toTrytes()).toArray());

            for (let j = 0; j < hashLength; j++) {
                digests[i * hashLength + j] = digestBuffer[j];
            }
        }

        return expectedAddress.toTrytes().toString() === Trits.fromArray(ISS.address(digests)).toTrytes().toString();
    }

    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @return The signed fragment.
     */
    public static signatureMessageFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array, spongeType: string = "kerl"): Int8Array {
        if (!ObjectHelper.isType(normalizedBundleFragment, Int8Array)) {
            throw new CryptoError("The normalizedBundleFragment must be of type Int8Array");
        }
        if (!ObjectHelper.isType(keyFragment, Int8Array)) {
            throw new CryptoError("The keyFragment must be of type Int8Array");
        }
        if (!SpongeFactory.instance().exists(spongeType)) {
            throw new CryptoError(`The spongeType must be one of [${SpongeFactory.instance().types().join(", ")}]`);
        }

        const signatureMessageFragment = keyFragment.slice();
        let hash: Int8Array;

        const kerl = SpongeFactory.instance().create(spongeType);
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
