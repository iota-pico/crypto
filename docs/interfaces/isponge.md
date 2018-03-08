[@iota-pico/crypto](../README.md) > [ISponge](../interfaces/isponge.md)



# Interface: ISponge


Represents an interface to hash trits.
*__interface__*: 


## Implemented by

* [Curl](../classes/curl.md)
* [Kerl](../classes/kerl.md)


## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ISponge.ts:35](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L35)*



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



*Defined in [interfaces/ISponge.ts:10](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L10)*



Get the constant for the hasher.




**Returns:** `object`
The constants.






___

<a id="getstate"></a>

###  getState

► **getState**(): `Int8Array`



*Defined in [interfaces/ISponge.ts:16](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L16)*



Get the state.




**Returns:** `Int8Array`
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`Int8Array`*): `void`



*Defined in [interfaces/ISponge.ts:22](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L22)*



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



*Defined in [interfaces/ISponge.ts:27](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L27)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ISponge.ts:43](https://github.com/iotaeco/iota-pico-crypto/blob/6b875ed/src/interfaces/ISponge.ts#L43)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


