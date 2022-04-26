import PlaceOrder from "../../../src/application/use-case/order/placeOrder";
import Connection from "../../../src/infra/database/connection";
import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";
import RepositoryFactory from "../../../src/domain/factory/RepositoryFactory";
// import MemoryRepositoryFactory from "../../../src/infra/factory/MemoryRepositoryFactory";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

let connection: Connection;
let repositoryFactory: RepositoryFactory;

beforeEach(() => {
    connection = new PostgreSQLConnectionAdapter();
    // repositoryFactory = new MemoryRepositoryFactory();
    repositoryFactory = new DatabaseRepositoryFactory(connection);
});

test("Must do a order", async function () {
    const placeOrder = new PlaceOrder(repositoryFactory);
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
    const placeOrder = new PlaceOrder(repositoryFactory);
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