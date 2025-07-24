//odd or even 
const checkEvenOdd = function(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
};


checkEvenOdd(7);
checkEvenOdd(10);

// positive or negativeor zero

const checkNumber = function(num) {
    if (num > 0) {
        console.log(num + " is Positive");
    } else if (num < 0) {
        console.log(num + " is Negative");
    } else {
        console.log("The number is Zero");
    }
};

checkNumber(10);   
checkNumber(-5);   
checkNumber(0);    

// reverse

const reverseString = function(str) {
    return str.split('').reverse().join('');
};

console.log(reverseString("hello"));  
console.log(reverseString("Aditya")); 