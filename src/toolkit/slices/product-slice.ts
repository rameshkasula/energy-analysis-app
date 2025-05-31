/* eslint-disable @typescript-eslint/no-explicit-any */
// product => product slice => product data

import { axiosClient } from "@/helpers/axios-helper";
import { createSlice } from "@reduxjs/toolkit";
import { setThemeData } from "./theme-slice";

const initialState: any = {
  allProducts: [],
  rowsCount: 0,
  isLoading: false,

  pagination: {
    pageIndex: 0,
    pageSize: 10,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductData: (state: any, action: any) => {
      const { field, data } = action.payload;

      state[field] = data;
    },
  },
});

export const { setProductData } = productSlice.actions;

export default productSlice.reducer;

// get all products
export const getAllProducts = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(setProductData({ field: "isLoading", data: true } as any));
    const response = await axiosClient.get("/products", {
      params: payload,
    });

    dispatch(
      setProductData({
        field: "allProducts",
        data: response.data?.products,
      } as any)
    );
    // set count
    dispatch(
      setProductData({ field: "rowsCount", data: response.data?.count } as any)
    );
  } catch (error: any) {
    console.log(error);

    dispatch(setProductData({ field: "allProducts", data: [] } as any));

    // toast on error

    dispatch(
      setThemeData({
        field: "toast",
        data: {
          open: true,
          message: error?.message || "Something went wrong",
          type: "success",
        },
      } as any)
    );
  } finally {
    dispatch(setProductData({ field: "isLoading", data: false } as any));
  }
};

// create product
export const createProduct =
  (payload: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch(setProductData({ field: "isLoading", data: true } as any));

      const response = await axiosClient.post("/products", payload);

      const count = getState().product?.rowsCount;

      if (response.status === 201) {
        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: "Product created successfully",
              type: "success",
            },
          } as any)
        );

        // move it to all products and increase count
        dispatch(
          setProductData({
            field: "allProducts",
            data: [response.data?.product, ...response.data?.products],
          } as any)
        );
        // set count
        dispatch(
          setProductData({
            field: "rowsCount",
            data: count + 1,
          } as any)
        );
      }
    } catch (error: any) {
      console.log(error);

      // toast on error
      dispatch(
        setThemeData({
          field: "toast",
          data: {
            open: true,
            message: error?.message || "Something went wrong",
            type: "error",
          },
        } as any)
      );
    } finally {
      dispatch(setProductData({ field: "isLoading", data: false } as any));
    }
  };

// update product
export const updateProduct =
  (payload: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch(setProductData({ field: "isLoading", data: true } as any));

      const response = await axiosClient.put(
        `/products/${payload.id}`,
        payload
      );

      if (response.status === 200) {
        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: "Product updated successfully",
              type: "success",
            },
          } as any)
        );

        // update product in all products
        const allProducts = getState().product?.allProducts;
        const updatedProducts = allProducts.map((product: any) => {
          if (product.id === payload.id) {
            return response.data?.product;
          }
          return product;
        });

        dispatch(
          setProductData({
            field: "allProducts",
            data: updatedProducts,
          } as any)
        );
      }
    } catch (error: any) {
      console.log(error);

      // toast on error
      dispatch(
        setThemeData({
          field: "toast",
          data: {
            open: true,
            message: error?.message || "Something went wrong",
            type: "error",
          },
        } as any)
      );
    } finally {
      dispatch(setProductData({ field: "isLoading", data: false } as any));
    }
  };

// delete product
export const deleteProduct =
  (payload: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch(setProductData({ field: "isLoading", data: true } as any));

      const response = await axiosClient.delete(`/products/${payload.id}`);

      if (response.status === 200) {
        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: "Product deleted successfully",
              type: "success",
            },
          } as any)
        );

        // remove product from all products
        const allProducts = getState().product?.allProducts;
        const updatedProducts = allProducts.filter(
          (product: any) => product.id !== payload.id
        );

        dispatch(
          setProductData({
            field: "allProducts",
            data: updatedProducts,
          } as any)
        );

        // set count
        dispatch(
          setProductData({
            field: "rowsCount",
            data: allProducts.length - 1,
          } as any)
        );
      }
    } catch (error: any) {
      console.log(error);

      // toast on error
      dispatch(
        setThemeData({
          field: "toast",
          data: {
            open: true,
            message: error?.message || "Something went wrong",
            type: "error",
          },
        } as any)
      );
    } finally {
      dispatch(setProductData({ field: "isLoading", data: false } as any));
    }
  };
