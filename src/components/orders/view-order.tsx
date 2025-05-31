/* eslint-disable @typescript-eslint/no-explicit-any */
// create or update user component

import AppDrawer from "@/common/app-drawer";
import { CustomRow } from "@/common/app-drawer-row";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ViewOrder() {
  const dispatch = useDispatch();

  const { featureDrawerData } = useSelector((state: any) => state.theme);

  const onClose = () => {
    dispatch(
      setThemeData({
        field: "featurDrawerView",
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

  return (
    <Fragment>
      <AppDrawer
        isOpen={true}
        onClose={onClose}
        title="View Product"
        width={450}
      >
        <CustomRow label="Title" value={featureDrawerData?.title} />
        <CustomRow label="Description" value={featureDrawerData?.description} />
        <CustomRow label="Gross Price" value={featureDrawerData?.grossPrice} />
        <CustomRow label="Tax" value={featureDrawerData?.tax} />
        <CustomRow label="Price" value={featureDrawerData?.totalPrice} />
        <CustomRow label="Category" value={featureDrawerData?.category?.name} />
        <CustomRow label="Vendor" value={featureDrawerData?.vendor?.fullName} />

        <CustomRow
          label="Active"
          value={featureDrawerData?.isApproved ? "Yes" : "No"}
        />
      </AppDrawer>
    </Fragment>
  );
}
