import moment from "moment";

export const ENV_VARIABLES = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  dummyURL: process.env.NEXT_PUBLIC_BASE_URL,
  AUTH_SECRET: process.env.AUTH_SECRET || "secret",
  authUrl: process.env.NEXTAUTH_URL || "http://localhost:5000/api",
};

export const APP_NAME = "Energy Analysis";

export const TABLE_DATA_FORMAT = {
  DATE: "DD MMM YYYY",
  DATE_TIME: "DD MMM YYYY HH:mm:ss",
  TIME: "HH:mm:ss",
  DATE_TIME_WITH_SECONDS: "DD MMM YYYY HH:mm:ss",
  AM_PM: "hh:mm a",
  DATE_TIME_AM_PM: "DD MMM YYYY HH:mm A",
}

export const dateFormatter = (date: string, format: keyof typeof TABLE_DATA_FORMAT) => {
  return moment(date).format(TABLE_DATA_FORMAT[format]);
}



// public routes
export const PUBLIC_ROUTES = ["/auth/sign-in", "/auth/sign-up"];


// status
export const STATUS = {
  DRAFT: "DRAFT",
  REVIEW: "REVIEW",
  FINALIZED: "FINALIZED",
  REJECTED: "REJECTED",
};

// colors for status
export const STATUS_COLORS = {
  // mui colors only
  DRAFT: "secondary",
  REVIEW: "warning",
  FINALIZED: "success",
  REJECTED: "error",
};

// isActive
export const IS_ACTIVE = {
  true: "ACTIVE",
  false: "IN ACTIVE",
};

// colors for isActive
export const IS_ACTIVE_COLORS = {
  true: "success",
  false: "error",
};

