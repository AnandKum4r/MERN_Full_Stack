/*
A closure is formed when a function "remembers" and continues to access variables from its outer scope, even after that outer function has finished executing.
*/

// example1
function outer() {
  let counter = 5;
  return function () {
    counter++;
    console.log("Current count:", counter);
  };
}
let increment = outer();
increment();
increment();
increment();

// example2
function outer1() {
  let name = "Anand"; // variable in outer function
  function inner() {
    console.log("Hello, " + name); // inner function uses outer variable
  }
  return inner;
}
const greet = outer1(); // outer() runs and returns inner()
greet(); // ➡️ Hello, Anand
/*
outer() returns the inner() function.
Even though outer() has finished running, inner() still remembers the variable name.
That’s a closure — inner() closes over name
*/
