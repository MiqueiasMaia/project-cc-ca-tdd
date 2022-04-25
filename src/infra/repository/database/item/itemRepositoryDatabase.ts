import Item from "../../../../domain/entities/item/item";
import { ItemDimension } from "../../../../domain/entities/item/itemDimension";
import Connection from "../../../database/connection";

export default class ItemRepositoryDatabase {
    constructor(readonly connection: Connection) {
    }
    async getById(id: number): Promise<Item | undefined> {
        const [result] = await this.connection.query(`SELECT * FROM ccca.item WHERE id_item = ${id}`);
        const item = new Item(
            result.id_item,
            result.category,
            result.description,
            parseFloat(result.price),
            new ItemDimension(
                parseFloat(result.width), 
                parseFloat(result.height), 
                parseFloat(result.length)
            ),
            result.weigth
        );
        return item;
    }
}
