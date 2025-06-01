import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axiosClient } from "@/helpers/axios-helper";
import { setThemeData } from "./theme-slice";

interface Facade {
    height: number;
    width: number;
    wwr: number;
}

interface Skylight {
    height: number | null;
    width: number | null;
}

interface Design {
    id: string;
    name: string;
    city: string;
    shgc: number;
    exposureHours: number;
    notes: string;
    facades: {
        north: Facade;
        south: Facade;
        east: Facade;
        west: Facade;
    };
    skylight: Skylight | null;
    status: string;
    createdAt?: string;
    updatedAt?: string;
}

interface DesignsState {
    data: Design[];
    stats: any;
    isLoading: boolean;
    error: string | null;
    rowsCount: number;
    analysis: any;
    singleAnalysis: any;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}

type SetDesignsDataPayload = {
    [K in keyof DesignsState]: {
        field: K;
        data: DesignsState[K];
    };
}[keyof DesignsState];

const initialState: DesignsState = {
    data: [],
    stats: {},
    isLoading: false,
    error: null,
    rowsCount: 0,
    analysis: [],
    singleAnalysis: {},
    pagination: {
        pageIndex: 0,
        pageSize: 10,
    },
};

const designsSlice = createSlice({
    name: "designs",
    initialState,
    reducers: {
        setDesignsData: (state: any, action: PayloadAction<SetDesignsDataPayload>) => {
            const { field, data } = action.payload;
            state[field] = data;
        },
    },
});

export const { setDesignsData } = designsSlice.actions;
export default designsSlice.reducer;

// Get all designs
export const getAllDesigns = (payload?: {
    pageIndex?: number;
    pageSize?: number;
    search?: string;
    city?: string;
    status?: string;
}) => async (dispatch: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));
        const response = await axiosClient.get("/designs", {
            params: {
                page: payload?.pageIndex || 0,
                limit: payload?.pageSize || 10,
                search: payload?.search,
                city: payload?.city,
                status: payload?.status
            },
        });

        dispatch(setDesignsData({ field: "data", data: response.data?.data?.designs }));
        dispatch(setDesignsData({ field: "rowsCount", data: response.data?.data?.designs?.length }));

        if (payload?.pageIndex !== undefined || payload?.pageSize !== undefined) {
            dispatch(setDesignsData({
                field: "pagination",
                data: {
                    pageIndex: payload?.pageIndex || 0,
                    pageSize: payload?.pageSize || 10
                }
            }));
        }
    } catch (error: any) {
        console.log(error);
        dispatch(setDesignsData({ field: "data", data: [] }));
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to fetch designs",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
};

// Create design
export const createDesign = (payload: Omit<Design, 'id' | 'createdAt' | 'updatedAt'>) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));
        const response = await axiosClient.post("/designs", {
            ...payload
        });

        if (response.status === 201) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Design created successfully",
                        type: "success",
                    },
                } as any)
            );

            const count = getState().designs?.rowsCount;
            dispatch(
                setDesignsData({
                    field: "data",
                    data: [response.data?.design, ...getState().designs?.data],
                })
            );
            dispatch(
                setDesignsData({
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
                    message: error?.message || "Failed to create design",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
};

// Update design
export const updateDesign = (payload: Partial<Design> & { id: string }) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));
        const response = await axiosClient.put(`/designs/${payload.id}`, payload);

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Design updated successfully",
                        type: "success",
                    },
                } as any)
            );

            const allDesigns = getState().designs?.data;
            const updatedDesigns = allDesigns.map((design: Design) => {
                if (design.id === payload.id) {
                    return { ...design, ...response.data?.design };
                }
                return design;
            });

            dispatch(
                setDesignsData({
                    field: "data",
                    data: updatedDesigns,
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
                    message: error?.message || "Failed to update design",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
};

// Delete design
export const deleteDesign = (payload: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));
        const response = await axiosClient.delete(`/api/designs/${payload.id}`);

        if (response.status === 200) {
            dispatch(
                setThemeData({
                    field: "toast",
                    data: {
                        open: true,
                        message: "Design deleted successfully",
                        type: "success",
                    },
                } as any)
            );

            const allDesigns = getState().designs?.data;
            const updatedDesigns = allDesigns.filter(
                (design: any) => design.id !== payload.id
            );

            dispatch(
                setDesignsData({
                    field: "data",
                    data: updatedDesigns,
                })
            );

            dispatch(
                setDesignsData({
                    field: "rowsCount",
                    data: allDesigns.length - 1,
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
                    message: error?.message || "Failed to delete design",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
};

// get single design analysis
export const getSingleDesignAnalysis = (payload: any) => async (dispatch: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));

        const response = await axiosClient.get(`analysis/${payload?.id}/analyze`);

        if (response.status === 200) {
            dispatch(setDesignsData({ field: "singleAnalysis", data: response.data?.data }));
        }
    } catch (error: any) {
        console.log(error);
        dispatch(setDesignsData({ field: "singleAnalysis", data: {} }));

        // set toast
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || "Failed to get design analysis",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
}

// get compare designs
export const getCompareDesigns = (payload: any) => async (dispatch: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));

        const response = await axiosClient.get(`/designs/compare`, {
            params: {
                ids: payload?.ids
            }
        });

        if (response.status === 200) {
            dispatch(setDesignsData({ field: "analysis", data: response.data?.designs }) as any);
        }

    } catch (error: any) {

        // set toast
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || error?.response?.data?.message || error?.error?.message || "Failed to get compare designs",
                    type: "error",
                },
            } as any)
        );

    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
}

// get designs stats
export const getDesignsStats = (payload: any) => async (dispatch: any) => {
    try {
        dispatch(setDesignsData({ field: "isLoading", data: true }));
        // if payload is empty, then get all cities
        const response = await axiosClient.get(`/designs/stats`, {
            params: {
                city: payload?.length > 0 ? payload : null
            }
        });

        console.log(response.data, "response.data?.data");

        if (response.status === 200) {
            dispatch(setDesignsData({ field: "stats", data: response.data?.data }));
        }

    } catch (error: any) {
        console.log(error);

        // set toast
        dispatch(
            setThemeData({
                field: "toast",
                data: {
                    open: true,
                    message: error?.message || error?.response?.data?.message || error?.error?.message || "Failed to get designs stats",
                    type: "error",
                },
            } as any)
        );
    } finally {
        dispatch(setDesignsData({ field: "isLoading", data: false }));
    }
}