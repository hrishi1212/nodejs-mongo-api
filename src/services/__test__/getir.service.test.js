const expect = require("expect");
const GetirService = require("../getir.service");

describe("Test Suit for Getir Service", () => {
  test("this shoudl return array for records from database", async () => {
    const data = {
      startDate: new Date("2016-01-30"),
      endDate: new Date("2018-02-02"),
      minCount: 3000,
      maxCount: 5000,
    };
    const getirService = new GetirService();
    const result = await getirService.getRecords(data);

    let containArrays = true;
    if (result.length == 0) {
      containArrays = false;
    }
    expect(containArrays).toBeTruthy();
  });
});
