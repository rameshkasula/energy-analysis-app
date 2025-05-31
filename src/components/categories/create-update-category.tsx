/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { useDispatch } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { FormikProvider, useFormik } from "formik";
import { Box, Button } from "@mui/material";
import * as Yup from "yup";

// components
import MTextField from "@/lib/MTextField";
import AppDrawer from "@/common/app-drawer";
import { createCategory } from "@/toolkit/slices/category-slice";

export default function CreateUpdateCategory({ title }: any) {
  const dispatch = useDispatch();
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
      name: "John Doe",
      imageUrl: "https://www.google.com",
      description: "This is a description",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      imageUrl: Yup.string().required("Required"),
      description: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      const payload = {
        ...values,
      };
      delete payload.description;
      dispatch(createCategory(payload));
    },
  });

  return (
    <React.Fragment>
      <AppDrawer
        isOpen={true}
        onClose={onClose}
        title={title ?? "Category"}
        width={450}
      >
        <FormikProvider value={formik}>
          <Box component={"form"} noValidate onSubmit={formik.handleSubmit}>
            <MTextField name="name" label="Name" />
            <MTextField name="imageUrl" label="Image URL" />
            <MTextField name="description" label="Description" minRows={4} />
            <Button
              sx={{ my: 1, ml: 1 }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </FormikProvider>
      </AppDrawer>
    </React.Fragment>
  );
}
