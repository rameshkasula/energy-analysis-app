import { Box, Card, Chip, Stack, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { STATUS_COLORS, StatusType } from "@/constants/status-colors";

interface StatusCount {
    status: StatusType;
    count: number;
}

interface CityStat {
    statusCounts: StatusCount[];
    totalCityDesigns: number;
    city: string;
}

interface DesignStatsProps {
    totalDesigns: number;
    cityStats: CityStat[];
}

const DesignStatsCard = ({ totalDesigns, cityStats }: DesignStatsProps) => {
    const theme = useTheme();

    const sortedCityStats = useMemo(() => {
        return [...cityStats].sort((a, b) => b.totalCityDesigns - a.totalCityDesigns);
    }, [cityStats]);

    return (
        <Card sx={{ p: 2, height: "100%" }}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="h6" gutterBottom>
                        Design Statistics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Total Designs: {totalDesigns}
                    </Typography>
                </Box>

                <Stack spacing={2}>
                    {sortedCityStats.map((cityStat) => (
                        <Box
                            key={cityStat.city}
                            sx={{
                                p: 1.5,
                                borderRadius: 1,
                                backgroundColor: theme.palette.background.default,
                            }}
                        >
                            <Stack spacing={1}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography variant="subtitle1" fontWeight="medium">
                                        {cityStat.city}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {cityStat.totalCityDesigns} designs
                                    </Typography>
                                </Box>

                                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                    {cityStat.statusCounts.map((status) => (
                                        <Chip
                                            key={status.status}
                                            label={`${status.status}: ${status.count}`}
                                            size="small"
                                            sx={{
                                                backgroundColor: STATUS_COLORS[status.status]?.bg || theme.palette.grey[200],
                                                color: STATUS_COLORS[status.status]?.text || theme.palette.text.primary,
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
};

export default DesignStatsCard; 