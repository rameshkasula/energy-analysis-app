/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
    MRT_GlobalFilterTextField,
    MRT_ShowHideColumnsButton,
    MRT_ToggleFiltersButton,
} from "material-react-table";
import {
    Box,
    Button,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import MDataGridTable from "@/lib/MDataGridTable";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { IconPlus } from "@tabler/icons-react";
import { useDesignsColumns } from "./designs-columns";
import { getAllDesigns, getSingleDesignAnalysis, setDesignsData } from "@/toolkit/slices/designs-slice";
import {
    IconEdit,
    IconEye,
    IconTrash,
    IconReportAnalytics
} from "@tabler/icons-react";
import ViewDesign from "./view-design";
import CreateUpdateDesign from "./create-update-design";
import ViewDesignAnalysis from "./view-design-analysis";



const DesignsTable = () => {
    const columns = useDesignsColumns();
    const dispatch = useDispatch();
    const [showAnalysis, setShowAnalysis] = useState(false);

    const designsData = useSelector((state: any) => state.designs);
    const themeData = useSelector((state: any) => state.theme);

    const { pageIndex, pageSize } = designsData?.pagination || { pageIndex: 0, pageSize: 10 };

    // Fetch designs when component mounts or pagination changes
    useEffect(() => {
        dispatch(getAllDesigns({
            pageIndex,
            pageSize
        }) as any);
    }, [dispatch, pageIndex, pageSize]);

    const handlePaginationChange = useCallback(
        (pageData: any) => {
            dispatch(
                setDesignsData({
                    field: "pagination",
                    data: pageData,
                } as any)
            );
        },
        [dispatch]
    );

    const handleAnalysis = useCallback((id: string) => {
        dispatch(getSingleDesignAnalysis({ id }) as any);
    }, [dispatch]);


    // Memoize table configuration
    const table = useMemo(
        () => ({
            columns,
            data: designsData?.data || [],
            getRowId: (row: any) => row?._id || row?.id,
            displayColumnDefOptions: {
                "mrt-row-actions": {
                    size: 20,
                    minSize: 10,
                    maxSize: 40,
                    grow: true,
                },
            },
            paginationDisplayMode: "pages",
            enableColumnFilters: false,
            enableRowActions: true,
            enableColumnPinning: true,
            enableStickyHeader: true,
            filterFns: {
                customFilterFn: (row: any, id: any, filterValue: any) => {
                    return row.getValue(id) === filterValue;
                },
            },
            localization: {
                filterCustomFilterFn: "Custom Filter Fn",
            } as any,
            initialState: {
                density: "compact",
                showGlobalFilter: true,
                showColumnFilters: true,
            },
            manualPagination: true,
            state: {
                isLoading: designsData.isLoading,
                pagination: {
                    pageIndex: designsData.pagination.pageIndex || 0,
                    pageSize: designsData.pagination.pageSize || 10,
                },
                columnPinning: { left: ["mrt-row-actions", "mrt-row-select"] },
            },
            rowCount: designsData.rowsCount || 0,
            onPaginationChange: (updatedPagination: any) => {
                const newPagination = updatedPagination(designsData.pagination);
                handlePaginationChange(newPagination);
            },

            // row actions
            renderRowActions: ({ row }: { row: any }) => {
                return (
                    <Stack direction="row" spacing={0.2}>
                        {/* analysis button */}
                        <Tooltip title="Analysis">
                            <IconButton size="small" onClick={() => {
                                handleAnalysis(row?.original?._id);
                                setShowAnalysis(true);
                                dispatch(
                                    setThemeData({
                                        field: "featurDrawerView",
                                        data: true,
                                    } as any)
                                );
                            }}>
                                <IconReportAnalytics size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="View">
                            <IconButton
                                size="small"
                                onClick={() => {
                                    setShowAnalysis(false);

                                    dispatch(
                                        setThemeData({
                                            field: "featureDrawerData",
                                            data: row?.original,
                                        } as any)
                                    );

                                    dispatch(
                                        setThemeData({
                                            field: "featurDrawerView",
                                            data: true,
                                        } as any)
                                    );
                                }}
                            >
                                <IconEye size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Edit">
                            <IconButton
                                size="small"
                                onClick={() => {
                                    dispatch(
                                        setThemeData({
                                            field: "featureDrawerData",
                                            data: row?.original,
                                        } as any)
                                    );
                                    dispatch(
                                        setThemeData({
                                            field: "featureDrawer",
                                            data: true,
                                        } as any)
                                    );
                                }}
                            >
                                <IconEdit size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton size="small">
                                <IconTrash size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                );
            },

            // render top toolbar
            renderTopToolbar: ({ table }: any) => (
                <Box
                    py={1}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" id="tableTitle">
                        Designs
                    </Typography>
                    <Box display="flex" gap={1} width="max-content">
                        <MRT_GlobalFilterTextField table={table} />
                        <MRT_ToggleFiltersButton table={table} size="large" />
                        <MRT_ShowHideColumnsButton table={table} size="large" />

                        {/* create button */}
                        <Button
                            size="small"
                            variant="contained"
                            onClick={() => {
                                dispatch(
                                    setThemeData({
                                        field: "featureDrawer",
                                        data: true,
                                    } as any)
                                );
                            }}
                        >
                            Add <IconPlus size={20} style={{ paddingLeft: "2px" }} />
                        </Button>
                    </Box>
                </Box>
            ),
        }),
        [columns, designsData.isLoading, designsData.data, designsData.pagination, designsData.rowsCount, handlePaginationChange]
    );

    return (
        <Fragment>
            <MDataGridTable title="Designs" data={table} />
            {themeData?.featureDrawer && <CreateUpdateDesign />}
            {themeData?.featurDrawerView && (showAnalysis ?
                <ViewDesignAnalysis /> : <ViewDesign />)}
        </Fragment>
    );
};

export default DesignsTable;
