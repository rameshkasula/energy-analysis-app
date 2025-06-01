/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";

import AppHeader from "@/common/app-header";
import { Container } from "@mui/material";
import AppSidebar from "@/common/app-sidebar";
import AppFilters from "@/components/filters/app-filters";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <title>Energy Analysis</title>
      <AppSidebar />

      <AppHeader />

      <Container maxWidth="lg">
        {/* {pathname === "/workspace" && <AppFilters />} */}
        {children}
      </Container>
    </React.Fragment>
  );
}
