import Order from "../../../domain/entities/order/order";
import CouponRepository from "../../../domain/repository/coupon/couponRepository";
import ItemRepository from "../../../domain/repository/item/itemRepository";
import OrderRepository from "../../../domain/repository/order/orderRepository";
import PlaceOrderInput from "./placeOrderInput";
import PlaceOrderOutput from "./placeOrderOutput";

export default class PlaceOrder {
    constructor(
        readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository,
        readonly couponRepository: CouponRepository
    ) { }

    execute(input: PlaceOrderInput): PlaceOrderOutput {
        const order = new Order(input.cpf);
        input.orderItems.forEach(orderItem => {
            const item = this.itemRepository.getById(orderItem.idItem);
            if (!item) throw new Error("Item not found");
            order.addItem(item, orderItem.quantity);
        });
        if (input.coupon) {
            const coupon = this.couponRepository.getByCode(input.coupon);
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orderRepository.save(order);
        const output = new PlaceOrderOutput(total);
        return output;
    }
}