"use client";

import TableSkeleton from "@/common/table-skeleton";
import dynamic from "next/dynamic";

const SolarRadiationTable = dynamic(() => import("@/components/solar-radiation/solar-radiation-table"), { ssr: false, loading: () => <TableSkeleton /> });

export default function SolarRadiationPage() {
    return <SolarRadiationTable />;
}