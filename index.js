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
let isConnected;

async function connectToDatabase() {
  if (isConnected) {
    console.log("=> Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("=> Connected to database");
  } catch (err) {
    console.error("Database connection failed:", err);
    throw err;
  }
}

async function main() {
  await connectToDatabase();
  app.get("/", (req, res) => {
    res.send("hello");
  });

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
}

main()
  .then(() => console.log("connect successfully to database"))
  .catch((err) => console.log(err));
