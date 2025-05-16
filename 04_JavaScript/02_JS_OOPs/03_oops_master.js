/*
OOP in JavaScript 
    OOP (Object-Oriented Programming) in JavaScript is a way to structure your code using objects, classes, and inheritance.
🎯Four Pillars of OOP in JavaScript:
        1.Encapsulation: Wrapping data + logic into one object (like a capsule 💊)
                         Hides the data using private fields and exposes methods to access it
        2.Abstraction:	Hiding complex logic and showing only what's needed
        3.Inheritance:	Passing features from parent to child (like a family 👪)
        4.Polymorphism:	One method, many forms (like a person acting differently at home vs office)
*/

// Creating an object using object literal
let car = {
  make: "Toyoto",
  model: "Camry",
  year: 2020,
  // Method to start the car
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
console.log(car.start());

// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let myName = new Person("Anand Kumar", 20);
console.log(myName.name);

// Constructor function for Animal
function Animal(type) {
  this.type = type;
}
// Adding a method to the Animal prototype
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
// Adding a custom method to all Arrays using prototype
Array.prototype.anand = function () {
  return `Custom method ${this}`;
};
let myArray = [1, 2, 3];
console.log(myArray.anand());
let mynewArray = [1, 2, 3, 4, 5, 6];
console.log(mynewArray.anand());

// Creating a class called Vehicle
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  // This is a method inside the class
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Car class extends Vehicle class, inheriting all its properties and methods
class Car extends Vehicle {
  // New method specific to Car
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}
// Create an instance of Car class
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let VehicleOne = new Vehicle("Toyota", "Corolla");
console.log(VehicleOne.make);

// 1.Encapsulation example
// Encapsulation is the concept of hiding internal details of an object and exposing only what is necessary.
class BankAccount {
  #balance = 0; // 🔐 Private property - cannot be accessed directly from outside

  deposit(amount) {
    this.#balance += amount; // Adds amount to private balance
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount(); // Create a new account
console.log(account.getBalance()); // View current balance
// console.log(account.#balance); // ❌ SyntaxError: Private field '#balance' must be declared

/*
🎯 In this example:
      #balance is private: No one outside the class can change it directly.
      The # symbol means this field is private
      Methods like deposit() and getBalance() are the public interface.
      This ensures data protection and control over how balance is updated or shown.
*/

// 2.Abstraction Example:
// Abstraction means hiding complex internal logic and showing only what’s necessary to the user
class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `Searching the machine...`;
  }
  brewCofee() {
    // complex calculation
    return `Brewing coffee`;
  }
  pressStartButton() {
    let msgOne = this.start(); // internally call start()
    let msgTwo = this.brewCofee(); // internally call brewCofee()
    return `${msgOne} + ${msgTwo}`; // combine both messages
  }
}
let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCofee());
console.log(myMachine.pressStartButton());

// 3.Polymorphism Example
// One method, many forms: Same method behaves differently for different objects.
class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguin can not fly`;
  }
}
let myBird = new Bird();
let myPenguin = new Penguin();
console.log(myBird.fly());
console.log(myPenguin.fly());

// Example2
class Animals {
  speak() {
    return "Animal makes a sound";
  }
}
class Dog extends Animals {
  speak() {
    return "Dog barks";
  }
}
class Cat extends Animals {
  speak() {
    return "Cat meows";
  }
}
let myDog = new Dog();
let myCat = new Cat();
console.log(myDog.speak()); // "Dog barks"
console.log(myCat.speak()); // "Cat meows"

// Static Method
class Calculator {
  // Static method is defined using the 'static' keyword
  static add(a, b) {
    return a + b;
  }
}
// You cannot call static methods on instances of the class like this:
// let minCalc = new Calculator();
// console.log(minCalc.add(5, 8));
console.log(Calculator.add(6, 9)); // Static methods should be called directly on the class itself

// Getters and Setters
// Getters are special methods that allow you to access the value of an object's property.
// Setters are special methods that allow you to modify the value of an object's property.
class Employee {
  #salary; // Private field to store salary
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary; // Initialize the private salary field
  }
  // Getter for salary
  get salary() {
    return `You are not allowed to see salary`;
  }
  // Setter for salary (checks for invalid salary)
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary"); 
    } else {
      this.#salary = value;
    }
  }
}
let emp = new Employee("Anand", 500000);
console.log(emp.name);
console.log(emp.salary);
