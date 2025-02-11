const bankAccount = {
    owner: 'Alice',
    balance: 500,
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
    }
}

bankAccount.deposit(200);
bankAccount.withdraw(1000);
console.log(bankAccount.balance)
module.exports = bankAccount;