import express from "express";
import dotenv from "dotenv";

// dotenv.config({ path: ""});
dotenv.config();
const port = process.env.PORT || 5000

const app = express();

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));