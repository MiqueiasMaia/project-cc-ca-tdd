import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";

test('Must return itens from database', async function() {
    const connection = new PostgreSQLConnectionAdapter();
    await connection.connect();
    const itens = await connection.query("SELECT * FROM ccca.item", []);
    expect(itens).toHaveLength(3);
});
