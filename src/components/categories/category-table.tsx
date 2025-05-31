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
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
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
import { useCategoryColumns } from "./category-columns";
import {
  getAllCategories,
  setCategoryData,
} from "@/toolkit/slices/category-slice";
import CreateUpdateCategory from "./create-update-category";
import ViewCategory from "./view-category";
// import CreateUpdateUser from "./create-update-user";
// import ViewUser from "./view-user";

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const CategoryTable = () => {
  const columns = useCategoryColumns();
  const dispatch = useDispatch();

  const categoryData = useSelector((state: any) => state.category);
  const themeData = useSelector((state: any) => state.theme);

  const [drawerTitle, setDrawerTitle] = useState("Create Category");

  // Local state for pagination
  const [localPagination, setLocalPagination] = useState({
    pageIndex: categoryData?.pagination?.pageIndex || 0,
    pageSize: categoryData?.pagination?.pageSize || 10,
  });

  const { pageIndex, pageSize } = localPagination;

  // Fetch users when pagination changes
  useEffect(() => {
    const fetchData = () => {
      const payload = {
        skip: Number(pageIndex * pageSize),
        limit: pageSize,
      };
      dispatch(getAllCategories(payload) as any);
    };

    fetchData();
  }, [dispatch, pageIndex, pageSize]);

  const handlePaginationChange = useCallback(
    (pageData: any) => {
      dispatch(
        setCategoryData({
          field: "pagination",
          data: pageData,
        } as any)
      );

      setLocalPagination({
        pageIndex: pageData?.pageIndex || 0,
        pageSize: pageData?.pageSize || 10,
      });
    },
    [dispatch, pageIndex, pageSize]
  );

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(categoryData?.allCategories);
    download(csvConfig)(csv);
  };

  // Memoize table configuration
  const table = useMemo(
    () => ({
      columns,
      data: [...categoryData?.allCategories],
      getRowId: (row: any) => row._id || row?.id,
      displayColumnDefOptions: {
        "mrt-row-actions": {
          size: 60,
          minSize: 40,
          maxSize: 60,
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
        isLoading: categoryData.isLoading,
        pagination: localPagination,
        columnPinning: { left: ["mrt-row-actions"] },
      },
      rowCount: categoryData?.rowsCount ?? 10,
      onPaginationChange: (updatedPagination: any) => {
        const newPagination = updatedPagination(categoryData?.pagination);

        if (!newPagination) {
          return;
        } else {
          handlePaginationChange(newPagination);
        }
      },

      // row actions
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

                  setDrawerTitle("View Category");
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

                  setDrawerTitle("Edit Category");
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
            marginX: 4,
          }}
        >
          <Typography variant="h6" id="tableTitle">
            Categories
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

                setDrawerTitle("Create Category");
              }}
            >
              Add &nbsp;
              <AddCircleIcon style={{ paddingLeft: "2px" }} />
            </Button>
          </Box>
        </Box>
      ),
    }),
    [pageIndex, pageSize, categoryData?.allCategories, categoryData?.rowsCount]
  );

  return (
    <Fragment>
      <MDataGridTable title="Category" data={table} />
      {themeData?.mailReport && (
        <AppMailReport
          open={themeData?.mailReport}
          handleClose={() =>
            dispatch(setThemeData({ field: "mailReport", data: false } as any))
          }
        />
      )}
      {themeData?.featureDrawer && <CreateUpdateCategory title={drawerTitle} />}
      {themeData?.featurDrawerView && <ViewCategory title={drawerTitle} />}
    </Fragment>
  );
};

export default CategoryTable;
