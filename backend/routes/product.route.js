const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/product.controller");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/admin/product/new").post(createProduct);

module.exports = router;
