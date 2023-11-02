import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongo_uri = process.env.MONGO;
    await mongoose.connect(mongo_uri);
    console.log("successfully connected to mongo");
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
