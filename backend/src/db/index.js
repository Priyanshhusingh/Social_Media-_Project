const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
      console.log(
        `Database connected succcessfully !! DBHOST : ${mongoose.connection.host}`
      );
    });
  } catch (error) {
    console.error("MongoDb connection error: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
