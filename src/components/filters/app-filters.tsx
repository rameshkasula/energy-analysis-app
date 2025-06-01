/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import moment from "moment";
import { Button, Stack, Paper, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "@/toolkit/slices/filter-slice";

import CategoriesFilter from "./categories-filter";
import DateRangeFilter from "./date-range-filter";
import CityFilter from "./city-filter";
import StatusFilter from "./status-filter";

function AppFilters() {
  const {
    tempSelectedCategories,
    tempSelectedVendors,
    tempStartDate,
    tempEndDate,
    categories,
  } = useSelector((state: any) => state.filter);

  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(setFilterData({ field: "selectedCategories", data: tempSelectedCategories }));
    dispatch(setFilterData({ field: "selectedVendors", data: tempSelectedVendors }));
    dispatch(setFilterData({ field: "startDate", data: tempStartDate }));
    dispatch(setFilterData({ field: "endDate", data: tempEndDate }));
  };

  const handleReset = () => {
    const selectedCategories = [...categories]?.map((item) => item?.id) || [];

    dispatch(setFilterData({ field: "selectedCategories", data: selectedCategories }));
    dispatch(setFilterData({ field: "tempSelectedCategories", data: selectedCategories }));
    dispatch(setFilterData({ field: "selectedVendors", data: [] }));
    dispatch(setFilterData({ field: "startDate", data: moment().startOf("day").toISOString() }));
    dispatch(setFilterData({ field: "endDate", data: moment().endOf("day").toISOString() }));
  };

  const Item = ({ title }: { title: string }) => {
    return (
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    )
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        mt: 1
      }}
    >
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {/* <DateRangeFilter />
          <CategoriesFilter />
          <CityFilter />
          <StatusFilter /> */}
        {/* <Item title="Date Range" />
        <Item title="Categories" />
        <Item title="Cities" />
        <Item title="Status" /> */}
        <DateRangeFilter />
        {/* <CategoriesFilter /> */}
        <CityFilter />
        <StatusFilter />
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button variant="outlined" size="small" onClick={handleReset} sx={{ minWidth: 100 }}>
          Reset
        </Button>
        <Button variant="contained" size="small" onClick={handleApply} sx={{ minWidth: 100 }}>
          Apply
        </Button>
      </Stack>
    </Stack>
  );
}

export default React.memo(AppFilters);
