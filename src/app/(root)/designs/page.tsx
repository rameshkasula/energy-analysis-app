"use client";

import dynamic from "next/dynamic";
import { TableSkeleton } from "@/common/table-skeleton";

const DesignTable = dynamic(() => import("@/components/designs/designs-table"), {
    ssr: false,
    loading: () => <TableSkeleton />,
});

export default function Designs() {
    return <DesignTable />;
}
