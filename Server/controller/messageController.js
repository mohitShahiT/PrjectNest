const Message = require("../model/messageModel");
const catchAsync = require("../utils/catchAsync");

exports.sendMessage = catchAsync(async (req, res, next) => {
  const messageData = req.body;
  res.status(200).json({
    status: "success",
    data: { data: messageData },
  });
});
