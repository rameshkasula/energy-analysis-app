/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/signin.js

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
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { setUserData } from "@/toolkit/slices/user-slice";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userData = useSelector((state: any) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        dispatch(
          setUserData({
            field: "isLoading",
            data: true,
          } as any)
        );
        const res: any = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: "Sign In Successful",
              type: "success",
            },
          } as any)
        );

        dispatch(
          setUserData({
            field: "user",
            data: res.data?.user,
          } as any)
        );
        router.push("/workspace");
      } catch (err: any) {
        // setError(err.message);
        console.log(err);

        dispatch(
          setThemeData({
            field: "toast",
            data: {
              open: true,
              message: err.message,
              type: "error",
            },
          } as any)
        );

        formik.resetForm();
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
          bgcolor: "background.paper",
          borderColor: "primary.main",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>

          <form onSubmit={formik.handleSubmit}>
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={userData.isLoading}
            >
              {userData.isLoading && <CircularProgress size={24} />} Sign In
            </Button>
          </form>

          <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid item>
              <Typography
                color="textSecondary"
                component={Link}
                href="#"
                passHref
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="textSecondary"
                component={Link}
                href="/auth/sign-up"
                passHref
                variant="body2"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {"Don't have an account?"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignInPage;
