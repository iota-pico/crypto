[@iota-pico/crypto](../README.md) > [ProofOfWork](../classes/proofofwork.md)



# Class: ProofOfWork


Wrap an ICurlProofOfWork and add logic to call it.
*__interface__*: 


## Index

### Constructors

* [constructor](proofofwork.md#constructor)


### Methods

* [pow](proofofwork.md#pow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWork**(curlProofOfWork: *[ICurlProofOfWork](../interfaces/icurlproofofwork.md)*): [ProofOfWork](proofofwork.md)


*Defined in [helpers/proofOfWork.ts:9](https://github.com/iotaeco/iota-pico-crypto/blob/0d9f182/src/helpers/proofOfWork.ts#L9)*



Create a new instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| curlProofOfWork | [ICurlProofOfWork](../interfaces/icurlproofofwork.md)   |  - |





**Returns:** [ProofOfWork](proofofwork.md)

---


## Methods
<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`string`*, branchTransaction: *`string`*, minWeightMagnitude: *`number`*, trytes: *`string`[]*, progressCb: *`function`*): `Promise`.<`string`[]>



*Defined in [helpers/proofOfWork.ts:27](https://github.com/iotaeco/iota-pico-crypto/blob/0d9f182/src/helpers/proofOfWork.ts#L27)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `string`   |  The trunk transaction for the pow. |
| branchTransaction | `string`   |  The branch transaction for the pow. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |
| trytes | `string`[]   |  The trytes to perform the pow on. |
| progressCb | `function`   |  Progress callback returns the current tryte index being processed. |





**Returns:** `Promise`.<`string`[]>
The trytes produces by the proof of work.






___


