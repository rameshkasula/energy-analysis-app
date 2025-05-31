"use client";

import * as React from "react";

import PageContainer from "@/common/page-container";
import OrdersTable from "@/components/orders/orders-table";

export default function Page() {
  return (
    <PageContainer title="Products" description="Products Page">
      <OrdersTable />
    </PageContainer>
  );
}
