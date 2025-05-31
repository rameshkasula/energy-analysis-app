/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { useBuildTheme } from "./colors";
import AppSnackBar from "@/common/app-snack-bar";
import SessionProviders from "@/helpers/session-helper";
import NextTopLoader from "nextjs-toploader";

typeof ThemeProvider;

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apptheme = useBuildTheme();
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <SessionProviders>
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
      </SessionProviders>
    </AppRouterCacheProvider>
  );
}
