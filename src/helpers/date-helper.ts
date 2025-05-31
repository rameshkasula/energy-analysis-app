/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";

export const calculateDaysBetweenDates = (date1: any, date2: any) => {
  const startDate = moment(date1);
  const endDate = moment(date2);
  const daysDifference = endDate.diff(startDate, "days");
  return daysDifference;
};
