[@iota-pico/crypto](../README.md) > [SpongeFactory](../classes/spongefactory.md)

# Class: SpongeFactory

Factory to generate sponges.

## Hierarchy

 `FactoryBase`<[ISponge](../interfaces/isponge.md)>

**↳ SpongeFactory**

## Index

### Methods

* [create](spongefactory.md#create)
* [exists](spongefactory.md#exists)
* [getInstance](spongefactory.md#getinstance)
* [register](spongefactory.md#register)
* [types](spongefactory.md#types)
* [unregister](spongefactory.md#unregister)
* [instance](spongefactory.md#instance)

---

## Methods

<a id="create"></a>

###  create

▸ **create**(name: *`string`*, ...args: *`any`[]*): [ISponge](../interfaces/isponge.md)

*Inherited from FactoryBase.create*

*Defined in D:/Workarea/iota.eco/iota-pico/crypto/node_modules/@iota-pico/core/dist/factories/factoryBase.d.ts:35*

Create an instance of an object from the factory.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of the type to create. |
| `Rest` args | `any`[] |  Any parameters to pass to the constructor. |

**Returns:** [ISponge](../interfaces/isponge.md)
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

▸ **getInstance**(): `FactoryBase`<[ISponge](../interfaces/isponge.md)>

*Defined in [factories/spongeFactory.ts:37](https://github.com/iota-pico/crypto/tree/master/src/factories/spongeFactory.ts#L37*

**Returns:** `FactoryBase`<[ISponge](../interfaces/isponge.md)>

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

▸ **instance**(): `FactoryBase`<[ISponge](../interfaces/isponge.md)>

*Defined in [factories/spongeFactory.ts:25](https://github.com/iota-pico/crypto/tree/master/src/factories/spongeFactory.ts#L25*

Get the instance of the factory.

**Returns:** `FactoryBase`<[ISponge](../interfaces/isponge.md)>
The factory instance.

___

