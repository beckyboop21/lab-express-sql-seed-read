const express = require("express");
const cors = require("cors");


// Configure
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("/not-found", (req, res) => {
  res.status(404).json({ error: "page does not exist" });
});

app.get("*", (req, res) => {
  res.redirect("/not-found");
});

// Export
module.exports = app;