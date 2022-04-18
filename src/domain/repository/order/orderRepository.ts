import Order from '../../entities/order/order';

interface OrderRepository {
    save(order: Order): void;
    size(): number;
}

export default OrderRepository;
