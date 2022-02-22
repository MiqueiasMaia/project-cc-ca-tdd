import Item from '../../entities/item/item';

interface ItemRepository {
    getById(idItem: number): Item | undefined;
}

export default ItemRepository;
