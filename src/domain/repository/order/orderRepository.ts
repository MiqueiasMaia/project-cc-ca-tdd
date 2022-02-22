import Order from "../../entities/order/order";

export default interface OrderRepository {
    save(order: Order): void;
}