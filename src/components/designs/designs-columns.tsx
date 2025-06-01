import { MRT_ColumnDef } from "material-react-table";
import { Chip } from "@mui/material";
import { dateFormatter, IS_ACTIVE, IS_ACTIVE_COLORS, STATUS, STATUS_COLORS } from "@/helpers/constants";
import moment from "moment";


export const useDesignsColumns = () => {
    const columns: MRT_ColumnDef<any>[] = [
        {
            accessorKey: "name",
            header: "Name",
            size: 200,
        },
        {
            accessorKey: "city",
            header: "City",
            size: 150,
        },
        {
            accessorKey: "shgc",
            header: "SHGC",
            size: 100,
            Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
        },
        {
            accessorKey: "exposureHours",
            header: "Exposure Hours",
            size: 150,
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
            Cell: ({ cell }: any) => <Chip label={STATUS[cell.getValue() as keyof typeof STATUS]} color={STATUS_COLORS[cell.getValue() as keyof typeof STATUS_COLORS] as string} size="small" />,
        },
        {
            accessorKey: "updatedAt",
            header: "Last Updated",
            size: 150,
            Cell: ({ cell }) => {
                const date = cell.getValue<string>();
                return dateFormatter(date, "DATE_TIME_AM_PM");
            },
        },
    ];

    return columns;
};
