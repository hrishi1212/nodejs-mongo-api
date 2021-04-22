const GetirService = require("../services/getir.service");
const { ValidationException } = require("../exceptions");

class GetirBiz {
  constructor() {
    this.getirService = new GetirService();
  }

  /**
   * @author Hrishikesh Kale
   * @description gets records from data object from mongo, and handles biz logic with error handling
   * @param {*} data
   */
  getRecords(data) {
    return new Promise(async (resolve, reject) => {
      try {
        //start date formate validation error, it should be always in YYYY-MM-DD format
        if (!this.isValidDate(data.startDate))
          throw new ValidationException("startDate");

        //start date formate validation error, it should be always in YYYY-MM-DD format
        if (!this.isValidDate(data.endDate))
          throw new ValidationException("endDate");

        //convert request body dates to javascript date object, using same variable for memory managenment
        data.startDate = new Date(data.startDate);
        data.endDate = new Date(data.endDate);

        //parse int max count and min count. handling edge case
        data.minCount = parseInt(data.minCount);
        data.maxCount = parseInt(data.maxCount);

        //check for min and max value validation,edge case
        if (
          data.minCount > data.maxCount ||
          data.maxCount < data.minCount ||
          data.startDate > data.endDate ||
          data.endDate < data.startDate
        ) {
          throw new ValidationException(
            `minCount | maxCount | startDate | endDate`
          );
        }

        const result = await this.getirService.getRecords(data);
        return resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  /**
   * @author Hrishikesh Kale
   * @description validates date string cases handle for epoch,
   * leap day, not leap day and invalid date like 2020-02-30,
   * this function can be in common or helper file also which can be use by other biz files
   * @param {*} dateString
   */
  isValidDate(dateString) {
    try {
      const regEx = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateString.match(regEx)) return false; // Invalid format
      const d = new Date(dateString);
      const dNum = d.getTime();
      if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
      return d.toISOString().slice(0, 10) === dateString;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = GetirBiz;
