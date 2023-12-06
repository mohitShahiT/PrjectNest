const express = require("express");
const authController = require("../controller/authController");
const projectController = require("../controller/projectController");
const ganttChartController = require("../controller/ganttChartController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, projectController.getAllProjects)
  .post(projectController.addProject);

router
  .route("/:id")
  .get(authController.protect, projectController.getProject)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "supervisor"),
    projectController.updateProject
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.deleteProject
  );

router
  .route("/:id/add-members")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.addMembers
  );

router
  .route("/:id/remove-member")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.removeMember
  );

router
  .route("/:id/add-supervisor")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.addSupervisor
  );
router
  .route("/:id/remove-supervisor")
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.removeSupervisor
  );
router.route("/:id/rooms").get(
  authController.protect,
  // authController.restrictTo("student", "supervisor"),
  projectController.getProjectRooms
);

router
  .route("/:id/gantt-chart")
  .get(
    authController.protect,
    authController.projectMemberRestricted,
    projectController.getProjectGanttChart
  )
  .post(
    authController.protect,
    authController.projectMemberRestricted,
    projectController.addProjectGanttChart
  );

router
  .route("/:id/gantt-chart/:weekNo/add-task")
  .post(
    authController.protect,
    authController.projectMemberRestricted,
    ganttChartController.addGanttChartTask
  );

router
  .route("/:id/log-sheet/:date")
  .get(
    authController.protect,
    authController.projectMemberRestricted,
    projectController.getProjectLogSheet
  )
  .post(
    authController.protect,
    authController.projectMemberRestricted,
    projectController.addProjectLogSheet
  );
module.exports = router;
