

function createAccount(accountNumber, initialBalance) {
    let balance = initialBalance;

    function deposit(amount) {
        balance += amount;
        console.log(`Deposited ₹${amount}. New Balance: ₹${balance}`);
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient Balance!");
        } else {
            balance -= amount;
            console.log(`Withdrew ₹${amount}. New Balance: ₹${balance}`);
        }
    }

    function getBalance() {
        console.log(`Account ${accountNumber} Balance: ₹${balance}`);
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
}

module.exports = { createAccount };