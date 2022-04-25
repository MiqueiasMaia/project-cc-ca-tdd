import CouponRepository from "../../../domain/repository/coupon/couponRepository";

export default class ValidateCoupon {
    constructor(readonly couponRepository: CouponRepository) {
        this.couponRepository = couponRepository;
    }
    async execute(code: string): Promise<boolean> {
        const coupon = await this.couponRepository.getByCode(code);
        if (!coupon) return false;
        return coupon.isValid();
    }
}
