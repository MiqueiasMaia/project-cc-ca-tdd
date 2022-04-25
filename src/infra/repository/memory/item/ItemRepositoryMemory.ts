import Item from '../../../../domain/entities/item/item';
import ItemRepository from '../../../../domain/repository/item/itemRepository';

export default class ItemRepositoryMemory implements ItemRepository {
    items: Item[];

    constructor() {
        this.items = [
            new Item(1, 'Instrumentos Musicais', 'Guitarra', 1000),
            new Item(2, 'Instrumentos Musicais', 'Amplificador', 5000),
            new Item(3, 'Instrumentos Musicais', 'Cabo', 30)
        ];
    }

    async getById(idItem: number): Promise<Item | undefined> {
        return this.items.find(item => item.idItem === idItem);
    }
}
