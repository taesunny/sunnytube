import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.connect("mongodb://localhost:27017/sunny-tube", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = () => console.log("❌ Connected to DB");

db.once("open", handleOpen);
db.on("error", handleError);
