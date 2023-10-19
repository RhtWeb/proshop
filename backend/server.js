import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"; //NTS use .js ext

dotenv.config();

// dotenv.config({ path: ""});
const port = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


import authRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

app.use("/api/users", authRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

connectDB();


app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));