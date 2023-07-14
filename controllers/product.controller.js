const db = require("../models");

// Create main model
const Product = db.products;

// create product
const addProduct = async (req, res) => {
  const { title, description, price, published } = req.body;
  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      message: "Product created",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to created the product",
      error: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["title", "price"],
    });

    return res.status(200).json({
      message: "success",
      products,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch the product",
      error: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });

    return res.status(200).json({
      message: "success",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to fetch the product",
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    return res.status(200).json({
      message: "product updates",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update the product",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.destroy({ where: { id: req.params.id } });

    return res.status(200).json({
      message: "product deleted",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete the product",
      error: error.message,
    });
  }
};

const publishedProducts = async (req, res) => {
    try {
      const product = await Product.findAll({ where: { published: true } });
  
      return res.status(200).json({
        message: "product success",
        product,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Failed to fetch the products",
        error: error.message,
      });
    }
  };

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  publishedProducts
};
