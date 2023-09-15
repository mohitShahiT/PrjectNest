const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");
const router = express.Router();

router.route("/").get(userController.getAllUser);
router
  .route("/update-my-password")
  .post(authController.protect, authController.updateMyPassword);
router.route("/:id").get(userController.getUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

module.exports = router;
