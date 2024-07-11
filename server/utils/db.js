const mongoose = require("mongoose");
const URI = process.env.MONGOURI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
