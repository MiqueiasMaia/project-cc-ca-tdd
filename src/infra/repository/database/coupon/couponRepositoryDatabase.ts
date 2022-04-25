import Coupon from "../../../../domain/entities/coupon/coupon";
import Connection from "../../../database/connection";

export default class CouponRepositoryDatabase {
    constructor(readonly connection: Connection) {
    }
    async getByCode(code: string): Promise<Coupon | undefined> {
        const [result] = await this.connection.query(`SELECT * FROM ccca.coupon WHERE code = '${code}'`);
        const coupon = new Coupon(
            parseFloat(result.percentage),
            result.code,
            result.expire_date ? new Date(result.expire_date) : undefined
        );
        return coupon;
    }
}
