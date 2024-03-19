const HttpError = require("../models/httpErrorModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const mongoose = require("mongoose");
const fs = require("fs");

exports.getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    const error = new HttpError("Something went wrong, try again later", 500);
    return next(error);
  }

  if (!products || !products.length) {
    const error = new HttpError("No products found", 404);
    return next(error);
  }

  res.status(200).json({ products });
};

exports.getSingleProduct = async (req, res, next) => {
  const pid = req.params.pid;
  let existingProduct;

  try {
    existingProduct = await Product.findById(pid);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Wrong product id, check it again", 400);
    return next(error);
  }

  if (!existingProduct) {
    const error = new HttpError("product not found!", 404);
    return next(error);
  }

  res.status(200).json({ product: existingProduct });
  // res.status(200).json({product: existingProduct.toObject({ getters: true })});
};

exports.addUserProduct = async (req, res, next) => {
  const { name, mrp, price, category, brand, madeIn } = req.body;
  const userId = req.params.uid;
  let existingUser;

  try {
    existingUser = await User.findById({ _id: userId });
  } catch (err) {
    const error = new HttpError("Something went wrong!", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("No account exist", 401);
    return next(error);
  }

  if (existingUser.id !== req.user.userId) {
    const error = new HttpError("Your are not allowed to add the product", 401);
    return next(error);
  }

  const files = req.files.map((file) => {
    return file.path;
  });

  const newProduct = new Product({
    name,
    mrp,
    price,
    category,
    brand,
    madeIn,
    images: files,
    creator: userId,
  });

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newProduct.save({ session: sess });
    existingUser.userProducts.push(newProduct._id);
    await existingUser.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Adding product failed", 500);
    return next(error);
  }

  res.status(201).json({ message: "Product Added" });
};

exports.updateUserProduct = async (req, res, next) => {
  const { name, mrp, price, category, brand } = req.body;
  const pid = req.params.pid;
  let existingProduct;

  try {
    existingProduct = await Product.findByIdAndUpdate(pid, {
      name,
      mrp,
      price,
      category,
      brand,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong!", 500);
    return next(error);
  }

  if (!existingProduct) {
    const error = new HttpError("product not found!", 404);
    return next(error);
  }

  res.status(200).json({ message: "updated successfully" });
  // res.status(200).json({product: existingProduct.toObject({ getters: true })});
};

exports.deleteUserProduct = async (req, res, next) => {
  const { userId, prodId } = req.body;
  let product;

  try {
    product = await Product.findById(prodId).populate("creator");
  } catch (err) {
    console.log(err);
    const error = new HttpError("Something went wrong!", 500);
    return next(error);
  }

  if (!product) {
    const error = new HttpError("product not found", 404);
    return next(error);
  }

  let prodImages = product.images;

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await product.remove({ session: sess });
    await product.creator.userProducts.pull(product);
    await product.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Deleting product failed", 500);
    return next(error);
  }

  for (let image of prodImages) {
    fs.unlink(image, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  res.status(201).json({ message: "Product Deleted" });
};
