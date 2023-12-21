const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Schema } = mongoose;

const likedSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },

  },
  { timestamps: true }
);
likedSchema.plugin(mongooseAggregatePaginate);
const Like = mongoose.model("Like", likedSchema);
module.exports = Like;
