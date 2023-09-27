import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({});
  return res.status(200).json(products);
});



// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
  if(product){
    return res.status(200).json(product);
  }
  res.status(404);
  throw new Error("Resourse not found");
});



// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async(req, res) => {

  // Note: The create() function fires save() hooks.
  // const product = await Product.create(req?.body);

  const productObj = new Product(req?.body);
  const product = await productObj.save();

  res.status(201).json(product);
});


// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async(req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if(product){
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    // Saves this document by inserting a new document into the database if document.isNew is true, or sends an updateOne operation with just the modified paths if isNew is false.
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  }else{
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, createProduct, updateProduct };