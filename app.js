// Data Types
let num = 10;
let greeting = "Hello";
let isOnline = true;
let numbersArray = [1, 2, 3, 4, 5];
let individual = { name: 'Clint', age: 19 };

// Arithmetic Operators
let addition = num + 5;
let subtraction = num - 3;
let multiplication = num * 2;
let division = num / 2;
let modulus = num % 3;

// Logical Operators
let isNonNegative = num > 0;
let isDivisibleByTwo = num % 2 === 0;

// Prime number check function
function checkPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Palindrome check function
function checkPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Output data types, arithmetic results, and logical checks
console.log('Data Types:');
console.log('Number:', num);
console.log('Greeting:', greeting);
console.log('Is Online:', isOnline);
console.log('Numbers Array:', numbersArray);
console.log('Individual Object:', individual);

console.log('\nArithmetic Operations:');
console.log('Addition:', addition);
console.log('Subtraction:', subtraction);
console.log('Multiplication:', multiplication);
console.log('Division:', division);
console.log('Modulus:', modulus);

console.log('\nLogical Operations:');
console.log('Is Non-Negative:', isNonNegative);
console.log('Is Divisible by Two:', isDivisibleByTwo);

// Conditional Statements

// if...else
console.log('\nConditional Statements (if...else):');
if (num > 0) {
    console.log('The number is positive.');
} else if (num < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

// switch
console.log('\nConditional Statements (switch):');
switch (num) {
    case 10:
        console.log('The number is 10.');
        break;
    case 20:
        console.log('The number is 20.');
        break;
    default:
        console.log('The number is neither 10 nor 20.');
}

// Loops

// for loop
console.log('\nFor Loop:');
for (let i = 0; i < numbersArray.length; i++) {
    console.log('Array element at index', i, ':', numbersArray[i]);
}

// while loop
console.log('\nWhile Loop:');
let idx = 0;
while (idx < numbersArray.length) {
    console.log('Array element at index', idx, ':', numbersArray[idx]);
    idx++;
}

// Check if the number is even or odd
console.log('\nOdd or Even Check:');
if (num % 2 === 0) {
    console.log(num, 'is an even number.');
} else {
    console.log(num, 'is an odd number.');
}

// Check if the number is a prime number
console.log('\nPrime Number Check:');
if (checkPrime(num)) {
    console.log(num, 'is a prime number.');
} else {
    console.log(num, 'is not a prime number.');
}

// Check if the text is a palindrome
console.log('\nPalindrome Check:');
if (checkPalindrome(greeting.toLowerCase())) {
    console.log('The text "' + greeting + '" is a palindrome.');
} else {
    console.log('The text "' + greeting + '" is not a palindrome.');
}