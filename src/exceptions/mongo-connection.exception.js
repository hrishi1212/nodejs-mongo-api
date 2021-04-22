const BaseException = require("./base.exception");

class MongoConnectionException extends BaseException {
  constructor(err) {
    super("Unable to connect to mongo." + err);
  }
}

module.exports = MongoConnectionException;
