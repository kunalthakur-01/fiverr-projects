const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  imageUrl: {
    type: String,
  },
  // userProducts: [
  //   {
  //     prodId: {
  //       type: Schema.Types.ObjectId,
  //       // required: true,
  //       ref: "Product",
  //     },
  //   },
  // ],
  userProducts: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("User", userSchema);

// const mongoDb = require('mongodb');

// const getDb = require('../util/database').getDb;

// class User {
//     constructor(name, email, password, phone, imgUrl) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.phone = phone;
//         this.imgUrl = imgUrl || null;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('users')
//         .insertOne(this)
//         .then(res => res)
//         .catch(err => err);
//     }

//     static Login(email, password) {
//         const db = getDb();
//         return db.collection('users')
//             .findOne({ email: email, password: password })
//             .then(res => res)
//             .catch(err => err);
//     }
// };

// exports.User = User;
