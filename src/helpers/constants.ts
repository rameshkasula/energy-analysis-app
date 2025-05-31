export const ENV_VARIABLES = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  dummyURL: process.env.NEXT_PUBLIC_BASE_URL,
  AUTH_SECRET: process.env.AUTH_SECRET || "secret",
  authUrl: process.env.NEXTAUTH_URL || "http://localhost:5000/api",
};

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

