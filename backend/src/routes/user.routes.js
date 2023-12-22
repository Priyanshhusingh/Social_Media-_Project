const express = require("express");
const {
  getUser,
  registerUser,
  loginUser,
} = require("../controller/user.controller");

const UserRouter = express.Router();

UserRouter.route("/register").post(registerUser);
UserRouter.route("/login").post(loginUser);
UserRouter.route("/find/:userId").get(getUser);

module.exports = UserRouter;
