const { InvalidParamException } = require("../exceptions");
const GetirBiz = require("../biz/getir.biz");

class GetirController {
  register(app) {
    app.route("/getir").post(async (request, response, next) => {
      try {
        // Getting request body into variables
        const { startDate, endDate, minCount, maxCount } = request.body;

        // error handling for invalid param exceptions,all fields are required
        if (!startDate) throw new InvalidParamException("startDate");
        if (!endDate) throw new InvalidParamException("endDate");
        if (!minCount) throw new InvalidParamException("minCount");
        if (!maxCount) throw new InvalidParamException("maxCount");

        const getirBiz = new GetirBiz();
        const result = await getirBiz.getRecords(request.body);

        return response.status(200).json({
          code: 0,
          msg: "Success",
          records: result,
        });
      } catch (error) {
        console.log(error);
        return response.status(error.status || 500).json({
          code: -1,
          msg: error.message || "Internal Server Error",
          error,
        });
      }
    });
  }
}

module.exports = GetirController;
