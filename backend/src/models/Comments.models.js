const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
commentSchema.plugin(mongooseAggregatePaginate);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
