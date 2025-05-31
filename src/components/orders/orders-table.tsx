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
import { mkConfig, generateCsv, download } from "export-to-csv";
import MDataGridTable from "@/lib/MDataGridTable";
import { Fragment, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconMailShare } from "@tabler/icons-react";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppMailReport from "@/common/send-email-report";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  IconDownload,
  IconEdit,
  IconEye,
  IconTrash,
} from "@tabler/icons-react";
import { getAllProducts, setProductData } from "@/toolkit/slices/product-slice";
import { useOrderColumns } from "./orders-columns";
import ViewOrder from "./view-order";
import * as React from "react";

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const OrdersTable = () => {
  const columns = useOrderColumns();
  const dispatch = useDispatch();

  const productsData = useSelector((state: any) => state.product);
  const themeData = useSelector((state: any) => state.theme);
  const filtersData = useSelector((state: any) => state.filter);

  const { pageIndex, pageSize } = productsData.pagination;

  // Fetch users when pagination changes
  useEffect(() => {
    const fetchData = () => {
      const payload = {
        skip: Number(pageIndex * pageSize),
        limit: pageSize,
        categories: [...filtersData?.selectedCategories],
      };
      dispatch(getAllProducts(payload) as any);
    };

    fetchData();
  }, [dispatch, pageIndex, pageSize, filtersData?.selectedCategories]);

  const handlePaginationChange = useCallback(
    (pageData: number) => {
      // console.log("handlePaginationChange", pageData);
      dispatch(
        setProductData({
          field: "pagination",
          data: pageData,
        } as any)
      );
    },
    [dispatch, pageIndex, pageSize]
  );

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(productsData.allProducts);
    download(csvConfig)(csv);
  };

  // Memoize table configuration
  const table = useMemo(
    () => ({
      columns,
      data: [...productsData.allProducts],
      getRowId: (row: any) => row._id || row?.id,
      displayColumnDefOptions: {
        "mrt-row-actions": {
          size: 60,
          minSize: 40,
          maxSize: 80,
          grow: false,
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
        isLoading: productsData.isLoading,
        pagination: {
          pageIndex: productsData.pagination.pageIndex || 0,
          pageSize: productsData.pagination.pageSize || 10,
        },
        columnPinning: { left: ["mrt-row-actions", "mrt-row-select"] },
      },
      rowCount: productsData.rowsCount || 10,
      onPaginationChange: (updatedPagination: any) => {
        const newPagination = updatedPagination(productsData.pagination);
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
              <IconButton size="small" onClick={() => {}}>
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
            marginX: 4,
          }}
        >
          <Typography variant="h6" id="tableTitle">
            Orders
          </Typography>
          <Box display="flex" gap={1} width="max-content">
            <MRT_GlobalFilterTextField table={table} />
            <Tooltip title="Download">
              <IconButton
                size="small"
                onClick={handleExportData}
                sx={{ marginLeft: "auto" }}
              >
                <IconDownload />
              </IconButton>
            </Tooltip>

            <MRT_ToggleFiltersButton table={table} size="large" />
            <MRT_ShowHideColumnsButton table={table} size="large" />
            <Tooltip title="Email Report">
              <IconButton
                size="large"
                onClick={() => {
                  dispatch(
                    setThemeData({
                      field: "mailReport",
                      data: true,
                    } as any)
                  );
                }}
              >
                <IconMailShare size={20} strokeWidth={1.5} />
              </IconButton>
            </Tooltip>

            {/* create button */}
            <Button size="small" variant="contained" onClick={() => {}}>
              Add &nbsp;
              <AddCircleIcon style={{ paddingLeft: "2px" }} />
            </Button>
          </Box>
        </Box>
      ),
    }),
    [columns, handleExportData, handlePaginationChange, productsData.isLoading]
  );

  return (
    <Fragment>
      <MDataGridTable title="Products" data={table} />
      {themeData?.mailReport && (
        <AppMailReport
          open={themeData?.mailReport}
          handleClose={() =>
            dispatch(setThemeData({ field: "mailReport", data: false } as any))
          }
        />
      )}
      {themeData?.featurDrawerView && <ViewOrder />}
    </Fragment>
  );
};

export default React.memo(OrdersTable);
