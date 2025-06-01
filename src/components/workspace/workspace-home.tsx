/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { getAllElectricityRates } from "@/toolkit/slices/electricity-rates-slice";
import { Typography, Box, useTheme, Card, Grid } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { getDesignsStats } from "@/toolkit/slices/designs-slice";
import { useMemo } from "react";
import DesignStatsCard from "./design-stats-card";

const LineChartComponent = dynamic(() => import("@/components/charts/line-chart"), { ssr: false });

export default function WorkspaceHome() {
    const dispatch = useDispatch();
    const theme = useTheme();

    // electricity rates
    const electricityRatesData = useSelector((state: any) => state.electricityRates);

    // designs data
    const designsData = useSelector((state: any) => state.designs);

    const designsStatsData = designsData?.stats;

    const fetchData = React.useCallback(() => {
        dispatch(getAllElectricityRates() as any)
    }, [dispatch]);

    const fetchDesignsStats = React.useCallback(() => {
        let payload = electricityRatesData?.data?.length > 0 ? electricityRatesData?.data.map((item: any) => item?.city) : [];
        dispatch(getDesignsStats(payload) as any)
    }, [dispatch, electricityRatesData?.data]);

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    React.useEffect(() => {
        fetchDesignsStats();
    }, [fetchDesignsStats]);

    const chartData = useMemo(() =>
        electricityRatesData?.data?.map((item: any) => ({
            name: item?.city,
            uv: item?.rate,
        })) || [],
        [electricityRatesData?.data]
    );

    const lines = useMemo(() => [
        { dataKey: "uv", stroke: theme.palette.primary.main, name: "Rate" },
    ], [theme.palette.primary.main]);

    return (
        <Box>



            <Box sx={{ mt: 2 }}>
                <DesignStatsCard
                    totalDesigns={designsStatsData?.totalDesigns || 0}
                    cityStats={designsStatsData?.cityStats || []}
                />
            </Box>

            <Card sx={{ mt: 2, p: 2 }}>
                <Typography variant="h6" gutterBottom>Electricity Rates</Typography>
                <LineChartComponent
                    data={chartData}
                    lines={lines}
                    xAxisKey="name"
                    height={320}
                />
            </Card>
        </Box>
    );
}



