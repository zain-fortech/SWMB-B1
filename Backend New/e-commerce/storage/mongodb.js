const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const DB_URI = process.env.DB_URI;

    await connect(DB_URI);

    console.log("DB connected!");
  } catch (error) {
    console.log(`DB could not be connected`, error);
  }
};

module.exports = connectDB;
