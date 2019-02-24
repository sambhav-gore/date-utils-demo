import moment from "moment";
import { convertToDisplayFormat, convertFromDisplayFormat } from "./date-utils";

const mocks = {
  apiDate: "2019-02-21T00:00:00.000Z",
  displayDate: "02/21/2019",
  apiDateFormat: "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
  displayDateFormat: "MM/DD/YYYY"
};

describe("date-utils", () => {
  describe("convertToDisplayFormat", () => {
    it("should convert the date from api to display format", () => {
      const result = convertToDisplayFormat(mocks.apiDate);
      expect(result).toEqual(mocks.displayDate);
    });

    it("should return todays date when input is undefined", () => {
      const result = convertToDisplayFormat(undefined);
      const nowInDisplayFormat = moment().format(mocks.displayDateFormat);
      expect(result).toEqual(nowInDisplayFormat);
    });
  });

  describe("convertFromDisplayFormat", () => {
    it("should convert the date from display to api format", () => {
      const result = convertFromDisplayFormat(mocks.displayDate);
      expect(result).toEqual(mocks.apiDate);
    });

    it("should return todays date when input is undefined", () => {
      const result = convertFromDisplayFormat(undefined);
      const nowInApiFormat = moment().format(mocks.apiDateFormat);
      expect(result).toEqual(nowInApiFormat);
    });
  });
});
