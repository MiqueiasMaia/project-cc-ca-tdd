import Cpf from "../../src/entities/cpf/cpf";

const VALID_CPF = '987.654.321-00';
const INVALID_CPF = '987.654.321-01';
const SEQUENTIAL_CPF = '123.456.789-00';
const IDENTIC_DIGITS_CPF = ['111.111.111-11', '222.222.222-22'];
const INCOMPLETE_CPF = '123.456.789';

test("Should validate CPF", () => {
    const cpf = new Cpf(VALID_CPF);
    expect(cpf.getValue()).toBe(VALID_CPF);
});

test("Shouldn't validate CPF with identic digits", () => {
    expect(() => new Cpf(IDENTIC_DIGITS_CPF[0])).toThrowError('Invalid CPF');
});

describe.each(IDENTIC_DIGITS_CPF)("Shouldn't validate CPF with identic digits", function (cpf) {
    test(`${cpf}`, function () {
        expect(() => new Cpf(cpf)).toThrowError('Invalid CPF');
    })
});

test("Shouldn't validate invalid CPF", () => {
    expect(() => new Cpf(INVALID_CPF)).toThrowError('Invalid CPF');
});

test("Shouldn't validate sequential CPF", () => {
    expect(() => new Cpf(SEQUENTIAL_CPF)).toThrowError('Invalid CPF');
});

test("Shouldn't validate empty CPF", () => {
    expect(() => new Cpf('')).toThrowError('Invalid CPF');
});

test("Shouldn't validate incomplete CPF", () => {
    expect(() => new Cpf(INCOMPLETE_CPF)).toThrowError('Invalid CPF');
});
