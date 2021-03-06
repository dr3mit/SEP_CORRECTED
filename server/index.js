const express = require("express");
const chalk = require("chalk");
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
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", require("./api"));

app.use("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.get("/", (req, res) =>
  res.send(` ${timeConverter(Date.now() - firstRunDate)} since first running.`)
);

app.listen(PORT, () => {
  console.log(
    chalk.cyan(
      ` ${timeConverter(Date.now() - firstRunDate)} since first running.`
    ),
    chalk.greenBright("\n", "Application started on port: "),

    chalk.yellow(PORT),
    "\n"
  );
});
