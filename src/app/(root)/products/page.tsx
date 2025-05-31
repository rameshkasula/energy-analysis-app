"use client";

import * as React from "react";

import PageContainer from "@/common/page-container";
import ProductTable from "@/components/products/product-table";

export default function Page() {
  return (
    <PageContainer title="Products" description="Products Page">
      <ProductTable />
    </PageContainer>
  );
}
