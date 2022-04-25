import Coupon from '../../../../domain/entities/coupon/coupon';
import CouponRepository from '../../../../domain/repository/coupon/couponRepository';

export default class CouponRepositoryMemory implements CouponRepository {
    coupons: Coupon[];

    constructor() {
        this.coupons = [
            new Coupon(10, 'CUPONOMIA10')
        ];
    }

    async getByCode(code: string): Promise<Coupon | undefined> {
        return this.coupons.find(coupon => coupon.code === code);
    }
}
