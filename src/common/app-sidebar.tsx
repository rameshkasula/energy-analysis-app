/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import { SidebarItems } from "@/utils/sidebar-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { IconAssembly } from "@tabler/icons-react";
import { APP_NAME } from "@/helpers/constants";

const AppSidebar = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state: any) => state.theme.isDrawerOpen);

  // State to manage timeout
  const [timeoutId, setTimeoutId] = React.useState(null);

  const handleDrawerToggle = () => {
    // @ts-ignore
    dispatch(setThemeData({ field: "isDrawerOpen", data: !isDrawerOpen }));
  };

  const renderSidebarItem = (item: any) => {
    const isSelected = pathname === item.href;
    return (
      <Box
        key={item.name}
        component={Link}
        href={item.href}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "10px 15px",
          borderRadius: "8px",
          justifyContent: "flex-start",
          cursor: "pointer",
          transition: "background-color 0.3s, color 0.3s",
          textDecoration: "none",
          color: isSelected
            ? theme.palette.primary.contrastText
            : theme.palette.text.secondary,
          backgroundColor: isSelected ? theme.palette.primary.main : "inherit",

          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            color: theme.palette.primary.main,
          },
        }}
      >
        <item.icon
          sx={{
            width: 24,
            height: 24,
            marginRight: 1,
          }}
        />
        {isDrawerOpen && (
          <Typography variant="body2" sx={{ marginLeft: 1, color: "inherit" }}>
            {item.name}
          </Typography>
        )}
      </Box>
    );
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout to keep the drawer open
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    // @ts-ignore
    dispatch(setThemeData({ field: "isDrawerOpen", data: true }));
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the drawer after a short delay
    const id: any = setTimeout(() => {
      // @ts-ignore

      dispatch(setThemeData({ field: "isDrawerOpen", data: false }));
    }, 200); // Adjust delay as needed
    setTimeoutId(id);
  };

  const DrawerList = (
    <Box
      sx={{
        width: isDrawerOpen ? 250 : 70,
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s",
        backgroundColor: theme.palette.background.paper,
        // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <IconButton
          sx={{
            width: 40,
            height: 40,
          }}
        >
          <IconAssembly />
        </IconButton>

        {isDrawerOpen && (
          <Typography variant="h6" sx={{ marginLeft: 1, color: "inherit" }}>
            {APP_NAME}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 1,
          height: "100%",
          width: "100%",
          justifyContent: "flex-start",
          display: "flex",
          flexDirection: "column",
          marginY: 1,
        }}
      >
        {SidebarItems.map(renderSidebarItem)}
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
      >
        {DrawerList}
      </Drawer>
      {/* {!isDrawerOpen && (
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 1,
            minHeight: "88vh",
            height: "100%",
            width: "100%",
            justifyContent: "flex-start",
            display: "flex",
            flexDirection: "column",
            marginY: 1,
            transition: "width 0.3s",
            backgroundColor: theme.palette.background.paper,
          }}
          onClick={handleDrawerToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {SidebarItems.map(renderSidebarItem)}
        </Box>
      )} */}
    </>
  );
};

export default React.memo(AppSidebar);
