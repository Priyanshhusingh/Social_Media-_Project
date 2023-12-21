const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
const { Schema } = mongoose;

const relationSchema = new Schema(
  {
    followerUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    followedUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
relationSchema.plugin(mongooseAggregatePaginate);
const Relation = mongoose.model("Relation", relationSchema);
module.exports = Relation;
