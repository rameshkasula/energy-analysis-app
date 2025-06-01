/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { APP_NAME } from "@/helpers/constants";

export default function AppHeader() {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "background.paper",
        color: "text.primary",
      }}
    >
      <AppBar
        sx={{
          zIndex: 100,
          elevation: 2,
          boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)",
        }}
        square={true}
        position="static"
      >
        <Toolbar
          sx={{
            background: "linear-gradient(to right, primary.main, primary.dark)",
            color: "primary.contrastText",
          }}
        >
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              dispatch(
                setThemeData({
                  field: "isDrawerOpen",
                  data: true,
                } as any)
              );
            }}
            onMouseEnter={() => {
              dispatch(
                setThemeData({
                  field: "isDrawerOpen",
                  data: true,
                } as any)
              );
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {APP_NAME}
          </Typography>

          {/* <ThemeToggle /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
