"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { createElectricityRate, updateElectricityRate } from "@/toolkit/slices/electricity-rates-slice";
import AppDrawer from "@/common/app-drawer";
import { STATUS } from "@/helpers/constants";


const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    rate: Yup.number()
        .required("Rate is required")
        .positive("Rate must be positive")
        .min(0, "Rate must be greater than or equal to 0"),
    unit: Yup.string().required("Unit is required"),
    status: Yup.string().oneOf(Object.values(STATUS)).required("Status is required"),
    isActive: Yup.boolean().required("Active status is required"),
    notes: Yup.string(),
});

interface FormValues {
    city: string;
    rate: number;
    unit: string;
    status: string;
    isActive: boolean;
    notes: string;
}

const CreateUpdateElectricityRate = () => {
    const dispatch = useDispatch();
    const themeData = useSelector((state: any) => state.theme);
    const featureDrawerData = themeData?.featureDrawerData;


    const formik = useFormik<FormValues>({
        initialValues: {
            city: featureDrawerData?.city || "",
            rate: featureDrawerData?.rate || 0,
            unit: featureDrawerData?.unit || "kWh",
            status: featureDrawerData?.status || "DRAFT",
            isActive: featureDrawerData?.isActive ?? true,
            notes: featureDrawerData?.notes || "",
        },
        validationSchema,
        onSubmit: async (values) => {
            if (featureDrawerData?._id) {
                dispatch(updateElectricityRate({ id: featureDrawerData._id, ...values }) as any);
            } else {
                dispatch(createElectricityRate(values) as any);
            }
            dispatch(setThemeData({ field: "featureDrawer", data: false } as any));
        },
    });

    return (
        <AppDrawer
            isOpen={themeData?.featureDrawer}
            onClose={() => {
                dispatch(setThemeData({ field: "featureDrawer", data: false } as any));
                // dispatch(setThemeData({ field: "featureDrawerData", data: null } as any));
                // dispatch(setThemeData({ field: "featureDrawerTitle", data: null } as any));
            }}
            title={featureDrawerData?._id ? "Update Electricity Rate" : "Create Electricity Rate"}
        >
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    {/* city text field */}
                    <TextField
                        fullWidth
                        name="city"
                        label="City"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city as string}
                    />
                    <TextField
                        fullWidth
                        name="rate"
                        label="Rate"
                        type="number"
                        value={formik.values.rate}
                        onChange={formik.handleChange}
                        error={formik.touched.rate && Boolean(formik.errors.rate)}
                        helperText={formik.touched.rate && formik.errors.rate as string}
                    />

                    <FormControl fullWidth error={formik.touched.unit && Boolean(formik.errors.unit)}>
                        <InputLabel>Unit</InputLabel>
                        <Select
                            name="unit"
                            value={formik.values.unit}
                            onChange={formik.handleChange}
                            label="Unit"
                        >
                            <MenuItem value="kWh">kWh</MenuItem>
                            <MenuItem value="kW">kW</MenuItem>
                        </Select>
                        {formik.touched.unit && formik.errors.unit && (
                            <FormHelperText>{formik.errors.unit as string}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={formik.touched.status && Boolean(formik.errors.status)}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            label="Status"
                        >
                            {Object.values(STATUS).map((status) => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                            ))}

                        </Select>
                        {formik.touched.status && formik.errors.status && (
                            <FormHelperText>{formik.errors.status as string}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth error={formik.touched.isActive && Boolean(formik.errors.isActive)}>
                        <InputLabel>Active Status</InputLabel>
                        <Select
                            name="isActive"
                            value={formik.values.isActive ? "true" : "false"}
                            onChange={(e) => formik.setFieldValue("isActive", e.target.value === "true")}
                            label="Active Status"
                        >
                            <MenuItem value="true">Active</MenuItem>
                            <MenuItem value="false">Inactive</MenuItem>
                        </Select>
                        {formik.touched.isActive && formik.errors.isActive && (
                            <FormHelperText>{formik.errors.isActive as string}</FormHelperText>
                        )}
                    </FormControl>

                    <TextField
                        fullWidth
                        name="notes"
                        label="Notes"
                        multiline
                        rows={4}
                        value={formik.values.notes}
                        onChange={formik.handleChange}
                        error={formik.touched.notes && Boolean(formik.errors.notes)}
                        helperText={formik.touched.notes && formik.errors.notes as string}
                    />


                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                dispatch(setThemeData({ field: "featureDrawer", data: false } as any));
                            }}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained">
                            {featureDrawerData?._id ? "Update" : "Create"}
                        </Button>
                    </Box>
                </Stack>
            </form>
        </AppDrawer>
    );
};

export default CreateUpdateElectricityRate; 