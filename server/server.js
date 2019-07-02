const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.send(
    `App is running! \n ${(Date.now() - 1562102418960) /
      1000} seconds since first running.`
  )
);

module.exports = { app, PORT };
