// Importing required built-in modules
const http = require("http"); // To create HTTP server
const fs = require("fs"); // To interact with file system (read files)
const path = require("path"); // To handle file and directory paths

// Set the port number the server will listen on
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Build the full file path based on the request URL
  // If the user visits "/", load "index.html", else load the requested file
  const filepath = path.join(
    __dirname, // Current directory
    req.url === "/" ? "index.html" : req.url // If root, serve index.html, else serve requested URL
  );

  // Get the file extension and convert it to lowercase
  const extName = String(path.extname(filepath)).toLowerCase();
  console.log(filepath); // Log the file path being requested

  // Define supported MIME types for different file extensions
  const mineTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/image",
  };

  // Get the correct content type or fallback to "application/octet-stream"
  const contentType = mineTypes[extName] || "application/octet-stream";

  // Read the requested file from the file system
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found ");
      } else {
        // Some other server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // File found, serve with correct content type
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Start the server and listen on the defined port
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
