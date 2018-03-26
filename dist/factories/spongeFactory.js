Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("@iota-pico/core/dist/factories/factoryBase");
const curl_1 = require("../sponges/curl");
const kerl_1 = require("../sponges/kerl");
/**
 * Factory to generate sponges.
 */
class SpongeFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!SpongeFactory._instance) {
            SpongeFactory._instance = new SpongeFactory();
            SpongeFactory._instance.register("curl", (...args) => new curl_1.Curl(...args));
            SpongeFactory._instance.register("curl81", (...args) => new curl_1.Curl(81));
            SpongeFactory._instance.register("curl27", (...args) => new curl_1.Curl(27));
            SpongeFactory._instance.register("kerl", (...args) => new kerl_1.Kerl());
        }
        return SpongeFactory._instance;
    }
    /* @internal */
    getInstance() {
        return SpongeFactory.instance();
    }
}
exports.SpongeFactory = SpongeFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvbmdlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBRXpFLDBDQUF1QztBQUN2QywwQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxtQkFBMkIsU0FBUSx5QkFBb0I7SUFJbkQ7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUM5QyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQUksRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQS9CRCxzQ0ErQkMifQ==