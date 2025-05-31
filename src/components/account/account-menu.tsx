/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppDrawer from "@/common/app-drawer";
import AppThemeBox from "./app-theme-box";
// import { signOut, useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";
// import { stringAvatar } from "./account-helper";
import { useRouter } from "next/navigation";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const themeData = useSelector((state: any) => state.theme);

  // const { data: session } = useSession();

  const dispatch = useDispatch();

  // const signOutHandler = async (e: any) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   await signOut({ callbackUrl: "/", redirect: true });
  // };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              variant="square"
            // {...stringAvatar(session?.user?.fullName)}
            // src={session?.user?.image}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            router.push("/profile");
          }}
        >
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(
              setThemeData({ field: "isSidebarOpen", data: true } as any)
            );
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        {/* <MenuItem onClick={signOutHandler}>
          <ListItemIcon>
            {isLoading ? <CircularProgress /> : <Logout fontSize="small" />}
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
      {themeData.isSidebarOpen && (
        <AppDrawer
          isOpen={themeData.isSidebarOpen}
          title="Settings"
          onClose={() =>
            dispatch(
              setThemeData({ field: "isSidebarOpen", data: false } as any)
            )
          }
        >
          <AppThemeBox />
        </AppDrawer>
      )}
    </React.Fragment>
  );
}
