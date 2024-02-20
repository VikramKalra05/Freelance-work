const express = require("express");
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.post("/create", createProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = {
    productRouter
}