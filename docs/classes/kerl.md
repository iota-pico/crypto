[@iota-pico/crypto](../README.md) > [Kerl](../classes/kerl.md)



# Class: Kerl


Implementation of ISponge using Kerl algorithm. [https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java)

## Implements

* [ISponge](../interfaces/isponge.md)

## Index

### Constructors

* [constructor](kerl.md#constructor)


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


*Defined in [sponges/kerl.ts:21](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L21)*



Create a new instance of Kerl.




**Returns:** [Kerl](kerl.md)

---


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ISponge](../interfaces/isponge.md).[absorb](../interfaces/isponge.md#absorb)*

*Defined in [sponges/kerl.ts:70](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L70)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="getconstants"></a>

###  getConstants

► **getConstants**(): `object`



*Implementation of [ISponge](../interfaces/isponge.md).[getConstants](../interfaces/isponge.md#getconstants)*

*Defined in [sponges/kerl.ts:34](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L34)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `Int8Array`



*Implementation of [ISponge](../interfaces/isponge.md).[getState](../interfaces/isponge.md#getstate)*

*Defined in [sponges/kerl.ts:46](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L46)*



Get the state.




**Returns:** `Int8Array`
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`Int8Array`*): `void`



*Implementation of [ISponge](../interfaces/isponge.md).[initialize](../interfaces/isponge.md#initialize)*

*Defined in [sponges/kerl.ts:54](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L54)*



Initialise the hasher.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| state | `Int8Array`   |  The initial state for the hasher. |





**Returns:** `void`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Implementation of [ISponge](../interfaces/isponge.md).[reset](../interfaces/isponge.md#reset)*

*Defined in [sponges/kerl.ts:60](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L60)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`



*Implementation of [ISponge](../interfaces/isponge.md).[squeeze](../interfaces/isponge.md#squeeze)*

*Defined in [sponges/kerl.ts:111](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/sponges/kerl.ts#L111)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


