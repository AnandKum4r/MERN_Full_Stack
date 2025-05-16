// Import the 'fs' module to work with the file system
const fs = require("fs");

// Define the file path to store tasks
const filePath = "./tasks.json";

// Load tasks from the JSON file
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath); // Read raw binary data
    const dataJSON = dataBuffer.toString(); // Convert buffer to string
    return JSON.parse(dataJSON); // Parse JSON string to object (array)
  } catch (error) {
    return []; // If file doesn't exist or invalid JSON, return empty array
  }
};

// Save tasks to the JSON file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); // Convert tasks array to JSON string
  fs.writeFileSync(filePath, dataJSON); // Write to file
};

// Add a new task
const addTask = (task) => {
  const tasks = loadTasks(); // Load existing tasks
  tasks.push({ task }); // Add new task object
  saveTasks(tasks); // Save updated list
  console.log("Task added:", task); // Confirm addition
};

// List all tasks
const listTasks = () => {
  const tasks = loadTasks(); // Load tasks
  tasks.forEach(
    (task, index) => console.log(`${index + 1} - ${task.task}`) // Print task with index
  );
};

// Let's define it here:
const removeTask = (index) => {
  const tasks = loadTasks();
  if (index > 0 && index <= tasks.length) {
    const removed = tasks.splice(index - 1, 1); // Remove task at given index
    saveTasks(tasks); // Save updated list
    console.log("Task removed:", removed[0].task);
  } else {
    console.log("Invalid task index.");
  }
};

// Read command-line arguments
const command = process.argv[2]; // e.g., 'add', 'list', 'remove'
const argument = process.argv[3]; // e.g., the task string or index number

// Handle different commands
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument)); // Convert string to number for index
} else {
  console.log("Command not found!");
}
