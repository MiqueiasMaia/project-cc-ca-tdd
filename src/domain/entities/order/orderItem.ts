import Coupon from "../coupon/coupon";

export default class OrderItem {
    constructor(readonly idItem: number, private price: number, readonly quantity: number) { }

    public getTotal(): number {
        return this.price * this.quantity;
    }

    public addCoupon(coupon: Coupon): number {
        return this.price -= this.price * (coupon.discount / 100);
    }
}
