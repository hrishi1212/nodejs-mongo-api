const BaseException = require("./base.exception");

class ValidationException extends BaseException {
  constructor(param) {
    super(
      `Bad request: Invalid value for param ${param}. validation failed!`,
      "VALIDATION_ERROR",
      400
    );
  }
}

module.exports = ValidationException;
