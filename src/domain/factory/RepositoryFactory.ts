import CouponRepository from "../repository/coupon/couponRepository";
import ItemRepository from "../repository/item/itemRepository";
import OrderRepository from "../repository/order/orderRepository";

export default interface RepositoryFactory {
    createItemRepository(): ItemRepository;
    createCouponRepository(): CouponRepository;
    createOrderRepository(): OrderRepository;
}