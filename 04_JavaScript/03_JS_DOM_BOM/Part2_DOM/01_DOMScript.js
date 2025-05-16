// alert("connected");

/*
let hold = document.getElementById("changeTextButton"); //Find the HTML element with ID changeTextButton, and store it in the variable hold
console.log(hold); // Logs the button element

// Regular function: this refers to the element that triggered the event
hold.addEventListener("click", function () {
  console.log(this); // Logs the element that was clicked

});

// Arrow function: In an arrow function, this does not refer to the element that triggered the event.
hold.addEventListener("click", () => {
  console.log(this); // refers to the outer scope (often window) global scope
});
*/

// Example 1: Accessing DOM Elements
document.getElementById("changeTextButton");
addEventListener("click", function () {
  let paragraph = document.getElementById("myParagraph");
  // console.log(paragraph);
  paragraph.textContent = "The paragraph is changed";
});
/* 
🧠 Explanation:
    🔹 document.getElementById("changeTextButton")
    ➡️ Finds the button with the ID changeTextButton.

    🔹 .addEventListener("click", function () { ... })
    ➡️ Attaches a click event listener to that button.

    ➡️ When the button is clicked, it will run the code inside the function.

    🔹 let paragraph = document.getElementById("myParagraph");
    ➡️ Selects the paragraph element that you want to change.

    ➡️ Stores it in the paragraph variable.

    🔹 paragraph.textContent = "The paragraph is changed";
    ➡️ Changes the text inside the paragraph to "The paragraph is changed".
*/

// Example 2: Traversing the DOM
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });
/*
🧠 Explanation:
    ➡️ Finds the button by its ID.
    🔹 .addEventListener("click", function() {...})

    ➡️ Adds a click listener to the button. When clicked, it runs the code inside the function.
    🔹 let cityList = document.getElementById("citiesList");

    ➡️ Gets the <ul> or <ol> list containing city names.
    🔹 cityList.firstElementChild.classList.add("highlight");

    ➡️ firstElementChild selects the first <li> inside the list.
    ➡️ classList.add("highlight") adds a CSS class named "highlight" to that <li>

*/

// Example 3: Manipulating DOM Elements
// ➡️ Step 1: Select the button with ID "changeOrder" and attach a click event listener to it
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType"); // ➡️ Step 2: Inside the event function, select the element with ID "coffeeType"
  coffeeType.textContent = "Espresso"; // ➡️ Step 3: Change the text inside the coffeeType element to "Espresso"
  coffeeType.style.backgroundColor = "brown"; // ➡️ Step 4: Set the background color of the coffeeType element to brown
  coffeeType.style.padding = "10px"; // ➡️ Step 5: Add 10px padding around the text inside the coffeeType element
});

// Example 4: Creating and Inserting Elements
// Add a click event listener to the element with id "addNewItem"
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li"); // Create a new <li> element
  newItem.textContent = "Eggs"; // Set the text content of the new <li> to "Eggs"
  document.getElementById("shoppingList").appendChild(newItem); // Append the new <li> to the element with id "shoppingList"
});

// Example 5: Removing DOM Elements
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList"); // Gets the element with the ID "taskList" (which is the list of tasks)
    taskList.lastElementChild.remove(); // Removes the last child (last <li> item) from the task list
  });

// Example 6: Event Handling in the DOM
document
  .getElementById("clickMeButton")
  // .addEventListener("click", function () { // This listens for a single mouse click
  // .addEventListener("mouseover", () => { // This listens for when the mouse hovers over the button
  .addEventListener("dblclick", function () {
    // This line listens for a **double click** (dblclick) on the button:
    alert("Hello Anand !");
  });

// Example 7: Event Delegation
document.getElementById("teaList").addEventListener("click", function (event) {
  // Check if the clicked (target) element exists AND has the class "teaItem"
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent); // Show an alert with the text of the clicked item
  }
});

// Example 8: Form Handling
document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault(); // ⛔ Prevents the page from reloading (default form behavior)
  let feedback = document.getElementById("feedbackInput").value; // 🔍 Gets the value typed by the user in the input field
  document.getElementById(
    "feedbackDisplay"
  ).textContent = `Feedback is: ${feedback}`; // 🖊️ Displays the feedback message in the element
});

// Example 9: DOM Content Loaded
// Wait until the entire DOM (HTML structure) is fully loaded and ready
document.addEventListener("DOMContentLoaded", () => {
  // Once the DOM is ready, change the text of the element
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// Example 10: CSS Classes Manipulation
document.getElementById("toggleHighlight").addEventListener("click", () => {
  let descriptionText = document.getElementById("descriptionText");
  descriptionText.classList.add("highlight");
});
