import Item from "../items/item";

export default interface Shipping {
    calculate (item: Item): number;
}
