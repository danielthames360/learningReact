const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_CDN);
    console.log("db online");
  } catch (error) {
    console.log(error);
    throw new Error("Error to initialize the db");
  }
};

module.exports = {
  dbConnection,
};
