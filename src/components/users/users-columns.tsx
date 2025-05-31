/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

export const useUserColumns = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "fullName", header: "Name", size: 120 },
      { accessorKey: "email", header: "Email", size: 120 },
      { accessorKey: "role", header: "Role", size: 120 },
      {
        accessorKey: "isVerified",
        header: "Active",
        size: 120,
        Cell: ({ cell }: any) => <span>{cell.getValue() ? "Yes" : "No"}</span>,
      },
    ],
    []
  ); // Empty dependency array means this will only run once

  return columns;
};
