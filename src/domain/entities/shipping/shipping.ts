import Item from '../item/item';

interface Shipping {
    calculate (item: Item): number;
}

export default Shipping;
