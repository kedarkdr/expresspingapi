var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var fs = require("fs");

var indexRouter = require("./routes/index");
var pingRouter = require("./routes/ping");

require("dotenv").config();
//var path = require("path");

//var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });

var app = express();

//app.use(morgan(":method :url :response-time ms", { stream: accessLogStream }));

// view engine setup
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "pug");

//app.use(morgan(":method :url :response-time ms"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/ping", pingRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(`error = ${err.message}`);
  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
