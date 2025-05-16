/* 1.Object >>>>
    an object is a collection of key-value pairs where keys are strings (or Symbols) 
    and values can be of any type, including other objects, functions, arrays, or primitive values.
*/

const username = {
  "first name": "Anand", // key with space (must be accessed with bracket notation)
  isLoggedIn: true,
};
username.firstname = "Mr.Anand"; // adds a new key 'firstname' (different from 'first name')
username.lastname = "Kumar"; // adds a new key 'lastname'

console.log(username["first name"]); // Accessing 'first name' using brackets ✅
console.log(username.firstname); // Accessing 'firstname' (not same as 'first name') ✅
console.log(username.lastname); // Accessing 'lastname' ✅
console.log(typeof username); // Checking the type of the variable ✅

/* Array 
    An array in JavaScript is a special type of 
    object that stores multiple values in a single variable.
*/
let heros = ["a", "b", "c", true, false]; // Array with 5 elements
let anotheruser = ["Anand", "Kumar", true]; // Another array with name and a boolean
console.log(anotheruser[1]); // Accessing the element at index 1

// Implicit conversion
console.log(1 + "1"); // Number + String: JS converts number to string → "1" + "1" = "11" (string concatenation)
console.log(1 + 1); // Number + Number: JS adds them → 1 + 1 = 2 (normal addition)

console.log("5" - 2); // Output: 3
console.log("5" * 2); // Output: 10
// ✅ JS converts the string to a number because - and * are only for math, not for joining.

// Javascript consider true always as 1 and false as 0.
let isValue = true; // Boolean value true
let iValue = false; // Boolean value false
console.log(isValue + 2); // true is treated as 1 → 1 + 2 = 3
console.log(Number(isValue)); // Converts true to number → 1
console.log(Number(iValue)); // Converts false to number → 0
console.log(iValue + 2); // false is treated as 0 → 0 + 2 = 2
