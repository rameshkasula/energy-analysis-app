/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import { useField, useFormikContext } from "formik";

const MTextField = ({
  name,
  required = false,
  onHandleChange,
  error = false,
  helperText = "",
  ...otherProps
}: any): any => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (onHandleChange) {
      onHandleChange(event.target.value);
    }
    setFieldValue(name, event.target.value);
  };

  const asteriskStyle = {
    color: "red",
    marginLeft: "0.2em",
  };

  const configTextField = {
    ...field,
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    width: "10px",
    ...otherProps,
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  } else if (helperText && error) {
    configTextField.error = error;
    configTextField.helperText = helperText;
  }

  if (otherProps.label && required) {
    configTextField.label = (
      <>
        {otherProps.label}
        <span style={asteriskStyle}>*</span>
      </>
    );
  }

  return (
    <TextField
      onChange={handleChange}
      sx={{
        m: 1,
        "& .Mui-error": {
          whiteSpace: "nowrap",
        },
      }}
      {...configTextField}
    />
  );
};

export default MTextField;
