require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const questionRoutes = require("./routes/questionRoutes");
const authRoutes = require("./routes/authRoutes");
const resultRoutes = require("./routes/resultRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");

const app = express();
app.use(cors({
  origin: "*"
}));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB connect
connectDB();

// Routes
app.use("/", questionRoutes);
app.use("/", authRoutes);
app.use("/", resultRoutes);
app.use("/", googleAuthRoutes);

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
