/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { IconX } from "@tabler/icons-react";

const CustomDrawerHeader = (props: any) => {
  const { onClose, title } = props;
  const theme = useTheme();
  const background = theme.palette.primary.main;
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      component={"div"}
      height={"45px"}
      width={"100%"}
      margin={"0 0 20px 0"}
      sx={{ background: background }}
      borderRadius={0} // Set border-radius to 0 to remove any border radius
    >
      <Typography
        sx={{
          color: theme.palette.primary.contrastText,
        }}
        fontWeight={"bold"}
        paddingLeft={"5%"}
        variant="body1"
      >
        {title}
      </Typography>
      <IconButton
        size="small"
        onClick={onClose}
        sx={{ color: theme.palette.primary.contrastText }}
      >
        <IconX size={25} strokeWidth={2} />
      </IconButton>
    </Box>
  );
};

export default CustomDrawerHeader;
