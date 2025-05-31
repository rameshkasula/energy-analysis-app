/* eslint-disable @typescript-eslint/no-explicit-any */
// create or update user component

import AppDrawer from "@/common/app-drawer";
import { CustomRow } from "@/common/app-drawer-row";
import { setThemeData } from "@/toolkit/slices/theme-slice";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";

export default function CreateUpdateUser() {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(
      setThemeData({
        field: "featureDrawer",
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
        title="Create or Update User"
        width={450}
      >
        <CustomRow label="Name" value="John Doe" />
      </AppDrawer>
    </Fragment>
  );
}
