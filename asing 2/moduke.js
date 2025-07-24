// Define four anonymous functions (modules)

const add = function(a, b) {
    return a + b;
};

const sub = function(a, b) {
    return a - b;
};

const mul = function(a, b) {
    return a * b;
};

const div = function(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};

// Use the functions (print results)
let x = 10, y = 5;

console.log("Add: " + add(x, y));      // Output: 15
console.log("Subtract: " + sub(x, y)); // Output: 5
console.log("Multiply: " + mul(x, y)); // Output: 50
console.log("Divide: " + div(x, y));   // Output: 2