const mongoose = require("mongoose");
const config = require("config");
const URL = config.get("MONGOURL");
const MongoConnectionException = require("../exceptions/mongo-connection.exception");

const connect = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auto_reconnect: true,
    });
  } catch (error) {
    console.log(error);
    throw new MongoConnectionException(error);
  }
};
connect();
