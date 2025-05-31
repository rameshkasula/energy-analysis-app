/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack, TextField } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { IconMailPlus } from "@tabler/icons-react";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { useDispatch, useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AppMailReport({ open, handleClose }: any) {
  const dispatch = useDispatch();
  const themeData = useSelector((state: any) => state.theme);

  const handleAddEmail = () => {
    dispatch(
      setThemeData({
        field: "userEmails",
        data: [...themeData.userEmails, formik.values.email],
      } as any)
    );
  };

  const handleRemoveEmail = (email: string) => {
    dispatch(
      setThemeData({
        field: "userEmails",
        data: themeData.userEmails.filter((e: string) => e !== email),
      } as any)
    );
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleAddEmail();
      formik.setFieldValue("email", "");
    },
  });

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Send Report
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color:
              theme.palette.mode != "dark"
                ? theme.palette.grey[500]
                : theme.palette.primary.contrastText,
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </Typography>
          <FormikProvider value={formik}>
            <Box
              component={"form"}
              display="flex"
              my={2}
              alignItems="flex-start"
              gap={2}
              flexGrow={0}
            >
              <TextField
                label="Add Email"
                fullWidth
                size="small"
                variant="standard"
                value={formik.values.email}
                error={Boolean(formik.errors.email && formik.touched.email)}
                helperText={
                  Boolean(formik.touched.email) && formik.errors.email
                }
                onChange={formik.handleChange}
                name="email"
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                disabled={themeData.isReportLoading}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      disabled={
                        themeData.isReportLoading || !formik.values.email
                      }
                      size="small"
                      onClick={handleAddEmail}
                    >
                      <IconMailPlus stroke={1.3} />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Stack flexDirection="row" flexWrap="wrap" py={1} gap={1}>
              {themeData?.userEmails?.length > 0 &&
                themeData.userEmails?.map((email: string, index: number) => (
                  <Chip
                    key={index}
                    label={email}
                    color="primary"
                    onDelete={() => handleRemoveEmail(email)}
                  />
                ))}
            </Stack>
          </FormikProvider>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Send
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
