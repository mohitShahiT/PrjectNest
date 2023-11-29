const Project = require("../model/projectModel");
const User = require("../model/userModel");
const Room = require("../model/roomModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const filterObject = require("../utils/filterObject");
const GanttChart = require("../model/ganttChartModel");
const Week = require("../model/weekModel");

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find(req.query);
  res.status(200).json({
    status: "success",
    data: {
      total: projects.length,
      projects,
    },
  });
});
exports.addProject = catchAsync(async (req, res, next) => {
  const projectData = filterObject(
    req.body,
    "name",
    "supervisor",
    "members",
    "year",
    "semester",
    "submissionDate",
    "description"
  );
  if (projectData.submissionDate) {
    const diff = new Date().getTime() - new Date(projectData.submissionDate);
    if (diff > 0)
      return next(new AppError(400, "submission date is in the past"));
  }
  if (projectData.supervisor) {
    const supervisor = await User.findById(projectData.supervisor);
    if (!supervisor) return next(new AppError(400, "supervisor doesnot exist"));
    if (supervisor.role !== "supervisor")
      return next(new AppError(400, "not a supervisor"));
  }
  if (projectData.members) {
    if (!Array.isArray(projectData.members))
      return next(new AppError(400, "members must be an array of users"));
    const membersPromises = projectData.members.map(async (member) => {
      return await User.findById(member);
    });
    const members = await Promise.all(membersPromises);
    if (members.includes(null)) {
      return next(
        new AppError(
          400,
          "one or more of the provided members are not the user"
        )
      );
    }
  }
  const projct = await Project.create(projectData);

  res.status(200).json({
    status: "success",
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
  await GanttChart.findByIdAndDelete(project.ganttChart);
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

  const supervisedRoom = await Room.findById(project.rooms[0]);
  const membersRoom = await Room.findById(project.rooms[1]);
  const pushMemberesPromises = req.body.newMembers.map(async (member) => {
    if (!project.members.includes(member)) {
      const user = await User.findById(member);
      if (!user)
        return next(new AppError(404, `user with id ${member} does not exist`));
      project.members.push(member);
      supervisedRoom.addToRoom(member);
      membersRoom.addToRoom(member);
    }
  });
  await Promise.all(pushMemberesPromises);
  await supervisedRoom.save();
  await membersRoom.save();
  await project.save();

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.removeMember = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { memberToRemove } = req.body;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "no project with that id"));

  const supervisedRoom = await Room.findById(project.rooms[0]);
  const membersRoom = await Room.findById(project.rooms[1]);

  const index = project.members.indexOf(memberToRemove);
  if (index > -1) {
    project.members.splice(index, 1);
    supervisedRoom.removeFromRoom(memberToRemove);
    membersRoom.removeFromRoom(memberToRemove);

    await supervisedRoom.save();
    await membersRoom.save();
    await project.save();
  } else {
    return next(
      new AppError(
        400,
        `user with id ${memberToRemove} is not the member of this project`
      )
    );
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.addSupervisor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { supervisor } = req.body;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "no project with that id"));
  if (project.supervisor)
    return next(new AppError(400, "this project already has a supervisor"));
  const user = await User.findById(supervisor);
  if (!user || user.role !== "supervisor")
    return next(new AppError(400, "no supervisor with that id"));
  project.supervisor = supervisor;

  const supervisedRoom = await Room.findById(project.rooms[0]);
  supervisedRoom.addToRoom(supervisor);

  await supervisedRoom.save();
  await project.save();

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.removeSupervisor = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "no project with that id"));
  const supervisedRoom = await Room.findById(project.rooms[0]);
  supervisedRoom.removeFromRoom(project.supervisor);
  project.supervisor = undefined;
  await supervisedRoom.save();
  await project.save();

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.getProjectRooms = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) return next(new AppError(404, "project not found"));
  const roomsPromises = project.rooms.map(async (room) => {
    return await Room.findById(room);
  });
  const rooms = await Promise.all(roomsPromises);
  const finalRooms = [];
  console.log(req.user.firstName, req.user.role);
  rooms.forEach((room) => {
    room.members.forEach((member) => {
      if (member._id.toString() === req.user.id) finalRooms.push(room);
    });
  });
  if (finalRooms.length === 0)
    return next(new AppError(401, "you are not the member of this project"));
  res.status(200).json({
    status: "success",
    total: finalRooms.length,
    data: {
      rooms: finalRooms,
    },
  });
});

exports.getProjectGanttChart = catchAsync(async (req, res, next) => {
  if (!req.project.ganttChart) {
    return res.status(307).json({
      status: "failed",
      message:
        "this project does not have a gantt chart yet, please send a post request to api/v1/project/{project_id}/gantt-chart to create one",
    });
  }
  const ganttChart = await GanttChart.findById(req.project.ganttChart).populate(
    "weeks"
  );
  if (!ganttChart) return next(new AppError(404, "cannot find the ganttchart"));
  res.status(200).json({
    status: "success",
    data: {
      ganttChart,
    },
  });
});

exports.addProjectGanttChart = catchAsync(async (req, res, next) => {
  if (req.project.ganttChart)
    return next(new AppError(400, "this project already has a gantt chart"));
  if (req.user.id === req.project.supervisor._id.toString())
    return next(
      new AppError(400, "only project memberes(student) can add gantt chart")
    );
  const weekNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const weeksPromises = weekNos.map(async (weekno) => {
    return await Week.create({
      weekNo: weekno,
      from:
        new Date(req.project.createdAt).getTime() + (weekno - 1) * 604800000, //1week = 604800000 ms
      to:
        new Date(req.project.createdAt).getTime() +
        (weekno - 1) * 604800000 +
        6 * 24 * 60 * 60 * 1000,
      taskToDo: [],
    });
  });
  const weeks = await Promise.all(weeksPromises);

  const ganttChartData = {
    totalWeeks: weeks.length,
    weeks,
  };
  console.log(ganttChartData);
  const ganttChart = await GanttChart.create(ganttChartData);
  const project = await Project.findById(req.project.id);
  project.ganttChart = ganttChart.id;
  await project.save();
  res.status(200).json({
    status: "waiting",
    project,
  });
});
