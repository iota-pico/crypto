[@iota-pico/crypto](../README.md) > [Kerl](../classes/kerl.md)



# Class: Kerl


Implementation of ITritsHasher using Kerl algorithm. [https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java)

## Implements

* [ITritsHasher](../interfaces/itritshasher.md)

## Index

### Constructors

* [constructor](kerl.md#constructor)


### Properties

* [BIT_HASH_LENGTH](kerl.md#bit_hash_length)
* [BYTE_HASH_LENGTH](kerl.md#byte_hash_length)
* [HASH_LENGTH](kerl.md#hash_length)


### Methods

* [absorb](kerl.md#absorb)
* [getConstants](kerl.md#getconstants)
* [getState](kerl.md#getstate)
* [initialize](kerl.md#initialize)
* [reset](kerl.md#reset)
* [squeeze](kerl.md#squeeze)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Kerl**(): [Kerl](kerl.md)


*Defined in [tritsHashers/kerl.ts:16](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L16)*



Create a new instance of Kerl.




**Returns:** [Kerl](kerl.md)

---


## Properties
<a id="bit_hash_length"></a>

### «Static» BIT_HASH_LENGTH

**●  BIT_HASH_LENGTH**:  *`number`*  = 384

*Defined in [tritsHashers/kerl.ts:12](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L12)*





___

<a id="byte_hash_length"></a>

### «Static» BYTE_HASH_LENGTH

**●  BYTE_HASH_LENGTH**:  *`number`*  =  Kerl.BIT_HASH_LENGTH / 8

*Defined in [tritsHashers/kerl.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L13)*





___

<a id="hash_length"></a>

### «Static» HASH_LENGTH

**●  HASH_LENGTH**:  *`number`*  = 243

*Defined in [tritsHashers/kerl.ts:11](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L11)*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`number`[]*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[absorb](../interfaces/itritshasher.md#absorb)*

*Defined in [tritsHashers/kerl.ts:64](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L64)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="getconstants"></a>

###  getConstants

► **getConstants**(): `object`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[getConstants](../interfaces/itritshasher.md#getconstants)*

*Defined in [tritsHashers/kerl.ts:29](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L29)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[getState](../interfaces/itritshasher.md#getstate)*

*Defined in [tritsHashers/kerl.ts:40](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L40)*



Get the state.




**Returns:** `number`[]
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[initialize](../interfaces/itritshasher.md#initialize)*

*Defined in [tritsHashers/kerl.ts:48](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L48)*



Initialise the hasher.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| state | `number`[]   |  The initial state for the hasher. |





**Returns:** `void`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[reset](../interfaces/itritshasher.md#reset)*

*Defined in [tritsHashers/kerl.ts:54](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L54)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`number`[]*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[squeeze](../interfaces/itritshasher.md#squeeze)*

*Defined in [tritsHashers/kerl.ts:102](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/tritsHashers/kerl.ts#L102)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


