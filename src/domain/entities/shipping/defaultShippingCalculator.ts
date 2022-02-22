import Item from '../item/item';
import Shipping from './shipping';

export default class DefaultShippingCalculator implements Shipping {
    private DISTANCE = 1000;
    calculate(item: Item): number {
        const minShipping = 10;
        const shipping = (this.DISTANCE * item.getVolume() * (item.getDensity()/100));
        return shipping > minShipping ? shipping : minShipping;
    }
}
