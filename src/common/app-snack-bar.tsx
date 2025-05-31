/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";

export default function AppSnackBar() {
  const themeData = useSelector((state: any) => state.theme);

  const dispatch = useDispatch();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      setThemeData({
        field: "toast",
        data: {
          open: false,
          message: "",
          type: "success",
        },
      } as any)
    );
  };

  return (
    <>
      {themeData?.toast?.open && (
        <Snackbar
          open={themeData?.toast?.open}
          autoHideDuration={2500}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={themeData?.toast?.type || "success"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {themeData?.toast?.message || ""}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
