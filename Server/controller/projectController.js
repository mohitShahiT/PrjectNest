const Project = require("../model/projectModel");
const User = require("../model/userModel");
const Room = require("../model/roomModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const filterObject = require("../utils/filterObject");

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    data: {
      total: projects.length,
      projects,
    },
  });
});
exports.addProject = catchAsync(async (req, res, next) => {
  const projectData = filterObject(req.body, "name", "supervisor", "members");
  if (projectData.supervisor) {
    const supervisor = await User.findById(projectData.supervisor);
    if (!supervisor) return next(new AppError(400, "supervisor doesnot exist"));
    if (supervisor.role !== "supervisor")
      return next(new AppError(406, "not a supervisor"));
  }
  const projct = await Project.create(projectData);

  res.status(203).json({
    status: "test",
    data: {
      data: projct,
    },
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "project not found"));
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(400, "no project with that id"));
  const deleteRoomsPromises = project.rooms.map(async (room) => {
    return await Room.findByIdAndDelete(room);
  });
  await Promise.all(deleteRoomsPromises);
  await Project.findByIdAndDelete(id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

//cannot update project members and supervisor
exports.updateProject = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (req.body.members || req.body.supervisor || req.body.room) {
    delete req.body.members;
    delete req.body.supervisor;
    delete req.body.room;
  }
  const project = await Project.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!project) return next(new AppError(404, "no project with that id"));
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.addMembers = catchAsync(async (req, res, next) => {
  if (!req.body.newMembers)
    return next(new AppError(400, "please provide an array newMembers"));
  const project = await Project.findById(req.params.id);
  if (!project) return next(new AppError(404, "no project with that id"));

  const pushMemberesPromises = req.body.newMembers.map(async (member) => {
    if (!project.members.includes(member)) {
      const user = await User.findById(member);
      if (!user)
        return next(new AppError(404, `user with id ${member} does not exist`));
      project.members.push(member);
    }
  });
  await Promise.all(pushMemberesPromises);
  await project.save();

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});
