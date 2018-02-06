[@iota-pico/crypto](../README.md) > [Curl](../classes/curl.md)



# Class: Curl


Implementation of ITritsHasher using Curl algorithm. [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/curl/curl.js)
*__interface__*: 


## Implements

* `ITritsHasher`

## Index

### Constructors

* [constructor](curl.md#constructor)


### Properties

* [HASH_LENGTH](curl.md#hash_length)
* [NUMBER_OF_ROUNDS](curl.md#number_of_rounds)
* [STATE_LENGTH](curl.md#state_length)


### Methods

* [absorb](curl.md#absorb)
* [getState](curl.md#getstate)
* [initialize](curl.md#initialize)
* [reset](curl.md#reset)
* [squeeze](curl.md#squeeze)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Curl**(rounds?: *`number`*): [Curl](curl.md)


*Defined in [tritHashers/curl.ts:21](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L21)*



Create a new instance of Curl.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rounds | `number`  |  Curl.NUMBER_OF_ROUNDS |   The number of rounds to perform. |





**Returns:** [Curl](curl.md)

---


## Properties
<a id="hash_length"></a>

### «Static» HASH_LENGTH

**●  HASH_LENGTH**:  *`number`*  = 243

*Defined in [tritHashers/curl.ts:11](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L11)*





___

<a id="number_of_rounds"></a>

### «Static» NUMBER_OF_ROUNDS

**●  NUMBER_OF_ROUNDS**:  *`number`*  = 81

*Defined in [tritHashers/curl.ts:12](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L12)*





___

<a id="state_length"></a>

### «Static» STATE_LENGTH

**●  STATE_LENGTH**:  *`number`*  =  Curl.HASH_LENGTH * 3

*Defined in [tritHashers/curl.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L13)*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [tritHashers/curl.ts:68](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L68)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Defined in [tritHashers/curl.ts:51](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L51)*



Get the state.




**Returns:** `number`[]
State array.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Defined in [tritHashers/curl.ts:35](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L35)*



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



*Defined in [tritHashers/curl.ts:58](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L58)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [tritHashers/curl.ts:103](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/curl.ts#L103)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


