/*
Asynchronous JavaScript
    Synchronous: Tasks run one after another. Next task waits until the current one finishes.
    Asynchronous: Tasks can start now and finish later. Code continues running without waiting.
*/

function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 5000);

for (let index = 0; index < 10; index++) {
  console.log(index);
}

/*
➡️Function sayHello is defined ✅
➡️setTimeout() is called to run sayHello after 2 seconds ⏲️
➡️The for loop runs immediately and prints 0 to 9
➡️After 2 seconds (by this time the loop has already finished), the sayHello() function runs
*/
