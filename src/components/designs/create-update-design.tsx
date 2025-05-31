"use client"

import {
    Box,
    Typography,
    Stack,
    TextField,
    Button,
    MenuItem,
    Divider,
    Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { createDesign, updateDesign } from "@/toolkit/slices/designs-slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppDrawer from "@/common/app-drawer";
import React, { Fragment, useEffect } from "react";
import { getAllElectricityRates } from "@/toolkit/slices/electricity-rates-slice";
import { STATUS } from "@/helpers/constants";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
    facades: Yup.object({
        north: Yup.object({
            height: Yup.number().required("Height is required").positive("Height must be positive"),
            width: Yup.number().required("Width is required").positive("Width must be positive"),
            wwr: Yup.number().required("WWR is required").min(0, "WWR must be between 0 and 1").max(1, "WWR must be between 0 and 1"),
        }),
        south: Yup.object({
            height: Yup.number().required("Height is required").positive("Height must be positive"),
            width: Yup.number().required("Width is required").positive("Width must be positive"),
            wwr: Yup.number().required("WWR is required").min(0, "WWR must be between 0 and 1").max(1, "WWR must be between 0 and 1"),
        }),
        east: Yup.object({
            height: Yup.number().required("Height is required").positive("Height must be positive"),
            width: Yup.number().required("Width is required").positive("Width must be positive"),
            wwr: Yup.number().required("WWR is required").min(0, "WWR must be between 0 and 1").max(1, "WWR must be between 0 and 1"),
        }),
        west: Yup.object({
            height: Yup.number().required("Height is required").positive("Height must be positive"),
            width: Yup.number().required("Width is required").positive("Width must be positive"),
            wwr: Yup.number().required("WWR is required").min(0, "WWR must be between 0 and 1").max(1, "WWR must be between 0 and 1"),
        }),
    }),
    shgc: Yup.number().required("SHGC is required").min(0, "SHGC must be between 0 and 1").max(1, "SHGC must be between 0 and 1"),
    skylight: Yup.object({
        height: Yup.number().required("Height is required").positive("Height must be positive"),
        width: Yup.number().required("Width is required").positive("Width must be positive"),
    }),
    exposureHours: Yup.number().required("Exposure hours is required").min(0, "Exposure hours must be positive").max(24, "Exposure hours cannot exceed 24"),
    status: Yup.string().oneOf(Object.values(STATUS)).required("Status is required"),
    notes: Yup.string(),
});

