/* eslint-disable @typescript-eslint/no-explicit-any */
// user slice => auth, user data

import { axiosClient } from "@/helpers/axios-helper";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isLoading: false,
  user: null,
  allUsers: [],
  rowsCount: 0,

  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state: any, action: any) => {
      const { field, data } = action.payload;

      state[field] = data;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;

// sign in api
export const userSignUp = async (payload: any) => {
  try {
    const response = await axiosClient.post("/auth/user", payload);

    return response.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};

// get all users
export const getAllUsers = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(setUserData({ field: "isLoading", data: true } as any));
    const response = await axiosClient.get("/auth/user", {
      params: payload,
    });

    dispatch(
      setUserData({ field: "allUsers", data: response.data?.users } as any)
    );
    // set count

    dispatch(
      setUserData({ field: "rowsCount", data: response.data?.count } as any)
    );
  } catch (error) {
    console.log(error);

    dispatch(setUserData({ field: "allusers", data: [] } as any));
  } finally {
    dispatch(setUserData({ field: "isLoading", data: false } as any));
  }
};
