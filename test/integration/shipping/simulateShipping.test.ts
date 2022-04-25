import SimulateShipping from "../../../src/application/use-case/shipping/simulateShipping";
import ItemRepositoryMemory from "../../../src/infra/repository/memory/item/ItemRepositoryMemory";

test('Must simulate order shipping', async function () {
    const itemRepository = new ItemRepositoryMemory();
    const simulateShipping = new SimulateShipping(itemRepository);
    const input = {
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 10 },
            { idItem: 3, quantity: 12 }        ],
    };
    const output = await simulateShipping.execute(input);
    expect(output.total).toBe(0);
});