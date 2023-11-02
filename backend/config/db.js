import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO = process.env.MONGO_URI;
    await mongoose.connect(MONGO);
    console.log("successfully connected to mongo");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
