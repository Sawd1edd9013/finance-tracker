require("dotenv").config();

const app = require("./app");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

start();
