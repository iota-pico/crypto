[@iota-pico/crypto](../README.md) > [ProofOfWorkFactory](../classes/proofofworkfactory.md)

# Class: ProofOfWorkFactory

Factory to generate proof of work.

## Hierarchy

 `FactoryBase`<[IProofOfWork](../interfaces/iproofofwork.md)>

**↳ ProofOfWorkFactory**

## Index

### Methods

* [create](proofofworkfactory.md#create)
* [exists](proofofworkfactory.md#exists)
* [getInstance](proofofworkfactory.md#getinstance)
* [register](proofofworkfactory.md#register)
* [types](proofofworkfactory.md#types)
* [unregister](proofofworkfactory.md#unregister)
* [instance](proofofworkfactory.md#instance)

---

## Methods

<a id="create"></a>

###  create

▸ **create**(name: *`string`*, ...args: *`any`[]*): [IProofOfWork](../interfaces/iproofofwork.md)

*Inherited from FactoryBase.create*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:35*

Create an instance of an object from the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to create. |
| `Rest` args | `any`[] |  Any parameters to pass to the constructor. |

**Returns:** [IProofOfWork](../interfaces/iproofofwork.md)
A new instance of the type if it exists, or undefined if it does not.

___
<a id="exists"></a>

###  exists

▸ **exists**(name: *`string`*): `boolean`

*Inherited from FactoryBase.exists*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:22*

Does the factory contain a specific type.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to look for. |

**Returns:** `boolean`
True if the type exists.

___
<a id="getinstance"></a>

### `<Protected>` getInstance

▸ **getInstance**(): `FactoryBase`<[IProofOfWork](../interfaces/iproofofwork.md)>

*Defined in [factories/proofOfWorkFactory.ts:31](https://github.com/iota-pico/crypto/tree/master/src/factories/proofOfWorkFactory.ts#L31*

**Returns:** `FactoryBase`<[IProofOfWork](../interfaces/iproofofwork.md)>

___
<a id="register"></a>

###  register

▸ **register**(name: *`string`*, typeConstructor: *`function`*): `void`

*Inherited from FactoryBase.register*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:11*

Register a new type with the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to register. |
| typeConstructor | `function` |  The constructor for the type. |

**Returns:** `void`

___
<a id="types"></a>

###  types

▸ **types**(): `string`[]

*Inherited from FactoryBase.types*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:28*

List the types in the factory.

**Returns:** `string`[]
True if the type exists.

___
<a id="unregister"></a>

###  unregister

▸ **unregister**(name: *`string`*): `void`

*Inherited from FactoryBase.unregister*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:16*

Unregister a type from the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to unregister. |

**Returns:** `void`

___
<a id="instance"></a>

### `<Static>` instance

▸ **instance**(): `FactoryBase`<[IProofOfWork](../interfaces/iproofofwork.md)>

*Defined in [factories/proofOfWorkFactory.ts:23](https://github.com/iota-pico/crypto/tree/master/src/factories/proofOfWorkFactory.ts#L23*

Get the instance of the factory.

**Returns:** `FactoryBase`<[IProofOfWork](../interfaces/iproofofwork.md)>
The factory instance.

___

