import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppDrawer from "@/common/app-drawer";
import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { STATUS, STATUS_COLORS } from "@/helpers/constants";

const ViewSolarRadiation = () => {
    const dispatch = useDispatch();
    const { featureDrawerData } = useSelector((state: any) => state.theme);

    const onClose = () => {
        dispatch(
            setThemeData({
                field: "featureDrawer",
                data: false,
            } as any)
        );

        dispatch(
            setThemeData({
                field: "featureDrawerData",
                data: null,
            } as any)
        );

        dispatch(
            setThemeData({
                field: "featurDrawerView",
                data: false,
            } as any)
        );
    };

    const getStatusColor = (status: string): "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" => {
        const color = STATUS_COLORS[status as keyof typeof STATUS_COLORS];
        return (color as any) || "default";
    };

    if (!featureDrawerData) {
        return null;
    }

    return (
        <AppDrawer
            isOpen={true}
            onClose={onClose}
            title="View Solar Radiation"
            width={600}
        >
            <Box sx={{ p: 2 }}>
                <Stack spacing={3}>
                    {/* Basic Information */}
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    City
                                </Typography>
                                <Typography variant="body1">{featureDrawerData?.city ?? '-'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Unit
                                </Typography>
                                <Typography variant="body1">{featureDrawerData?.unit ?? '-'}</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider />

                    {/* Radiation Values */}
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2 }}>Radiation Values</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    North
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.radiation?.north ?? '-'} {featureDrawerData?.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    South
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.radiation?.south ?? '-'} {featureDrawerData?.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    East
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.radiation?.east ?? '-'} {featureDrawerData?.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    West
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.radiation?.west ?? '-'} {featureDrawerData?.unit}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Roof
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.radiation?.roof ?? '-'} {featureDrawerData?.unit}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider />

                    {/* Status and Notes */}
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Status
                                </Typography>
                                <Chip
                                    label={featureDrawerData?.status ?? 'N/A'}
                                    color={getStatusColor(featureDrawerData?.status ?? '')}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Active Status
                                </Typography>
                                <Chip
                                    label={featureDrawerData?.isActive ? "Active" : "Inactive"}
                                    color={featureDrawerData?.isActive ? "success" : "error"}
                                    size="small"
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Notes
                            </Typography>
                            <Typography variant="body1">{featureDrawerData?.notes ?? '-'}</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </AppDrawer>
    );
};

export default ViewSolarRadiation; 