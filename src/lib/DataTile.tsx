import * as React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface DataItem {
  title: string;
  columns: { label: string; value: string }[];
  titleColor?: string
  backgroundColor?: string
  color?: string
}

const DataTile: React.FC<DataItem> = ({ title, columns, titleColor, backgroundColor, color }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : "secondary.main",
      }}
    >
      <CardHeader
        title={title}
        sx={{ color: titleColor ? titleColor : "primary.main" }}
      />
      <CardContent sx={{ py: 1, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {columns?.length > 0 && columns?.map((column, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                border: "1px solid white",
                padding: 1,
                borderRadius: 0,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  marginRight: 1,
                  color: color ? color : "white",
                }}
              >
                {column.label}:
              </Typography>
              <Typography variant="body1" sx={{  color: color ? color : "white",}}>{column.value}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
 };

export default DataTile;
