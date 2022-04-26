import RepositoryFactory from "../../domain/factory/RepositoryFactory";
import CouponRepository from "../../domain/repository/coupon/couponRepository";
import ItemRepository from "../../domain/repository/item/itemRepository";
import OrderRepository from "../../domain/repository/order/orderRepository";
import Connection from "../database/connection";
import CouponRepositoryDatabase from "../repository/database/coupon/couponRepositoryDatabase";
import ItemRepositoryDatabase from "../repository/database/item/itemRepositoryDatabase";
import OrderRepositoryMemory from "../repository/memory/order/OrderRepositoryMemory";

export default class DatabaseRepositoryFactory implements RepositoryFactory {

    constructor(readonly connection: Connection) { }

    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }
    createCouponRepository(): CouponRepository {
        return new CouponRepositoryDatabase(this.connection);
    }
    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
}
