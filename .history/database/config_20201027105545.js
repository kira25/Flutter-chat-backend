const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    console.log("init db");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  dbConnection,
};
