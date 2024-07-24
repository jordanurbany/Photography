const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
