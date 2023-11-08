const mongoose = require("mongoose");

const ganttChartSchema = new mongoose.Schema(
  {
    totalWeeks: Number,
    weeks: [
      {
        weekNo: {
          type: Number,
          //   unique: [true, "week no must me unique"],
        },
        from: Date,
        to: Date,
        tasksToDo: [String],
      },
    ],
    tasks: [String],
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const GanttChart = mongoose.model("GanttChart", ganttChartSchema);
module.exports = GanttChart;
