[@iota-pico/crypto](../README.md) > [ISS](../classes/iss.md)



# Class: ISS


ISS Hashing functions. Converted [https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java](https://github.com/iotaledger/iri/src/main/java/com/iota/iri/hash/ISS.java)

## Index

### Methods

* [address](iss.md#address)
* [digest](iss.md#digest)
* [digests](iss.md#digests)
* [key](iss.md#key)
* [normalizedBundle](iss.md#normalizedbundle)
* [validateSignatures](iss.md#validatesignatures)



---
## Methods
<a id="address"></a>

### «Static» address

► **address**(digests: *`Int8Array`*): `Int8Array`



*Defined in [hash/iss.ts:141](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L141)*



Create the address for the digests.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  The digests to create the address for. |





**Returns:** `Int8Array`
the address trits.






___

<a id="digest"></a>

### «Static» digest

► **digest**(normalizedBundleFragment: *`Int8Array`*, signatureMessageFragment: *`Int8Array`*): `Int8Array`



*Defined in [hash/iss.ts:168](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L168)*



Create digest of the normalized bundle fragment.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`   |  The fragment to create digest. |
| signatureMessageFragment | `Int8Array`   |  The trits for signature message fragment. |





**Returns:** `Int8Array`
The digest of the bundle and signature message fragment.






___

<a id="digests"></a>

### «Static» digests

► **digests**(subseed: *`Int8Array`*): `Int8Array`



*Defined in [hash/iss.ts:85](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L85)*



Create the digests for the given subseed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| subseed | `Int8Array`   |  To create the digests for. |





**Returns:** `Int8Array`
The digests.






___

<a id="key"></a>

### «Static» key

► **key**(seed: *`Hash`*, index: *`number`*, security: *`AddressSecurity`*): `Int8Array`



*Defined in [hash/iss.ts:36](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L36)*



Create the key for the seed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to create the key for. |
| index | `number`   |  The index to use for the seed. |
| security | `AddressSecurity`   |  - |





**Returns:** `Int8Array`
the key.






___

<a id="normalizedbundle"></a>

### «Static» normalizedBundle

► **normalizedBundle**(bundleHash: *`Hash`*): `Int8Array`



*Defined in [hash/iss.ts:206](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L206)*



Create a normalized bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundleHash | `Hash`   |  The hash of the bundle. |





**Returns:** `Int8Array`
the normalized bundle.






___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(expectedAddress: *`Address`*, signatureMessageFragments: *`SignatureMessageFragment`[]*, bundleHash: *`Hash`*): `boolean`



*Defined in [hash/iss.ts:260](https://github.com/iotaeco/iota-pico-crypto/blob/d6e0a8f/src/hash/iss.ts#L260)*



Validate the signature fragments from the address.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| expectedAddress | `Address`   |  The address. |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  The signature message fragments. |
| bundleHash | `Hash`   |  The hash for the bundle. |





**Returns:** `boolean`
True if the signature message fragment are signed by the expected address.






___


