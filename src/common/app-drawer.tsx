import { Drawer, Box } from "@mui/material";
import CustomDrawerHeader from "./app-drawer-header";

interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: string | number;
}

const AppDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  width = 450,
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
      <Box sx={{ width, my: 1, mx: 3 }}>{children}</Box>
    </Drawer>
  );
};

export default AppDrawer;
