const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Schema } = mongoose;

const storySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    storyImg: {
      type: String,
    },
  },
  { timestamps: true }
);
storySchema.plugin(mongooseAggregatePaginate);
const Story = mongoose.model("Story", storySchema);
module.exports = Story;
