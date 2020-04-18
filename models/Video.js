import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required", // error message
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now, // function return current date
  },
});

const model = mongoose.model("Video", VideoSchema);
export default model;
