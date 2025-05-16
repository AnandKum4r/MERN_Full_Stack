/* 
 what is a function?
    A function in JavaScript is a reusable block of code designed to perform a specific task. Instead of writing the same code again and again, you can write it once inside a function and call it whenever needed.
    Syntax of a Function:
✅ Function Declaration:
function greet(name) {
  return "Hello, " + name;
}

✅ Arrow Function:
const greet = (name) => {
  return "Hello, " + name;
};

//➡️ If the function body has only one line, you can shorten it:
const greet = name => "Hello, " + name;
*/

/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`; //This is the cleanest and modern way (using template literals).
  // return "Making " + typeOfTea; //will work same as above line
}
let teaOrder = makeTea("Green Tea");
console.log(teaOrder);
// console.log(makeTea("lemon tea")); //Same as above line but This skips storing the result in a variable and just prints the return value directly.

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  // Inside orderTea, define another function confirmOrder (a nested function)
  function confirmOrder() {
    return "Order confirmed for Chai"; // This function always returns the same string, regardless of teaType
  }
  return confirmOrder(); // Call the confirmOrder function and return its result
}
let orderConfirmation = orderTea("chai"); // Call the orderTea function with the argument "chai" and store the result in orderConfirmation
console.log(orderConfirmation); // Output: "Order confirmed for Chai"

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
// 1st method with arrow function
const calculateTotal = (price, quantity) => price * quantity; // It returns the product of price and quantity
let totalCost = calculateTotal(499, 100); // Store the returned result in the variable 'totalCost
console.log(totalCost);

// 2nd method without arrow function
// function calculateTotal(price, quantity) {
//   return price * quantity;
// }
// let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea) {
  // Define a function named 'makeTea' that takes 'typeOfTea' as a parameter
  return `makeTea: ` + typeOfTea; // Return a string by concatenating "makeTea: " with the tea type
}
function processTeaOrder(teaFunction) {
  // Define a function named 'processTeaOrder' that takes another function as a parameter
  return teaFunction("earl grey"); // Call the passed function with "earl grey" as the argument and return the result
}
let order = processTeaOrder(makeTea); // Call 'processTeaOrder', passing 'makeTea' as the argument, and store the result in 'order'
console.log(order); // Print the value of 'order' to the console (expected output: "makeTea: earl grey")

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker(name) {
  let score = 100; // Inside this function, define a local variable 'score'
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`; // Returns a string using the teaType, name, and score
    // return "Making " + teaType + name + score; //Same as above line but need spacing in betwwen always
  };
}
let teaMaker = createTeaMaker("Anand"); // Call 'createTeaMaker' with "Anand"; returns the inner function and stores it in 'teaMaker'
let result = teaMaker("green tea"); // Call the returned function with "green tea"; stores result in 'result'
console.log(result); // Prints the result: "Making green tea Anand 100"

/* ✅ Note:
Difference between these two return statements and which one is better:
✅ Template Literal (ES6):  
    return Making ${teaType} ${name} ${score};

✅ String Concatenation (Traditional):
    return "Making " + teaType + name + score;
  
🟩 Template Literal (cleaner and space-aware):
Example:
teaType = "green tea";
name = "Anand";
score = 100;
`Making ${teaType} ${name} ${score}`
// Output: "Making green tea Anand 100"

🟥 Concatenation (needs manual spacing):
"Making " + teaType + " " + name + " " + score
// Output: "Making green tea Anand 100"

⚠️ But without spaces:
"Making " + teaType + name + score
// Output: "Making green teaAnand100" ❌ (Hard to read)

✅ So Always use template literals (backticks ` with ${} syntax) for:
      Easier to read and write
      Safer from spacing mistakes
      Cleaner syntax
      Supports multi-line strings easily
*/
