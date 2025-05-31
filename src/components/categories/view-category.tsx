/* eslint-disable @typescript-eslint/no-explicit-any */
// view category

import AppDrawer from "@/common/app-drawer";
import { CustomRow } from "@/common/app-drawer-row";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ViewCategory({ title }: any) {
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
    <React.Fragment>
      <AppDrawer
        isOpen={true}
        onClose={onClose}
        title={title ?? "View User"}
        width={450}
      >
        <CustomRow label="Name" value={featureDrawerData?.fullName} />
        <CustomRow label="Email" value={featureDrawerData?.email} />

        <CustomRow label="Role" value={featureDrawerData?.role} />
        <CustomRow
          label="Active"
          value={featureDrawerData?.isVerified ? "Yes" : "No"}
        />
      </AppDrawer>
    </React.Fragment>
  );
}
