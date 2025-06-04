import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.log("MongoDB connection error:", err));


  app.use('/api/user' ,userRoute)

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
);