/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// multi checkbox with label
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useField, useFormikContext } from "formik";
import { FormControl, FormHelperText, FormLabel } from "@mui/material";

export default function MCheckboxMulti({
  name,
  legend,
  options,
  onChange,
  ...otherProps
}: any) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (evt: any) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheck = {
    margin: "normal",
    // required: true,
    // onChange: handleChange,
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configCheck.error = true;
    configCheck.helperText = meta.error;
  }

  return (
    <FormControl
      error={configCheck?.error}
      component="fieldset"
      {...configCheck}
    >
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "2px",
        }}
      >
        {options?.map((item: any) => (
          <FormControlLabel
            key={item?.id}
            control={
              <Checkbox
                size="small"
                checked={field.value?.includes(item?.value)}
                onChange={onChange}
              />
            }
            value={item?.value}
            label={item?.name}
            // onChange={onChange}
          />
        ))}
      </FormGroup>
      <FormHelperText>{configCheck?.helperText}</FormHelperText>
    </FormControl>
  );
}
