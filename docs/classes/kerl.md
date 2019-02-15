[@iota-pico/crypto](../README.md) > [Kerl](../classes/kerl.md)

# Class: Kerl

Implementation of ISponge using Kerl algorithm. [https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java)

## Hierarchy

**Kerl**

## Implements

* [ISponge](../interfaces/isponge.md)

## Index

### Constructors

* [constructor](kerl.md#constructor)

### Methods

* [absorb](kerl.md#absorb)
* [getConstant](kerl.md#getconstant)
* [getState](kerl.md#getstate)
* [initialize](kerl.md#initialize)
* [reset](kerl.md#reset)
* [squeeze](kerl.md#squeeze)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Kerl**(): [Kerl](kerl.md)

*Defined in [sponges/kerl.ts:21](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L21*

Create a new instance of Kerl.

**Returns:** [Kerl](kerl.md)

___

## Methods

<a id="absorb"></a>

###  absorb

▸ **absorb**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[absorb](../interfaces/isponge.md#absorb)*

*Defined in [sponges/kerl.ts:74](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L74*

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

*Defined in [sponges/kerl.ts:35](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L35*

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

*Defined in [sponges/kerl.ts:50](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L50*

Get the state of the kerl hash.

**Returns:** `Int8Array`
The state.

___
<a id="initialize"></a>

###  initialize

▸ **initialize**(state?: *`Int8Array`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[initialize](../interfaces/isponge.md#initialize)*

*Defined in [sponges/kerl.ts:58](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L58*

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

*Defined in [sponges/kerl.ts:64](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L64*

Reset the hasher.

**Returns:** `void`

___
<a id="squeeze"></a>

###  squeeze

▸ **squeeze**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`

*Implementation of [ISponge](../interfaces/isponge.md).[squeeze](../interfaces/isponge.md#squeeze)*

*Defined in [sponges/kerl.ts:115](https://github.com/iota-pico/crypto/tree/master/src/sponges/kerl.ts#L115*

Squeeze trits into the hash.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array` |  The trits to squeeze. |
| offset | `number` |  The offset into the trits to squeeze from. |
| length | `number` |  The number of trits to squeeze. |

**Returns:** `void`

___

