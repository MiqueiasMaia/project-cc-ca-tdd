import ValidateCoupon from "../../../src/application/use-case/coupon/validateCoupon";
import CouponRepositoryMemory from "../../../src/infra/repository/memory/coupon/CouponRepositoryMemory";

test("Must validate a coupon discount", function () {
    const couponRepository = new CouponRepositoryMemory();
    const validateCoupon = new ValidateCoupon(couponRepository);
    const isValid = validateCoupon.execute("CUPONOMIA10");
    expect(isValid).toBeTruthy();
});
