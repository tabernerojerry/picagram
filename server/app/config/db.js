import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME, NODE_ENV, TEST_SUITE } = process.env;

let MONGO_URL;

if (NODE_ENV === "test") {
  MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${TEST_SUITE}`;
} else {
  MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

export const db = async () => {
  try {
    await mongoose.connect(
      MONGO_URL,
      { useNewUrlParser: true }
    );

    console.log("MongoDB Connected!");
  } catch (error) {
    console.log("MongoDB Error: ", error);
  }
};

export default db();
