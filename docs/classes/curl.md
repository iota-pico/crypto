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


### Methods

* [absorb](curl.md#absorb)
* [initialize](curl.md#initialize)
* [reset](curl.md#reset)
* [squeeze](curl.md#squeeze)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Curl**(rounds?: *`number`*): [Curl](curl.md)


*Defined in tritHashers/curl.ts:18*



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

*Defined in tritHashers/curl.ts:11*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in tritHashers/curl.ts:57*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Defined in tritHashers/curl.ts:32*



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



*Defined in tritHashers/curl.ts:47*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in tritHashers/curl.ts:92*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


