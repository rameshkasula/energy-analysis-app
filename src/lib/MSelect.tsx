/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useField, useFormikContext } from "formik";
import { SelectChangeEvent, TextField } from "@mui/material";
export default function MSelect({
  name,
  options,
  label,
  displayField,
  required = false,
  onHandleChange,
  error = false,
  helperText = "",
  ...otherProps
}: any) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event: SelectChangeEvent<string>) => {
    if (onHandleChange) {
      onHandleChange(event.target.value);
    }
    setFieldValue(name, event.target.value);
  };

  const configSelect = {
    select: true,
    fullWidth: true,
    margin: "normal",
    variant: "outlined",

    ...field,
    ...otherProps,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  } else if (helperText && error) {
    configSelect.error = error;
    configSelect.helperText = helperText;
  }
  return (
    <TextField
      sx={{ maxWidth: otherProps?.fullWidth ? "100%" : "250px", m: 1 }}
      required={required}
      {...configSelect}
      label={label}
      value={field.value || ""}
      onChange={handleChange}
    >
      {options?.map((item: any) => (
        <MenuItem
          sx={{ maxWidth: otherProps?.fullWidth ? "100%" : "250px" }}
          key={item?.id}
          value={item?.id}
          disabled={item?.disabled}
        >
          {item[displayField]}
        </MenuItem>
      ))}
    </TextField>
  );
}
