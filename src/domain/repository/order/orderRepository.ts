import Order from '../../entities/order/order';

interface OrderRepository {
    save(order: Order): void;
}

export default OrderRepository;
