import PlaceOrder from "../../../src/application/use-case/order/placeOrder";
import Connection from "../../../src/infra/database/connection";
import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";
import CouponRepositoryMemory from "../../../src/infra/repository/memory/coupon/CouponRepositoryMemory";
import OrderRepositoryMemory from "../../../src/infra/repository/memory/order/OrderRepositoryMemory";
import ItemRepositoryDatabase from "../../../src/infra/repository/database/item/itemRepositoryDatabase";
import ItemRepository from "../../../src/domain/repository/item/itemRepository";
import OrderRepository from "../../../src/domain/repository/order/orderRepository";
import CouponRepository from "../../../src/domain/repository/coupon/couponRepository";
import CouponRepositoryDatabase from "../../../src/infra/repository/database/coupon/couponRepositoryDatabase";

let connection: Connection;
let itemRepository: ItemRepository;
let orderRepository: OrderRepository;
let couponRepository: CouponRepository;

beforeEach(() => {
    connection = new PostgreSQLConnectionAdapter();
    itemRepository = new ItemRepositoryDatabase(connection);
    orderRepository = new OrderRepositoryMemory();
    couponRepository = new CouponRepositoryDatabase(connection);
});

test("Must do a order", async function () {
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
    const placeOrderOutput = await placeOrder.execute(placeOrderInput);
    expect(placeOrderOutput.total).toBe(0);
});

test("Must do a order and generate code", async function () {
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
    await placeOrder.execute(placeOrderInput);
    const placeOrderOutput = await placeOrder.execute(placeOrderInput);
    expect(placeOrderOutput.code).toBe("202200000002");
});

afterEach(async () => {
    await connection.disconnect();
});