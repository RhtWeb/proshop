import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; //NTS use .js ext

dotenv.config();

// dotenv.config({ path: ""});
const port = process.env.PORT || 5000

const app = express();

import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

app.use("/api/product", productRoutes);

app.use(notFound);
app.use(errorHandler);

// connectDB();


app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));