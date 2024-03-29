import express from "express";
import { createProduct, createProductReview, deleteProduct, getProductById, getProducts, getTopProducts, updateProduct } from "../controllers/productController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route('/top').get(getTopProducts);

router.route("/")
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

router.route('/:id/reviews').post(protect, createProductReview);

export default router;