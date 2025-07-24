const add = require('./add');
const sub = require('./sub');
const mul = require('./mul');
const div = require('./div');

let a = 20, b = 4;

console.log("Add:", add(a, b));
console.log("Subtract:", sub(a, b));
console.log("Multiply:", mul(a, b));
console.log("Divide:", div(a, b));