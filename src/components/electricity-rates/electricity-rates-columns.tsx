/* eslint-disable @typescript-eslint/no-explicit-any */
import { IS_ACTIVE, IS_ACTIVE_COLORS, STATUS_COLORS } from "@/helpers/constants";
import { Chip } from "@mui/material";
import { useMemo } from "react";

import moment from "moment";

export const useElectricityRatesColumns = () => {
    const columns = useMemo(
        () => [
            { accessorKey: "city", header: "City", size: 120 },
            { accessorKey: "rate", header: "Rate", size: 120 },
            {
                accessorKey: "createdAt", header: "Created At", size: 120,
                Cell: ({ cell }: any) => {
                    const date = moment(cell.getValue());
                    return date.format("DD MMM YYYY HH:mm:ss");
                },
            },
            {
                accessorKey: "isActive",
                header: "Active",
                size: 120,
                Cell: ({ cell }: any) => <Chip label={IS_ACTIVE[cell.getValue()]} color={IS_ACTIVE_COLORS[cell.getValue()] as string} size="small" />,
            },
            {
                // status
                accessorKey: "status",
                header: "Status",
                size: 120,
                Cell: ({ cell }: any) => <Chip label={cell.getValue()} color={STATUS_COLORS[cell.getValue()] as string} size="small" />,
            }
        ],
        []
    ); // Empty dependency array means this will only run once

    return columns;
};
