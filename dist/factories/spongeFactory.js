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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvbmdlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mYWN0b3JpZXMvc3BvbmdlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBRXpFLDBDQUF1QztBQUN2QywwQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSx5QkFBb0I7SUFJbkQ7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtZQUMxQixhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7WUFDOUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0RSxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0o7QUEvQkQsc0NBK0JDIn0=