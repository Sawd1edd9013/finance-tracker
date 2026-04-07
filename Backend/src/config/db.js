const mongoose = require("mongoose");

const connectDb = async () => {
  const uri = process.env.DB_CONNECTION_STRING;

  if (!uri) {
    throw new Error("DB_CONNECTION_STRING is not set");
  }

  await mongoose.connect(uri);
  console.log("MongoDB connected");
};

module.exports = connectDb;
