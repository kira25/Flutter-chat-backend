const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
    dbConnection
}
