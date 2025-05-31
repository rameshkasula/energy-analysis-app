// create a slice for electricity rates


import { axiosClient } from "@/helpers/axios-helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setThemeData } from "./theme-slice";

interface ElectricityRate {
    _id?: string;
    city: string;
    rate: number;
    unit: string;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    isActive: boolean;
    notes: string;
    createdAt?: string;
    updatedAt?: string;
}

interface ElectricityRatesState {
    data: ElectricityRate[];
    isLoading: boolean;
    error: string | null;
    rowsCount: number;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}

type SetElectricityRatesDataPayload = {
    [K in keyof ElectricityRatesState]: {
        field: K;
        data: ElectricityRatesState[K];
    };
}[keyof ElectricityRatesState];

const initialState: ElectricityRatesState = {
    data: [],
    isLoading: false,
    error: null,
    rowsCount: 0,
    pagination: {
        pageIndex: 0,
        pageSize: 10,
    },
};

const electricityRatesSlice = createSlice({
    name: "electricityRates",
    initialState,
    reducers: {
        setElectricityRatesData: (state: any, action: PayloadAction<SetElectricityRatesDataPayload>) => {
            const { field, data } = action.payload;
            state[field] = data;
        },
    },
});

export const { setElectricityRatesData } = electricityRatesSlice.actions;

export default electricityRatesSlice.reducer;

// Get all electricity rates
export const getAllElectricityRates = (payload?: {
    pageIndex?: number;
    pageSize?: number;
    search?: string;
    city?: string;
    status?: string;
}) => async (dispatch: any) => {
    try {
        dispatch(setElectricityRatesData({ field: "isLoading", data: true }));
        const response = await axiosClient.get("/electricity-rates", {
            params: {
                page: payload?.pageIndex || 0,
                limit: payload?.pageSize || 10,
                search: payload?.search,
                city: payload?.city,
                status: payload?.status,
            },
        });


        const data = response.data?.data?.rates;

        dispatch(setElectricityRatesData({ field: "data", data: data }));
        dispatch(setElectricityRatesData({ field: "rowsCount", data: data?.length }));

        if (payload?.pageIndex !== undefined || payload?.pageSize !== undefined) {
            dispatch(
                setElectricityRatesData({
                    field: "pagination",
                    data: {
                        pageIndex: payload?.pageIndex || 0,
                        pageSize: payload?.pageSize || 10,
                    },
                })
            );
        }
    } catch (error: any) {
        console.log(error);
        dispatch(setElectricityRatesData({ field: "data", data: [] }));
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to fetch electricity rates",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setElectricityRatesData({ field: "isLoading", data: false }));
    }
};

// Create electricity rate
export const createElectricityRate = (payload: Omit<ElectricityRate, "_id" | "createdAt" | "updatedAt">) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setElectricityRatesData({ field: "isLoading", data: true }));
        const response = await axiosClient.post("/electricity-rates", payload);

        if (response.status === 201) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Electricity rate created successfully",
                        type: "success",
                    },
                } as any)
            );

            const count = getState().electricityRates?.rowsCount;
            dispatch(
                setElectricityRatesData({
                    field: "data",
                    data: [response.data?.electricityRate, ...getState().electricityRates?.data],
                })
            );
            dispatch(
                setElectricityRatesData({
                    field: "rowsCount",
                    data: count + 1,
                })
            );
        }
    } catch (error: any) {
        console.log(error);
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to create electricity rate",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setElectricityRatesData({ field: "isLoading", data: false }));
    }
};

// Update electricity rate
export const updateElectricityRate = (payload: Partial<ElectricityRate> & { id: string }) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setElectricityRatesData({ field: "isLoading", data: true }));
        const response = await axiosClient.put(`/electricity-rates/${payload.id}`, payload);

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Electricity rate updated successfully",
                        type: "success",
                    },
                } as any)
            );

            const allRates = getState().electricityRates?.data;
            const updatedRates = allRates.map((rate: ElectricityRate) => {
                if (rate._id === payload.id) {
                    return { ...rate, ...response.data?.electricityRate };
                }
                return rate;
            });

            dispatch(
                setElectricityRatesData({
                    field: "data",
                    data: updatedRates,
                })
            );
        }
    } catch (error: any) {
        console.log(error);
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to update electricity rate",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setElectricityRatesData({ field: "isLoading", data: false }));
    }
};

// Delete electricity rate
export const deleteElectricityRate = (payload: { id: string }) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setElectricityRatesData({ field: "isLoading", data: true }));
        const response = await axiosClient.delete(`/electricity-rates/${payload?.id}`);

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Electricity rate deleted successfully",
                        type: "success",
                    },
                } as any)
            );

            const allRates = getState().electricityRates?.data;
            const updatedRates = allRates.filter((rate: ElectricityRate) => rate._id !== payload.id);

            dispatch(
                setElectricityRatesData({
                    field: "data",
                    data: updatedRates,
                })
            );

            dispatch(
                setElectricityRatesData({
                    field: "rowsCount",
                    data: allRates.length - 1,
                })
            );
        }
    } catch (error: any) {
        console.log(error);
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to delete electricity rate",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setElectricityRatesData({ field: "isLoading", data: false }));
    }
};
