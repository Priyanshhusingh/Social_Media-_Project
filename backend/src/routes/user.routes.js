const express = require("express");
const {
  getUser,
  registerUser,
  loginUser,
  logOutuser,
} = require("../controller/user.controller");
const { verifyJWT } = require("../middlewares/Auth.middleware");

const UserRouter = express.Router();

UserRouter.route("/register").post(registerUser);
UserRouter.route("/login").post(loginUser);

//secure Route
UserRouter.route("/logout").post(verifyJWT, logOutuser);
UserRouter.route("/find/:userId").get(getUser);

module.exports = UserRouter;
