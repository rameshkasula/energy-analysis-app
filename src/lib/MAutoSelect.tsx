/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Autocomplete, TextField, Tooltip } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface MAutoSelectProps {
  name: string;
  options: { id: string; [key: string]: any }[];
  label: string;
  displayField: string;
  required?: boolean;
  fullWidth?: boolean;
  onHandleChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  [key: string]: any;
}

export default function MAutoSelect({
  name,
  options,
  label,
  displayField,
  required = false,
  fullWidth = true,
  onHandleChange,
  error = false,
  helperText = "",
  customValue = "",
  ...otherProps
}: MAutoSelectProps) {
  const { setFieldValue } = useFormikContext<any>();
  const [field, meta] = useField(name);

  const handleChange = (event: any, value: any) => {
    if (onHandleChange) {
      onHandleChange(value?.id || "");
    }
    setFieldValue(name, value?.id || "");
  };

  const configSelect: any = {
    margin: "normal",
    variant: "outlined",
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  } else if (helperText && error) {
    configSelect.error = error;
    configSelect.helperText = helperText;
  }

  const selectedOption = options.find((option) => option.id === field.value);

  return (
    <Autocomplete
      {...otherProps}
      options={options}
      getOptionLabel={(option: any) => option[displayField] || customValue}
      value={selectedOption ?? ""}
      onChange={handleChange}
      clearIcon={null}
      renderOption={(props, option) => {
        const { name, color }: any = option;
        return (
          <span {...props} style={{ color: color }}>
            {name}
          </span>
        );
      }}
      renderInput={(params) => (
        <Tooltip
          title={selectedOption ? selectedOption[displayField] : customValue}
        >
          <TextField
            {...params}
            label={
              <span>
                {label}
                {required && <span style={{ color: "red" }}> *</span>}
              </span>
            }
            error={configSelect.error}
            helperText={configSelect.helperText}
            InputProps={{
              ...params.InputProps,
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  height: "55px",
                },
                "& .MuiInputBase-input": {
                  paddingRight: "8px",
                },
              },
            }}
          />
        </Tooltip>
      )}
      sx={{
        mt: 1.5,
        ...(fullWidth && { width: "100%" }),
        "& .Mui-error": {
          whiteSpace: "nowrap",
        },
      }}
    />
  );
}
