const AppError = require("../utils/appError");
const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
exports.getAllUsers = catchAsync(async (req, res, next) => {
  let query = {};
  if (req.query.role) {
    query.role = req.query.role;
  }
  const users = await User.find(query);
  res.status(200).json({
    status: "success",
    total: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return next(new AppError(404, "no user found"));
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
