import Order from "../../../../domain/entities/order/order";
import OrderRepository from "../../../../domain/repository/order/orderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = [];
    }

    save(order: Order): void {
		this.orders.push(order);
	}
}
