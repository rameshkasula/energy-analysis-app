/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";

export default function MSelectAddressType({
  name,
  options,
  label,
  ...otherProps
}: any) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event: any) => {
    setFieldValue(name, event.target.value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    fullWidth: true,
    required: true,

    margin: "normal",
    variant: "outlined",
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect} label={label}>
      {options.map((item: any) => (
        <MenuItem key={item?.id} value={item?.id}>
          {item?.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
