import Coupom from "../../src/entities/coupom/coupom";

test("Must create a valid coupom", function () {
    const coupom = new Coupom(20, "ABCDE20");
    const isValid = coupom.isValid(new Date());
    expect(isValid).toBeTruthy();
});

test("Must create a invalid valid coupom", function () {
    const coupom = new Coupom(20, "ABCDE20", new Date(2021, 11, 31));
    const isValid = coupom.isValid(new Date());
    expect(isValid).toBeFalsy();
});

test("Must create a valid coupom and apply discount", function () {
    const coupom = new Coupom(20, "ABCDE20", new Date(2022, 11, 31));
    const amount = coupom.calculateDiscount(100, new Date());
    expect(amount).toBe(20);
});
