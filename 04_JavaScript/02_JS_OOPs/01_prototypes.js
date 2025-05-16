/*
What is a Prototype:
  In JavaScript, objects can inherit features from other objects. This is done using something called a prototype.
  You can access it using __proto__ (not recommended for production) or 
  Use this to access using Object.getPrototypeOf(obj).

Why Use Prototypes?
  Memory-efficient: Methods are not duplicated for each object.
  Allows inheritance: You can make one object inherit from another.
*/

let computer = { cpu: 12 };
let hp = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};
console.log(`computer`, computer.__proto__);

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, tesla);
// console.log(`tesla`, genericCar);
console.log(`tesla`, Object.getPrototypeOf(tesla));
