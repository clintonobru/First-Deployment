require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("./middleware/logger");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB Connected")
  } catch (err) {
    console.log("Connection Error:", err.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send ("welcome to OTS");
});

const studentRoutes = require("./routes/student");
app.use("/student", studentRoutes)

const userRoutes = require("./routes/user2");
app.use("/user", userRoutes)

app.listen (PORT, () => {
 console.log(`App running on port ${PORT}`);
});
