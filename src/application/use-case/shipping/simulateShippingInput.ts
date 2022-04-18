import OrderItem from "../../../domain/entities/order/orderItem";

export default class SimulateShippingInput {
    constructor(readonly orderItems: { idItem: number, quantity: number}[]) { }
}