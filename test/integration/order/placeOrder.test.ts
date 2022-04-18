import PlaceOrder from "../../../src/application/use-case/order/placeOrder";
import CouponRepositoryMemory from "../../../src/infra/repository/memory/coupon/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../../src/infra/repository/memory/item/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../../src/infra/repository/memory/order/OrderRepositoryMemory";

test("Must do a order", function () {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const placeOrderInput = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 1 }
        ],
        coupom: "CUPONOMIA10",
        issueDate: new Date()
    }
    const placeOrderOutput = placeOrder.execute(placeOrderInput);
    expect(placeOrderOutput.total).toBe(6030);
});

test("Must do a order and generate code", function () {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const placeOrderInput = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 1 }
        ],
        coupom: "CUPONOMIA10",
        issueDate: new Date('2022-02-02T00:00:00'),
    }
    placeOrder.execute(placeOrderInput);
    const placeOrderOutput = placeOrder.execute(placeOrderInput);
    expect(placeOrderOutput.code).toBe("202200000002");
});