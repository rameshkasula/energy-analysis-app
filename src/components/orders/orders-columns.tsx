/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

export const useOrderColumns = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "title", header: "Title", size: 120 },
      { accessorKey: "description", header: "Description", size: 120 },
      { accessorKey: "grossPrice", header: "Gross Price", size: 120 },
      { accessorKey: "tax", header: "Tax", size: 120 },
      { accessorKey: "totalPrice", header: "Total Price", size: 120 },
      {
        accessorKey: "category",
        header: "Category",
        size: 120,
        Cell: ({ cell }: any) => <span>{cell.getValue()?.name}</span>,
      },
      {
        // Vendor column
        accessorKey: "vendor",
        header: "Vendor",
        size: 120,
        Cell: ({ cell }: any) => (
          <span>
            {cell?.getValue()?.fullName + " ( " + cell.getValue()?.email + " )"}
          </span>
        ),
      },
      {
        accessorKey: "isApproved",
        header: "Active",
        size: 120,
        Cell: ({ cell }: any) => <span>{cell.getValue() ? "Yes" : "No"}</span>,
      },
    ],
    []
  ); // Empty dependency array means this will only run once

  return columns;
};
