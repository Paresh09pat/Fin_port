const mongoose = require("mongoose");
const URI =
  "mongodb+srv://GoFood:Paresh2411@cluster0.bzdqtiy.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
