/* 
🔁Loops:
  A loop is used to repeat a block of code multiple times — either a set number of times or until a condition is false.
✅Loops help avoid repeating code manually.
    keyword: termination condtion-body of the loop
    types: while, do while, for, for in, for of ,for each
/*

1.Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result
    in a variable named `sum`
*/
let sum = 0; // Initialize sum to 0 (this will store the total)
let i = 1; // Start with i = 1 (we will add numbers from 1 to 5)
while (i <= 5) {
  // Loop runs as long as i is less than or equal to 5
  sum = sum + i; // First way: add current i to sum (e.g., sum = sum + i)
  // sum += i;     // Second way (shortcut): does the same thing as above
  i++; // Increase i by 1 to move to the next number
}
console.log(sum); // Print the final sum after loop ends (should be 15)

/*
2.Write `while` loop that counts down from 5 to 1 and stores
 the numbers in an array named `countdown`
*/
let countdown = []; // Create an empty array to store countdown numbers
let j = 5; // Start countdown from 5
while (j >= 0) {
  // Run the loop as long as j is greater than or equal to 0
  countdown.push(j); // Add the current value of j to the array
  j--; // Decrease j by 1 (counting down)
}
console.log(countdown); // Print the final countdown array: [5, 4, 3, 2, 1, 0]

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.

let teaCollection = []; // Create an empty array to store tea names
let tea; // Declare a variable to store user input
do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`); // Ask user to enter a tea name
  if (tea !== "stop") {
    // If the user didn't type "stop"
    teaCollection.push(tea); // Add the entered tea name to the array
  }
} while (tea !== "stop"); // Keep repeating until the user types "stop"
// run in browser because prompt() is a browser-only function — it works in HTML pages, not in VS Code’s Node.js (terminal/console) environment.
*/

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0; // Initialize total to 0 (this will store the sum)
let k = 1; // Initialize k to 1 (starting point of the count)
do {
  total += k; // Add the current value of k to total (same as total = total + k)
  k++; // Increase k by 1 to move to the next number
} while (k <= 3); // Repeat the loop as long as k is less than or equal to 3
console.log(total); // Print the final value of total (which is the sum 1 + 2 + 3 = 6)

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let multipliedNumbers = []; // Empty array to store results
let numbers = [2, 4, 6]; // Original array
for (let l = 0; l < numbers.length; l++) {
  // let takeNumber = numbers[l] * 2; // Multiply each number by 2
  // multipliedNumbers.push(takeNumber); // Add the result to the new array
  multipliedNumbers.push(numbers[l] * 2); //shortcut of above two lins
}
console.log(multipliedNumbers); // Print the final array

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"]; // Original array of cities
let citiList = []; // Empty array to store copied cities

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c]; // Get each city one by one
  citiList.push(myCity); // Add it to citiList
}
console.log(citiList);
// Output: [ 'Paris', 'New York', 'Tokyo', 'London' ]

/* 
Notes:
Both let and const work inside loops, but:
  Use **const** when you're not changing the variable after assigning it
  Use **let** when you plan to reassign the variable later
  
Example where let is better:

let myCity;
for (let c = 0; c < cities.length; c++) {
  myCity = cities[c]; // Reassigning value each time
  citiList.push(myCity);
}

But you cannot use const for the loop counter (i):

for (const i = 0; i < 3; i++) {
  console.log(i);
}
// This gives an error:Because i changes on every loop, and const doesn't allow changes.
*/
