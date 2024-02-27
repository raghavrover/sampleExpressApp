import express from "express";
import { userRouter } from "./routers/user.router.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ limit: "16kb" }));

app.use("/api/v1/users", userRouter);
app.get("/api/v1/test", (req, res) => {
  res.status(200).json({
    message: "Server is running and responding to requests as well",
  });
});

// Middleware to define common error handling
app.use((err, req, res, next) => {
  // Log the error for debugging
  // console.error(err.stack, ": Error ocurred");

  // Choose an appropriate HTTP status code based on the error type
  let statusCode = 500; // Internal Server Error by default
  if (err.name === "ValidationError") {
    statusCode = 400; // Bad Request for validation errors
  } else if (err.name === "UnauthorizedError") {
    statusCode = 401; // Unauthorized for authentication errors
  } else if (err.name === "ForbiddenError") {
    statusCode = 403; // Forbidden for authorization errors
  } else if (err.name === "NotFoundError") {
    statusCode = 404; // Not Found for resource not found errors
  }

  // Create an error response object with a clear message and details
  const errorResponse = {
    message: "Something went wrong.", // Customize for specific errors
    details: err.message || "An unexpected error occurred.", // Provide more details if appropriate
  };

  // Send the error response
  res.status(statusCode).json(errorResponse);
});

export default app;
