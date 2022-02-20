import Item from "../items/item";
import Shipping from "./shipping";

export default class DefaultShippingCalculator implements Shipping {
    calculate(item: Item): number {
        const minShipping = 10;
        const shipping = (1000 * item.getVolume() * (item.getDensity()/100));
        return shipping > minShipping ? shipping : minShipping;
    }
}
