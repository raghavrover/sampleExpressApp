// // Import required modules
// import express from "express";

// // Create an Express application
// const app = express();
// const port = 5050; // You can choose any available port

// // Define the first GET API
// app.get("/api/hello", (req, res) => {
//   res.send("Hello, this is the first API!");
// });

// // Define the second GET API
// app.get("/api/greet", (req, res) => {
//   res.send("Greetings from the second API!");
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import dotenv from "dotenv";
import connectDB from "./src/db/connectDB.js";
import app from "./src/app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

const initiateTheServer = async () => {
  try {
    const connection = await connectDB();
    // console.log(connection);
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log("MongoDB Server connection failed", error);
  }
};

initiateTheServer();
