import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
  devTools: process.env.NODE_ENV !== "production",
});
