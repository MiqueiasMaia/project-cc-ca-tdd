import CouponRepository from "../../../domain/repository/coupon/couponRepository";

export default class ValidateCoupon {
    constructor(readonly couponRepository: CouponRepository) {
        this.couponRepository = couponRepository;
    }
    execute(code: string): boolean {
        const coupon = this.couponRepository.getByCode(code);
        if (!coupon) return false;
        return coupon.isValid();
    }
}
