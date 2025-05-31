/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "@/helpers/axios-helper";
import { createSlice } from "@reduxjs/toolkit";
import { setThemeData } from "./theme-slice";
import moment from "moment";
import { formatUsersData } from "@/components/users/user-helper";

const initialState: any = {
  name: "",
  email: "",

  // filters
  startDate: moment().startOf("day").toISOString(),
  endDate: moment().endOf("day").toISOString(),
  categories: [],
  vendors: [],
  selectedCategories: [],
  selectedVendors: [],
  isLoading: false,

  // temp data for filters
  tempSelectedCategories: [],
  tempSelectedVendors: [],
  tempStartDate: moment().startOf("day").toISOString(),
  tempEndDate: moment().endOf("day").toISOString(),
};

const filterSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state: any, action) => {
      const { field, value } = action.payload;
      state[field] = value; // Update the specific field
    },

    setFilterData: (state: any, action) => {
      const { field, data } = action.payload;
      state[field] = data;
    },
    resetForm: () => initialState, // Reset form to initial state
  },
});

export const { updateField, resetForm, setFilterData } = filterSlice.actions;
export default filterSlice.reducer;

// get all catgories
export const getAllCategories = (payload: any) => async (dispatch: any) => {
  try {
    // Get all categories
    dispatch(setFilterData({ field: "isLoading", data: true } as any));

    const response = await axiosClient.get("/category", {
      params: payload,
    });
    //
    dispatch(
      setFilterData({
        field: "categories",
        data: response.data?.categories,
      } as any)
    );

    const selectedCategories =
      [...response.data?.categories].length > 0
        ? [...response.data?.categories].map((item) => item?.id)
        : [];

    // set temp selected categories
    dispatch(
      setFilterData({
        field: "tempSelectedCategories",
        data: selectedCategories,
      })
    );

    // set selected categories
    dispatch(
      setFilterData({
        field: "selectedCategories",
        data: selectedCategories,
      })
    );
  } catch (error: any) {
    dispatch(setFilterData({ field: "categories", data: [] } as any));
    dispatch(
      setThemeData({
        field: "toast",
        data: {
          open: true,
          message: "Failed to fetch categories",
          severity: "error",
        },
      } as any)
    );
  } finally {
    dispatch(setFilterData({ field: "isLoading", data: false } as any));
  }
};

// get all active vendors
export const getAllVendors = () => async (dispatch: any) => {
  try {
    // Get all vendors
    dispatch(setFilterData({ field: "isLoading", data: true } as any));

    const payload = {
      skip: 0,
      limit: 5000,
      where: {
        role: "VENDOR",
        isVerified: true,
      },
    };

    const response = await axiosClient.get("/auth/user", {
      params: payload,
    });

    dispatch(
      setFilterData({
        field: "vendors",
        data: formatUsersData(response.data?.users),
      } as any)
    );

    // set temp selected vendors
    dispatch(
      setFilterData({
        field: "tempSelectedVendors",
        data: response.data?.users?.map((item: any) => item?.id),
      } as any)
    );

    // set selected vendors
    dispatch(
      setFilterData({
        field: "selectedVendors",
        data: response.data?.users?.map((item: any) => item?.id),
      } as any)
    );
  } catch (error: any) {
    dispatch(setFilterData({ field: "vendors", data: [] } as any));
    dispatch(
      setThemeData({
        field: "toast",
        data: {
          open: true,
          message: "Failed to fetch vendors",
          severity: "error",
        },
      } as any)
    );
  } finally {
    dispatch(setFilterData({ field: "isLoading", data: false } as any));
  }
};
