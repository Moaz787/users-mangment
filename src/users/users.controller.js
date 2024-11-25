const usersModel = require("./users.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user get failed" });
  }
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await usersModel.findById(id);
    if (!user) res.status(404).send({ message: "this user is'n found" });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user get failed" });
  }
};

const postUser = async (req, res) => {
  try {
    const newUser = await usersModel({ ...req.body });
    await newUser.save();
    res
      .status(200)
      .send({ message: "user posted successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user posted failed" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const newUser = await usersModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!newUser) res.status(404).send({ message: "this user is'n found" });
    res.status(200).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user update failed" });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await usersModel.findByIdAndDelete(id);
    if (!user) res.status(404).send({ message: "this user is'n found" });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "user delete failed" });
  }
};

module.exports = {
  postUser,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
};
