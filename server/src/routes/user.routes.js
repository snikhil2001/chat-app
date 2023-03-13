const express = require("express");
const { registerUser } = require("../controllers/useControllers");

const app = express.Router();

app.post("/", registerUser);
// app.post("/login", authUser);

module.exports = app;
