import Coupon from "../../entities/coupon/coupon";

export default interface CouponRepository {
    getByCode(id: string): Coupon | undefined;
}