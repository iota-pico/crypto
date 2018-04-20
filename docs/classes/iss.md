[@iota-pico/crypto](../README.md) > [ISS](../classes/iss.md)

# Class: ISS

ISS Hashing functions. Converted [https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java](https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java)

## Hierarchy

**ISS**

## Index

### Methods

* [address](iss.md#address)
* [digest](iss.md#digest)
* [digests](iss.md#digests)
* [key](iss.md#key)
* [normalizedBundle](iss.md#normalizedbundle)
* [signatureMessageFragment](iss.md#signaturemessagefragment)
* [subseed](iss.md#subseed)
* [subseedToDigest](iss.md#subseedtodigest)
* [validateSignatures](iss.md#validatesignatures)

---

## Methods

<a id="address"></a>

### `<Static>` address

▸ **address**(digests: *`Int8Array`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:203](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L203)*

Create the address for the digests.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| digests | `Int8Array`  | - |   The digests to create the address for. |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
the address trits.

___

<a id="digest"></a>

### `<Static>` digest

▸ **digest**(normalizedBundleFragment: *`Int8Array`*, signatureMessageFragment: *`Int8Array`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:235](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L235)*

Create digest of the normalized bundle fragment.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`  | - |   The fragment to create digest. |
| signatureMessageFragment | `Int8Array`  | - |   The trits for signature message fragment. |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
The digest of the bundle and signature message fragment.

___

<a id="digests"></a>

### `<Static>` digests

▸ **digests**(subseed: *`Int8Array`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:142](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L142)*

Create the digests for the given subseed.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| subseed | `Int8Array`  | - |   To create the digests for. |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
The digests.

___

<a id="key"></a>

### `<Static>` key

▸ **key**(seed: *`Hash`*, index: *`number`*, security: *`AddressSecurity`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:88](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L88)*

Create the key for the seed.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seed | `Hash`  | - |   The seed to create the key for. |
| index | `number`  | - |   The index to use for the seed. |
| security | `AddressSecurity`  | - |   - |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
the key.

___

<a id="normalizedbundle"></a>

### `<Static>` normalizedBundle

▸ **normalizedBundle**(bundleHash: *`Hash`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:329](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L329)*

Create a normalized bundle.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| bundleHash | `Hash`  | - |   The hash of the bundle. |
| spongeType | `string`  | &quot;curl81&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
the normalized bundle.

___

<a id="signaturemessagefragment"></a>

### `<Static>` signatureMessageFragment

▸ **signatureMessageFragment**(normalizedBundleFragment: *`Int8Array`*, keyFragment: *`Int8Array`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:434](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L434)*

Create a signed signature message fragment.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`  | - |   The fragment to sign. |
| keyFragment | `Int8Array`  | - |   The key fragment to sign with. |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
The signed fragment.

___

<a id="subseed"></a>

### `<Static>` subseed

▸ **subseed**(seed: *`Int8Array`*, index: *`number`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:42](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L42)*

Get the subseed for the seed and index.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seed | `Int8Array`  | - |   The seed. |
| index | `number`  | - |   The index for the seed. |
| spongeType | `string`  | &quot;curl27&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
The subseed.

___

<a id="subseedtodigest"></a>

### `<Static>` subseedToDigest

▸ **subseedToDigest**(subseed: *`Int8Array`*, security: *`AddressSecurity`*, spongeType?: *`string`*): `Int8Array`

*Defined in [hash/iss.ts:279](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L279)*

Get the digest for the subseed.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| subseed | `Int8Array`  | - |   The subseed to get the digest for. |
| security | `AddressSecurity`  | - |   The security level. |
| spongeType | `string`  | &quot;curl27&quot; |   The sponge type to use for operations. |

**Returns:** `Int8Array`
The digest.

___

<a id="validatesignatures"></a>

### `<Static>` validateSignatures

▸ **validateSignatures**(expectedAddress: *`Address`*, signatureMessageFragments: *`SignatureMessageFragment`[]*, bundleHash: *`Hash`*, spongeType?: *`string`*): `boolean`

*Defined in [hash/iss.ts:387](https://github.com/iotaeco/iota-pico-crypto/blob/c97544d/src/hash/iss.ts#L387)*

Validate the signature fragments from the address.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| expectedAddress | `Address`  | - |   The address. |
| signatureMessageFragments | `SignatureMessageFragment`[]  | - |   The signature message fragments. |
| bundleHash | `Hash`  | - |   The hash for the bundle. |
| spongeType | `string`  | &quot;kerl&quot; |   The sponge type to use for operations. |

**Returns:** `boolean`
True if the signature message fragment are signed by the expected address.

___

