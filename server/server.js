const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("app is running"));

module.exports = { app, PORT };
