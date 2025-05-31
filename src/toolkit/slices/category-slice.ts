/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "@/helpers/axios-helper";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  category: null,
  allCategories: [],
  rowsCount: 0,

  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryData: (state: any, action) => {
      const { field, data } = action.payload;
      state[field] = data;
    },
  },
});

export const { setCategoryData } = categorySlice.actions;

export default categorySlice.reducer;

// get all categories
export const getAllCategories = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(setCategoryData({ field: "isLoading", value: true }));
    const response = await axiosClient.get("/category", {
      params: payload,
    });

    console.log("response", response.data);

    dispatch(
      setCategoryData({
        field: "allCategories",
        data: response.data?.categories,
      })
    );
    // set count
    dispatch(
      setCategoryData({ field: "rowsCount", data: response.data?.count })
    );
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setCategoryData({ field: "isLoading", data: false }));
  }
};

// create category

export const createCategory = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(setCategoryData({ field: "isLoading", data: true }));
    const response = await axiosClient.post("/category", payload);

    dispatch(
      setCategoryData({
        field: "allCategories",
        data: [response.data, ...response.data],
      })
    );
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setCategoryData({ field: "isLoading", data: false }));
  }
};
