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
import { Fragment, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { IconPlus } from "@tabler/icons-react";
import { useSolarRadiationColumns } from "./solar-radiation-columns";
import { deleteSolarRadiation, getAllSolarRadiation, setSolarRadiationData } from "@/toolkit/slices/solar-radiation-slice";
import {
    IconEdit,
    IconEye,
    IconTrash,
} from "@tabler/icons-react";
import ViewSolarRadiation from "./view-solar-radiation";
import CreateUpdateSolarRadiation from "./create-update-solar-radiation";

const SolarRadiationTable = () => {
    const columns = useSolarRadiationColumns();
    const dispatch = useDispatch();

    const solarRadiationData = useSelector((state: any) => state?.solarRadiation);
    const themeData = useSelector((state: any) => state?.theme);

    const { pageIndex, pageSize } = solarRadiationData?.pagination || { pageIndex: 0, pageSize: 10 };

    const fetchData = useCallback(() => {
        dispatch(getAllSolarRadiation({
            pageIndex,
            pageSize
        }) as any);
    }, [dispatch, pageIndex, pageSize]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handlePaginationChange = useCallback(
        (pageData: any) => {
            dispatch(
                setSolarRadiationData({
                    field: "pagination",
                    data: pageData,
                } as any)
            );
        },
        [dispatch]
    );

    const handleDelete = useCallback((id: string) => {
        dispatch(deleteSolarRadiation({ id }) as any);
    }, [dispatch]);

    const table = useMemo(
        () => ({
            columns,
            data: solarRadiationData?.data || [],
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
                isLoading: solarRadiationData.isLoading,
                pagination: {
                    pageIndex: solarRadiationData.pagination.pageIndex || 0,
                    pageSize: solarRadiationData.pagination.pageSize || 10,
                },
                columnPinning: { left: ["mrt-row-actions", "mrt-row-select"] },
            },
            rowCount: solarRadiationData.rowsCount || 0,
            onPaginationChange: (updatedPagination: any) => {
                const newPagination = updatedPagination(solarRadiationData.pagination);
                handlePaginationChange(newPagination);
            },

            renderRowActions: ({ row }: { row: any }) => {
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
                            <IconButton size="small" onClick={() => handleDelete(row?.original?._id)}>
                                <IconTrash size={20} strokeWidth={1.5} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                );
            },

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
                        Solar Radiation
                    </Typography>
                    <Box display="flex" gap={1} width="max-content">
                        <MRT_GlobalFilterTextField table={table} />
                        <MRT_ToggleFiltersButton table={table} size="large" />
                        <MRT_ShowHideColumnsButton table={table} size="large" />

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
        [columns, solarRadiationData.isLoading, solarRadiationData.data, solarRadiationData.pagination, solarRadiationData.rowsCount, handlePaginationChange]
    );

    return (
        <Fragment>
            <MDataGridTable title="Solar Radiation" data={table} />
            {themeData?.featureDrawer && <CreateUpdateSolarRadiation />}
            {themeData?.featurDrawerView && <ViewSolarRadiation />}
        </Fragment>
    );
};

export default SolarRadiationTable;
