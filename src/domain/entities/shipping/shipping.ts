import Item from "../item/item";

export default interface Shipping {
    calculate (item: Item): number;
}
