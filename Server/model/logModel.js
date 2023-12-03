const mongoose = require("mongoose");

const log = new mongoose.Schema({
  entries: [
    {
      assignedTo: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      assignedTasks: [String],
      completedTasks: [String],
      remark: String,
      present: Boolean,
    },
  ],
});

const Log = mongoose.model("Log", log);
module.exports = Log;
