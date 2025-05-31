/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { darkThemeColors } from "./dark-colors";
import { useSelector } from "react-redux";
import { useMemo } from "react";

// Load the Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Define the type for the theme slice state
interface ThemeSliceState {
  themeName: string;
  mode: "light" | "dark";
}

// Custom hook to build the theme
export const useBuildTheme = () => {
  // Use useSelector to access the theme slice from the Redux store
  const themeSliceData = useSelector(
    (state: { theme: ThemeSliceState }) => state.theme
  );

  // Memoize the palette selection based on the current theme name
  const palette = useMemo(() => {
    const selectedColor = darkThemeColors.find(
      (color) => color.name === themeSliceData.themeName
    );
    return selectedColor ? selectedColor.palette : darkThemeColors[3].palette; // Fallback to default color scheme
  }, [themeSliceData.themeName]);

  // Create a MUI theme based on the current state
  const themeData = useMemo(() => {
    return createTheme({
      palette: {
        mode: themeSliceData.mode || "dark", // Default to dark mode if not specified
        ...palette,
      },
      typography: {
        fontFamily: roboto.style.fontFamily,
      },
      shape: {
        borderRadius: 8, // Default border radius for components
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8, // Custom border radius for buttons
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              borderRadius: 8, // Custom border radius for text fields
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              borderRadius: "50%", // Circular icon button
              padding: 8, // Smaller padding for icon buttons
            },
          },
        },
      },
    });
  }, [themeSliceData.mode, palette]); // Recreate theme when mode or palette changes

  return themeData; // Return the constructed theme object
};
