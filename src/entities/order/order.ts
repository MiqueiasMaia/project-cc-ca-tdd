import Coupom from "../coupom/coupom";
import Cpf from "../cpf/cpf";
import Item from "../items/item";
import OrderItem from "../orderItem/orderItem";

export default class Order {
    private cpf: Cpf;
    private orderItems: OrderItem[];

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    public getCpf(): Cpf {
        return this.cpf;
    }

    public getTotal(): number {
        let total = 0;
        this.orderItems.forEach(item => {
            total += item.getTotal();
        });
        return total;
    }

    public addCoupom(coupom: Coupom): void {
        this.orderItems.forEach(item => {
            item.addCoupom(coupom);
        });
    }

    public addItem(item: Item, quantity: number): void {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }
}