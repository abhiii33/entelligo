

import {Mongoose} from "mongoose";

const mongoose = new Mongoose();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export { connectToDatabase, mongoose };