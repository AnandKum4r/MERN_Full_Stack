// 01: Chceking if a number is greater than another number:
let num1 = 15; // Store 15 in variable num1
let num2 = 8; // Store 8 in variable num2
console.log("I am regular upper code"); // This runs normally before the if-statement
if (num1 > num2) {
  // Check if num1 is greater than num2 (15 > 8)
  console.log("Num1 is greater than num2"); // This runs because the condition is true
} else {
  console.log("Nope, Num1 is not greater"); // This part is skipped
}
console.log("I am regular bottom code"); // This runs after the if-else block

// 02: Checking if a string is equal to another string:

// = : Assignment Operator, Used to assign a value to a variable.It does not compare values.
let x = 10; // Assigns the value 10 to x
let name = "John"; // Assigns "John" to name

// == : Loose Equality, Checks if values are equal but ignores data typesPerforms type conversion if the values are different types.
console.log(5 == "5"); // true → number 5 is equal to string "5" (type conversion happens)
console.log(0 == false); // true → false is converted to 0, so 0 == 0
console.log(null == undefined); // true → special case: loosely equal but not strictly equal

// === : Strict Equality, Checks if values AND types are equal.Does not perform type conversion.
console.log(5 === "5");
// false → number vs string → types are different, so not strictly equal
console.log(0 === false);
// false → number vs boolean → types are different
console.log(null === undefined);
// false → special case → they are loosely equal (==) but not strictly (===)
console.log(5 === 5);
// true → both are numbers and values are same

let username = "chai"; // First username (string)
let anotherUsername = "chai"; // Second username (also "chai")
if (username == anotherUsername) {
  // Checks if both are equal (same value)
  console.log("Pick another username"); // Runs this because both are "chai"
}

// 03: Chceking if a variable is a number or not:
let score = "44"; // score is a string, even though it looks like a number (because of the double quotes)
if (typeof score === "number") {
  console.log("This is a number");
} else {
  console.log("No that is not a number");
}

// 04: Checking if a boolean value is true or false
let isTeaReady = false; // Boolean variable: false means tea is NOT ready
if (isTeaReady) {
  console.log("Tea is ready"); // This runs only if isTeaReady is true
} else {
  console.log("Tea is not ready"); // This runs because isTeaReady is false
}

// 05: Chceking if an array is empty or not:
let items = []; // Declare an empty array
console.log(items.length); // Output: 0 (because there are no items in the array)
if (items.length == 0) {
  // Checks if the array has 0 items
  console.log("Array is empty"); // Runs this block because length is 0
} else {
  console.log("Array is not empty"); // This won't run
}
