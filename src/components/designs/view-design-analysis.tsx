/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Typography, Grid, Paper, Divider, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppDrawer from "@/common/app-drawer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import useCurrency from "@/hooks/curreny-hook";

const ViewDesignAnalysis = () => {
    const dispatch = useDispatch();
    const formatCurrency = useCurrency();
    const designsData = useSelector((state: any) => state.designs);
    const { singleAnalysis, isLoading } = designsData;

    const onClose = () => {
        dispatch(setThemeData({ field: "featureDrawer", data: false } as any));
        dispatch(
            setThemeData({
                field: "featurDrawerView",
                data: false,
            } as any)
        );
    }

    const formatNumber = (num: number) => {
        return num?.toLocaleString('en-US', { maximumFractionDigits: 2 });
    };

    const getSurfaceColor = (surface: string) => {
        const colors: { [key: string]: string } = {
            north: '#2196f3',
            south: '#f44336',
            east: '#4caf50',
            west: '#ff9800',
            roof: '#9c27b0'
        };
        return colors[surface] || '#757575';
    };

    return (
        <Box>
            <AppDrawer
                isOpen={true}
                onClose={onClose}
                title="Design Analysis"
                width={600}
                isLoading={isLoading}
            >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LocationOnIcon color="primary" />
                        <Typography variant="h6">
                            {singleAnalysis?.city}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <AccessTimeIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
                        <Typography variant="caption" color="text.secondary">
                            {new Date(singleAnalysis?.timestamp).toLocaleString()}
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.default',
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider'
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>Summary</Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <ThermostatIcon color="primary" />
                                            <Typography variant="body2" color="text.secondary">Total BTU</Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                            {formatNumber(singleAnalysis?.totalBTU)} BTU
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <ElectricBoltIcon color="primary" />
                                            <Typography variant="body2" color="text.secondary">Cooling Load</Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                            {formatNumber(singleAnalysis?.coolingLoad)} kW
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <ElectricBoltIcon color="primary" />
                                            <Typography variant="body2" color="text.secondary">Energy Used</Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                            {formatNumber(singleAnalysis?.energyUsed)} kWh
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                            <CurrencyRupeeIcon color="primary" />
                                            <Typography variant="body2" color="text.secondary">Estimated Cost</Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                            {formatCurrency(singleAnalysis?.estimatedCost)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.default',
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider'
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>Surface Analysis</Typography>
                                <Grid container spacing={2}>
                                    {Object.entries(singleAnalysis?.details || {}).map(([surface, data]: [string, any]) => (
                                        <Grid item xs={12} key={surface}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    p: 2,
                                                    borderRadius: 1,
                                                    bgcolor: 'background.paper',
                                                    border: '1px solid',
                                                    borderColor: 'divider'
                                                }}
                                            >
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Chip
                                                        label={surface.toUpperCase()}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: getSurfaceColor(surface),
                                                            color: 'white',
                                                            fontWeight: 600
                                                        }}
                                                    />
                                                </Box>
                                                <Box sx={{ display: 'flex', gap: 3 }}>
                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                            <SquareFootIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
                                                            <Typography variant="body2" color="text.secondary">
                                                                Area
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                            {formatNumber(data.area)} m²
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ textAlign: 'right' }}>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                                            <ThermostatIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
                                                            <Typography variant="body2" color="text.secondary">
                                                                Q Value
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                            {formatNumber(data.Q)} BTU
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </AppDrawer>
        </Box>
    );
}

export default ViewDesignAnalysis;
