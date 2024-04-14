import dotenv from "dotenv";
import connectDB from "./src/db/connectDB.js";
import app from "./src/app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;
console.log("Port from the env vars", process.env.PORT);
console.log(
  "MongoDB connection string from the env vars",
  process.env.MONGODB_URI
);

const initiateTheServer = async () => {
  try {
    // const connection = await connectDB();
    // console.log(connection);
    app.listen(port, () => console.log(`Server is running on ${port}`));
  } catch (error) {
    console.log("MongoDB Server connection failed", error);
  }
};

initiateTheServer();
