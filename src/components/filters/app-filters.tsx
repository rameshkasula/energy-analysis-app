/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import * as React from "react";
import moment from "moment";

import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "@/toolkit/slices/filter-slice";

// ui / filters
import CategoriesFilter from "./categories-filter";
import DateRangeFilter from "./date-range-filter";
// import VendorsFilter from "./vendors-filter";


function AppFilters() {
  const {
    tempSelectedCategories,
    tempSelectedVendors,
    tempStartDate,
    tempEndDate,
    // startDate,
    // endDate,
    categories,
    // vendors,
    // selectedCategories,
    // selectedVendors,
  } = useSelector((state: any) => state.filter);

  const dispatch = useDispatch();

  const handleApply = () => {
    // apply the filters

    // update the filter data

    // 1. update the selected categories
    dispatch(
      setFilterData({
        field: "selectedCategories",
        data: tempSelectedCategories,
      })
    );

    // 2. update the selected vendors
    dispatch(
      setFilterData({
        field: "selectedVendors",
        data: tempSelectedVendors,
      })
    );

    // 3. update the start date
    dispatch(
      setFilterData({
        field: "startDate",
        data: tempStartDate,
      })
    );

    // 4. update the end date

    dispatch(
      setFilterData({
        field: "endDate",
        data: tempEndDate,
      })
    );
  };

  const handleReset = () => {
    // reset the filters

    // logic to reset the filters to the initial state
    const selectedCategories =
      [...categories].length > 0 ? [...categories].map((item) => item?.id) : [];

    // 1. reset the selected categories  and temp selected categories
    dispatch(
      setFilterData({
        field: "selectedCategories",
        data: selectedCategories,
      })
    );

    dispatch(
      setFilterData({
        field: "tempSelectedCategories",
        data: selectedCategories,
      })
    );

    // 2. reset the selected vendors
    dispatch(
      setFilterData({
        field: "selectedVendors",
        data: [],
      })
    );

    // 3. reset the start date
    dispatch(
      setFilterData({
        field: "startDate",
        data: moment().startOf("day").toISOString(),
      })
    );

    // 4. reset the end date

    dispatch(
      setFilterData({
        field: "endDate",
        data: moment().endOf("day").toISOString(),
      })
    );
  };

  return (
    <React.Fragment>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginY: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <DateRangeFilter />
          <CategoriesFilter />
          {/* <VendorsFilter /> */}
          {/* <TestItem name="DateRangeFilter" /> */}
          {/* <TestItem name="DateRangeFilter" /> */}

          {/* <TestItem name="DateRangeFilter" /> */}
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            // flexWrap: "wrap",
          }}
        >
          <Button variant="outlined" size="small" onClick={handleReset}>
            {"Reset"}
          </Button>
          <Button variant="contained" size="small" onClick={handleApply}>
            {"Apply"}
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  );
}

export default React.memo(AppFilters);
