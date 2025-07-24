// index.js

const { createAccount } = require('./module');

// Create a new account
const account12345 = createAccount(12345, 5000);

// Perform operations
account12345.deposit(5000);    // +5000
account12345.withdraw(2000);   // -2000
account12345.getBalance();     // Show final balance