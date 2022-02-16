import Coupom from "../coupom/coupom";

export default class OrderItem{
    constructor (readonly idItem: number, private price: number, readonly quantity: number){}

    public getTotal(): number {
        return this.price * this.quantity;
    }

    public addCoupom(coupom: Coupom): number {
        return this.price -= this.price * (coupom.discount / 100);
    }

}
