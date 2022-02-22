import Coupon from '../../entities/coupon/coupon';

interface CouponRepository {
    getByCode(id: string): Coupon | undefined;
}

export default CouponRepository;
