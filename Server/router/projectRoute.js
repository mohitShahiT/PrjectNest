const express = require("express");
const authController = require("../controller/authController");
const projectController = require("../controller/projectController");
const roomController = require("../controller/roomController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, projectController.getAllProjects)
  .post(authController.protect, projectController.addProject);

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

module.exports = router;
