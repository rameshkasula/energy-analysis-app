/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import DatePicker from "react-multi-date-picker";
import {
  Box,
  Button,
  styled,
  Grid,
  Chip,
  useTheme,
} from "@mui/material";
import { IconCalendarEvent } from "@tabler/icons-react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setFilterData } from "@/toolkit/slices/filter-slice";

const StyledPicker = styled(DatePicker)(({ theme }) => ({
  "&.rmdp-wrapper": {
    width: "min-content",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
  },
  "& .rmdp-day, .rmdp-week-day": {
    color: theme.palette.text.primary,
  },
  "& .rmdp-day.rmdp-deactive, .rmdp-day.rmdp-disabled": {
    color: theme.palette.text.disabled,
  },
  "& .rmdp-range-hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "& .rmdp-day:not(.rmdp-disabled,.rmdp-day-hidden) span:hover": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  "& .rmdp-range": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: "none",
  },
  "& .rmdp-header-values": {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  "& .rmdp-arrow": {
    border: `solid ${theme.palette.primary.main}`,
    borderWidth: "0 2px 2px 0",
    padding: "3px",
  },
  "& .rmdp-arrow-container": {
    "&:hover:not(.disabled)": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  "&.rmdp-ep-arrow": {
    "&:after": {
      backgroundColor: theme.palette.background.paper,
    },
  },
  "&.rmdp-ep-arrow[direction=top]": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "& .rmdp-month-picker, .rmdp-year-picker": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  "& .rmdp-panel": {
    backgroundColor: theme.palette.background.paper,
  },
  "& .rmdp-panel-header": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "& .rmdp-panel-body": {
    backgroundColor: theme.palette.background.paper,
  },
}));

const DATE_RANGE_SEPARATOR = "to";

const dateFormatter = (date: any) => moment(date).format("DD/MM/YYYY");

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
  const datePickerRef = React.useRef<any>();
  const theme = useTheme();
  const dispatch = useDispatch();
  const filtersData = useSelector((state: any) => state.filter);

  const [dateRange, setDateRange] = React.useState<string>(
    dateRangeGenerator(filtersData?.startDate, filtersData?.endDate)
  );
  const [calendarDateRange, setCalendarDateRange] = React.useState<any>([]);

  const handleDateChange = React.useCallback((dateObj: any) => {
    const startDate = dateObj.validatedValue[0] ? moment(dateObj.validatedValue[0]).startOf("day").toISOString() : "";
    const endDate = dateObj.validatedValue[1] ? moment(dateObj.validatedValue[1]).endOf("day").toISOString() : "";

    if (startDate && endDate) {
      const dateRangeValue = dateRangeGenerator(startDate, endDate);

      dispatch(setFilterData({ field: "tempStartDate", data: startDate }));
      dispatch(setFilterData({ field: "tempEndDate", data: endDate }));

      setDateRange(dateRangeValue);
      setCalendarDateRange([startDate, endDate]);

      if (datePickerRef.current?.closeCalendar) {
        datePickerRef.current.closeCalendar();
      }
    }
  }, [dispatch]);

  const handleQuickRangeSelect = React.useCallback((days: number) => {
    const start = moment().subtract(days, "days").startOf("day").toISOString();
    const end = moment().endOf("day").toISOString();
    handleDateChange({ validatedValue: [start, end] });
  }, [handleDateChange]);

  return (
    <Grid item xs={12} lg={6} sm={6} display="flex" flexWrap="wrap" p={0}>
      <StyledPicker
        ref={datePickerRef}
        render={(value, openCalendar) => (
          <Button
            variant="outlined"
            size="small"
            color="primary"
            aria-describedby="date-range"
            onClick={openCalendar}
            startIcon={<IconCalendarEvent size={18} stroke={2} />}
            sx={{
              textTransform: "none",
              width: "230px",
              height: "30px",
              borderColor: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.dark,
              }
            }}
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
            backgroundColor: theme.palette.background.paper,
            p: 1,
            borderTop: `1px solid ${theme.palette.divider}`,
          }}
        >
          {availableRanges.map((range) => (
            <Chip
              key={range.label}
              label={range.label}
              color="primary"
              onClick={() => handleQuickRangeSelect(range.value)}
              variant="outlined"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                }
              }}
            />
          ))}
        </Box>
      </StyledPicker>
    </Grid>
  );
};

export default React.memo(DateRangePicker);
