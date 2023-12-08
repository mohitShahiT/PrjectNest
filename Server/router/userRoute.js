const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");
const router = express.Router();

router.route("/").get(authController.protect, userController.getAllUsers);
router
  .route("/projects")
  .get(authController.protect, userController.getUserProjects);
router
  .route("/update-my-password")
  .post(authController.protect, authController.updateMyPassword);
router.route("/:id").get(authController.protect, userController.getUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router
  .route("/:id/assign-role")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    authController.assignRole
  );

module.exports = router;
