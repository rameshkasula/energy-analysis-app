/* eslint-disable @typescript-eslint/no-explicit-any */

// Make sure to include moment.js in your project
import moment from "moment";

export function getYearMonthWeekNumber(date: string): {
  year: number;
  month: number;
  weekNumber: number;
} {
  const dateObj = moment(date);
  const year = dateObj.year();
  const month = dateObj.month() + 1; // Months are zero-indexed in moment.js
  const weekNumber = dateObj.isoWeek(); // ISO week number

  return { year, month, weekNumber };
}

export function getDatesForWeek(weekString: string): string[] {
  const [year, weekNumber] = weekString.split("-").map(Number);
  // Get the start and end of the week
  const startOfWeek = moment().year(year).week(weekNumber).startOf("isoWeek");
  const endOfWeek = moment().year(year).week(weekNumber).endOf("isoWeek");

  // Create an array to hold the dates
  const datesInWeek: any = [];

  // Populate the array with each date in the week
  for (
    let date = startOfWeek;
    date.isBefore(endOfWeek) || date.isSame(endOfWeek);
    date.add(1, "days")
  ) {
    datesInWeek.push(date.format("YYYY-MM-DD"));
  }

  return datesInWeek;
}

export function isWeekInCurrentMonth(year, weekNumber) {
  // Get the start of the specified week
  const startOfWeek = moment().year(year).week(weekNumber).startOf("isoWeek");
  const endOfWeek = moment().year(year).week(weekNumber).endOf("isoWeek");

  // Get the current month and year
  const currentMonth = moment().month();
  const currentYear = moment().year();

  // Check each date in the week
  for (
    let date = startOfWeek.clone();
    date.isBefore(endOfWeek) || date.isSame(endOfWeek);
    date.add(1, "days")
  ) {
    if (date.month() === currentMonth && date.year() === currentYear) {
      return true; // Found a date in the current month
    }
  }

  return false; // No dates found in the current month
}

// is start date or end date in current month
export function isAnyDateInCurrentMonth(startDate: any, endDate: any) {
  // Get the current month and year
  const currentMonth = moment().month();
  const currentYear = moment().year();

  // Create moment objects for the start and end dates
  const start = moment(startDate);
  const end = moment(endDate);

  // Check if either date is in the current month and year
  return (
    (start.month() === currentMonth && start.year() === currentYear) ||
    (end.month() === currentMonth && end.year() === currentYear)
  );
}

export const getDatesInWeek = (currentDate: any) => {
  // Get the ISO week number for the current date
  const weekNumber = moment(currentDate).isoWeek();
  const year = moment(currentDate).isoWeekYear(); // Get the ISO year

  // Calculate start and end dates of the week
  const startOfWeek = moment()
    .isoWeek(weekNumber)
    .isoWeekYear(year)
    .startOf("isoWeek"); // Monday
  const endOfWeek = moment()
    .isoWeek(weekNumber)
    .isoWeekYear(year)
    .endOf("isoWeek"); // Sunday

  // Generate array of dates for the week
  const datesInWeek = [];
  for (
    let date = startOfWeek.clone();
    date.isBefore(endOfWeek.clone());
    date.add(1, "day")
  ) {
    datesInWeek.push(date.format("YYYY-MM-DD"));
  }

  return datesInWeek;
};

export function getDatesOrMonths(startDate: any, endDate: any, flag: string) {
  const start = moment(startDate);
  const end = moment(endDate);
  const result = [];

  if (flag === "month") {
    // Loop through each month between start and end date
    for (
      let m = start.clone();
      m.isBefore(end) || m.isSame(end);
      m.add(1, "months")
    ) {
      result.push(m.format("YYYY-MM"));
    }
  } else {
    // Loop through each day between start and end date
    for (
      let d = start.clone();
      d.isBefore(end) || d.isSame(end);
      d.add(1, "days")
    ) {
      result.push(d.format("YYYY-MM-DD"));
    }
  }

  return result;
}

export function rangeVal(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  const months = [];

  // Loop through each month in the range
  for (
    let m = start.clone();
    m.isBefore(end) || m.isSame(end, "month");
    m.add(1, "months")
  ) {
    months.push(m.format("YYYY-MM"));
  }

  return months;
}
