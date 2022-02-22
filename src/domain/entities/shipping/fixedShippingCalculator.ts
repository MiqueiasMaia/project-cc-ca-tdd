import Item from '../item/item';
import Shipping from './shipping';

export default class FixedShippingCalculator implements Shipping {
    private DEFALT_SHIPPING = 10;
    calculate(): number {
        return this.DEFALT_SHIPPING;
    }
}
