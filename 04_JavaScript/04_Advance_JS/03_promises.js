/*
A Promise is an object that represents the future result (or failure) of an asynchronous operation.
It has three states:
    1.Pending ⏳ – Operation is still happening.
    2.Fulfilled ✅ – Operation completed successfully.
    3.Rejected ❌ – Operation failed.
*/

// ✅ Example1
let promise = new Promise((resolve, reject) => {
  // async task
  let success = true;
  if (success) {
    resolve("✅ Task done!");
  } else {
    reject("❌ Task failed!");
  }
});
promise
  .then((result) => {
    console.log(result); // if resolved ➡️ "✅ Task done!"
  })
  .catch((error) => {
    console.log(error); // if rejected ➡️ "❌ Task failed!"
  });

// ✅ Example2
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      //   let success = false;
      if (success) {
        resolve("Data fetched successfully"); // Pass result to .then()
      } else {
        reject("Error fecthing data"); // Pass error to .catch()
      }
    }, 3000);
  });
}
// let response = fetchData();
// console.log(response);
fetchData()
  .then((data) => {
    console.log(data); // ➡️ "Data fetched successfully" after 3 seconds
    // return data.toLowerCase();
    return `Anand Kumar`; // This value is passed to the next .then()
  })
  .then((value) => {
    console.log(value); // ➡️ "Anand Kumar"
  })
  .catch((error) => {
    console.error(error); // Catches any error if reject() is called
  });
/*
🔧How Promise Chain Works:
    fetchData() is called and returns a Promise.
    After 3 seconds, resolve() is called ➡️ goes to .then(data).
    data prints "Data fetched successfully".
    That .then() returns "Anand Kumar" ➡️ passed to next .then().
    Second .then() logs "Anand Kumar".
    If success was false, it would go directly to .catch() and log the error.

📌 Key Learning Points:
✅ Promises are useful for async tasks (like API calls).
✅ .then() chains multiple actions.
✅ .catch() handles any failure in the promise chain.
*/
