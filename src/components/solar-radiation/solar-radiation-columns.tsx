import { MRT_ColumnDef } from "material-react-table";
import { Chip, ChipProps } from "@mui/material";
import { IS_ACTIVE, IS_ACTIVE_COLORS, STATUS, STATUS_COLORS } from "@/helpers/constants";

interface SolarRadiation {
    _id?: string;
    city: string;
    radiation: {
        north: number;
        south: number;
        east: number;
        west: number;
        roof: number;
    };
    status: string;
    isActive: boolean;
    unit: string;
    notes?: string;
}

export const useSolarRadiationColumns = () => {
    const columns: MRT_ColumnDef<SolarRadiation>[] = [
        {
            accessorKey: "city",
            header: "City",
            size: 150,
            Cell: ({ row }) => `${row.original.city || "N/A"}`,
        },
        {
            accessorKey: "radiation.north",
            header: "North",
            size: 120,
            Cell: ({ row }) => `${row.original.radiation?.north || "N/A"} ${row.original.unit}`,
        },
        {
            accessorKey: "radiation.south",
            header: "South",
            size: 120,
            Cell: ({ row }) => `${row.original.radiation?.south || "N/A"} ${row.original.unit}`,
        },
        {
            accessorKey: "radiation.east",
            header: "East",
            size: 120,
            Cell: ({ row }) => `${row.original.radiation?.east} ${row.original.unit}`,
        },
        {
            accessorKey: "radiation.west",
            header: "West",
            size: 120,
            Cell: ({ row }) => `${row.original.radiation?.west} ${row.original.unit}`,
        },
        {
            accessorKey: "radiation.roof",
            header: "Roof",
            size: 120,
            Cell: ({ row }) => `${row.original.radiation?.roof} ${row.original.unit}`,
        },
        {
            accessorKey: "unit",
            header: "Unit",
            size: 120,
        },
        {
            accessorKey: "status",
            header: "Status",
            size: 120,
            Cell: ({ cell }) => {
                const status = cell.getValue<string>();
                return (
                    <Chip
                        label={STATUS[status as keyof typeof STATUS]}
                        color={STATUS_COLORS[status as keyof typeof STATUS_COLORS] as ChipProps['color']}
                        size="small"
                    />
                );
            },
        },
        {
            accessorKey: "isActive",
            header: "Active Status",
            size: 120,
            Cell: ({ cell }) => {
                const isActive = cell.getValue<boolean>();
                return (
                    <Chip
                        label={IS_ACTIVE[isActive]}
                        color={IS_ACTIVE_COLORS[isActive] as ChipProps['color']}
                        size="small"
                    />
                );
            },
        },
    ];

    return columns;
};
