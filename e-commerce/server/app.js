const express = require("express");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);

const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");
const cartRoute = require("./routes/cartRoutes");
const productRoute = require("./routes/productRoutes");

const MONGODB_URI =
  "mongodb+srv://kunal-thakur:kunal25@cluster0.bfzhgmk.mongodb.net/e-commerce?retryWrites=true&w=majority";

const app = express();

const sessionStore = new mongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(
  "/uploads/user-image",
  express.static(path.join("uploads", "user-image"))
);

app.use(
  "/uploads/product-images",
  express.static(path.join("uploads", "product-images"))
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-width, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/auth/", userRoute);

app.use("/api/cart/", cartRoute);

app.use("/api/products", productRoute);

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  if (req.files && req.files.length) {
    for (let file of req.files) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }

  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
