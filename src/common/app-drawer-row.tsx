/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";

export const CustomRow = ({ label, value }: any) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", py: 0.5 }}>
      <Typography
        variant="body1"
        sx={{ width: "180px", fontWeight: "bold", fontSize: 15, opacity: 0.9 }}
      >
        {label}
      </Typography>
      <Typography
        variant="body1"
        sx={{ width: "10px", fontSize: 15, wordBreak: "break-all" }}
      >
        :
      </Typography>
      <Typography
        variant="body1"
        sx={{ width: "270px", fontSize: 15, wordBreak: "break-all" }}
      >
        {!!value ? value : "-"}
      </Typography>
    </Box>
  );
};
