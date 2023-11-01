const AppError = require("../utils/appError");
const User = require("../model/userModel");
const catchAsync = require("../utils/catchAsync");
exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(500).json({
    status: "success",
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
