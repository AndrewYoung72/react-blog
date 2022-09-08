import { Schema, Types } from "mongoose";

const postSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    blog: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);


export default postSchema;