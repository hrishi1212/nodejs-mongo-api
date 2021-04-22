const mongoDb = require("../utils/mongo.db");
const Record = require("../models/record.model");

class GetirRepo {
  constructor() {}

  /**
   * @author Hrishikesh Kale
   * @description get record from model, mongodb instance
   * @param {*} data
   */
  getRecords(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Record.aggregate([
          {
            // basic match filter between 2 dates
            $match: { createdAt: { $gte: data.startDate, $lte: data.endDate } },
          },
          {
            //projection data to validate and simply response object, also project summation of count array
            $project: {
              _id: 0,
              key: "$key",
              createdAt: "$createdAt",
              totalCount: { $sum: "$counts" },
            },
          },
          {
            // basic match for count that are between the minCount and maxCount
            $match: {
              totalCount: { $lte: data.maxCount, $gte: data.minCount },
            },
          },
        ]);
        return resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = GetirRepo;
