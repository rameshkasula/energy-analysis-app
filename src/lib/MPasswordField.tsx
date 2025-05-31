import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useField } from "formik";

type Props = {
  name: string;
  label: string;
};

const MPasswordField = (props: Props) => {
  const { name, label, ...otherProps } = props;
  const [field, meta] = useField(name);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const configTextField = {
    ...field,
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    ...otherProps,
  };
  return (
    <React.Fragment>
      <FormControl
        error={Boolean(meta.touched && meta.error)}
        {...configTextField}
      >
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
          name={name}
        />
        <FormHelperText id="component-error-text">
          {meta.touched && meta.error ? meta.error : null}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default MPasswordField;
