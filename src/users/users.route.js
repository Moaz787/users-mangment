const express = require("express");
const {
  postUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("./users.controller");
const router = express.Router();

// post request
router.post("/createUser", postUser);
router.get("/allUsers", getAllUsers);
router.get("/oneUser/:id", getOneUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
