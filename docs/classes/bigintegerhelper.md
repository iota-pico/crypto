[@iota-pico/crypto](../README.md) > [BigIntegerHelper](../classes/bigintegerhelper.md)

# Class: BigIntegerHelper

Helper class to convert between BigInteger and other types. Converted from [https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java)

## Hierarchy

**BigIntegerHelper**

## Index

### Methods

* [bigIntegerToBytes](bigintegerhelper.md#bigintegertobytes)
* [bigIntegerToTrits](bigintegerhelper.md#bigintegertotrits)
* [bytesToBigInteger](bigintegerhelper.md#bytestobiginteger)
* [tritsToBigInteger](bigintegerhelper.md#tritstobiginteger)

---

## Methods

<a id="bigintegertobytes"></a>

### `<Static>` bigIntegerToBytes

▸ **bigIntegerToBytes**(value: *`BigInteger`*, destination: *`ArrayBuffer`*, offset: *`number`*): `void`

*Defined in [helpers/bigIntegerHelper.ts:113](https://github.com/iota-pico/crypto/blob/b1e71f4/src/helpers/bigIntegerHelper.ts#L113)*

Convert the bigInteger into bytes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `BigInteger` |  The value to convert. |
| destination | `ArrayBuffer` |  The destination array to store the bytes. |
| offset | `number` |  The offset within the array to store the bytes. |

**Returns:** `void`

___
<a id="bigintegertotrits"></a>

### `<Static>` bigIntegerToTrits

▸ **bigIntegerToTrits**(value: *`BigInteger`*, trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`

*Defined in [helpers/bigIntegerHelper.ts:64](https://github.com/iota-pico/crypto/blob/b1e71f4/src/helpers/bigIntegerHelper.ts#L64)*

Convert bigInteger to trits.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `BigInteger` |  The bigInteger to convert to trits. |
| trits | `Int8Array` |  The array to receive the trits. |
| offset | `number` |  The offset to place the trits in the array. |
| length | `number` |  The length of the array. |

**Returns:** `void`

___
<a id="bytestobiginteger"></a>

### `<Static>` bytesToBigInteger

▸ **bytesToBigInteger**(source: *`ArrayBuffer`*, offset: *`number`*, length: *`number`*): `BigInteger`

*Defined in [helpers/bigIntegerHelper.ts:173](https://github.com/iota-pico/crypto/blob/b1e71f4/src/helpers/bigIntegerHelper.ts#L173)*

Convert bytes to a bigInteger.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | `ArrayBuffer` |  The source bytes. |
| offset | `number` |  The offset within the bytes to start conversion. |
| length | `number` |  The length of the bytes to use for conversion. |

**Returns:** `BigInteger`
Big integer version of bytes.

___
<a id="tritstobiginteger"></a>

### `<Static>` tritsToBigInteger

▸ **tritsToBigInteger**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `BigInteger`

*Defined in [helpers/bigIntegerHelper.ts:31](https://github.com/iota-pico/crypto/blob/b1e71f4/src/helpers/bigIntegerHelper.ts#L31)*

Convert trits to a bigInteger.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array` |  The trits to convert. |
| offset | `number` |  Offset within the array to start. |
| length | `number` |  The length of the trits array to convert. |

**Returns:** `BigInteger`
Big integer version of trits.

___

