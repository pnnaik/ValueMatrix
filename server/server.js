
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");


const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
 
// Connect to MongoDB (once)
connectDB();

const studentRoute = require("./routes/student.js");


app.use("/api", studentRoute);

// -------------------
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 