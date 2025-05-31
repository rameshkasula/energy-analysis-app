/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { useBuildTheme } from "./colors";
import AppSnackBar from "@/common/app-snack-bar";
import NextTopLoader from "nextjs-toploader";
import SessionProviders from "@/helpers/session-helper";

typeof ThemeProvider;

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apptheme = useBuildTheme();
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={apptheme}>
        <CssBaseline />
        <AppSnackBar />
        <NextTopLoader
          color={apptheme.palette.primary.main}
          showSpinner={false}
          speed={300}
        />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
