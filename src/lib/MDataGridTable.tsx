/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type MRT_Icons,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import Box from "@mui/material/Box";
import * as React from "react";
import {
  IconFilter,
  IconFilterOff,
  IconPinned,
  IconSearch,
  IconSortAscending,
  IconTableColumn,
} from "@tabler/icons-react";
import "./utils/table-styles.css";

const MDataGridTable = ({ title, data }: { title?: string; data: any }) => {
  const defaultConfig = {
    muiTableHeadCellProps: ({ column }: { column: any }) => ({
      sx: (theme: any) => ({
        background: column.getIsPinned()
          ? theme.palette.primary.dark
          : theme.palette.primary.main,
        color: theme.palette.common.white,
        "&::before": { background: "transparent !important" },
      }),
    }),
    icons: {
      FilterListIcon: (props: any) => <IconFilter size={18} {...props} />,
      FilterListOffIcon: () => <IconFilterOff size={18} />,
      SearchOffIcon: () => <IconSearch size={18} />,
      ViewColumnIcon: () => <IconTableColumn size={18} />,
      MoreVertIcon: () => <IconSortAscending size={18} />,
      MoreHorizIcon: () => <IconSortAscending size={18} />,
      PushPinIcon: (props: any) => <IconPinned size={22} {...props} />,
    },
    enableStickyHeader: true,
    enableColumnPinning: true,
    enableColumnActions: false,
    enableToolbarInternalActions: false,
    enableGlobalFilterModes: true,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 25, 50, 100],
      showFirstButton: false,
      showLastButton: false,
    },

    muiTablePaperProps: () => ({
      sx: () => ({
        boxShadow: "none",
        display: "grid",
        width: "100%",
      }),
    }),
    muiTableContainerProps: () => ({
      sx: () => ({
        // Set a max height as needed
        height: "max-content", // Set a  height as needed
        minHeight: 100, // Set a min height as needed
        width: "100%",
        // scrollbar
        overflowY: "scroll", // Enable vertical scrolling
        "&::-webkit-scrollbar": {
          width: "12px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-track": {
          background: "black", // Background of the scrollbar track
        },
        "&::-webkit-scrollbar-thumb": {
          background: "red", // Color of the draggable part of the scrollbar
          borderRadius: "10px", // Rounded corners for the thumb
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "darkred", // Color on hover
        },
      }),
    }),
  };

  const table = useMaterialReactTable({ ...defaultConfig, ...data });
  return (
    <React.Fragment>
      <Box overflow="auto" width="100%" sx={{ my: 1 }}>
        <MaterialReactTable table={table} />
      </Box>
    </React.Fragment>
  );
};

export default MDataGridTable;
