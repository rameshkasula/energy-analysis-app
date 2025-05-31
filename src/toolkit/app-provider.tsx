"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { Fragment } from "react";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Provider store={store}>{children}</Provider>
    </Fragment>
  );
};
