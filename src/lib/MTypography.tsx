/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Box } from "@mui/material";
import React from "react";

export default function MTypography({
  title,
  titleValue,
  variant,
  ...others
}: any) {
  if (!!title && !!titleValue) {
    return (
      <Box sx={{ marginBottom: "20px" }}>
        {!!title && !!titleValue && (
          <Typography variant={variant || "h5"} component={"div"} {...others}>
            <span style={{ width: 180, marginRight: 20, opacity: 0.7 }}>
              {title}
            </span>
            {titleValue && (
              <span style={{ fontWeight: "bold" }}>{titleValue}</span>
            )}
          </Typography>
        )}
      </Box>
    );
  } else if (!!title) {
    return (
      <Box sx={{ marginBottom: "20px" }}>
        {!!title && (
          <Typography variant={variant || "h5"} component={"div"} {...others}>
            {title}
          </Typography>
        )}
      </Box>
    );
  }
}
