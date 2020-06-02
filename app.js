const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const checkRouter = require("./routes/check");
const indexRouter = require("./routes/index");
const getCarsRouter = require("./routes/getCars");
const enterCarRouter = require("./routes/enterCar");
const exitCarsRouter = require("./routes/exitCar");
const payFeeRouter = require("./routes/payFee");
const searchRouter = require("./routes/search");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/check", checkRouter);
app.use("/index", indexRouter);
app.use("/getCars", getCarsRouter);
app.use("/enterCar", enterCarRouter);
app.use("/exitCar", exitCarsRouter);
app.use("/payFee", payFeeRouter);
app.use("/search", searchRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
