import Coupon from '../../../../domain/entities/coupon/coupon';
import CouponRepository from '../../../../domain/repository/coupon/couponRepository';

export default class CouponRepositoryMemory implements CouponRepository {
    coupons: Coupon[];

    constructor() {
        this.coupons = [
            new Coupon(10, 'CUPONOMIA10')
        ];
    }

    getByCode(code: string): Coupon | undefined {
        return this.coupons.find(coupon => coupon.code === code);
    }
}
