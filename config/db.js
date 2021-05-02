const mongoose = require("mongoose");
const { config } = require("./config");

mongoose.Promise = global.Promise;

mongoose
  .connect(config.mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Databse connection Sucesfully");
  })
  .catch((err) => {
    console.log("Error to connect database: " + err);
    process.exit(1);
  });