[@iota-pico/crypto](../README.md) > [Curl](../classes/curl.md)

# Class: Curl

Implementation of ISponge using Curl algorithm. [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js)

## Hierarchy

**Curl**

## Implements

* [ISponge](../interfaces/isponge.md)

## Index

### Constructors

* [constructor](curl.md#constructor)

### Properties

* [HASH_LENGTH](curl.md#hash_length)
* [NUMBER_OF_ROUNDS](curl.md#number_of_rounds)
* [STATE_LENGTH](curl.md#state_length)

### Methods

* [absorb](curl.md#absorb)
* [getConstant](curl.md#getconstant)
* [getState](curl.md#getstate)
* [initialize](curl.md#initialize)
* [reset](curl.md#reset)
* [squeeze](curl.md#squeeze)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Curl**(rounds?: *`number`*): [Curl](curl.md)

*Defined in [sponges/curl.ts:21](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L21*

Create a new instance of Curl.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` rounds | `number` |  Curl.NUMBER_OF_ROUNDS |  The number of rounds to use. |

**Returns:** [Curl](curl.md)

___

## Properties

<a id="hash_length"></a>

### `<Static>` HASH_LENGTH

**● HASH_LENGTH**: *`number`* = 243

*Defined in [sponges/curl.ts:11](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L11*

___
<a id="number_of_rounds"></a>

### `<Static>` NUMBER_OF_ROUNDS

**● NUMBER_OF_ROUNDS**: *`number`* = 81

*Defined in [sponges/curl.ts:12](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L12*

___
<a id="state_length"></a>

### `<Static>` STATE_LENGTH

**● STATE_LENGTH**: *`number`* =  Curl.HASH_LENGTH * 3

*Defined in [sponges/curl.ts:13](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L13*

___

## Methods

<a id="absorb"></a>

###  absorb

▸ **absorb**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[absorb](../interfaces/isponge.md#absorb)*

*Defined in [sponges/curl.ts:83](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L83*

Absorb trits into the hash.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array` |  The trits to absorb. |
| offset | `number` |  The offset into the trits to absorb from. |
| length | `number` |  The number of trits to absorb. |

**Returns:** `void`

___
<a id="getconstant"></a>

###  getConstant

▸ **getConstant**(name: *`string`*): `number`

*Implementation of [ISponge](../interfaces/isponge.md).[getConstant](../interfaces/isponge.md#getconstant)*

*Defined in [sponges/curl.ts:36](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L36*

Get the constant for the spone.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the constant to get. |

**Returns:** `number`
The constant.

___
<a id="getstate"></a>

###  getState

▸ **getState**(): `Int8Array`

*Implementation of [ISponge](../interfaces/isponge.md).[getState](../interfaces/isponge.md#getstate)*

*Defined in [sponges/curl.ts:54](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L54*

Get the state.

**Returns:** `Int8Array`
The state.

___
<a id="initialize"></a>

###  initialize

▸ **initialize**(state?: *`Int8Array`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[initialize](../interfaces/isponge.md#initialize)*

*Defined in [sponges/curl.ts:62](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L62*

Initialise the hasher.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` state | `Int8Array` |  The initial state for the hasher. |

**Returns:** `void`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[reset](../interfaces/isponge.md#reset)*

*Defined in [sponges/curl.ts:73](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L73*

Reset the hasher.

**Returns:** `void`

___
<a id="squeeze"></a>

###  squeeze

▸ **squeeze**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[squeeze](../interfaces/isponge.md#squeeze)*

*Defined in [sponges/curl.ts:120](https://github.com/iota-pico/crypto/tree/master/src/sponges/curl.ts#L120*

Squeeze trits into the hash.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array` |  The trits to squeeze. |
| offset | `number` |  The offset into the trits to squeeze from. |
| length | `number` |  The number of trits to squeeze. |

**Returns:** `void`

___

