[@iota-pico/crypto](../README.md) > [ProofOfWorkBase](../classes/proofofworkbase.md)



# Class: ProofOfWorkBase


Base class for proof of work.

## Implements

* [IProofOfWork](../interfaces/iproofofwork.md)

## Index

### Constructors

* [constructor](proofofworkbase.md#constructor)


### Properties

* [_timeService](proofofworkbase.md#_timeservice)
* [MAX_TIMESTAMP_VALUE](proofofworkbase.md#max_timestamp_value)


### Methods

* [initialize](proofofworkbase.md#initialize)
* [pow](proofofworkbase.md#pow)
* [singlePow](proofofworkbase.md#singlepow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkBase**(timeService?: *`ITimeService`*): [ProofOfWorkBase](proofofworkbase.md)


*Defined in [proofOfWork/proofOfWorkBase.ts:25](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L25)*



Create an instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timeService | `ITimeService`   |  Service to get the time for attachments. |





**Returns:** [ProofOfWorkBase](proofofworkbase.md)

---


## Properties
<a id="_timeservice"></a>

### «Protected» _timeService

**●  _timeService**:  *`ITimeService`* 

*Defined in [proofOfWork/proofOfWorkBase.ts:25](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L25)*





___

<a id="max_timestamp_value"></a>

### «Static» MAX_TIMESTAMP_VALUE

**●  MAX_TIMESTAMP_VALUE**:  *`number`*  =  (Math.pow(3, 27) - 1) / 2

*Defined in [proofOfWork/proofOfWorkBase.ts:22](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L22)*



The maximum timestamp value used in proof of work.




___


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Implementation of [IProofOfWork](../interfaces/iproofofwork.md).[initialize](../interfaces/iproofofwork.md#initialize)*

*Defined in [proofOfWork/proofOfWorkBase.ts:39](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L39)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Implementation of [IProofOfWork](../interfaces/iproofofwork.md).[pow](../interfaces/iproofofwork.md#pow)*

*Defined in [proofOfWork/proofOfWorkBase.ts:51](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L51)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash`   |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[]   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`[]>
The trytes produced by the proof of work.






___

<a id="singlepow"></a>

### «Abstract» singlePow

► **singlePow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [proofOfWork/proofOfWorkBase.ts:118](https://github.com/iotaeco/iota-pico-crypto/blob/18198f8/src/proofOfWork/proofOfWorkBase.ts#L118)*



Perform a proof of work on a single item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___

