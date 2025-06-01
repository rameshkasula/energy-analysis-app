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
import { download, generateCsv, mkConfig } from "export-to-csv";
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
    IconDownload,
} from "@tabler/icons-react";
import { useElectricityRatesColumns } from "./electricity-rates-columns";
import { deleteElectricityRate, getAllElectricityRates, setElectricityRatesData } from "@/toolkit/slices/electricity-rates-slice";
import CreateUpdateElectricityRate from "./create-update-electricity-rate";
import ViewElectricityRate from "./view-electricity-rate";
import { useDataFormatter } from "@/hooks/data-hook";

const UserTable = () => {
    const columns = useElectricityRatesColumns();
    const dispatch = useDispatch();

    const themeData = useSelector((state: any) => state.theme);
    const electricityRatesData = useSelector((state: any) => state.electricityRates);

    const { pageIndex, pageSize } = electricityRatesData?.pagination || { pageIndex: 0, pageSize: 10 };

    const fetchData = useCallback(() => {
        dispatch(getAllElectricityRates() as any);
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData, pageIndex, pageSize]);

    const handlePaginationChange = useCallback(
        (pageData: number) => {
            dispatch(
                setElectricityRatesData({
                    field: "pagination",
                    data: pageData,
                } as any)
            );
        },
        [dispatch]
    );

    const handleDelete = useCallback((row: any) => {
        dispatch(deleteElectricityRate({ id: row?._id }) as any)
    }, [dispatch]);

    const handleView = useCallback((row: any) => {
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
    }, [dispatch]);

    const handleEdit = useCallback((row: any) => {
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
    }, [dispatch]);

    const handleAdd = useCallback(() => {
        dispatch(
            setThemeData({
                field: "featureDrawer",
                data: true,
            } as any)
        );
    }, [dispatch]);

    const formattedData = useDataFormatter(electricityRatesData?.data);

    const renderRowActions = useCallback(({ row }: { row: any }) => (
        <Stack direction="row" spacing={0.2}>
            <Tooltip title="View">
                <IconButton
                    size="small"
                    onClick={() => handleView(row)}
                >
                    <IconEye size={20} strokeWidth={1.5} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Edit">
                <IconButton
                    size="small"
                    onClick={() => handleEdit(row)}
                >
                    <IconEdit size={20} strokeWidth={1.5} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
                <IconButton
                    size="small"
                    onClick={() => handleDelete(row?.original)}
                >
                    <IconTrash size={20} strokeWidth={1.5} />
                </IconButton>
            </Tooltip>
        </Stack>
    ), [handleView, handleEdit, handleDelete]);

    const renderTopToolbar = useCallback(({ table }: any) => (
        <Box
            py={1}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Typography variant="h6" id="tableTitle">
                Electricity Rates
            </Typography>
            <Box display="flex" gap={1} width="max-content">
                <MRT_GlobalFilterTextField table={table} />
                <MRT_ToggleFiltersButton table={table} size="large" />
                <MRT_ShowHideColumnsButton table={table} size="large" />

                <IconButton
                    size="small"
                    onClick={handleExportData}
                >
                    <IconDownload size={20} strokeWidth={1.5} />
                </IconButton>

                <Button
                    size="small"
                    color="primary"
                    onClick={handleAdd}
                    endIcon={<IconPlus size={20} strokeWidth={1.5} />}
                    variant="contained"
                >
                    Add
                </Button>
            </Box>
        </Box>
    ), [handleAdd]);

    const csvConfig = mkConfig({
        fieldSeparator: ",",
        decimalSeparator: ".",
        useKeysAsHeaders: true,
    });

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(formattedData);
        download(csvConfig)(csv);
    };


    // Memoize table configuration
    const table = useMemo(
        () => ({
            columns,
            data: formattedData,
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
                isLoading: electricityRatesData?.isLoading,
                pagination: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                },
                columnPinning: { left: ["mrt-row-actions", "mrt-row-select"] },
            },
            rowCount: electricityRatesData?.rowsCount || 10,
            onPaginationChange: (updatedPagination: any) => {
                const newPagination = updatedPagination(electricityRatesData?.pagination);
                handlePaginationChange(newPagination);
            },
            renderRowActions,
            renderTopToolbar,
        }),
        [
            columns,
            formattedData,
            electricityRatesData?.isLoading,
            electricityRatesData?.pagination,
            electricityRatesData?.rowsCount,
            pageIndex,
            pageSize,
            handlePaginationChange,
            renderRowActions,
            renderTopToolbar
        ]
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
