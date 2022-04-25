import Item from '../../entities/item/item';

interface ItemRepository {
    getById(idItem: number): Promise<Item | undefined>;
}

export default ItemRepository;
