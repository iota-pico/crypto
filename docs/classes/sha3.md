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


### ⊕ **new Sha3**(bits: *`number`*, padding: *`number`[]*, outputBits: *`number`*): [Sha3](sha3.md)


*Defined in digests/sha3.ts:43*



Create a new instance of SHA3.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bits | `number`   |  The number of input bits. |
| padding | `number`[]   |  The padding to use. |
| outputBits | `number`   |  The number of output bits. |





**Returns:** [Sha3](sha3.md)

---


## Properties
<a id="keccak_padding"></a>

### «Static» KECCAK_PADDING

**●  KECCAK_PADDING**:  *`number`[]*  =  [1, 256, 65536, 16777216]

*Defined in digests/sha3.ts:10*





___


## Methods
<a id="digest"></a>

###  digest

► **digest**(): `ArrayBuffer`



*Defined in digests/sha3.ts:133*



Finalize and return the hash for the digest, will also reset the state.




**Returns:** `ArrayBuffer`
Array buffer containing the digest.






___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Defined in digests/sha3.ts:65*



Reset the digest.




**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(input: *`number`[]⎮`ArrayBuffer`⎮`Uint8Array`*): `void`



*Defined in digests/sha3.ts:80*



Update the digest.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| input | `number`[]⎮`ArrayBuffer`⎮`Uint8Array`   |  Array of data to use in the update. |





**Returns:** `void`





___


