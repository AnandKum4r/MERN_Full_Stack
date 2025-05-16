// Wait for the DOM (HTML content) to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the input field, add button, and the list container from the DOM
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  // Load tasks from local storage or initialize with an empty array
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render all previously saved tasks to the UI
  tasks.forEach((task) => renderTasks(task));

  // When the "Add Task" button is clicked
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); // Get the input value and remove extra spaces
    if (taskText === "") return; // If input is empty, don't add anything

    // Create a new task object with a unique ID and default completed state
    const newTask = {
      id: Date.now(), // Unique timestamp ID
      text: taskText, // Task content
      completed: false, // Not completed initially
    };

    tasks.push(newTask); // Add the new task to the tasks array
    saveTasks(); // Save updated tasks to local storage
    renderTasks(newTask); // Render the new task in the UI
    todoInput.value = ""; // Clear the input field
    console.log(tasks); // Log current task list for debugging
  });

  function renderTasks(task) {
    const li = document.createElement("li"); // Create a new list item element for the task
    li.setAttribute("data-id", task.id); // Set a custom attribute to store task ID for identification

    if (task.completed) li.classList.add("Completed"); // If the task is marked completed, apply a CSS class for styling

    // Add task text and a delete button inside the list item
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;

    // Toggle completion when clicking on the task (not the delete button)
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return; // Don't toggle if delete clicked

      task.completed = !task.completed; // Flip completion status
      li.classList.toggle("completed"); // Toggle CSS class
      saveTasks(); // Save changes
    });

    // Delete the task when delete button is clicked
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle from running
      tasks = tasks.filter((t) => t.id !== task.id); // Remove task from array
      li.remove(); // Remove from UI
      saveTasks(); // Save changes
    });

    // Finally, add the list item to the to-do list
    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save as string
  }
});
