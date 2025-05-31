/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  mode: "light",
  isDrawerOpen: false,
  isSidebarOpen: false,
  drawerWidth: 300,
  themeName: "ORANGE_THEME",
  // snack bar
  toast: {
    open: false,
    message: "",
    type: "success",
  },

  // app mail report
  mailReport: false,
  userEmails: [],
  isReportLoading: false,

  // drawer
  featureDrawer: false, // create/update
  featurDrawerView: false, // view
  featureDrawerData: null, // data
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },

    setThemeData: (state: any, action: any) => {
      const { field, data } = action.payload;

      state[field] = data;
    },
  },
});

export const { setMode, setThemeData } = themeSlice.actions;

export default themeSlice.reducer;
