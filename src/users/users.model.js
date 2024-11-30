const mongoose = require("mongoose"); // import mongo DB
const Schema = mongoose.Schema; // init Schema

// make a new schema to database
const usersSchema = new Schema(
  {
    name: String, // name
    email: String, // email
    age: Number, // age
  },
  { timestamps: true } // to save a time of create user and update it as "create at: {time}, update at: {time}"
);

// make a user model and this model in users table
const usersModel = mongoose.model("users", usersSchema);

// export model to make requests in it
module.exports = usersModel;
