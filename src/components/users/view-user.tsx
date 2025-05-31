/* eslint-disable @typescript-eslint/no-explicit-any */
// create or update user component

import AppDrawer from "@/common/app-drawer";
import { CustomRow } from "@/common/app-drawer-row";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ViewUser() {
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
      <AppDrawer isOpen={true} onClose={onClose} title="View User" width={450}>
        <CustomRow label="Name" value={featureDrawerData?.fullName} />
        <CustomRow label="Email" value={featureDrawerData?.email} />

        <CustomRow label="Role" value={featureDrawerData?.role} />
        <CustomRow
          label="Active"
          value={featureDrawerData?.isVerified ? "Yes" : "No"}
        />
      </AppDrawer>
    </Fragment>
  );
}
