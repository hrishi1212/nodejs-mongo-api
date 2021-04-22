const expect = require("expect");
const GetirBiz = require("../getir.biz");
const { isValidDate } = require("../../helpers/helper");

describe("Test Suit for Getir Biz param validation", () => {
  test("this return an array for succesfully fetching records", async () => {
    const data = {
      startDate: "2016-01-30",
      endDate: "2018-02-02",
      minCount: 3000,
      maxCount: 5000,
    };
    const getirBiz = new GetirBiz();
    const result = await getirBiz.getRecords(data);

    let containArrays = true;
    if (result.length == 0) {
      containArrays = false;
    }
    expect(containArrays).toBeTruthy();
  });
});

describe("Test Suit for Getir Biz start date end date validation", () => {
  test("this return true value for stardate validation", async () => {
    const data = {
      startDate: "2016-01-30",
    };
  
    const result = isValidDate(data.startDate);
    expect(result).toBeTruthy();
  });

  test("this return false value for stardate validation", async () => {
    const data = {
      startDate: "2016-02-30",
    };

    const result = isValidDate(data.startDate);
    expect(result).toBeFalsy();
  });
});
