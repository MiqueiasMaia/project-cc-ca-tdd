import Coupon from "../../../src/domain/entities/coupon/coupon";
import Cpf from "../../../src/domain/entities/cpf/cpf";
import Item from "../../../src/domain/entities/item/item";
import { ItemDimension } from "../../../src/domain/entities/item/itemDimension";
import { ItemWeigth } from "../../../src/domain/entities/item/itemWeigth";
import Order from "../../../src/domain/entities/order/order";
import DefaultShippingCalculator from "../../../src/domain/entities/shipping/defaultShippingCalculator";
import FixedShippingCalculator from "../../../src/domain/entities/shipping/fixedShippingCalculator";

const VALID_CPF = '987.654.321-00';
const INVALID_CPF = '987.654.321-01';

test("Must not create a Order", function () {
    expect(() => new Cpf(INVALID_CPF)).toThrowError('Invalid CPF');
});

test("Must create a Order with 3 items", function () {
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const total = order.getTotal();
    expect(total).toBe(36000);
});

test("Must create a Order with 3 items with discount coupom", function () {
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const coupom = new Coupon(10, 'CUPOM20');
    order.addCoupon(coupom);
    const total = order.getTotal();
    expect(total).toBe(29160);
});

test ("Must create a Order with 3 items with a valid discount coupom", function () {
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const coupom = new Coupon(10, 'CUPOM20');
    order.addCoupon(coupom);
    const total = order.getTotal();
    expect(total).toBe(29160);
});

test ("Must create a Order with 3 items with a invalid discount coupom", function () {
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const coupom = new Coupon(10, 'CUPOM20', new Date(2020, 1, 1)); 
    order.addCoupon(coupom);
    const total = order.getTotal();
    expect(total).toBe(36000);
});

test("Must create a Order with 3 items with shipp price", function () {
    const order = new Order(VALID_CPF, new Date(), new DefaultShippingCalculator());
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000, new ItemDimension(100,30,10), new ItemWeigth(3)), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 5000, new ItemDimension(100,50,50), new ItemWeigth(20)), 1);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 30, new ItemDimension(10,10,10), new ItemWeigth(0.9)), 3);
    const shipping = order.getShipping();
    expect(shipping).toBe(260);
});

test("Must create a Order with 3 items with shipp price", function () {
    const order = new Order(VALID_CPF, new Date(), new FixedShippingCalculator());
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000, new ItemDimension(100,30,10), new ItemWeigth(3)), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 5000, new ItemDimension(100,50,50), new ItemWeigth(20)), 1);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 30, new ItemDimension(10,10,10), new ItemWeigth(0.9)), 3);
    const shipping = order.getShipping();
    expect(shipping).toBe(50);
});
