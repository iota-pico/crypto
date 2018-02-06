[@iota-pico/crypto](../README.md) > [Kerl](../classes/kerl.md)



# Class: Kerl


Implementation of ITritsHasher using Kerl algorithm. [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/kerl/kerl.js)
*__interface__*: 


## Implements

* `ITritsHasher`

## Index

### Constructors

* [constructor](kerl.md#constructor)


### Properties

* [HASH_LENGTH](kerl.md#hash_length)


### Methods

* [absorb](kerl.md#absorb)
* [initialize](kerl.md#initialize)
* [reset](kerl.md#reset)
* [squeeze](kerl.md#squeeze)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Kerl**(): [Kerl](kerl.md)


*Defined in [tritHashers/kerl.ts:18](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L18)*



Create a new instance of Kerl.




**Returns:** [Kerl](kerl.md)

---


## Properties
<a id="hash_length"></a>

### «Static» HASH_LENGTH

**●  HASH_LENGTH**:  *`number`*  = 243

*Defined in [tritHashers/kerl.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L13)*





___


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [tritHashers/kerl.ts:51](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L51)*



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



*Defined in [tritHashers/kerl.ts:35](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L35)*



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



*Defined in [tritHashers/kerl.ts:41](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L41)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [tritHashers/kerl.ts:91](https://github.com/iotaeco/iota-pico-crypto/blob/79d7f23/src/tritHashers/kerl.ts#L91)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


