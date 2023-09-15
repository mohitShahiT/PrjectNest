const express = require("express");
const morgan = require("morgan");
const userRouter = require("./router/userRoute");
const errorController = require("./controller/errorController");
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "50kb" }));

app.use((req, res, next) => {
  next();
});

app.use("/api/v1/user", userRouter);

//if no route is defined req, res object reaches here
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `the route ${req.originalUrl} is not defined on this server`,
  });
});
//if error
app.use(errorController);
module.exports = app;
