module.exports = class Account {
    balance;

    constructor() {
        this.balance = 0;
    }

    deposit(value) {
        this.balance += value;
    }

    withDrawn(value) {
        this.balance -= value;
    }

    getLoan(value) {
        const discountedValue = value - (value * 0.10);
        this.balance += discountedValue; 
    }

    getBalance() {
        return this.balance
    }

}
