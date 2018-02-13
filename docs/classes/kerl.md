[@iota-pico/crypto](../README.md) > [Kerl](../classes/kerl.md)



# Class: Kerl


Implementation of ITritsHasher using Kerl algorithm. [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js)
*__interface__*: 


## Implements

* [ITritsHasher](../interfaces/itritshasher.md)

## Index

### Constructors

* [constructor](kerl.md#constructor)


### Properties

* [BIT_HASH_LENGTH](kerl.md#bit_hash_length)
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


*Defined in [tritsHashers/kerl.ts:17](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L17)*



Create a new instance of Kerl.




**Returns:** [Kerl](kerl.md)

---


## Properties
<a id="bit_hash_length"></a>

### «Static» BIT_HASH_LENGTH

**●  BIT_HASH_LENGTH**:  *`number`*  = 384

*Defined in [tritsHashers/kerl.ts:14](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L14)*





___

<a id="hash_length"></a>

### «Static» HASH_LENGTH

**●  HASH_LENGTH**:  *`number`*  = 243

*Defined in [tritsHashers/kerl.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L13)*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[absorb](../interfaces/itritshasher.md#absorb)*

*Defined in [tritsHashers/kerl.ts:68](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L68)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="getconstants"></a>

###  getConstants

► **getConstants**(): `object`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[getConstants](../interfaces/itritshasher.md#getconstants)*

*Defined in [tritsHashers/kerl.ts:33](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L33)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[getState](../interfaces/itritshasher.md#getstate)*

*Defined in [tritsHashers/kerl.ts:44](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L44)*



Get the state.




**Returns:** `number`[]
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[initialize](../interfaces/itritshasher.md#initialize)*

*Defined in [tritsHashers/kerl.ts:52](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L52)*



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

*Defined in [tritsHashers/kerl.ts:58](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L58)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[squeeze](../interfaces/itritshasher.md#squeeze)*

*Defined in [tritsHashers/kerl.ts:108](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/tritsHashers/kerl.ts#L108)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


