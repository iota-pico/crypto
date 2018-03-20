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



*Defined in [interfaces/ISponge.ts:36](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L36)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="getconstant"></a>

###  getConstant

► **getConstant**(name: *`string`*): `number`



*Defined in [interfaces/ISponge.ts:11](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L11)*



Get the constant for the spone.
*__name__*: The name of the contant to get.



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** `number`
The constant.






___

<a id="getstate"></a>

###  getState

► **getState**(): `Int8Array`



*Defined in [interfaces/ISponge.ts:17](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L17)*



Get the state.




**Returns:** `Int8Array`
The state.






___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`Int8Array`*): `void`



*Defined in [interfaces/ISponge.ts:23](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L23)*



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



*Defined in [interfaces/ISponge.ts:28](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L28)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *`Int8Array`*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ISponge.ts:44](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/interfaces/ISponge.ts#L44)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


