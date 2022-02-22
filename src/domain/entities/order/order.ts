import Coupon from "../coupon/coupon";
import Cpf from "../cpf/cpf";
import Item from "../item/item";
import OrderItem from "./orderItem";
import DefaultShippingCalculator from "../shipping/defaultShippingCalculator";
import Shipping from "../shipping/shipping";

export default class Order {
    private cpf: Cpf;
    private date: Date;
    private coupon: Coupon | undefined;
    private shipping : number;
    private orderItems: OrderItem[];

    constructor(cpf: string, date: Date = new Date(), readonly shippingCalculator: Shipping = new DefaultShippingCalculator()) {
        this.cpf = new Cpf(cpf);
        this.date = date;
        this.orderItems = [];
        this.shipping = 0;
    }

    public getCpf(): Cpf {
        return this.cpf;
    }

    public getDate(): Date {
        return this.date;
    }

    public getTotal(): number {
        let total = 0;
        this.orderItems.forEach(item => {
            total += item.getTotal();
        });
        if(this.coupon) {
            total -= this.coupon.calculateDiscount(total, this.getDate());
        }
        return total;
    }

    public addCoupon(coupon: Coupon): void {
        if (!coupon.isValid(this.getDate())) return;
        this.coupon = coupon;
        this.orderItems.forEach(item => {
            item.addCoupon(coupon);
        });
    }

    public addItem(item: Item, quantity: number): void {
        if(item.itemDimension && item.itemWeigth) {
            this.shipping += this.shippingCalculator.calculate(item) * quantity;
        }
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    public getShipping(): number {
        return this.shipping;
    }
}