import Coupom from "../../src/entities/coupom/coupom";
import Cpf from "../../src/entities/cpf/cpf";
import Item from "../../src/entities/items/item";
import Order from "../../src/entities/order/order";

const VALID_CPF = '987.654.321-00';
const INVALID_CPF = '987.654.321-01';

test("Must not create a Order", function(){
    expect(() => new Cpf(INVALID_CPF)).toThrowError('Invalid CPF');
});

test("Must create a Order with 3 items", function(){
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const total = order.getTotal();
    expect(total).toBe(36000);
});

test("Must create a Order with 3 items with discount coupom", function(){
    const order = new Order(VALID_CPF);
    order.addItem(new Item(1, 'Musical instruments', 'Guitar', 1000), 1);
    order.addItem(new Item(2, 'Musical instruments', 'Sanfona', 1000), 10);
    order.addItem(new Item(3, 'Musical instruments', 'Violão', 1000), 12);
    order.addItem(new Item(4, 'Musical instruments', 'Pandeiro', 1000), 13);
    const coupom = new Coupom(10, 'CUPOM20');
    order.addCoupom(coupom);
    const total = order.getTotal();
    expect(total).toBe(32400);
});