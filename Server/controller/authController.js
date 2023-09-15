const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const filterObject = require("../utils/filterObject");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const signJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPRIES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const userData = filterObject(
    req.body,
    "email",
    "firstName",
    "lastName",
    "middleName",
    "password",
    "confirmPassword"
  );
  const user = await User.create(userData);
  if (!user) {
    return next(new AppError(500, "something went wrong, please try again"));
  }

  const token = signJWT(user.id);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(
      new AppError(400, "both email and password is required to login")
    );
  const user = await User.findOne({ email }).select("+password");
  const validPassword = user
    ? await user.checkPassword(password, user.password)
    : false;
  if (!validPassword || !user) {
    return next(new AppError(401, "email or password is incorrect"));
  }
  const token = signJWT(user.id);
  res.status(200).json({
    statu: "success",
    token,
    data: {
      user,
    },
  });
});

exports.updateMyPassword = catchAsync(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    message: "successfully changed password",
  });
});
exports.protect = catchAsync(async (req, res, next) => {
  //checking token if it exists and getting it from the http header
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new AppError(
        401,
        "you are not logged in, please login to use this feature"
      )
    );
  }
  //verifying the token
  let data;
  try {
    data = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (err) {
    if (err.name === "JsonWebTokenError")
      next(new AppError(401, "invalid token, please login again"));
    if (err.name === "TokenExpiredError")
      next(new AppError(401, "token expired, please login again"));
  }
  //checking if the user exists
  const user = await User.findById(data.id);
  if (!user) {
    next(new AppError(404, "user with that token no longer exists"));
  }
  //checking if the user has changed the password after the token was issued
  if (user.passwordChangedAfter(data.iat)) {
    next(new AppError(404, "password was changed, please login again"));
  }

  //grant access to protected route
  req.user = user;

  next();
});
