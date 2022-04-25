import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";
import ItemRepositoryDatabase from "../../../src/infra/repository/database/item/itemRepositoryDatabase";

test('Must test the itemRepositoryDatabase', async function() {
    const connection = new PostgreSQLConnectionAdapter();
    const itemRepository = new ItemRepositoryDatabase(connection);
    const item = await itemRepository.getById(1);
    expect(item?.description).toBe('Guitarra');
    await connection.disconnect();
});