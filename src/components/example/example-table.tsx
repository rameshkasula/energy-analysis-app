"use client";

import { useRef } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnVirtualizer,
} from "material-react-table";
import { exampleSetup } from "./makeData";

const ExampleTable = () => {
  //optionally access the underlying virtualizer instance
  const columnVirtualizerInstanceRef = useRef<MRT_ColumnVirtualizer>(null);

  const { columns, data } = exampleSetup;

  const table = useMaterialReactTable({
    columnVirtualizerInstanceRef, //optional
    columnVirtualizerOptions: { overscan: 4 }, //optionally customize the virtualizer
    // columns: fakeColumns, //500 columns
    // data: fakeData,
    columns,
    data,
    enableColumnPinning: true,
    enableColumnResizing: true,
    enableColumnVirtualization: true,
    enableRowNumbers: true,
  });

  return <MaterialReactTable table={table} />;
};

export default ExampleTable;
