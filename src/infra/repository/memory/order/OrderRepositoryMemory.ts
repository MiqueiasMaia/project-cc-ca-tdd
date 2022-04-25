import Order from '../../../../domain/entities/order/order';
import OrderRepository from '../../../../domain/repository/order/orderRepository';

export default class OrderRepositoryMemory implements OrderRepository {
    orders: Order[];

    constructor() {
        this.orders = [];
    }

    async save(order: Order): Promise<void> {
        this.orders.push(order);
    }

    async size(): Promise<number> {
        return this.orders.length;
    }
}
