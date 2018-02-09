[@iota-pico/crypto](../README.md) > [ITritsHasher](../interfaces/itritshasher.md)



# Interface: ITritsHasher


Represents an interface to hash trits.
*__interface__*: 


## Implemented by

* [Curl](../classes/curl.md)
* [Kerl](../classes/kerl.md)


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:37](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L37)*



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



*Defined in [interfaces/ITritsHasher.ts:12](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L12)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Defined in [interfaces/ITritsHasher.ts:18](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L18)*



Get the state.




**Returns:** `number`[]
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Defined in [interfaces/ITritsHasher.ts:24](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L24)*



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



*Defined in [interfaces/ITritsHasher.ts:29](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L29)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Trits`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:45](https://github.com/iotaeco/iota-pico-crypto/blob/d4510b9/src/interfaces/ITritsHasher.ts#L45)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Trits`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


