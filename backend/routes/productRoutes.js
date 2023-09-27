import express from "express";
import { createProduct, getProductById, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/")
  .get(getProducts)
  .post(createProduct);

router.route("/:id")
  .get(getProductById)
  .put(updateProduct);

export default router;