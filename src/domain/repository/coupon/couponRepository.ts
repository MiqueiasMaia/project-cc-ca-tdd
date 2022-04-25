import Coupon from '../../entities/coupon/coupon';

interface CouponRepository {
    getByCode(id: string): Promise<Coupon | undefined>;
}

export default CouponRepository;
