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
     * Create the key for the seed.
     * @param seed The seed to create the key for.
     * @param index The index to use for the seed.
     * @param length The security level to create the key.
     * @returns the key.
     */
    static key(seed: Hash, index: number, security: AddressSecurity): Int8Array;
    /**
     * Create the digests for the given subseed.
     * @param subseed To create the digests for.
     * @returns The digests.
     */
    static digests(subseed: Int8Array): Int8Array;
    /**
     * Create the address for the digests.
     * @param digests The digests to create the address for.
     * @returns the address trits.
     */
    static address(digests: Int8Array): Int8Array;
    /**
     * Create digest of the normalized bundle fragment.
     * @param normalizedBundleFragment The fragment to create digest.
     * @param signatureMessageFragment The trits for signature message fragment.
     * @returns The digest of the bundle and signature message fragment.
     */
    static digest(normalizedBundleFragment: Int8Array, signatureMessageFragment: Int8Array): Int8Array;
    /**
     * Create a normalized bundle.
     * @param bundleHash The hash of the bundle.
     * @returns the normalized bundle.
     */
    static normalizedBundle(bundleHash: Hash): Int8Array;
    /**
     * Validate the signature fragments from the address.
     * @param expectedAddress The address.
     * @param signatureMessageFragments The signature message fragments.
     * @param bundleHash The hash for the bundle.
     * @returns True if the signature message fragment are signed by the expected address.
     */
    static validateSignatures(expectedAddress: Address, signatureMessageFragments: SignatureMessageFragment[], bundleHash: Hash): boolean;
}
