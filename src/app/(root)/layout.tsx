/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";

import AppHeader from "@/common/app-header";
import { Container } from "@mui/material";
import AppSidebar from "@/common/app-sidebar";
import AppFilters from "@/components/filters/app-filters";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { setUserData } from "@/toolkit/slices/user-slice";
import { getAllCategories, getAllVendors } from "@/toolkit/slices/filter-slice";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const themeData = useSelector((state: any) => state.theme);

  // // NOTE: Do not touch this line
  const {
    data: session,
    status,
  }: {
    data: any | null;
    status: "loading" | "authenticated" | "unauthenticated";
  } = useSession();

  // console.log("session", session);

  React.useEffect(() => {
    if (session || status !== "authenticated") {
      dispatch(
        setUserData({
          field: "user",
          data: session?.user,
        } as any)
      );
      if (session?.user?.email && themeData.userEmails.length === 0) {
        dispatch(
          setThemeData({
            field: "userEmails",
            data: [session?.user?.email],
          } as any)
        );
      }
    }
  }, [session, status]);

  // fetch categories and vendors
  React.useEffect(() => {
    if (status == "authenticated") {
      dispatch(
        getAllCategories({
          limit: 100,
          page: 0,
        }) as any
      );
      dispatch(getAllVendors() as any);
    }
  }, [status]);

  return (
    <React.Fragment>
      {/* <MainWrapper> */}
      <title>GoKhana</title>
      <AppSidebar />

      {/* <PageWrapper
          className="page-wrapper"
          sx={{
            width: `calc(100% - ${isDrawerOpen ? 250 : 70})`,
            ...(isDrawerOpen && {
              [theme.breakpoints.up("lg")]: {
                ml: `${isDrawerOpen ? 250 : 70}px`,
              },
            }),
            backgroundColor: "background.default",
          }}
        > */}
      <AppHeader />

      <Container maxWidth="lg">
        <AppFilters />
        {children}
      </Container>
      {/* </PageWrapper> */}
      {/* </MainWrapper> */}
    </React.Fragment>
  );
}
