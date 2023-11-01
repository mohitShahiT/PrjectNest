const mongoose = require("mongoose");
const Room = require("./roomModel");
const AppError = require("../utils/appError");
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: [true, "project must have a name"],
    },
    supervisor: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    rooms: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Room",
      },
    ],
    submissionDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

//creating rooms for the project
projectSchema.pre("save", async function (next) {
  if (!this.isNew) next();
  const members = this.members.map((mem) => mem);
  const supervisedMembers = members.map((mem) => mem);
  if (this.supervisor) supervisedMembers.push(this.supervisor);
  const memberRoomData = {
    name: `${this.name.split(" ").join("-")}-supervised-team-room`,
    roomtype: "supervised-team-room",
    members: supervisedMembers,
  };
  const memberRoom = await Room.create(memberRoomData);
  const teamRoomData = {
    name: `${this.name.split(" ").join("-")}-members-team-room`,
    roomtype: "members-team-room",
    members,
  };
  const teamRoom = await Room.create(teamRoomData);

  if (!memberRoom || !teamRoom) {
    return next(new AppError(500, "somethinge went wrong please try again"));
  }
  this.rooms.push(memberRoom.id);
  this.rooms.push(teamRoom.id);
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
