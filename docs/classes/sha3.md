[@iota-pico/crypto](../README.md) > [Sha3](../classes/sha3.md)



# Class: Sha3


Sha3 implementation.

## Index

### Constructors

* [constructor](sha3.md#constructor)


### Properties

* [KECCAK_PADDING](sha3.md#keccak_padding)


### Methods

* [digest](sha3.md#digest)
* [reset](sha3.md#reset)
* [update](sha3.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Sha3**(bits: *`number`*, padding: *`Uint32Array`*, outputBits: *`number`*): [Sha3](sha3.md)


*Defined in [digests/sha3.ts:42](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/digests/sha3.ts#L42)*



Create a new instance of SHA3.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bits | `number`   |  The number of input bits. |
| padding | `Uint32Array`   |  The padding to use. |
| outputBits | `number`   |  The number of output bits. |





**Returns:** [Sha3](sha3.md)

---


## Properties
<a id="keccak_padding"></a>

### «Static» KECCAK_PADDING

**●  KECCAK_PADDING**:  *`Uint32Array`*  =  new Uint32Array([1, 256, 65536, 16777216])

*Defined in [digests/sha3.ts:9](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/digests/sha3.ts#L9)*





___


## Methods
<a id="digest"></a>

###  digest

► **digest**(): `ArrayBuffer`



*Defined in [digests/sha3.ts:115](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/digests/sha3.ts#L115)*



Finalize and return the hash for the digest, will also reset the state.




**Returns:** `ArrayBuffer`
Array buffer containing the digest.






___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Defined in [digests/sha3.ts:64](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/digests/sha3.ts#L64)*



Reset the digest.




**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(input: *`ArrayBuffer`*): `void`



*Defined in [digests/sha3.ts:76](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/digests/sha3.ts#L76)*



Update the digest.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `ArrayBuffer`   |  Array of data to use in the update. |





**Returns:** `void`





___


