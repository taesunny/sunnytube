import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createAt: {
    type: Date,
    default: Date.now, // function return current date
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
