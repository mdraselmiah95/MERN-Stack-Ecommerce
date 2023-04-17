const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
} = require("../controllers/user.controllers");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/reset").post(forgotPassword);

module.exports = router;
