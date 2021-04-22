const expect = require("expect");
const GetirRepo = require("../getir.repo");

describe("Test Suit for Getir Repo", () => {
  test("this shoudl return array for records from database", async () => {
    const data = {
      startDate: new Date("2016-01-30"),
      endDate: new Date("2018-02-02"),
      minCount: 3000,
      maxCount: 5000,
    };
    const getirRepo = new GetirRepo();
    const result = await getirRepo.getRecords(data);

    let containArrays = true;
    if (result.length == 0) {
      containArrays = false;
    }
    expect(containArrays).toBeTruthy();
  });
});
