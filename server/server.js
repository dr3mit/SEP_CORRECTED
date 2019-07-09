const express = require("express");
const app = express();
const PORT = 3000;
const volleyball = require("volleyball");
const path = require("path");
const timeConverter = milliseconds => {
  let seconds = milliseconds / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  const days = hours / 24;
  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${String(days).slice(0, 5)} days. ${String(hours).slice(
    0,
    5
  )} hours ${String(minutes).slice(0, 5)} minutes and ${String(seconds).slice(
    0,
    5
  )} seconds`;
};
const firstRunDate = 1562102418960; //milliseconds

app.use(express.json());
app.use(volleyball);
app.use(express.static(path.join(__dirname, "..", "node_modules")));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("../api"));

app.use("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.get("/", (req, res) =>
  res.send(
    `App is running but index.html did not post! \n ${timeConverter(
      Date.now() - firstRunDate
    )} seconds since first running.`
  )
);

module.exports = { app, PORT };
