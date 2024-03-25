const express = require("express");
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { adminCheck } = require("../middleware/adminCheck.middleware");
const { auth } = require("../middleware/auth.middleware");

const productRouter = express.Router();

productRouter.get("/", auth, getAllProducts);
productRouter.get("/:id", auth, getProduct);
productRouter.post("/create", adminCheck, createProduct);
productRouter.patch("/update/:id", adminCheck, updateProduct);
productRouter.delete("/delete/:id", adminCheck, deleteProduct);

module.exports = {
    productRouter
}