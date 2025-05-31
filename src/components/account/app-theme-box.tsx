/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { darkThemeColors } from "@/utils/theme/dark-colors";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { IconMoon, IconSun } from "@tabler/icons-react";
import React, { memo, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const AppThemeBoxItem = memo(
  ({ color, title }: { color: any; title: string }) => {
    const themeData = useSelector((state: any) => state.theme);
    const dispatch = useDispatch();

    const boxSx = useMemo(
      () => ({
        cursor: "pointer",
        width: "200px",
        height: "70px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s",
        backgroundColor: color["main"],
        border: themeData.themeName === title ? "1px solid #e0e0e0" : "none",
        boxShadow: themeData.themeName === title ? 3 : 0,
        "&:hover": {
          backgroundColor: color["main"],
          boxShadow: 3,
        },
      }),
      [color, themeData.themeName, title]
    );

    const handleClick = useCallback(() => {
      dispatch(setThemeData({ field: "themeName", data: title } as any));
    }, [dispatch, title]);

    return (
      <Tooltip title={title} arrow>
        <Box sx={boxSx} onClick={handleClick} />
      </Tooltip>
    );
  }
);

const AppThemeBox = memo(() => {
  const dispatch = useDispatch();
  const themeData = useSelector((state: any) => state.theme);

  const handleThemeChange = useCallback(
    (mode: "light" | "dark") => {
      dispatch(setThemeData({ field: "mode", data: mode } as any));
    },
    [dispatch]
  );

  const commonBoxStyles = {
    cursor: "pointer",
    width: "100%",
    height: "70px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
  };

  const darkBoxSx = useMemo(
    () => ({
      ...commonBoxStyles,
      backgroundColor:
        themeData?.mode === "dark" ? "primary.light" : "transparent",
      borderColor: themeData?.mode === "dark" ? "primary.main" : "transparent",
      borderWidth: themeData?.mode === "dark" ? 2 : 0,
      boxShadow: themeData?.mode === "dark" ? 3 : 0,
      "&:hover": {
        backgroundColor:
          themeData?.mode === "dark" ? "primary.main" : undefined,
        boxShadow: 3,
      },
    }),
    [themeData]
  );

  const lightBoxSx = useMemo(
    () => ({
      ...commonBoxStyles,
      backgroundColor:
        themeData?.mode === "light" ? "primary.main" : "transparent",
      borderColor: themeData?.mode === "light" ? "primary.main" : "transparent",
      borderWidth: themeData?.mode === "light" ? 2 : 0,
      boxShadow: themeData?.mode === "light" ? 3 : 0,
      "&:hover": {
        backgroundColor: themeData?.mode === "light" ? undefined : undefined,
        boxShadow: 3,
      },
    }),
    [themeData]
  );

  return (
    <Box>
      <Stack alignItems="center" margin={2} direction="row" spacing={2}>
        <Tooltip title="Dark Mode" arrow>
          <Box onClick={() => handleThemeChange("dark")} sx={darkBoxSx}>
            <IconMoon size={32} stroke={1.5} />
          </Box>
        </Tooltip>
        <Tooltip title="Light Mode" arrow>
          <Box onClick={() => handleThemeChange("light")} sx={lightBoxSx}>
            <IconSun size={32} stroke={1.5} />
          </Box>
        </Tooltip>
      </Stack>

      <Typography sx={{ textAlign: "center", marginBottom: "16px" }}>
        Themes Options
      </Typography>
      <Stack alignItems="center" margin={2} direction="row" spacing={2}>
        {darkThemeColors.map((color) => (
          <AppThemeBoxItem
            key={color.name}
            color={color.palette.primary}
            title={color.name}
          />
        ))}
      </Stack>
    </Box>
  );
});

export default AppThemeBox;
