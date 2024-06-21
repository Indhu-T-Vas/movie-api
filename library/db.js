import mongoose from "mongoose";
import dotenv from "dotenv";

//for configuring env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
