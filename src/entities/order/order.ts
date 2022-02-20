import Coupom from "../coupom/coupom";
import Cpf from "../cpf/cpf";
import Item from "../items/item";
import OrderItem from "../orderItem/orderItem";
import DefaultShippingCalculator from "../shipping/defaultShippingCalculator";
import Shipping from "../shipping/shipping";

export default class Order {
    private cpf: Cpf;
    private date: Date;
    private coupom: Coupom | undefined;
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
        if(this.coupom) {
            total -= this.coupom.calculateDiscount(total, this.getDate());
        }
        return total;
    }

    public addCoupom(coupom: Coupom): void {
        if (!coupom.isValid(this.getDate())) return;
        this.coupom = coupom;
        this.orderItems.forEach(item => {
            item.addCoupom(coupom);
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