const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/Apiresponse");
const ApiError = require("../utils/ApiError");
const User = require("../models/User.models");

//generate Access and refreshToken
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "something went wrong while generating token");
  }
};

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullName, password } = req.body;
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with this username or email already existed");
  }
  const userDoc = await User.create({
    username,
    email,
    password,
    fullName,
  });
  const createdUser = await User.findById(userDoc._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something Went Wrong");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "user created Successfully"));
});

exports.loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    throw new ApiError(400, "Username is requiured");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(404, "user does not exist");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Password is incorrect");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );
  const userDoc = await User.findById(user._id);
  const option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, option)
    .cookie("refreshToken", refreshToken, option)
    .json(
      new ApiResponse(
        200,
        { user: userDoc, refreshToken, accessToken },
        "User logged Successfully"
      )
    );
});

exports.logOutuser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.UserDoc._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    { new: true }
  );
  const option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option).json(new ApiResponse(200, {}, "User Logout Successfully"));
});

exports.getUser = asyncHandler((req, res) => {
  return res.send("ok");
});
