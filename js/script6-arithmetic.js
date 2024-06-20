// let num1 = 10;
// let num2 = 5;
// let result = num1 + num2;
// console.log(`result: ${result}`);

// //odd or even
// if( num1 % 2 ===0) {
//     console.log(`${num1} is even`);
// }

// num1 = num1 + 1;
// console.log(`num1: ${num1}`);

// num1++
// cosole.log(`num1: ${num1}`);

// let array = [1, 2, 3, 4, 5]; // every array starts with index 0

// for (let index=0; index < array.length; index++) {// scope
//     if (array[index] % 2 === 0) {
//         console.log(`${array[index]} is even`);
//     } else {
//         console.log(`${array[index]} is odd`)
//     }

// }
// // ask for evaluation if the confdiirion is true
// while(num1 <20) {
//     console.log(num1);
//     num1++;
// }

// do {
//     // always run at code
// }

// let name = "phil";
// name.toUpperCase();

// array.forEach((element) => {
//     console.log(element);
// });

// const links = document.getElementById("links");

// const cars = ["BMW", "AUDI", "MERCEDES"];

// FOR (position of cars) {
//     console.log(position);
// }

// let html = "";
// cars.forEach((car) => {
//     html += `<li><a target='_blank' href='httpp:/www.'></a>`

// });
    

// links.innerHTML = html;


function filterEvenNumbers(array) {
    let evenNumbers = []; // Create a new array to hold even numbers

    // Loop through each element in the provided array
    for (let index = 0; index < array.length; index++) {
        // Check if the number is even
        if (array[index] % 2 === 0) {
            evenNumbers.push(array[index]); // Add the even number to the new array
        }
    }

    return evenNumbers; // Return the array with only even numbers
}

// Array to be passed to the function
let lottoNumbers = [10, 23, 11, 73, 44, 57];

// Call the function with lottoNumbers and log the result
console.log(filterEvenNumbers(lottoNumbers));


// Part 1

// Combining first and last name
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); 

// Replace "Coding" with "CODING"
let originalString = "Dublin Coding School";
let replacedString = originalString.replace("Coding", "CODING");
console.log(replacedString); 
// Reverse the string "Dublin Coding School"
let stringToReverse = "Dublin Coding School";
let reversedString = stringToReverse.split(" ").reverse().join(" ");
console.log(reversedString); 

// Part 2

// Function to reverse word order
function reverseWordOrder(value) {
    return value.split(" ").reverse().join(" ");
}

// Example usage of reverseWordOrder
let sampleString = "Dublin Coding School";
console.log(reverseWordOrder(sampleString)); 

// Function to log event with date
function logEvent(eventName, occurred) {
    console.log(`Event: ${eventName} occurred on ${occurred}`);
}

// Example usage of logEvent
let eventName = "user log in";
let occurred = new Date("Sat, 12 Feb 2022 12:04:35 GMT");
logEvent(eventName, occurred); 
