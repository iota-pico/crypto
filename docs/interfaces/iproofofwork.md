[@iota-pico/crypto](../README.md) > [IProofOfWork](../interfaces/iproofofwork.md)



# Interface: IProofOfWork


Represents an interface to proof of work.
*__interface__*: 



## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [interfaces/IProofOfWork.ts:13](https://github.com/iotaeco/iota-pico-crypto/blob/acc7b26/src/interfaces/IProofOfWork.ts#L13)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in [interfaces/IProofOfWork.ts:19](https://github.com/iotaeco/iota-pico-crypto/blob/acc7b26/src/interfaces/IProofOfWork.ts#L19)*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in [interfaces/IProofOfWork.ts:29](https://github.com/iotaeco/iota-pico-crypto/blob/acc7b26/src/interfaces/IProofOfWork.ts#L29)*



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


