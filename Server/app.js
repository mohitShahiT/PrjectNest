const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.status(500).json({
    status: "fail",
    message: "This api is under development",
  });
});
module.exports = app;
