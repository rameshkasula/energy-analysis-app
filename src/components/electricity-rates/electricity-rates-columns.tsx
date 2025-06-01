/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateFormatter, IS_ACTIVE, IS_ACTIVE_COLORS, STATUS_COLORS } from "@/helpers/constants";
import { Chip } from "@mui/material";
import { useMemo } from "react";

import moment from "moment";
import useCurrency from "@/hooks/curreny-hook";

export const useElectricityRatesColumns = () => {
    const formatCurrency = useCurrency()
    const columns = useMemo(
        () => [
            { accessorKey: "city", header: "City", size: 120 },
            {
                accessorKey: "rate", header: "Rate", size: 120,
                Cell: ({ cell }: any) => {
                    const rate = cell.getValue() || 0;
                    return formatCurrency(rate);
                },
            },
            {
                accessorKey: "createdAt", header: "Created At", size: 120,
                Cell: ({ cell }: any) => {
                    const date = cell.getValue() || "";
                    return dateFormatter(date, "DATE_TIME_AM_PM");
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
