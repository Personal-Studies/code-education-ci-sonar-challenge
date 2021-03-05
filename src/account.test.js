const Account = require('./Account')
const accountObj = new Account();

test('initial balance to be 0', () => {
    expect(accountObj.getBalance()).toBe(0);
});

test('when depositing the amount 20, the balance must be 20', () => {
    accountObj.deposit(20)
    expect(accountObj.getBalance()).toBe(20);
});

test('when withdrawning the amount 20, the balance must be 0', () => {
    accountObj.withDrawn(20)
    expect(accountObj.getBalance()).toBe(0);
});

test('when get loan the amount 10, the balance must be 9', () => {
    accountObj.getLoan(10)
    expect(accountObj.getBalance()).toBe(9);
});
