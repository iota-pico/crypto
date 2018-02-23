[@iota-pico/crypto](../README.md) > [TritsHasherFactory](../classes/tritshasherfactory.md)



# Class: TritsHasherFactory


Factory to generate tritsHashers.

## Hierarchy


 `FactoryBase`.<[ITritsHasher](../interfaces/itritshasher.md)>

**↳ TritsHasherFactory**







## Index

### Methods

* [create](tritshasherfactory.md#create)
* [exists](tritshasherfactory.md#exists)
* [getInstance](tritshasherfactory.md#getinstance)
* [register](tritshasherfactory.md#register)
* [unregister](tritshasherfactory.md#unregister)
* [instance](tritshasherfactory.md#instance)



---
## Methods
<a id="create"></a>

###  create

► **create**(name: *`string`*, ...args: *`any`[]*): [ITritsHasher](../interfaces/itritshasher.md)



*Inherited from FactoryBase.create*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:29*



Create an instance of an object from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to create. |
| args | `any`[]   |  Any parameters to pass to the constructor. |





**Returns:** [ITritsHasher](../interfaces/itritshasher.md)
A new instance of the type if it exists, or undefined if it does not.






___

<a id="exists"></a>

###  exists

► **exists**(name: *`string`*): `boolean`



*Inherited from FactoryBase.exists*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:22*



Does the factory contain a specific type.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to look for. |





**Returns:** `boolean`
True if the type exists.






___

<a id="getinstance"></a>

### «Protected» getInstance

► **getInstance**(): `FactoryBase`.<[ITritsHasher](../interfaces/itritshasher.md)>



*Defined in [factories/tritsHasherFactory.ts:35](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/factories/tritsHasherFactory.ts#L35)*





**Returns:** `FactoryBase`.<[ITritsHasher](../interfaces/itritshasher.md)>





___

<a id="register"></a>

###  register

► **register**(name: *`string`*, typeConstructor: *`function`*): `void`



*Inherited from FactoryBase.register*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:11*



Register a new type with the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to register. |
| typeConstructor | `function`   |  The constructor for the type. |





**Returns:** `void`





___

<a id="unregister"></a>

###  unregister

► **unregister**(name: *`string`*): `void`



*Inherited from FactoryBase.unregister*

*Defined in D:/Workarea/iotaeco/iota-pico-crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:16*



Unregister a type from the factory.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The name of the type to unregister. |





**Returns:** `void`





___

<a id="instance"></a>

### «Static» instance

► **instance**(): `FactoryBase`.<[ITritsHasher](../interfaces/itritshasher.md)>



*Defined in [factories/tritsHasherFactory.ts:25](https://github.com/iotaeco/iota-pico-crypto/blob/989dccf/src/factories/tritsHasherFactory.ts#L25)*



Get the instance of the factory and add some default instances.




**Returns:** `FactoryBase`.<[ITritsHasher](../interfaces/itritshasher.md)>
The factory instance.






___


