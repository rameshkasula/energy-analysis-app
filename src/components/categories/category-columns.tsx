/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";

export const useCategoryColumns = () => {
  const columns = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 120 },
      { accessorKey: "image", header: "Image", size: 120 },
    ],
    []
  ); // Empty dependency array means this will only run once

  return columns;
};
