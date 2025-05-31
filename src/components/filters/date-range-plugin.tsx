/* eslint-disable @typescript-eslint/no-explicit-any */
import { calculateDaysBetweenDates } from "@/helpers/date-helper";
import { setFilterData } from "@/toolkit/slices/filter-slice";
import { Chip, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import moment from "moment";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const CustomChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

const DateRangePlugin = ({
  closeCalendar,
  variant,
  dateType,
  hiddenDateRanges = [],
  setIsError,
}: any) => {
  const today = moment();
  // const today = new Date();
  const dispatch = useDispatch();
  const pathName = usePathname();
  const isSalesmiPath = pathName.includes("salesmi") || pathName === "/salesmi";

  const setDateRange = (startDate: any, endDate: any) => {
    if (variant === "trend chart") {
      const differenceInDays = moment(endDate).diff(startDate, "days");
      const differenceInYears = moment(endDate).diff(startDate, "days");
      const updatedStartDate =
        dateType === "date"
          ? differenceInDays > 31
            ? moment().startOf("month")
            : startDate
          : differenceInYears > 366
          ? moment().startOf("year")
          : moment(startDate).startOf("week");

      const updatedEndDate =
        dateType === "date"
          ? differenceInDays > 31
            ? moment()
            : endDate
          : differenceInYears > 366
          ? moment()
          : moment(endDate).endOf("week");

      // set start date
      dispatch(
        setFilterData({
          field: "startDate",
          data: moment(updatedStartDate).toISOString(),
        })
      );

      // set end date
      dispatch(
        setFilterData({
          field: "endDate",
          data: moment(updatedEndDate).toISOString(),
        })
      );

      closeCalendar();
    } else {
      const convertedStartDate = moment(startDate).startOf("day").toISOString();
      const convertedEndDate = moment(endDate).endOf("day").toISOString();
      const daysCount = calculateDaysBetweenDates(
        convertedStartDate,
        convertedEndDate
      );
      const hasHiddenDateRange = daysCount > 31;

      if (isSalesmiPath && hasHiddenDateRange) {
        setIsError(true);
      } else {
        setIsError(false);

        // set start date

        dispatch(
          setFilterData({ field: "startDate", data: convertedStartDate })
        );
        dispatch(setFilterData({ field: "endDate", data: convertedEndDate }));

        closeCalendar();
      }
    }
  };
  // const setTodaysDateRange = () => {
  //     setDateRange(today, today)
  // }
  // const setYesterdayRange = () =>{
  //     const yesterday = addDays(today, -1);
  //     setDateRange(yesterday, yesterday)
  // }
  // const setThisWeekDateRange = () => {
  //     const currentWeekStartDate = startOfWeek(today);
  //     // const currentWeekEndDate = endOfWeek(today);
  //     setDateRange(currentWeekStartDate, today)
  // }
  // const setLastWeekDateRange = () => {
  //     const lastWeekStartDate = startOfWeek(subWeeks(today, 1));
  //     const lastWeekEndDate = endOfWeek(subWeeks(today, 1));
  //     setDateRange(lastWeekStartDate, lastWeekEndDate)
  // }
  // const setThisMonthDateRange = () => {
  //     const currentMonthStartDate = startOfMonth(today);
  //     setDateRange(currentMonthStartDate, today)
  // }
  // const setLastMonthDateRange = () => {
  //     const previousMonthStartDate = startOfMonth(addMonths(today, -1));
  //     const previousMonthEndDate = endOfMonth(addMonths(today, -1));
  //     setDateRange(previousMonthStartDate, previousMonthEndDate)
  // }
  // const setThisYearDateRange = () => {
  //     const thisYearStartDate = startOfYear(today);
  //     setDateRange(thisYearStartDate, today)
  // }
  // const setLastYearDateRange = () => {
  //     const lastYearStartDate = startOfYear(subYears(today, 1));
  //     const lastYearEndDate = endOfYear(subYears(today, 1));
  //     setDateRange(lastYearStartDate, lastYearEndDate)
  // }
  // const setLast7DaysDateRange = () => {
  //     const lastWeekStartDate = subDays(today, 6);
  //     setDateRange(lastWeekStartDate, today)
  // }
  // const setLast30DaysDateRange = () => {
  //     const last30DaysStartDate = subDays(today, 29);
  //     setDateRange(last30DaysStartDate, today)
  // }
  // const setLast60DaysDateRange = () => {
  //     const last60DaysStartDate = subDays(today, 59);
  //     setDateRange(last60DaysStartDate, today)
  // }
  // const setLast90DaysDateRange = () => {
  //     const last90DaysStartDate = subDays(today, 89);
  //     setDateRange(last90DaysStartDate, today)
  // }
  // const setLast180DaysDateRange = () => {
  //     const last180DaysStartDate = subDays(today, 179);
  //     setDateRange(last180DaysStartDate, today)
  // }

  const setTodaysDateRange = () => {
    setDateRange(today, today);
  };

  const setYesterdayRange = () => {
    const yesterday = today.clone().subtract(1, "day");
    setDateRange(yesterday, yesterday);
  };

  const setThisWeekDateRange = () => {
    const currentWeekStartDate = today.clone().startOf("week");
    setDateRange(currentWeekStartDate, today);
  };

  const setLastWeekDateRange = () => {
    const lastWeekStartDate = today.clone().subtract(1, "week").startOf("week");
    const lastWeekEndDate = today.clone().subtract(1, "week").endOf("week");
    setDateRange(lastWeekStartDate, lastWeekEndDate);
  };

  const setThisMonthDateRange = () => {
    const currentMonthStartDate = today.clone().startOf("month");
    setDateRange(currentMonthStartDate, today);
  };

  const setLastMonthDateRange = () => {
    const previousMonthStartDate = today
      .clone()
      .subtract(1, "month")
      .startOf("month");
    const previousMonthEndDate = today
      .clone()
      .subtract(1, "month")
      .endOf("month");
    setDateRange(previousMonthStartDate, previousMonthEndDate);
  };

  const setThisYearDateRange = () => {
    const thisYearStartDate = today.clone().startOf("year");
    setDateRange(thisYearStartDate, today);
  };

  const setLastYearDateRange = () => {
    const lastYearStartDate = today.clone().subtract(1, "year").startOf("year");
    const lastYearEndDate = today.clone().subtract(1, "year").endOf("year");
    setDateRange(lastYearStartDate, lastYearEndDate);
  };

  const setLast7DaysDateRange = () => {
    const lastWeekStartDate = today.clone().subtract(6, "days");
    setDateRange(lastWeekStartDate, today);
  };

  const setLast30DaysDateRange = () => {
    const last30DaysStartDate = today.clone().subtract(30, "days");
    setDateRange(last30DaysStartDate, today);
  };

  const setLast60DaysDateRange = () => {
    const last60DaysStartDate = today.clone().subtract(60, "days");
    setDateRange(last60DaysStartDate, today);
  };

  const setLast90DaysDateRange = () => {
    const last90DaysStartDate = today.clone().subtract(90, "days");
    setDateRange(last90DaysStartDate, today);
  };

  const setLast180DaysDateRange = () => {
    const last180DaysStartDate = today.clone().subtract(180, "days");
    setDateRange(last180DaysStartDate, today);
  };
  const dateRanges = [
    { label: "Today", onClick: setTodaysDateRange },
    { label: "Yesterday", onClick: setYesterdayRange },
    { label: "This Week", onClick: setThisWeekDateRange },
    { label: "Last Week", onClick: setLastWeekDateRange },
    { label: "This Month", onClick: setThisMonthDateRange },
    { label: "Last Month", onClick: setLastMonthDateRange },
    { label: "This Year", onClick: setThisYearDateRange },
    { label: "Last Year", onClick: setLastYearDateRange },
    { label: "Last 7 Days", onClick: setLast7DaysDateRange },
    { label: "Last 30 Days", onClick: setLast30DaysDateRange },
    { label: "Last 60 Days", onClick: setLast60DaysDateRange },
    { label: "Last 90 Days", onClick: setLast90DaysDateRange },
    { label: "Last 180 Days", onClick: setLast180DaysDateRange },
  ];

  const getVisibleDateRanges = (allRanges: any, hiddenRanges: any) => {
    const hiddenLabels = hiddenRanges.map((range: any) => range.label);
    return allRanges.filter(
      (range: any) => !hiddenLabels.includes(range.label)
    );
  };

  const newDateRanges = hiddenDateRanges.length
    ? getVisibleDateRanges(dateRanges, hiddenDateRanges)
    : dateRanges;

  return (
    <Grid>
      {newDateRanges.map((range: any) => (
        <CustomChip
          key={range.label}
          variant="outlined"
          size="small"
          onClick={range.onClick}
          label={range.label}
        ></CustomChip>
      ))}
    </Grid>
  );
};

export default DateRangePlugin;
