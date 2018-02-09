[@iota-pico/crypto](../README.md) > [Curl](../classes/curl.md)



# Class: Curl


Implementation of ITritsHasher using Curl algorithm. [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js)
*__interface__*: 


## Implements

* [ITritsHasher](../interfaces/itritshasher.md)

## Index

### Properties

* [HASH_LENGTH](curl.md#hash_length)
* [NUMBER_OF_ROUNDS](curl.md#number_of_rounds)
* [STATE_LENGTH](curl.md#state_length)


### Methods

* [absorb](curl.md#absorb)
* [getConstants](curl.md#getconstants)
* [getState](curl.md#getstate)
* [initialize](curl.md#initialize)
* [reset](curl.md#reset)
* [squeeze](curl.md#squeeze)



---
## Properties
<a id="hash_length"></a>

### «Static» HASH_LENGTH

**●  HASH_LENGTH**:  *`number`*  = 243

*Defined in [tritsHashers/curl.ts:11](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L11)*





___

<a id="number_of_rounds"></a>

### «Static» NUMBER_OF_ROUNDS

**●  NUMBER_OF_ROUNDS**:  *`number`*  = 81

*Defined in [tritsHashers/curl.ts:12](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L12)*





___

<a id="state_length"></a>

### «Static» STATE_LENGTH

**●  STATE_LENGTH**:  *`number`*  =  Curl.HASH_LENGTH * 3

*Defined in [tritsHashers/curl.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L13)*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[absorb](../interfaces/itritshasher.md#absorb)*

*Defined in [tritsHashers/curl.ts:70](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L70)*



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

*Defined in [tritsHashers/curl.ts:25](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L25)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[getState](../interfaces/itritshasher.md#getstate)*

*Defined in [tritsHashers/curl.ts:37](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L37)*



Get the state.




**Returns:** `number`[]
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[initialize](../interfaces/itritshasher.md#initialize)*

*Defined in [tritsHashers/curl.ts:45](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L45)*



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

*Defined in [tritsHashers/curl.ts:60](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L60)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ITritsHasher](../interfaces/itritshasher.md).[squeeze](../interfaces/itritshasher.md#squeeze)*

*Defined in [tritsHashers/curl.ts:105](https://github.com/iotaeco/iota-pico-crypto/blob/124402b/src/tritsHashers/curl.ts#L105)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


