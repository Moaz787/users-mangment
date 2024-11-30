const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose
const cors = require("cors"); // import cors
const dotenv = require("dotenv"); // import dot env
const app = express(); // init express

// init dotenv
dotenv.config();

app.use(express.json()); // responses as json
app.use(cors()); // init cors

//routes
const userRoutes = require("./src/users/users.route"); // import user routes
app.use("/api/users", userRoutes); // access to user routes as src "api/users/{route}"

const port = process.env.PORT || 5050; // import port fom file ".env"

// connect server to database(mongo DB)
async function main() {
  await mongoose.connect(process.env.MONGODB_URL); // take some time to connect to database(mongo DB)
  // when connect make a get request
  app.get("/", (req, res) => {
    res.send("hello");
  });
}

// test of connection of database if successfully or no
main()
  .then(() => console.log("connect successfully to database")) // if connection is success do this line
  .catch((err) => console.log(err)); // if connection is unsuccess do this line

// server list to port 5050 as src: http://localhost:5050/api/users/{routes}
app.listen(port, () => {
  console.log(`http://localhost:${port}`); // when server listen to port 5050 do this line
});
