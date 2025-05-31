/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { FormHelperText } from "@mui/material";

interface CustomSelectProps {
  name: string;
  options: { id: string; name: string }[];
  label: string;
  displayField: string;
  disabled?: boolean;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  helperText?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
  otherProps?: any;
  required?: boolean;
}

export default function CustomSelect({
  name,
  options,
  label,
  displayField,
  fullWidth = true,

  error,
  onChange,
  required = false,
  ...otherProps
}: CustomSelectProps) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setFieldValue(name, event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <FormControl sx={{ m: 1, width: 300, ...(fullWidth && { width: "100%" }) }}>
      <InputLabel
        id={`${name}-label`}
        required={required}
        sx={{
          "& .MuiInputLabel-asterisk": {
            color: "red",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        value={field.value || ""}
        onChange={handleChange}
        input={<OutlinedInput id={`${name}-input`} label={label} />}
        MenuProps={MenuProps}
        error={Boolean(error || (meta.touched && meta.error))}
        {...otherProps}
      >
        {!options.length && (
          <MenuItem value="No Data" disabled>
            No Data
          </MenuItem>
        )}
        {options.map((item: any) => (
          <MenuItem key={item.id} value={item.id}>
            {item[displayField]}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
