/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { useField, useFormikContext } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
interface IMDatePickerProps {
  name: string;
  label: string;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  helperText?: string;
  otherProps?: any;
  format?: string;
  views?: any;
  openTo?: any;
}
export default function CustomDatePicker({
  name,
  label,
  fullWidth = true,
  margin = "normal",
  variant = "outlined",
  error,
  format,
  views,
  openTo,
  ...otherProps
}: IMDatePickerProps) {
  const { setFieldValue } = useFormikContext<any>();
  const [field, meta] = useField(name);
  const handleChange = (date: Date | null) => {
    setFieldValue(name, date);
  };
  return (
    <FormControl
      sx={{ m: 1, width: 300, ...(fullWidth && { width: "100%" }) }}
      error={Boolean(error || (meta.touched && meta.error))}
      margin={margin}
      variant={variant}
      fullWidth={fullWidth}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format={format ? format : "DD/MM/YYYY"}
          views={views ? views : ["year", "month", "day"]}
          openTo={openTo ? openTo : "day"}
          label={label}
          value={
            field.value ? field.value : meta.touched && meta.error ? "" : null
          }
          onChange={handleChange}
          {...otherProps}
        />
      </LocalizationProvider>
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
