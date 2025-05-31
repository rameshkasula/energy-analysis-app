import {
    Box,
    Button,
    Divider,
    Grid,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { createSolarRadiation, updateSolarRadiation } from "@/toolkit/slices/solar-radiation-slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppDrawer from "@/common/app-drawer";
import React, { Fragment, useEffect } from "react";
import { STATUS } from "@/helpers/constants";
import { getAllElectricityRates } from "@/toolkit/slices/electricity-rates-slice";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required").max(100, "Name must be less than 100 characters"),
    city: Yup.string().required("City is required"),
    radiation: Yup.object({
        north: Yup.number()
            .required("North radiation is required")
            .min(0, "North radiation must be positive"),
        south: Yup.number()
            .required("South radiation is required")
            .min(0, "South radiation must be positive"),
        east: Yup.number()
            .required("East radiation is required")
            .min(0, "East radiation must be positive"),
        west: Yup.number()
            .required("West radiation is required")
            .min(0, "West radiation must be positive"),
        roof: Yup.number()
            .required("Roof radiation is required")
            .min(0, "Roof radiation must be positive"),
    }),
    status: Yup.string().oneOf(Object.values(STATUS)).required("Status is required"),
    isActive: Yup.boolean().required("Active status is required"),
    unit: Yup.string().required("Unit is required"),
    notes: Yup.string(),
});

const CreateUpdateSolarRadiation = () => {
    const dispatch = useDispatch();
    const { featureDrawerData } = useSelector((state: any) => state.theme);
    const electricityRatesData = useSelector((state: any) => state.electricityRates);

    useEffect(() => {
        dispatch(getAllElectricityRates() as any);
    }, [featureDrawerData]);

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
            radiation: {
                north: featureDrawerData?.radiation?.north || 0,
                south: featureDrawerData?.radiation?.south || 0,
                east: featureDrawerData?.radiation?.east || 0,
                west: featureDrawerData?.radiation?.west || 0,
                roof: featureDrawerData?.radiation?.roof || 0,
            },
            status: featureDrawerData?.status || STATUS.DRAFT,
            isActive: featureDrawerData?.isActive ?? true,
            unit: featureDrawerData?.unit || "kWh/m²/day",
            notes: featureDrawerData?.notes || "",
        },
        validationSchema,
        onSubmit: (values) => {
            if (featureDrawerData?._id) {
                dispatch(
                    updateSolarRadiation({
                        id: featureDrawerData._id,
                        ...values,
                    }) as any
                );
            } else {
                dispatch(createSolarRadiation(values) as any);
            }
            onClose();
        },
    });

    return (
        <Fragment>
            <AppDrawer
                isOpen={true}
                onClose={onClose}
                title={featureDrawerData?._id ? "Update Solar Radiation" : "Create Solar Radiation"}
                width={600}
            >
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={{ xs: 2, md: 3 }}>
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
                        <Typography variant="h6">Radiation Values</Typography>

                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="North"
                                    type="number"
                                    name="radiation.north"
                                    value={formik.values.radiation.north}
                                    onChange={formik.handleChange}
                                    error={formik.touched.radiation?.north && Boolean(formik.errors.radiation?.north)}
                                    helperText={formik.touched.radiation?.north && formik.errors.radiation?.north?.toString()}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="South"
                                    type="number"
                                    name="radiation.south"
                                    value={formik.values.radiation.south}
                                    onChange={formik.handleChange}
                                    error={formik.touched.radiation?.south && Boolean(formik.errors.radiation?.south)}
                                    helperText={formik.touched.radiation?.south && formik.errors.radiation?.south?.toString()}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="East"
                                    type="number"
                                    name="radiation.east"
                                    value={formik.values.radiation.east}
                                    onChange={formik.handleChange}
                                    error={formik.touched.radiation?.east && Boolean(formik.errors.radiation?.east)}
                                    helperText={formik.touched.radiation?.east && formik.errors.radiation?.east?.toString()}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="West"
                                    type="number"
                                    name="radiation.west"
                                    value={formik.values.radiation.west}
                                    onChange={formik.handleChange}
                                    error={formik.touched.radiation?.west && Boolean(formik.errors.radiation?.west)}
                                    helperText={formik.touched.radiation?.west && formik.errors.radiation?.west?.toString()}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Roof"
                                    type="number"
                                    name="radiation.roof"
                                    value={formik.values.radiation.roof}
                                    onChange={formik.handleChange}
                                    error={formik.touched.radiation?.roof && Boolean(formik.errors.radiation?.roof)}
                                    helperText={formik.touched.radiation?.roof && formik.errors.radiation?.roof?.toString()}
                                />
                            </Grid>
                        </Grid>

                        <Divider />
                        <Typography variant="h6">Other Parameters</Typography>

                        <Grid container spacing={{ xs: 2, md: 3 }}>
                            <Grid item xs={6}>
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
                                        <MenuItem key={status} value={status}>
                                            {status}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Active Status"
                                    name="isActive"
                                    value={formik.values.isActive ? "true" : "false"}
                                    onChange={(e) => formik.setFieldValue("isActive", e.target.value === "true")}
                                    error={formik.touched.isActive && Boolean(formik.errors.isActive)}
                                    helperText={formik.touched.isActive && formik.errors.isActive?.toString()}
                                >
                                    <MenuItem value="true">Active</MenuItem>
                                    <MenuItem value="false">Inactive</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Unit"
                                    name="unit"
                                    value={formik.values.unit}
                                    onChange={formik.handleChange}
                                    error={formik.touched.unit && Boolean(formik.errors.unit)}
                                    helperText={formik.touched.unit && formik.errors.unit?.toString()}
                                />
                            </Grid>
                        </Grid>

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

export default CreateUpdateSolarRadiation; 