import Item from "../items/item";
import Shipping from "./shipping";

export default class FixedShippingCalculator implements Shipping {
    private DEFALT_SHIPPING = 10;
    calculate(item: Item): number {
        return this.DEFALT_SHIPPING;
    }
}
