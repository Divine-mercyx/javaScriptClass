const Employee = require('./Object5');
const findExpensiveProducts = require('./Object6');
const bankAccount = require('./Object3');
const inventory = require('./Object4');
const { default: expect } = require('expect');


test('Employee class', () => {
    const employee = new Employee('Alice', 'Engineering');
    expect(employee.name).toBe('Alice');
    expect(employee.department).toBe('Engineering');
    expect(employee.id).toBe(5);
});

test('find Expensive Product test', () => {
    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 },
        { id: 3, name: 'Tablet', price: 500 },
        { id: 4, name: 'Desktop', price: 400 },
    ];
    const actual = findExpensiveProducts(products, 700);

    expect(actual).toEqual([{id: 1, name: 'Laptop', price: 1200 }, { id: 2, name: 'Phone', price: 800 }]);
});


test('Bank Account test', () => {
    bankAccount.deposit(100);
    expect(bankAccount.balance === 800).toBeTruthy();
    bankAccount.withdraw(700);
    expect(bankAccount.balance === 100).toBeTruthy();
});


test('Inventory test', () => {
    expect(inventory.apple).toBe(10);
    expect(inventory.banana).toBe(5);
    expect(inventory.orange).toBe(8);
    expect(inventory.mango).toBe(12);
})