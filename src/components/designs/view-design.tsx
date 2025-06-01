import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import AppDrawer from "@/common/app-drawer";
import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { dateFormatter, STATUS, STATUS_COLORS } from "@/helpers/constants";
import useCurrency from "@/hooks/curreny-hook";

const ViewDesign = () => {
    const dispatch = useDispatch();
    const { featureDrawerData } = useSelector((state: any) => state.theme);

    const formatCurrency = useCurrency();

    const designData = useSelector((state: any) => state.designs);

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
    };

    const renderFacadeDetails = (direction: string, facade: any) => (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, textTransform: 'capitalize' }}>
                {direction} Facade
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                        Height
                    </Typography>
                    <Typography variant="body1">
                        {facade?.height ?? '-'} {facade?.height ? 'm' : ''}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                        Width
                    </Typography>
                    <Typography variant="body1">
                        {facade?.width ?? '-'} {facade?.width ? 'm' : ''}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                        WWR
                    </Typography>
                    <Typography variant="body1">{facade?.wwr ?? '-'}</Typography>
                </Grid>
            </Grid>
        </Box>
    );

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
            title="View Design"
            width={600}
            isLoading={designData?.isLoading}
        >
            <Box sx={{ p: 2 }}>
                <Stack spacing={3}>
                    {/* Basic Information */}
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Name
                                </Typography>
                                <Typography variant="body1">{featureDrawerData?.name ?? '-'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    City
                                </Typography>
                                <Typography variant="body1">{featureDrawerData?.city ?? '-'}</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider />

                    {/* Facades */}
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2 }}>Facades</Typography>
                        {renderFacadeDetails("north", featureDrawerData?.facades?.north)}
                        {renderFacadeDetails("south", featureDrawerData?.facades?.south)}
                        {renderFacadeDetails("east", featureDrawerData?.facades?.east)}
                        {renderFacadeDetails("west", featureDrawerData?.facades?.west)}
                    </Box>

                    <Divider />

                    {/* Other Parameters */}
                    <Box>
                        <Typography variant="h6" sx={{ mb: 2 }}>Other Parameters</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    SHGC
                                </Typography>
                                <Typography variant="body1">{featureDrawerData?.shgc ?? '-'}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Exposure Hours
                                </Typography>
                                <Typography variant="body1">
                                    {featureDrawerData?.exposureHours ?? '-'} {featureDrawerData?.exposureHours ? 'hours' : ''}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                Skylight
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Height
                                    </Typography>
                                    <Typography variant="body1">
                                        {featureDrawerData?.skylight?.height ?? '-'} {featureDrawerData?.skylight?.height ? 'm' : ''}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Width
                                    </Typography>
                                    <Typography variant="body1">
                                        {featureDrawerData?.skylight?.width ?? '-'} {featureDrawerData?.skylight?.width ? 'm' : ''}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
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
                                    Last Updated
                                </Typography>
                                <Typography variant="body1">
                                    {dateFormatter(featureDrawerData?.updatedAt, "DATE_TIME_AM_PM")}
                                </Typography>
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

export default ViewDesign; 