const Project = require("../model/projectModel");
const Room = require("../model/roomModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getRooms = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "project not found"));
  const roomsPromises = project.rooms.map(async (room) => {
    return await Room.findById(room);
  });
  const rooms = await Promise.all(roomsPromises);
  res.status(200).json({
    status: "success",
    data: {
      rooms,
    },
  });
});
