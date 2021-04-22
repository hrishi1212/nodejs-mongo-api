const GetirRepo = require("../repositories/getir.repo");

class GetirService {
  constructor() {
    this.getirRepo = new GetirRepo();
  }

  /**
   * @author Hrishikesh Kale
   * @description gets records from data object from mongo, and handles service logic with error handling
   * @param {*} data
   */
  getRecords(data) {
    return new Promise(async (resolve, reject) => {
      try {
        /**
         * service folder is basically for data from where we are going to fetch response,
         * this can be from 3rd party service request or from our very own datasource repositories
         * in this case we are taking from mongo repo hence using this repo instance for the same
         */
        const result = await this.getirRepo.getRecords(data);
        return resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = GetirService;
