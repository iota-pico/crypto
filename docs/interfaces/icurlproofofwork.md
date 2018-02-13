[@iota-pico/crypto](../README.md) > [ICurlProofOfWork](../interfaces/icurlproofofwork.md)



# Interface: ICurlProofOfWork


Represents an interface to curl proof of work.
*__interface__*: 



## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [interfaces/ICurlProofOfWork.ts:12](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/interfaces/ICurlProofOfWork.ts#L12)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Defined in [interfaces/ICurlProofOfWork.ts:20](https://github.com/iotaeco/iota-pico-crypto/blob/97f8899/src/interfaces/ICurlProofOfWork.ts#L20)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


