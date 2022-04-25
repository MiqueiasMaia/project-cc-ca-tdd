import ValidateCoupon from "../../../src/application/use-case/coupon/validateCoupon";
import CouponRepositoryMemory from "../../../src/infra/repository/memory/coupon/CouponRepositoryMemory";

test("Must validate a coupon discount", async function () {
    const couponRepository = new CouponRepositoryMemory();
    const validateCoupon = new ValidateCoupon(couponRepository);
    const isValid = await validateCoupon.execute("CUPONOMIA10");
    expect(isValid).toBeTruthy();
});
