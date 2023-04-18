const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const productCounts = await Product.countDocuments();
  const resultPerPage = 10;
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apiFeatures.query;
  const filteredProductsCount = await products.length;

  res.status(200).json({
    success: true,
    productCounts,
    resultPerPage,
    filteredProductsCount,
    products,
  });
});

//update product --admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});
