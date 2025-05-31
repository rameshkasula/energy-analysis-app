import { Box } from "@mui/material";
import * as React from "react";

export default function Banner() {
  return (
    <React.Fragment>
      <Box
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}
      ></Box>
    </React.Fragment>
  );
}
