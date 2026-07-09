import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI;

if (!mongo_uri) {
  throw new Error("Mongo uri is not found");
}
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri);
    console.log("BD CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
