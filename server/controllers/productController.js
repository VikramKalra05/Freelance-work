const { ProductModel } = require("../models/productModel")

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send({"products": products});
    } catch (error) {
        res.status(400).send({"err": error})
    }
} 

const getProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findOne({_id: id});
        if(product){
            res.status(200).send({"product": product});
        }else{
            res.status(200).send({"msg": "No product found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
} 

const createProduct = async (req, res) => {
    const {title, description, price, type} = req.body;
    try {
        const product = new ProductModel({title, description, price, type});
        await product.save();
        res.status(201).send({"product": product, success: true});
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const updateProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findByIdAndUpdate({_id: id}, req.body);
        if(product){
            res.status(200).send({"msg": "Product has been updated", success: true});
        }else{
            res.status(200).send({"msg": "No product found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await ProductModel.findByIdAndDelete({_id: id});
        if(product){
            res.status(200).send({"msg": "Product has been deleted", success: true});
        }else{
            res.status(200).send({"msg": "No product found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}