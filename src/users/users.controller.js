const usersModel = require("./users.model"); // import users model

// make a GET request for all users in users table
const getAllUsers = async (req, res) => {
  // try and catch block of code to handel errors
  try {
    const users = await usersModel.find(); // get users
    res.status(200).json(users); // send it as response
  } catch (error) {
    // there is an error found when trying to get users
    console.error(error); // print the error in the console
    res.status(500).json({ message: "user get failed" }); // send the error as "user get failed"
  }
};

// make a GET request for one user using his id
const getOneUser = async (req, res) => {
  const id = req.params.id; // get his id form url
  // try and catch block of code to handel errors
  try {
    const user = await usersModel.findById(id); // get user using his id
    if (!user) res.status(404).send({ message: "this user is'n found" }); // if this user id not found do this line
    res.status(200).json(user); // if user found send his data as response
  } catch (error) {
    // there is an error found when trying to get user
    console.error(error); // print error in the console
    res.status(500).json({ message: "user get failed" }); // send the error as "user get failed"
  }
};

// make a POST request to add user to database
const postUser = async (req, res) => {
  // try and catch block of code to handel errors
  try {
    const newUser = await usersModel({ ...req.body }); // make a new user and take a parameters form body parameters
    await newUser.save(); // save a user to database
    res
      .status(200)
      .json({ message: "user posted successfully", user: newUser }); // send have posted user data already
  } catch (error) {
    // there is an error found when trying to make a new user
    console.error(error); // print an error in the console
    res.status(500).json({ message: "user posted failed" }); // send the error as "user posted failed"
  }
};

// make a PUT request to update an existing user
const updateUser = async (req, res) => {
  const id = req.params.id; // // get his id form url
  // try and catch block of code to handel errors
  try {
    const newUser = await usersModel.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // find a user using id to update it user body parameters
    if (!newUser) res.status(404).send({ message: "this user is'n found" }); // if the user id not found do this line
    res.status(200).json(newUser); // send an updated user information as response
  } catch (error) {
    // there is an error found when trying to update user
    console.error(error); // print the error in the console
    res.status(500).json({ message: "user update failed" }); // send the error as "user update failed"
  }
};

// make a DELETE request to delete user
const deleteUser = async (req, res) => {
  const id = req.params.id; // git his id form url
  // try and catch block of code to handel errors
  try {
    const user = await usersModel.findByIdAndDelete(id); // find user using his id and delete it
    if (!user) res.status(404).send({ message: "this user is'n found" }); // if user id not found do this cod
    res.status(200).json(user); // send a deleted user data
  } catch (error) {
    // there is an error when trying to delete user
    console.error(error); // print the error in the console
    res.status(500).json({ message: "user delete failed" }); // send the error as "user delete failed"
  }
};

// export all request controllers to user route
module.exports = {
  postUser, // post request
  getAllUsers, // get request(all users)
  getOneUser, // get request(one users)
  deleteUser, // delete request
  updateUser, // put request
};
