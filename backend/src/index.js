require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/index");

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Err: ", err);
      throw err;
    });
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        `Server is listening at localhost:${process.env.PORT || 8080}`
      );
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed!!", err);
  });

  //32:00