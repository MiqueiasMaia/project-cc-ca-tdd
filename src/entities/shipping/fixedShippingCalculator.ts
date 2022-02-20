import Item from "../items/item";
import Shipping from "./shipping";

export default class FixedShippingCalculator implements Shipping {
    calculate(item: Item): number {
        return 10;
    }
}