const CreateUpdateDesign = () => {
    const dispatch = useDispatch();
    const { featureDrawerData } = useSelector((state: any) => state.theme);
    const electricityRatesData = useSelector((state: any) => state.electricityRates);

    useEffect(() => {
        dispatch(getAllElectricityRates() as any);
    }, []);

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

    const formik = useFormik({
        initialValues: {
            name: featureDrawerData?.name || "",
            city: featureDrawerData?.city || "",
            facades: {
                north: {
                    height: featureDrawerData?.facades?.north?.height || 0,
                    width: featureDrawerData?.facades?.north?.width || 0,
                    wwr: featureDrawerData?.facades?.north?.wwr || 0,
                },
                south: {
                    height: featureDrawerData?.facades?.south?.height || 0,
                    width: featureDrawerData?.facades?.south?.width || 0,
                    wwr: featureDrawerData?.facades?.south?.wwr || 0,
                },
                east: {
                    height: featureDrawerData?.facades?.east?.height || 0,
                    width: featureDrawerData?.facades?.east?.width || 0,
                    wwr: featureDrawerData?.facades?.east?.wwr || 0,
                },
                west: {
                    height: featureDrawerData?.facades?.west?.height || 0,
                    width: featureDrawerData?.facades?.west?.width || 0,
                    wwr: featureDrawerData?.facades?.west?.wwr || 0,
                },
            },
            shgc: featureDrawerData?.shgc || 0,
            skylight: {
                height: featureDrawerData?.skylight?.height || 0,
                width: featureDrawerData?.skylight?.width || 0,
            },
            exposureHours: featureDrawerData?.exposureHours || 8,
            status: featureDrawerData?.status || "DRAFT",
            notes: featureDrawerData?.notes || "",
        },
        validationSchema,
        onSubmit: (values) => {
            if (featureDrawerData?._id) {
                dispatch(
                    updateDesign({
                        id: featureDrawerData._id,
                        ...values,
                    }) as any
                );
            } else {
                dispatch(createDesign(values) as any);
            }
            onClose();
        },
    });

    const renderFacadeFields = (direction: string) => (
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, textTransform: 'capitalize' }}>
                {direction} Facade
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        label="Height"
                        type="number"
                        name={`facades.${direction}.height`}
                        value={formik.values.facades[direction as keyof typeof formik.values.facades].height}
                        onChange={formik.handleChange}
                        error={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.height &&
                            Boolean(formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.height)}
                        helperText={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.height &&
                            formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.height?.toString()}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        label="Width"
                        type="number"
                        name={`facades.${direction}.width`}
                        value={formik.values.facades[direction as keyof typeof formik.values.facades].width}
                        onChange={formik.handleChange}
                        error={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.width &&
                            Boolean(formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.width)}
                        helperText={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.width &&
                            formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.width?.toString()}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        label="WWR"
                        type="number"
                        name={`facades.${direction}.wwr`}
                        value={formik.values.facades[direction as keyof typeof formik.values.facades].wwr}
                        onChange={formik.handleChange}
                        error={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.wwr &&
                            Boolean(formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.wwr)}
                        helperText={formik.touched.facades?.[direction as keyof typeof formik.values.facades]?.wwr &&
                            formik.errors.facades?.[direction as keyof typeof formik.values.facades]?.wwr?.toString()}
                    />
                </Grid>
            </Grid>
        </Box>
    );

    return (
        <Fragment>
            <AppDrawer
                isOpen={true}
                onClose={onClose}
                title={featureDrawerData?._id ? "Update Design" : "Create Design"}
                width={600}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name?.toString()}
                        />
                        <TextField
                            fullWidth
                            select
                            label="City"
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city?.toString()}
                        >
                            {electricityRatesData?.data?.map((rate: any) => (
                                <MenuItem key={rate._id} value={rate?.city}>{rate?.city}</MenuItem>
                            ))}
                        </TextField>

                        <Divider />
                        <Typography variant="h6">Facades</Typography>
                        {renderFacadeFields("north")}
                        {renderFacadeFields("south")}
                        {renderFacadeFields("east")}
                        {renderFacadeFields("west")}

                        <Divider />
                        <Typography variant="h6">Other Parameters</Typography>

                        <TextField
                            fullWidth
                            label="SHGC"
                            type="number"
                            name="shgc"
                            value={formik.values.shgc}
                            onChange={formik.handleChange}
                            error={formik.touched.shgc && Boolean(formik.errors.shgc)}
                            helperText={formik.touched.shgc && formik.errors.shgc?.toString()}
                        />

                        <Typography variant="subtitle1">Skylight</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Height"
                                    type="number"
                                    name="skylight.height"
                                    value={formik.values.skylight.height}
                                    onChange={formik.handleChange}
                                    error={formik.touched.skylight?.height && Boolean(formik.errors.skylight?.height)}
                                    helperText={formik.touched.skylight?.height && formik.errors.skylight?.height?.toString()}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Width"
                                    type="number"
                                    name="skylight.width"
                                    value={formik.values.skylight.width}
                                    onChange={formik.handleChange}
                                    error={formik.touched.skylight?.width && Boolean(formik.errors.skylight?.width)}
                                    helperText={formik.touched.skylight?.width && formik.errors.skylight?.width?.toString()}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            fullWidth
                            label="Exposure Hours"
                            type="number"
                            name="exposureHours"
                            value={formik.values.exposureHours}
                            onChange={formik.handleChange}
                            error={formik.touched.exposureHours && Boolean(formik.errors.exposureHours)}
                            helperText={formik.touched.exposureHours && formik.errors.exposureHours?.toString()}
                        />

                        <TextField
                            fullWidth
                            select
                            label="Status"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            error={formik.touched.status && Boolean(formik.errors.status)}
                            helperText={formik.touched.status && formik.errors.status?.toString()}
                        >
                            {Object.values(STATUS).map((status) => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            fullWidth
                            label="Notes"
                            name="notes"
                            multiline
                            rows={4}
                            value={formik.values.notes}
                            onChange={formik.handleChange}
                            error={formik.touched.notes && Boolean(formik.errors.notes)}
                            helperText={formik.touched.notes && formik.errors.notes?.toString()}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            {featureDrawerData?._id ? "Update" : "Create"}
                        </Button>
                    </Stack>
                </form>
            </AppDrawer>
        </Fragment>
    );
};

export default CreateUpdateDesign; 