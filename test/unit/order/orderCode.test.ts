import OrderCode from "../../../src/domain/entities/order/orderCode";

test("Must generate a Order ID", function () {
    const date = new Date('2022-02-02T00:00:00');
    const sequence = 1;
    const orderCode = new OrderCode(date, sequence);
    expect(orderCode.getCode()).toBe('202200000001');
});