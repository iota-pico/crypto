[@iota-pico/crypto](../README.md) > [IProofOfWork](../interfaces/iproofofwork.md)

# Interface: IProofOfWork

Represents an interface to proof of work.

*__interface__*: 

## Hierarchy

**IProofOfWork**

## Implemented by

* [ProofOfWorkBase](../classes/proofofworkbase.md)

## Index

### Methods

* [initialize](iproofofwork.md#initialize)
* [pow](iproofofwork.md#pow)

---

## Methods

<a id="initialize"></a>

###  initialize

▸ **initialize**(): `Promise`<`void`>

*Defined in [interfaces/IProofOfWork.ts:13](https://github.com/iota-pico/crypto/tree/master/src/interfaces/IProofOfWork.ts#L13*

Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.

**Returns:** `Promise`<`void`>

___
<a id="pow"></a>

###  pow

▸ **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`<`Trytes`[]>

*Defined in [interfaces/IProofOfWork.ts:23](https://github.com/iota-pico/crypto/tree/master/src/interfaces/IProofOfWork.ts#L23*

Perform a proof of work on the data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash` |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash` |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[] |  The trytes to perform the pow on. |
| minWeightMagnitude | `number` |  The minimum weight magnitude. |

**Returns:** `Promise`<`Trytes`[]>
The trytes produced by the proof of work.

___

