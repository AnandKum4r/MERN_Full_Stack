/*
Constructor Function:
  A constructor function in JavaScript is used to create objects. It's like a template for creating many similar objects.
Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
  Here:
    // Person is the name of the constructor function.
    // this.name = name means the object created will have a name property.
    // this.age = age means the object created will have an age property.
    // 'this' refers to the new object being created
    // Constructor functions are capitalized by convention (e.g., Person, not person).
    // You can add more objects using the same constructor function
    // The new keyword is used to create a new object from a constructor function.
*/

// Constructor function to create a person object
function Person(personName, personAge) {
  this.name = personName;
  this.age = personAge;
}
let myName = new Person("Anand", 25); // Creating a new person object using the 'new' keyword
let anotherPerson = new Person("Prateek", 26); // Creating another person object
let thirdPerson = new Person("Sonia", 22); // ✅ new object
let fourthPerson = new Person("Ravi", 30); // ✅ new object

console.log(myName);
console.log(anotherPerson);
console.log(thirdPerson);
console.log(fourthPerson);

// Constructor function to create a car object
function Car(make, model) {
  this.make = make; // Brand of the car
  this.model = model; // Model of the car
}
let myCar = new Car("Toyota", "Camry"); // Creating a car object
let myNewCar = new Car("Tata", "Safari"); // Creating another car object
let electricCar = new Car("Tesla", "Model 3"); // ✅ new object
let oldCar = new Car("Maruti", "800"); // ✅ new object

console.log(myCar);
console.log(myNewCar);
console.log(electricCar);
console.log(oldCar);

// Constructor function to create a Tea object
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("Lemon tea");
console.log(lemonTea.describe());

// Constructor function to create a Animal object
function Animal(species) {
  this.species = species;
}
// Adding a shared method to the prototype
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`; // All Animal objects can now use this method
};
let dog = new Animal("Dog");
let cat = new Animal("Cat");
let lion = new Animal("Lion");
let cow = new Animal("Cow");

console.log(dog.sound());
console.log(cat.sound());
console.log(lion.sound());
console.log(cow.sound());

// Constructor function to create a Drink object
function Drink(name) {
  // Check if the function was NOT called with 'new'
  if (!new.target) {
    // Throw an error to prevent misuse
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
let tea = new Drink("tea");
// let coffee = Drink("coffee");

