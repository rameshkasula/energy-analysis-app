/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useFormikContext } from "formik";
import { Divider, FormLabel } from "@mui/material";

export default function MTimeRangePicker({
  name,
  label,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}: any) {
  // const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
  // const [endTime, setEndTime] = React.useState<Dayjs | null>(null);

  const { setFieldValue } = useFormikContext();

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
    if (newValue && endTime && newValue.isAfter(endTime)) {
      setEndTime(newValue); // Ensure end time is after start time
      setFieldValue(name, {
        start_time: newValue,
        end_time: endTime,
      });
    }
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
    setFieldValue(name, {
      start_time: startTime,
      end_time: newValue,
    });
  };

  return (
    <React.Fragment>
      <FormLabel component="legend">{label}</FormLabel>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker", "TimePicker"]}>
          <TimePicker // Use DateTimePicker for start time
            label="Start Time"
            value={startTime}
            onChange={handleStartTimeChange}
            renderInput={(params: any) => <TimePicker {...params} />} // Customize input
          />
          <Divider />
          <TimePicker // Use TimePicker for end time
            label="End Time"
            value={endTime}
            onChange={handleEndTimeChange}
            disabled={!startTime} // Disable end time if start time not selected
            minTime={startTime} // Set minimum time to start time
            renderInput={(params: any) => <TimePicker {...params} />} // Customize input
          />
        </DemoContainer>
      </LocalizationProvider>
    </React.Fragment>
  );
}
