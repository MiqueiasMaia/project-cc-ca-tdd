import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponRepository from "../../domain/repository/coupon/couponRepository";
import ItemRepository from "../../domain/repository/item/itemRepository";
import OrderRepository from "../../domain/repository/order/orderRepository";
import CouponRepositoryMemory from "../repository/memory/coupon/CouponRepositoryMemory";
import ItemRepositoryMemory from "../repository/memory/item/ItemRepositoryMemory";
import OrderRepositoryMemory from "../repository/memory/order/OrderRepositoryMemory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }
    createCouponRepository(): CouponRepository {
        return new CouponRepositoryMemory();
    }
    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
}
