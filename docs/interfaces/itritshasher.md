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

► **absorb**(trits: *`number`[]*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:35](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L35)*



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



*Defined in [interfaces/ITritsHasher.ts:10](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L10)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `number`[]



*Defined in [interfaces/ITritsHasher.ts:16](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L16)*



Get the state.




**Returns:** `number`[]
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Defined in [interfaces/ITritsHasher.ts:22](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L22)*



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



*Defined in [interfaces/ITritsHasher.ts:27](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L27)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`number`[]*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:43](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/interfaces/ITritsHasher.ts#L43)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


