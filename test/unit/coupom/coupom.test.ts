import Coupon from "../../../src/domain/entities/coupon/coupon";

test("Must create a valid coupom", function () {
    const coupom = new Coupon(20, "ABCDE20");
    const isValid = coupom.isValid(new Date());
    expect(isValid).toBeTruthy();
});

test("Must create a invalid coupom", function () {
    const coupom = new Coupon(20, "ABCDE20", new Date(2021, 11, 31));
    const isValid = coupom.isValid(new Date());
    expect(isValid).toBeFalsy();
});

test("Must create a valid coupom and apply discount", function () {
    const coupom = new Coupon(20, "ABCDE20", new Date(2022, 11, 31));
    const amount = coupom.calculateDiscount(100, new Date());
    expect(amount).toBe(20);
});
