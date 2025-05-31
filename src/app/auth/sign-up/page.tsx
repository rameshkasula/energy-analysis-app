/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/signup.js

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosClient } from "@/helpers/axios-helper";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { setUserData } from "@/toolkit/slices/user-slice";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userData = useSelector((state: any) => state.user);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        // Perform sign-up logic here
        // You can make an API call to your server or use Firebase authentication
        console.log(values);
        // router.push("/auth/sign-in");

        dispatch(
          setUserData({
            field: "isLoading",
            data: true,
          } as any)
        );

        const payload = {
          fullName: values.name,
          email: values.email,
          password: values.password,
        };

        const response = await axiosClient.post("/auth/user", payload);

        console.log("response", response);

        if (response.status === 201) {
          console.log("Sign Up Successful");

          dispatch(
            setThemeData({
              field: "toast",
              data: {
                open: true,
                message: "Sign Up Successful",
                type: "success",
              },
            } as any)
          );

          // dispatch(
          //   setUserData({
          //     field: "user",
          //     data: response.data?.user,
          //   } as any)
          // );

          router.push("/auth/sign-in");
        }
      } catch (err: any) {
        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: "Sign Up Failed",
              type: "error",
            },
          } as any)
        );
      } finally {
        dispatch(
          setUserData({
            field: "isLoading",
            data: false,
          } as any)
        );
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Card
        sx={{
          maxWidth: "450px",
          width: "100%",
          p: 2,
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              margin="normal"
            />

            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              margin="normal"
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              margin="normal"
            />

            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="outlined"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              fullWidth
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={formik.isSubmitting || userData.isLoading}
            >
              {userData.isLoading ? (
                <CircularProgress size={24} />
              ) : (
                " Sign Up "
              )}
            </Button>
          </form>

          <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
            <Grid item>
              <Typography
                color="textSecondary"
                component={Link}
                href="/auth/sign-in"
                passHref
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {" Already have an account? Sign In"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignUpPage;
