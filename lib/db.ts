
import mongoose from "mongoose";

let connectionPromise: Promise<typeof mongoose> | null = null;

const connectToDatabase = async () => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(databaseUrl, {
        connectTimeoutMS: 5000,
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => {
        console.log("Connected to the database successfully!");
        return mongoose;
      })
      .catch((error) => {
        connectionPromise = null;
        console.error("Error connecting to the database:", error);
        throw error;
      });
  }

  return connectionPromise;
};

export { connectToDatabase, mongoose };