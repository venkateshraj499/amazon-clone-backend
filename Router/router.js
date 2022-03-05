const express = require("express");

const route = express.Router();

const categoriesController = require("../Controller/categories");
const productController = require("../Controller/products");
const offersController = require("../Controller/offers");

route.get("/categories", categoriesController.getCategories);
route.get("/products", productController.getAllProducts);
route.get("/products/:category", productController.getProductByCategory);
route.get("/products/:category/:sub", productController.getProductBySub);
route.get("/product/:productId", productController.getProductById);
route.get("/carousel", offersController.getCarousel);
route.get("/boxes", offersController.getNonCarousel);
route.post("/filter", productController.productFilter);

module.exports = route;
