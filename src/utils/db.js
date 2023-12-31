import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    throw new Error("Connection Failed!");
  }
};

export default connect;
