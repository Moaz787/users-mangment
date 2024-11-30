const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
//routes
const userRoutes = require("./src/users/users.route");
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5050;

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  app.get("/", (req, res) => {
    res.send("hello");
  });
}

main()
  .then(() => console.log("connect successfully to database"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
