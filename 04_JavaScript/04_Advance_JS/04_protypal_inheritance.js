/* 
In JavaScript, objects can inherit properties and methods from another object — this is called prototypal inheritance.
    ➡️ Every object in JavaScript has a hidden [[Prototype]] (or __proto__) property that points to another object.
    ➡️ This chain of inheritance is called the prototype chain.
*/
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
  //   console.log("Hello, my name is " + this.name);
};
let anand = new Person("ANAND");
anand.greet();

/*
✅ 1. Template Literals (ES6+)
console.log(`Hello, my name is ${this.name}`);
    Uses backticks ` `
    Allows embedding variables directly inside the string using ${...}
    Easier to read and write when combining strings and variables
    Supports multi-line strings easily

✅ 2. String Concatenation (Traditional)
console.log("Hello, my name is " + this.name);
    Uses double or single quotes " " or ' '
    Combines strings and variables using the + operator
    Slightly less readable for longer or complex strings
*/
