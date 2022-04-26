import SimulateShipping from "../../../src/application/use-case/shipping/simulateShipping";
import RepositoryFactory from "../../../src/domain/factory/RepositoryFactory";
import Connection from "../../../src/infra/database/connection";
import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";
import DatabaseRepositoryFactory from "../../../src/infra/factory/DatabaseRepositoryFactory";

test('Must simulate order shipping', async function () {
    const connection: Connection = new PostgreSQLConnectionAdapter();
    const repositoryFactory: RepositoryFactory = new DatabaseRepositoryFactory(connection);
    const simulateShipping = new SimulateShipping(repositoryFactory);
    const input = {
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 10 },
            { idItem: 3, quantity: 12 }        ],
    };
    const output = await simulateShipping.execute(input);
    expect(output.total).toBe(0);
});
