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
router.route("/:id/rooms").get(authController.protect, roomController.getRooms);

module.exports = router;
