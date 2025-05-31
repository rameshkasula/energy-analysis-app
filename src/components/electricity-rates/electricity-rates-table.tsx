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
import { mkConfig } from "export-to-csv";
import MDataGridTable from "@/lib/MDataGridTable";
import { Fragment, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppMailReport from "@/common/send-email-report";

import {
    IconEdit,
    IconEye,
    IconTrash,
    IconPlus,
} from "@tabler/icons-react";
import { useElectricityRatesColumns } from "./electricity-rates-columns";
import { deleteElectricityRate, getAllElectricityRates, setElectricityRatesData } from "@/toolkit/slices/electricity-rates-slice";
import CreateUpdateElectricityRate from "./create-update-electricity-rate";
import ViewElectricityRate from "./view-electricity-rate";


const UserTable = () => {
    const columns = useElectricityRatesColumns();
    const dispatch = useDispatch();

    const themeData = useSelector((state: any) => state.theme);
    const electricityRatesData = useSelector((state: any) => state.electricityRates);

    const { pageIndex, pageSize } = electricityRatesData?.pagination;

    // Fetch users when pagination changes
    useEffect(() => {
        const fetchData = () => {
            dispatch(getAllElectricityRates() as any);
        };
        fetchData();
    }, [dispatch, pageIndex, pageSize]);

    const handlePaginationChange = useCallback(
        (pageData: number) => {
            // console.log("handlePaginationChange", pageData)
            dispatch(
                setElectricityRatesData({
                    field: "pagination",
                    data: pageData,
                } as any)
            );
        },
        [dispatch, pageIndex, pageSize]
    );

    const handleDelete = useCallback((row: any) => {
        dispatch(deleteElectricityRate({ id: row?._id }) as any)
    }, [dispatch])


    // Memoize table configuration
    const table = useMemo(
        () => ({
            columns,
            data: electricityRatesData?.data || [],
            getRowId: (row: any) => row._id || row?.id,
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
                isLoading: electricityRatesData?.isLoading,
                pagination: {
                    pageIndex: electricityRatesData?.pagination.pageIndex || 0,
                    pageSize: electricityRatesData?.pagination.pageSize || 10,
                },
                columnPinning: { left: ["mrt-row-actions", "mrt-row-select"] },
            },
            rowCount: electricityRatesData?.rowsCount || 10,
            onPaginationChange: (updatedPagination: any) => {
                const newPagination = updatedPagination(electricityRatesData?.pagination);
                handlePaginationChange(newPagination);
            },

            // row actions
            renderRowActions: ({ row }: { row: any }) => {
                // console.log("row", row);
                return (
                    <Stack direction="row" spacing={0.2}>
                        <Tooltip title="View">
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
                            <IconButton size="small" onClick={() => {
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

                                // setDrawerTitle("Edit Electricity Rate");
                            }}>
                                <IconEdit size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton size="small" onClick={() => {
                                handleDelete(row?.original)
                            }}>
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
                        // marginX: 4,
                    }}
                >
                    <Typography variant="h6" id="tableTitle">
                        Electricity Rates
                    </Typography>
                    <Box display="flex" gap={1} width="max-content">
                        <MRT_GlobalFilterTextField table={table} />

                        <MRT_ToggleFiltersButton table={table} size="large" />
                        <MRT_ShowHideColumnsButton table={table} size="large" />

                        {/* create button */}
                        <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            onClick={() => {
                                dispatch(
                                    setThemeData({
                                        field: "featureDrawer",
                                        data: true,
                                    } as any)
                                );
                            }}
                        >
                            Add  <IconPlus size={20} style={{ paddingLeft: "2px" }} />
                        </Button>
                    </Box>
                </Box>
            ),
        }),
        [columns, handlePaginationChange, electricityRatesData?.isLoading]
    );

    return (
        <Fragment>
            <MDataGridTable title="Electricity Rates" data={table} />
            {themeData?.mailReport && (
                <AppMailReport
                    open={themeData?.mailReport}
                    handleClose={() =>
                        dispatch(setThemeData({ field: "mailReport", data: false } as any))
                    }
                />
            )}
            {themeData?.featureDrawer && <CreateUpdateElectricityRate />}
            {themeData?.featurDrawerView && <ViewElectricityRate />}
        </Fragment>
    );
};

export default UserTable;
