"use client";

import dynamic from "next/dynamic";
import { TableSkeleton } from "@/common/table-skeleton";
const ElectricityRatesTable = dynamic(() => import("@/components/electricity-rates/electricity-rates-table"), {
    ssr: false,
    loading: () => <TableSkeleton />,
});

import * as React from "react";

export default function Page() {

    return (
        <React.Fragment>
            <ElectricityRatesTable />
        </React.Fragment>
    );
}
