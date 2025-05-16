/* 
Datatypes:
    1.Primitive datatypes
        String,Boolean,Number,Null,Undefined,Symbol
    2.Non-Primitive(Functional/Objects) datatypes
       Arrays,Functions,Objects 
*/

// 1.Number >>>>
let balance = 120; //balance is a primitive number type.
let anotherBalance = new Number(120); //anotherBalance is an object of type Number.
console.log(balance); //prints the value of balance to the console.
console.log(anotherBalance); //anotherBalance is a Number object, it displays the object form
console.log(anotherBalance.valueOf()); //the valueOf() method retrieves the primitive value of a Number object.
console.log(typeof balance); //typeof is used to determine the data type
console.log(typeof anotherBalance);

// Every primitive datatypes can be converted into non-primitive datatypes

// 2.Boolean >>>>
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended

// 3.null and undefined >>>>
let firstname = null; //null is explicitly assigned to represent "no value" or "empty".
console.log(firstname);
let lastname; //undefined means the variable has been declared but not yet assigned a value.
console.log(lastname);
// console.log(middlename); //this is not defined

// 4.String >>>>
let myString = "Hello";
// string can be defined in double quotes("") and single quotes('') as required
let myStringOne = "Hi";
let username = "Anand";

let oldGreet = myString + " " + "Kumar";
console.log(oldGreet);

/* below line uses template literals (backticks: `) to create a string. Template literals allow embedding variables directly within the string 
   using ${variableName} syntax. */

// let greetMsg = `Hello ${username}`;
// let greetMsg = `${myString} ${username}`;
let greetMsg = `${myStringOne} ${username}`;  //template literals (backticks) allow multi-line strings and embedded expressions
console.log(greetMsg);

let demoOne = `Value is ${2 * 5}`;
console.log(demoOne);

// 5.Symbol >>>>
// Symbol() is a built-in function in JavaScript that creates a unique and immutable value. Symbols are often used as unique property keys.
let sm1 = Symbol("Anand"); //This symbol is unique.
let sm2 = Symbol("Anand"); //Another unique Symbol
// Symbols are always unique, so even if two symbols are created with the same description (or no description), they are not equal.
console.log(sm1 == sm2); //false
console.log(sm2);
