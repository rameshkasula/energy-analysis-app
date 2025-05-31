export type Person = {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  city: string;
  country: string;
};

export const data = [
  {
    id: 1,
    firstName: "Elenora",
    lastName: "Wilkinson",
    company: "Feest - Reilly",
    city: "Hertaland",
    country: "Qatar",
  },
  {
    id: 2,
    firstName: "Berneice",
    lastName: "Feil",
    company: "Deckow, Leuschke and Jaskolski",
    city: "Millcreek",
    country: "Nepal",
  },
  {
    id: 3,
    firstName: "Frieda",
    lastName: "Baumbach",
    company: "Heidenreich, Grady and Durgan",
    city: "Volkmanside",
    country: "Croatia",
  },
  {
    id: 4,
    firstName: "Zachery",
    lastName: "Brown",
    company: "Cormier - Skiles",
    city: "Faychester",
    country: "Saint Pierre and Miquelon",
  },
  {
    id: 5,
    firstName: "Kendra",
    lastName: "Bins",
    company: "Wehner - Wilderman",
    city: "New Valentin",
    country: "Senegal",
  },
  {
    id: 6,
    firstName: "Lysanne",
    lastName: "Fisher",
    company: "Schmidt LLC",
    city: "Malachitown",
    country: "Costa Rica",
  },
  {
    id: 7,
    firstName: "Garrick",
    lastName: "Ryan",
    company: "Ryan - Buckridge",
    city: "East Pearl",
    country: "Cocos (Keeling) Islands",
  },
  {
    id: 8,
    firstName: "Hollis",
    lastName: "Medhurst",
    company: "Quitzon Group",
    city: "West Sienna",
    country: "Papua New Guinea",
  },
  {
    id: 9,
    firstName: "Arlo",
    lastName: "Buckridge",
    company: "Konopelski - Spinka",
    city: "Chino",
    country: "Congo",
  },
  {
    id: 10,
    firstName: "Rickie",
    lastName: "Auer",
    company: "Lehner - Walsh",
    city: "Nyahfield",
    country: "Sudan",
  },
  {
    id: 11,
    firstName: "Isidro",
    lastName: "Larson",
    company: "Reichert - Paucek",
    city: "Fort Rosinaside",
    country: "Belize",
  },
  {
    id: 12,
    firstName: "Bettie",
    lastName: "Skiles",
    company: "Zulauf, Flatley and Rolfson",
    city: "West Feltonchester",
    country: "Poland",
  },
] as Person[];

import moment from "moment";

/**
 * Get dates of a specific weekday within a date range.
 *
 * @param startDate - The start date of the range (inclusive).
 * @param endDate - The end date of the range (inclusive).
 * @param dayName - The name of the weekday to filter (e.g., "Monday").
 * @returns An array of dates formatted as 'YYYY-MM-DD' that fall on the specified weekday.
 */
export function getWeekdayDates(
  startDate: string,
  endDate: string,
  dayName: string
): string[] {
  // Map of weekday names to their corresponding numeric values
  const weekdays: { [key: string]: number } = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const filteredDates: string[] = [];
  const weekday = weekdays[dayName]; // Get numeric value for the day name

  if (weekday === undefined) {
    throw new Error(
      `Invalid day name: ${dayName}. Please use a valid weekday name.`
    );
  }

  const currentDate = moment(startDate);

  // Loop through the date range
  while (currentDate.isSameOrBefore(moment(endDate))) {
    // Check if the current date's weekday matches the specified weekday
    if (currentDate.day() === weekday) {
      filteredDates.push(currentDate.format("YYYY-MM-DD")); // Format as needed
    }
    currentDate.add(1, "days"); // Increment the date by one day
  }

  return filteredDates;
}
