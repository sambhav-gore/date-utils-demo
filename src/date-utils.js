import moment from "moment";

/**
 * Constants for the Date Formats used
 */
const API_DATE_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS[Z]";
const DISPLAY_DATE_FORMAT = "MM/DD/YYYY";

/**
 * Utility function to do the convertion
 * Also checks for invalid dates
 */
const convertFormat = (inputDate, { inputFormat, outputFormat }) => {
  const inputMoment = moment(inputDate, inputFormat, true);
  // If we have a valid date, return formatted value
  if (inputMoment.isValid()) {
    return inputMoment.format(outputFormat);
  }
  // if the input was not valid, return now() value (today):
  return moment().format(outputFormat);
};

/**
 * Function convertToDisplayFormat
 * We get from service: 2019-02-21T00:00:00.000Z
 * Convert to format to show in UI: MM/DD/YYYY
 */
const convertToDisplayFormat = inputDate =>
  convertFormat(inputDate, {
    inputFormat: API_DATE_FORMAT,
    outputFormat: DISPLAY_DATE_FORMAT
  });

/**
 * Function convertFromDisplayFormat
 * To send back to backend services:
 * We need to convert MM/DD/YYYY to 2019-02-21T00:00:00.000Z
 */
const convertFromDisplayFormat = inputDate =>
  convertFormat(inputDate, {
    inputFormat: DISPLAY_DATE_FORMAT,
    outputFormat: API_DATE_FORMAT
  });

export { convertFromDisplayFormat, convertToDisplayFormat };
