const express = require("express"); // import express
const {
  postUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("./users.controller"); // import all controllers request
const router = express.Router(); // init routes

router.post("/createUser", postUser); // post a new user
router.get("/allUsers", getAllUsers); // get all users
router.get("/oneUser/:id", getOneUser); // get one user
router.delete("/deleteUser/:id", deleteUser); // delete user
router.put("/updateUser/:id", updateUser); // update an existing user

// export all routes
module.exports = router;
