Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("@iota-pico/core/dist/factories/factoryBase");
const curl_1 = require("../tritsHashers/curl");
const kerl_1 = require("../tritsHashers/kerl");
/**
 * Factory to generate tritsHashers.
 */
class TritsHasherFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory and add some default instances.
     * @returns The factory instance.
     */
    static instance() {
        if (!TritsHasherFactory._instance) {
            TritsHasherFactory._instance = new TritsHasherFactory();
            TritsHasherFactory._instance.register("curl", (...args) => new curl_1.Curl(...args));
            TritsHasherFactory._instance.register("kerl", (...args) => new kerl_1.Kerl());
        }
        return TritsHasherFactory._instance;
    }
    /* @internal */
    getInstance() {
        return TritsHasherFactory.instance();
    }
}
exports.TritsHasherFactory = TritsHasherFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdHNIYXNoZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZhY3Rvcmllcy90cml0c0hhc2hlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUV6RSwrQ0FBNEM7QUFDNUMsK0NBQTRDO0FBRTVDOztHQUVHO0FBQ0gsd0JBQWdDLFNBQVEseUJBQXlCO0lBSTdEOzs7T0FHRztJQUNIO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVE7UUFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7WUFDeEQsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBSSxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZUFBZTtJQUNMLFdBQVc7UUFDakIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQTdCRCxnREE2QkMifQ==