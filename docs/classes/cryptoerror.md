[@iota-pico/crypto](../README.md) > [CryptoError](../classes/cryptoerror.md)



# Class: CryptoError


A crypto implementation of an error.

## Hierarchy


 `CoreError`

**↳ CryptoError**







## Index

### Constructors

* [constructor](cryptoerror.md#constructor)


### Properties

* [additional](cryptoerror.md#additional)
* [domain](cryptoerror.md#domain)
* [innerError](cryptoerror.md#innererror)
* [message](cryptoerror.md#message)
* [name](cryptoerror.md#name)
* [stack](cryptoerror.md#stack)


### Methods

* [format](cryptoerror.md#format)
* [isError](cryptoerror.md#iserror)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CryptoError**(message: *`string`*, additional?: *`object`*, innerError?: *`Error`*): [CryptoError](cryptoerror.md)


*Overrides CoreError.__constructor*

*Defined in [error/cryptoError.ts:6](https://github.com/iotaeco/iota-pico-crypto/blob/f6aa426/src/error/cryptoError.ts#L6)*



Create an instance of CryptoError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message for the error. |
| additional | `object`   |  Additional details about the error. |
| innerError | `Error`   |  Add information from inner error if there was one. |





**Returns:** [CryptoError](cryptoerror.md)

---


## Properties
<a id="additional"></a>

### «Optional» additional

**●  additional**:  *`object`* 

*Inherited from CoreError.additional*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/error/coreError.d.ts:12*



Additional details about the error.

#### Type declaration


[id: `string`]: `any`






___

<a id="domain"></a>

###  domain

**●  domain**:  *`string`* 

*Inherited from CoreError.domain*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/error/coreError.d.ts:8*



The domain of the error.




___

<a id="innererror"></a>

### «Optional» innerError

**●  innerError**:  *`Error`* 

*Inherited from CoreError.innerError*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/error/coreError.d.ts:18*



The inner error if there was one.




___

<a id="message"></a>

### «Static» message

**●  message**:  *`string`* 

*Inherited from Error.message*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/typescript/lib/lib.es5.d.ts:886*





___

<a id="name"></a>

### «Static» name

**●  name**:  *`string`* 

*Inherited from Error.name*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/typescript/lib/lib.es5.d.ts:885*





___

<a id="stack"></a>

### «Static»«Optional» stack

**●  stack**:  *`string`* 

*Inherited from Error.stack*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/typescript/lib/lib.es5.d.ts:887*





___


## Methods
<a id="format"></a>

###  format

► **format**(): `string`



*Inherited from CoreError.format*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/error/coreError.d.ts:37*



Format the error to a readable version.




**Returns:** `string`





___

<a id="iserror"></a>

### «Static» isError

► **isError**(obj: *`any`*): `boolean`



*Inherited from CoreError.isError*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/error/coreError.d.ts:33*



Check if an object could be a CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  The object to check if it is a CoreError. |





**Returns:** `boolean`
true If the tested object is a CoreError.






___


