console.log("Hello from script");
console.log(window);

// 1. ✅ alert() – Show a popup message
// window.alert("Hello, Anand!"); //is the same as below
// alert("Hello, Anand!"); //(Because alert is a method of the window object.)

// 2. 🌍 location – URL info and navigation
console.log(location.href); // Show current page URL
// location.href = "https://www.google.com"; // Redirect to another website
console.log(location.hostname);  // www.example.com
console.log(location.pathname);  // /about.html
console.log(location.protocol);  // https:

// 3. 🧑‍💻 navigator – Info about the browser and device
console.log(navigator.userAgent);       // Info about browser and OS
console.log(navigator.language);        // en-US or en-IN
console.log(navigator.onLine);          // true (if connected)




