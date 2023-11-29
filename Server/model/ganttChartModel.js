const mongoose = require("mongoose");

const ganttChartSchema = new mongoose.Schema(
  {
    totalWeeks: {
      type: Number,
    },
    weeks: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Week",
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
