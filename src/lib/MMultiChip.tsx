/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useField, useFormikContext } from "formik";
import { FormHelperText } from "@mui/material"; // Import FormHelperText
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
// send name of the field, the data[{name, id}.....], label of the field and displayField of the data
export default function MSelectChip({
  name,
  options,
  label,
  displayField,
  //optional props
  fullWidth = true,
  error,
  ...otherProps
}: {
  name: string;
  // options: { id: string; name: string }[];
  options: { id: string; name: string; [key: string]: any }[];
  label: string;
  displayField: string;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  variant?: "outlined" | "filled" | "standard";
  error?: boolean;
  helperText?: string;
  otherProps?: any;
}) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const handleChange = (event: SelectChangeEvent<[]>) => {
    setFieldValue(name, event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, width: 300, ...(fullWidth && { width: "100%" }) }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        value={field.value || []}
        onChange={handleChange}
        input={<OutlinedInput id={`${name}-input`} label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value: any) => (
              <Chip
                key={value}
                label={
                  <Chip
                    key={value}
                    label={
                      options.find((option) => option.id === value)?.[
                        displayField
                      ]
                    }
                  />
                }
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
        error={Boolean(error || (meta.touched && meta.error))}
        {...otherProps}
      >
        {options.map((item: any) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
