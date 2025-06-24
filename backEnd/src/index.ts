import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoutes.js";
import { seedInitialProducts } from "./services/productService.js";
import cartRoute from "./routes/cartRoute.js";
import cors from 'cors';



import dotenv from 'dotenv';

dotenv.config();



const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors())

mongoose
  .connect(process.env.Database_URL || '')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.log("MongoDB connection error:", err));


//seed the products to database
seedInitialProducts();

app.use('/api/user' ,userRoute)
app.use('/api/product' ,productRoute)
app.use('/api/cart' ,cartRoute)

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
);