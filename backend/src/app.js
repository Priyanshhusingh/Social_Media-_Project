const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserRouter = require("./routes/user.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(cookieParser());

// Route declaration
app.use("/api/v1/users", UserRouter);
// app.use("api/v1/posts", UserRouter);
// app.use("api/v1/comments", UserRouter);
// app.use("api/v1/likes", UserRouter);

module.exports = app;
