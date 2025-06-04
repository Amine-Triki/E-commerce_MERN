import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3001;
mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error:", err));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
