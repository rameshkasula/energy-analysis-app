import { axiosClient } from "@/helpers/axios-helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setThemeData } from "./theme-slice";

interface SolarRadiation {
    _id?: string;
    city: string;
    radiation: {
        north: number;
        south: number;
        east: number;
        west: number;
        roof: number;
    };
    status: string;
    isActive: boolean;
    unit: string;
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface SolarRadiationState {
    data: SolarRadiation[];
    isLoading: boolean;
    error: string | null;
    rowsCount: number;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}

type SetSolarRadiationDataPayload = {
    [K in keyof SolarRadiationState]: {
        field: K;
        data: SolarRadiationState[K];
    };
}[keyof SolarRadiationState];

const initialState: SolarRadiationState = {
    data: [],
    isLoading: false,
    error: null,
    rowsCount: 0,
    pagination: {
        pageIndex: 0,
        pageSize: 10,
    },
};

const solarRadiationSlice = createSlice({
    name: "solarRadiation",
    initialState,
    reducers: {
        setSolarRadiationData: (state: any, action: PayloadAction<SetSolarRadiationDataPayload>) => {
            const { field, data } = action.payload;
            state[field] = data;
        },
    },
});

export const { setSolarRadiationData } = solarRadiationSlice.actions;

export default solarRadiationSlice.reducer;

// Get all solar radiation data
export const getAllSolarRadiation = (payload?: {
    pageIndex?: number;
    pageSize?: number;
    search?: string;
    city?: string;
    status?: string;
}) => async (dispatch: any) => {
    try {
        dispatch(setSolarRadiationData({ field: "isLoading", data: true }));
        const response = await axiosClient.get("/solar-radiation", {
            params: {
                skip: (payload?.pageIndex || 0) * (payload?.pageSize || 10),
                limit: payload?.pageSize || 10,
            },
        });


        const data = response.data?.data;
        dispatch(setSolarRadiationData({ field: "data", data: data?.data }));
        dispatch(setSolarRadiationData({ field: "rowsCount", data: data?.total }));

        if (payload?.pageIndex !== undefined || payload?.pageSize !== undefined) {
            dispatch(
                setSolarRadiationData({
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
        dispatch(setSolarRadiationData({ field: "data", data: [] }));
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to fetch solar radiation data",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setSolarRadiationData({ field: "isLoading", data: false }));
    }
};

// Create solar radiation data
export const createSolarRadiation = (payload: Omit<SolarRadiation, "_id" | "createdAt" | "updatedAt">) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setSolarRadiationData({ field: "isLoading", data: true }));
        const response = await axiosClient.post("/solar-radiation", payload);

        const allData = getState().solarRadiation
        if (response.status === 201) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Solar radiation data created successfully",
                        type: "success",
                    },
                } as any)
            );

            const count = allData?.rowsCount
            dispatch(
                setSolarRadiationData({
                    field: "data",
                    data: [response.data?.data, ...allData?.data],
                })
            );
            dispatch(
                setSolarRadiationData({
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
                    message: error?.message || error?.response?.data?.message || error?.error?.message || "Failed to create solar radiation data",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setSolarRadiationData({ field: "isLoading", data: false }));
    }
};

// Update solar radiation data
export const updateSolarRadiation = (payload: Partial<SolarRadiation> & { id: string }) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setSolarRadiationData({ field: "isLoading", data: true }));
        const response = await axiosClient.put(`/solar-radiation/${payload.id}`, payload);

        const allData = getState().solarRadiation

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Solar radiation data updated successfully",
                        type: "success",
                    },
                } as any)
            );

            const filteredData = allData?.data?.filter((item: SolarRadiation) => item._id !== payload.id);

            const updatedData = allData?.data?.length > 0 ? [response.data?.data, ...filteredData] : [response.data?.data];


            dispatch(
                setSolarRadiationData({
                    field: "data",
                    data: updatedData,
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
                    message: error?.message || error?.response?.data?.message || error?.error?.message || "Failed to update solar radiation data",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setSolarRadiationData({ field: "isLoading", data: false }));
    }
};

// Delete solar radiation data
export const deleteSolarRadiation = (payload: { id: string }) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setSolarRadiationData({ field: "isLoading", data: true }));
        const response = await axiosClient.delete(`/solar-radiation/${payload.id}`);

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Solar radiation data deleted successfully",
                        type: "success",
                    },
                } as any)
            );

            const allData = getState().solarRadiation?.data;
            const updatedData = allData.filter((item: SolarRadiation) => item._id !== payload.id);

            dispatch(
                setSolarRadiationData({
                    field: "data",
                    data: updatedData,
                })
            );

            dispatch(
                setSolarRadiationData({
                    field: "rowsCount",
                    data: allData.length - 1,
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
                    message: error?.message || error?.response?.data?.message || error?.error?.message || "Failed to delete solar radiation data",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setSolarRadiationData({ field: "isLoading", data: false }));
    }
}; 