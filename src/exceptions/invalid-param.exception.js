const BaseException = require("./base.exception");

class InvalidParamException extends BaseException {
  constructor(param) {
    super(`Bad request: missing param ${param}`, "PARAM_ERROR", 400);
  }
}

module.exports = InvalidParamException;
