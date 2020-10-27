const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    console.log("init db");
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('db online');
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  dbConnection,
};
