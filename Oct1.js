//const myName = "abcd";

//let myAge = 28;
//myAge = 29;

//console.log(myAge);

//alert(mgAge);

//document.write(myName)
// show it out on html

//Data Type
//Data Type 1: Numbers (Integer and float)

//Integer
//let myAge = 28;

//Float
let bankBalance = 2500.03;

// multiple line comment is forward slash and asteric
/* 
multiple 
line
comments 
*/

/* 
+ addition
- substraction
* multiply
/ divide
% remainder of division
** exponential (number of stars is the power to x)
++ plus to it
-- minus to it 
*/
// console.log(50 * 50); 


// let myNum = 1;
// myNum++;
// console.log(60 ** 50); 


//Strings
// " "  is the same in between 
// ${ is the variable in a string}

const myFirstName = "Eda"
const myLastName = 'Tee'

console.log(myFirstName + " " + myLastName)

console.log(`Hello, my name is ${myFirstName} ${myLastName}`)

document.write(`<hi>Hello, my name is ${myFirstName} ${myLastName}</hi>`)


let amIMarried = NaN;

console

// NaN means Not a Number 
// ==, <=, >=, 
// when there is quotation mark, it means a string
// one = means reassigning
// double = means value
// triple = means will look into what type of data it is, eg string, or number

function sayHello() {
    console.log("Hello")
}

// invoke function 

sayHello();
sayHello();

// variable name has to start with text instead of number

function sumTwoNumbers(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}

sumTwoNumbers(453, 123)


// Arrays are organized list of data

//let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let otherArray = ['Hello', 3, true, [1, 2, 3]]

//console.log(numArray[0]);
// position #1

//console.log(numArray[numArray.length - 1]);

console.log(otherArray[3][1]);


let gameBoard = [
    ["X", "O", "X"]
    ["O", "X", "X"]
    ["X", "O", "O"]
]

let myName = "Eda Tee";

let words = myName.split('');
console.log(words);

let gameBoard = [
    ["X", "O", "X"]
    ["O", "X", "X"]
    ["X", "O", "O"]
]

let myName = "Eda Tee";

let words = myName.split('');
console.log(words);