const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");
const router = express.Router();

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getAllUser
  );
router
  .route("/update-my-password")
  .post(authController.protect, authController.updateMyPassword);
router.route("/:id").get(userController.getUser);
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
