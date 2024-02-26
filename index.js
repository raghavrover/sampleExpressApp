// Import required modules
const express = require("express");

// Create an Express application
const app = express();
const port = 3000; // You can choose any available port

// Define the first GET API
app.get("/api/hello", (req, res) => {
  res.send("Hello, this is the first API!");
});

// Define the second GET API
app.get("/api/greet", (req, res) => {
  res.send("Greetings from the second API!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
