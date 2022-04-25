import Order from '../../../domain/entities/order/order';
import DefaultShippingCalculator from '../../../domain/entities/shipping/defaultShippingCalculator';
import Shipping from '../../../domain/entities/shipping/shipping';
import CouponRepository from '../../../domain/repository/coupon/couponRepository';
import ItemRepository from '../../../domain/repository/item/itemRepository';
import OrderRepository from '../../../domain/repository/order/orderRepository';
import PlaceOrderInput from './placeOrderInput';
import PlaceOrderOutput from './placeOrderOutput';

export default class PlaceOrder {
    constructor(
        readonly itemRepository: ItemRepository,
        readonly orderRepository: OrderRepository,
        readonly couponRepository: CouponRepository
    ) { }

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
        const sequence = await this.orderRepository.size() + 1;
        const shippingCalculator: Shipping = new DefaultShippingCalculator();
        const order = new Order(input.cpf, input.issueDate, shippingCalculator, sequence);
        input.orderItems.forEach(async orderItem => {
            const item = await this.itemRepository.getById(orderItem.idItem);
            if (!item) throw new Error('Item not found');
            order.addItem(item, orderItem.quantity);
        });
        if (input.coupon) {
            const coupon = await this.couponRepository.getByCode(input.coupon);
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        await this.orderRepository.save(order);
        const output = new PlaceOrderOutput(total, order.getCode());
        return output;
    }
}
