import Item from "../../entities/item/item";

export default interface ItemRepository {
    getById(idItem: number): Item | undefined;
}