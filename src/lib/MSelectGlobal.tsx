/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useField, useFormikContext } from "formik";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";

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

interface MultiSelectProps {
  name: string;
  options: { id: string; label: string }[]; // Options should have id and label
  isMultiSelect: boolean; // Flag to determine single or multi-select
  label: string;
  displayField: string;
}

const MultiSelectGlobal: React.FC<MultiSelectProps> = ({
  name,
  options,
  isMultiSelect = true,
  label,
  displayField,
}) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    // const valueArray = typeof value === "string" ? value.split(",") : value;

    setFieldValue(name, value); // Set the selected values
  };

  return (
    <FormControl
      sx={{ m: 1 }}
      fullWidth
      error={meta.touched && Boolean(meta.error)}
    >
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple={isMultiSelect}
        value={field.value || []}
        onChange={handleChange}
        input={<OutlinedInput label={name} />}
        MenuProps={MenuProps}
      >
        {options?.map((option: any) => (
          <MenuItem
            key={option.id}
            value={option.id}
            style={{
              fontWeight:
                field?.value?.indexOf(option?.id) === -1
                  ? theme.typography.fontWeightRegular
                  : theme.typography.fontWeightMedium,
            }}
          >
            {option[displayField]}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <Typography
          variant="caption"
          sx={{ color: "error.main", fontSize: "small" }}
        >
          {meta.error}
        </Typography>
      )}
    </FormControl>
  );
};

export default MultiSelectGlobal;
