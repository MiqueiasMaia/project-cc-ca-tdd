import Order from '../../entities/order/order';

interface OrderRepository {
    save(order: Order): Promise<void>;
    size(): Promise<number>;
}

export default OrderRepository;
