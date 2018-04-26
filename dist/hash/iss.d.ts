import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
/**
 * ISS Hashing functions.
 * Converted https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java
 */
export declare class ISS {
    /**
     * Get the subseed for the seed and index.
     * @param seed The seed.
     * @param index The index for the seed.
     * @param spongeType The sponge type to use for operations.
     * @returns The subseed.
     */
    static subseed(seed: Int8Array, index: number, spongeType?: string): Int8Array;
    /**
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param security The security level to create the key.
     * @param spongeType The sponge type to use for operations.
     * @returns the key.
     */
    static key(seed: Hash, index: number, security: AddressSecurity, spongeType?: string): Int8Array;
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @param spongeType The sponge type to use for operations.
     * @returns The digests.
     */
    static digests(subseed: Int8Array, spongeType?: string): Int8Array;
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @param spongeType The sponge type to use for operations.
     * @returns the address trits.
     */
    static address(digests: Int8Array, spongeType?: string): Int8Array;
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest of the bundle and signature message fragment.
     */
    static digest(normalizedBundleFragment: Int8Array, signatureMessageFragment: Int8Array, spongeType?: string): Int8Array;
    /**
     * Get the digest for the subseed.
     * @param subseed The subseed to get the digest for.
     * @param security The security level.
     * @param spongeType The sponge type to use for operations.
     * @returns The digest.
     */
    static subseedToDigest(subseed: Int8Array, security: AddressSecurity, spongeType?: string): Int8Array;
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns the normalized bundle.
     */
    static normalizedBundle(bundleHash: Hash, spongeType?: string): Int8Array;
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @param spongeType The sponge type to use for operations.
     * @returns True if the signature message fragment are signed by the expected address.
     */
    static validateSignatures(expectedAddress: Address, signatureMessageFragments: SignatureMessageFragment[], bundleHash: Hash, spongeType?: string): boolean;
    /**
     * Create a signed signature message fragment.
     * @param normalizedBundleFragment The fragment to sign.
     * @param keyFragment The key fragment to sign with.
     * @param spongeType The sponge type to use for operations.
     * @returns The signed fragment.
     */
    static signatureMessageFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array, spongeType?: string): Int8Array;
}
