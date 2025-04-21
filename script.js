let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");

// decalre the prompt strings as integers //
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// use console.log(typeof var); to use console to check type // 
// console.log(typeof num1, typeof num2); //

const sum = num1 + num2;
const diff = num1 - num2;
const multi = num1 * num2;
const divi = num1 / num2;

console.log(`Sum: ${sum}`);
console.log(`Diff: ${diff}`);
console.log(`Multiplied: ${multi}`);
console.log(`Divide: ${divi}`);