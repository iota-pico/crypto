Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("@iota-pico/core/dist/factories/factoryBase");
/**
 * Factory to generate proof of work.
 */
class ProofOfWorkFactory extends factoryBase_1.FactoryBase {
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
        if (!ProofOfWorkFactory._instance) {
            ProofOfWorkFactory._instance = new ProofOfWorkFactory();
        }
        return ProofOfWorkFactory._instance;
    }
    /* @internal */
    getInstance() {
        return ProofOfWorkFactory.instance();
    }
}
exports.ProofOfWorkFactory = ProofOfWorkFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy9wcm9vZk9mV29ya0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUd6RTs7R0FFRztBQUNILHdCQUFnQyxTQUFRLHlCQUF5QjtJQUk3RDs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzVELENBQUM7UUFDRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBM0JELGdEQTJCQyJ9