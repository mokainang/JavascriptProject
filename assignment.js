// Function to reverse a string

function reverseString(myValue) {
    return myValue.split('').reverse().join('');
    
}

// assign value to the string 
const myString = "GoMyCOde";
const reversedString = reverseString(myString);

// Display the outputs
console.log("Original String:", myString); 
console.log("Reversed String:", reversedString); 

 
// A function that counts the number of characters in a string

const mytext = "GoMyCode is a place of Excellence";
let result = mytext.length;

console.log(result);


// A function that capitalizes the first letter of each word in a sentence

const myWord = "gomycode";

result = myWord[0].toUpperCase();

console.log(result);


// function to find the maximum values in an array of numbers
let result1 = Math.max(6, 10, 20, 6, 5, 40, 3, 6, 1)
console.log(result1);

// function myarray(value) {
    
//     let myarray = Math.max(...value);    
//     return myarray;   
// }
// console.log(myarray([6, 10, 20, 6, 5, 4, 3, 6, 1]));


// function to find the minimum values in an array of numbers
let result2 = Math.min(6, 10, 20, 6, 5, 40, 3, 6, 1)
console.log(result2);

// Function that calculates the sum of all elements in an array
let num1 = 6;
let num2 = 10;
const addItem = (num1 + num2)
console.log(addItem);
 
    
let num = [6, 10, 20, 6, 5, 40, 3, 6, 1];
  
let total =0
    for (let i = 0; i < num.length; i++) {
        total += num[i];    
}   
console.log(total);


// function that filters out elements from an array based on a given condition

let myfield = ["John", "Michael", "Philip", "Abubakar", "Daniel"];
let newField = []
for (let i = 0; i < myfield.length; i++) {
    const myDecision = myfield[i];
    // Filter out a value whose lenght is greater than 4
    if (myDecision.length <= 4) {
       newField.push(myfield[i])
    }
    }
console.log(newField);

 let newField1 = []
for (let i = 0; i < myfield.length; i++) {
    const myDecision1 = myfield[i];
    // Filter out a value whose lenght is greater than 4
    if (myDecision1.length > 4) {
       newField1.push(myfield[i])
    }
    }
console.log(newField1);



// function to calculate the factorial of a given number
let numb = 0;
function factorial(numb) {
    if (numb < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (numb === 0 || numb === 1) {
        return 1;
    }
    return numb * factorial(numb - 1);
}
console.log(factorial(10));


// Function to check if a number is prime or not
function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (num === 2) {
        return true; // 2 is the only even prime number
    }
    if (num % 2 === 0) {
        return false; // Other even numbers are not prime
    }
    // Check divisors from 3 to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

// Implement a function to generate the Fibonacci sequence
// up to a given number of terms
function generateFibonacci(terms) {
    if (terms <= 0) {
        return []; // Return an empty array for invalid input
    }
    if (terms === 1) {
        return [0]; // Return the first Fibonacci number
    }

    const fibonacci = [0, 1]; // Initialize the first two terms
    for (let i = 2; i < terms; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

console.log(generateFibonacci(7));  // Output: [0, 1, 1, 2, 3]