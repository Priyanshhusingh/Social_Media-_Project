const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    Image: {
      type: String,
    },
  },
  { timestamps: true }
);
postSchema.plugin(mongooseAggregatePaginate);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
