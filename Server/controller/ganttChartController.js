const GanttChart = require("../model/ganttChartModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addGanttChartTask = catchAsync(async (req, res, next) => {
  const projectGanttChart = await GanttChart.findById(req.project.ganttChart);
  if (!projectGanttChart)
    return next(
      new AppError(
        400,
        "this project does not have a gantt chart, please create one to perform this action"
      )
    );
  const { task } = req.body;
  if (!task) return next(new AppError(400, "please provide task to add"));
  projectGanttChart.tasks.push(task);
  await projectGanttChart.save();
  res.status(200).json({
    status: "success",
    ganttChart: projectGanttChart,
  });
});
