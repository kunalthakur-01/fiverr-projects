const express = require("express");
const Router = express.Router();
const productController = require("../controllers/productRouteController");
const fileUpload = require('../middleware/multiple-file-upload');
const checkAuth = require('../middleware/check-auth');

Router.get("/", productController.getAllProducts);

Router.get("/:pid", productController.getSingleProduct);

Router.use(checkAuth);

Router.post("/:uid", fileUpload.array('images', 5),  productController.addUserProduct);

Router.patch("/:pid", productController.updateUserProduct);

Router.delete("/", fileUpload.array('images', 5),  productController.deleteUserProduct);

module.exports = Router;
