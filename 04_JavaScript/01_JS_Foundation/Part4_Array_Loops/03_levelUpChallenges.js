/*
1. for loop:
✅ Used for:
    Iterating over arrays, strings, or any iterable objects
    Full control over the index and length of the iterable    
    Syntax:
for (let i = 0; i < array.length; i++) {
  // code to run
}
  Example:
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {         
    console.log(fruits[i]); // Accessing by index
  } 

🔁 2. for...of loop:
✅ Used for:
    Iterating over values of an array, string, or iterable

Example:
let colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color); // Directly gives each color
}

🔁 3. for...in loop
✅ Used for:
    Iterating over keys/indexes of an object or array

Example:
let cars = ["BMW", "Audi", "Tesla"];
for (const index in cars) {
  console.log(index, cars[index]); // index = 0, 1, 2
}

✅ forEach
  The forEach() method executes a function once for each array element.
  It’s like a shortcut for the for loop — no need to write index, length, or increment.
Syntax:

array.forEach(function(item, index) {
  // code to run
});

// Or using arrow function:
array.forEach((item, index) => {
  // code to run
});

🔹Example:
let teas = ["chai", "green tea", "black tea"];
teas.forEach(function(tea, index) {
  console.log(`Tea ${index + 1}: ${tea}`);
});

*/

/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"]; // Original array of teas
let selectedTeas = []; // Empty array to store teas before "chai"
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break; // stop the loop when "chai" is found
  }
  selectedTeas.push(teas[i]); // Add current tea to selectedTeas if it's not "chai"
}
console.log(selectedTeas);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let cities = ["London", "New York", "Paris", "Berlin"]; // Original list of cities
let visitedCities = []; // Array to store cities except "Paris"
for (let j = 0; j < cities.length; j++) {
  if (cities[j] === "Paris") {
    continue; // Skip the rest of the loop when city is "Paris"
  }
  visitedCities.push(cities[j]); // Add city to visitedCities if not "Paris"
}
console.log(visitedCities);

/*
💥Break
    Stops the entire loop when a condition is met.
🔁Continue
    Skips the current loop iteration and moves to the next one.
*/

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let smallNumbers = []; // New array to store numbers before 4
for (const num of numbers) {
  // Loop through each number
  if (num === 4) {
    break; // Stop the loop when 4 is found
  }
  smallNumbers.push(num); // Add the number to smallNumbers if it's not 4
}
console.log(smallNumbers); // Output the final array

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"]; // Original list of teas
let preferredTeas = []; // This will store all teas except "herbal tea"
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue; // Skip this iteration if tea is "herbal tea"
  }
  preferredTeas.push(tea); // Add the tea to preferredTeas if it's not skipped
}
console.log(preferredTeas);

/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous 
   cities' populations in a new object named `cityPopulations`.
   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000}
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {}; // This will hold copied key-value pairs
for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break; // Stop the loop if city is "Berlin"
  }
  cityNewPopulations[city] = citiesPopulation[city]; // Copy city and population
}
console.log(cityNewPopulations);

/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[cities] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []; // an empty array to store teas except "chai"
// Loop through each tea in the teaCollection array
teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return; // If the tea is "chai", skip it and move to the next one
  }
  availableTeas.push(tea); // Add all other teas to availableTeas
});
console.log(availableTeas); // Output: [ 'earl grey', 'green tea', 'oolong tea' ]

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
Notes:
✅Function Expression:

Example:
const greet = function(name) {
  return "Hello, " + name;
};
console.log(greet("Anand")); // Output: Hello, Anand
// Stored in a variable. Useful when passing functions as arguments or using in callbacks.

✅Arrow Function 

Example:
const greet = (name) => {
  return "Hello, " + name;
};
console.log(greet("Anand")); // Output: Hello, Anand
// Same as function expression, just shorter!
*/

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let myNumbers = [2, 5, 7, 9]; // An array of numbers
let doubledNumbers = []; // An empty array to store the doubled values
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) {
    continue; // Skip the number 7 — do not double or store it
  }
  doubledNumbers.push(myNumbers[i] * 2); // Double the number and add to array
}
console.log(doubledNumbers); // Output: [4, 10, 18]

/*
🧠 Notes:
In Javascript:
  return inside forEach = like continue(will skip)
  return inside a normal function = exits the whole function
  
🧪 Bonus Tip:
If you want to use break or continue, don’t use forEach() — use a for or for...of loop instead, because:
forEach() does not support break or continue.
*/

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/
let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
// Array of tea names
let shortTeas = [];
// This will store the short tea names
for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
    // If the tea name has more than 10 characters, stop the entire loop
  }
  shortTeas.push(tea);
  // Otherwise, add it to shortTeas
}
console.log(shortTeas);
// Shows the collected short tea names before the loop broke

/*
✅ Notes:
  Difference between break, return and continue:
  - break: Exits the loop entirely.
  - continue: Skips the current iteration and moves to the next one.          
  - return: Exits the entire function, returning a value if specified.
  - return inside a forEach loop acts like continue (it will skip the current iteration but not exit the loop). 
  - return inside a normal function exits the whole function.

*/
