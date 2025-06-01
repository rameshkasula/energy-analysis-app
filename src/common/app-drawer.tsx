import { Drawer, Box, CircularProgress, Typography } from "@mui/material";
import CustomDrawerHeader from "./app-drawer-header";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string | number;
  isLoading?: boolean;
}

const DrawerLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 2
      }}
    >
      <CircularProgress size={40} />
      <Typography variant="body1" color="text.secondary">
        Loading...
      </Typography>
    </Box>
  );
};

const AppDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  width = 450,
  isLoading = false,
}: CustomDrawerProps) => {
  return (
    <Drawer
      sx={{
        width: width,
      }}
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <CustomDrawerHeader onClose={onClose} title={title} />
      <Box sx={{ width, my: 1, mx: 3 }}>
        {isLoading ? <DrawerLoading /> : children}
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
