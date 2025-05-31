/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import DatePicker from "react-multi-date-picker";
import {
  Box,
  Button,
  styled,
  Grid,
  // Typography,
  Chip,
  useTheme,
} from "@mui/material";
import { IconCalendarEvent } from "@tabler/icons-react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "@/toolkit/slices/filter-slice";
// import DateRangePlugin from "./date-range-plugin";

const StyledPicker = styled(DatePicker)(({ theme }) => ({
  "&.rmdp-wrapper": {
    width: "min-content",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
  },
  "& .rmdp-day, .rmdp-week-day": {
    color: theme.palette.mode === "dark" ? "white" : "black", // theme.palette.grey[500]
  },
  "& .rmdp-day.rmdp-deactive, .rmdp-day.rmdp-disabled": {
    color: "#8798ad",
  },
  "& .rmdp-range-hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .rmdp-day:not(.rmdp-disabled,.rmdp-day-hidden) span:hover": {
    // color: "#fff",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
  },
  "& .rmdp-range": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    boxShadow: "none",
  },
  "& .rmdp-header-values": {
    color: theme.palette.primary.main,
  },
  "& .rmdp-arrow": {
    border: `solid ${theme.palette.primary.main}`,
    borderWidth: "0 2px 2px 0",
    padding: "3px",
  },
  "& .rmdp-arrow-container": {
    "&:hover:not(.disabled)": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  "&.rmdp-ep-arrow": {
    "&:after": {
      backgroundColor: theme.palette.primary.main,
      // borderBottom: `1px solid ${theme.palette.background.paper}`
    },
  },
  "&.rmdp-ep-arrow[direction=top]": {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  "& .rmdp-month-picker, .rmdp-year-picker": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const DATE_RANGE_SEPARATOR = "to";

const dateFormatter = (date: any) => {
  return moment(date).format("DD/MM/YYYY");
};

const dateRangeGenerator = (startDate: any, endDate: any) => {
  const formattedStartingDate = dateFormatter(startDate);
  const formattedEndDate = dateFormatter(endDate);
  return `${formattedStartingDate} ${DATE_RANGE_SEPARATOR} ${formattedEndDate}`;
};

const availableRanges = [
  { label: "Today", value: 0 },
  { label: "Yesterday", value: 1 },
  { label: "Last 7 days", value: 7 },
  { label: "Last 30 days", value: 30 },
  { label: "This year", value: moment().isLeapYear() ? 366 : 365 },
];

const DateRangePicker = () => {
  const datePickerRef: any = React.useRef();
  const filtersData = useSelector((state: any) => state.filter);

  const [dateRange, setDateRange] = React.useState<any>(
    dateRangeGenerator(filtersData?.startDate, filtersData?.endDate)
  );

  const dispatch = useDispatch();
  const [calendarDateRange, setCalendarDateRange] = React.useState<any>([]);

  const handleDateChange = (dateObj: any) => {
    let startDate =
      (dateObj.validatedValue[0] && new Date(dateObj.validatedValue[0])) || "";
    let endDate =
      (dateObj.validatedValue[1] && new Date(dateObj.validatedValue[1])) || "";

    startDate = moment(startDate).startOf("day").toISOString();
    endDate = moment(endDate).endOf("day").toISOString();

    if (startDate && endDate) {
      const dateRangeValue = dateRangeGenerator(startDate, endDate);

      dispatch(setFilterData({ field: "tempStartDate", data: startDate }));
      dispatch(setFilterData({ field: "tempEndDate", data: endDate }));

      setDateRange(dateRangeValue);
      setCalendarDateRange([startDate, endDate]);
      if (datePickerRef.current && datePickerRef.current.closeCalendar) {
        datePickerRef.current.closeCalendar();
      }
    }
  };

  const theme = useTheme();

  return (
    <Grid item xs={12} lg={6} sm={6} display="flex" flexWrap="wrap" p={0}>
      <StyledPicker
        ref={datePickerRef}
        render={(value, openCalendar) => (
          <Button
            // sx={{ textTransform: "none", margin: "10px 0 0 0" }}
            variant="outlined"
            size="small"
            color="primary"
            aria-describedby="date-range"
            onClick={openCalendar}
            startIcon={<IconCalendarEvent size={18} stroke={2} />}
          >
            {dateRange}
          </Button>
        )}
        onChange={(e, dateObj) => handleDateChange(dateObj)}
        value={calendarDateRange}
        numberOfMonths={2}
        range
        rangeHover
        highlightToday={false}
        maxDate={new Date()}
        portal={false}
        hideOnScroll={true}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
            flexWrap: "wrap",
            margin: "10px 0 0 0",
            backgroundColor: theme.palette.primary.light,
          }}
        >
          {availableRanges.map((range) => (
            <Chip
              key={range.label}
              label={range.label}
              color="primary"
              onClick={() => {
                const start = moment()
                  .subtract(range.value, "days")
                  .startOf("day")
                  .toISOString();
                const end = moment().endOf("day").toISOString();
                handleDateChange({ validatedValue: [start, end] });
              }}
              variant="outlined"
            />
          ))}
        </Box>
      </StyledPicker>
    </Grid>
  );
};

export default React.memo(DateRangePicker);
