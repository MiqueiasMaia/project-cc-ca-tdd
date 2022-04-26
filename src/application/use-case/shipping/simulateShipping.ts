import DefaultShippingCalculator from "../../../domain/entities/shipping/defaultShippingCalculator";
import RepositoryFactory from "../../../domain/factory/RepositoryFactory";
import ItemRepository from "../../../domain/repository/item/itemRepository";
import SimulateShippingInput from "./simulateShippingInput";
import SimulateShippingOutput from "./simulateShippingOutput";

export default class SimulateShipping {
    itemRepository: ItemRepository;
    
    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
    }

    async execute(input: SimulateShippingInput): Promise<SimulateShippingOutput> {
        const shipping = new DefaultShippingCalculator();
        input.orderItems.forEach(async orderItem => {
            const item = await this.itemRepository.getById(orderItem.idItem);
            if (!item) {
                throw new Error("Item not found");
            }
            shipping.addItem(item, orderItem.quantity);
        });
        const output = new SimulateShippingOutput(shipping.getTotal());
        return output;
    }
}
