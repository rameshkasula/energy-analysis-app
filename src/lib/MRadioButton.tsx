/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useField, useFormikContext } from "formik";
import { FormHelperText } from "@mui/material";
export default function MRadio({
  name,
  legend,
  value,
  options,
  ...otherProps
}: any) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };
  const configRadio = {
    ...field,
    ...otherProps,
    type: "radio",
    // required: true,
    fullWidth: true,
    margin: "normal",
    onChange: handleChange,
  };
  if (meta && meta.touched && meta.error) {
    configRadio.error = true;
    configRadio.helperText = meta.error;
  }
  return (
    <FormControl component="fieldset" {...configRadio} fullWidth={true}>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup
        sx={{ marginX: 2 }}
        row
        aria-label="gender"
        name={name}
        value={value}
      >
        {options.map((item: any) => (
          <FormControlLabel
            {...configRadio}
            // name={name}
            key={item?.name}
            value={item?.id}
            checked={item?.id === field.value}
            control={<Radio value={item?.id} />}
            label={item?.name}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{configRadio?.helperText}</FormHelperText>
    </FormControl>
  );
}
