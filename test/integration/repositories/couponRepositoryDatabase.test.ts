import PostgreSQLConnectionAdapter from "../../../src/infra/database/postgreSQLConnectionAdapter";
import CouponRepositoryDatabase from "../../../src/infra/repository/database/coupon/couponRepositoryDatabase";

test('Must test the couponRepositoryDatabase', async function() {
    const connection = new PostgreSQLConnectionAdapter();
    const couponRepository = new CouponRepositoryDatabase(connection);
    const coupon = await couponRepository.getByCode('VALE20');
    console.log(coupon);
    expect(coupon?.discount).toBe(20);
    await connection.disconnect();
});
