/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ExcelJS from "exceljs";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { IconDownload } from "@tabler/icons-react";

/**
+ * Component to download excel file from data provided
+ * @param sheets - Sheets to be added in excel file
+ * @param fileName - Name of the excel file to be downloaded
+ * @param checkFun - Optional function to fetch data if sheets is empty
+ * @returns Button to download excel file
+ */

const MExcelDownload = ({ sheets, fileName, checkFun }: any) => {
  const [loading, setLoading] = useState(false);

  /**
   * Calculates the ending column name from the given column number.
   *
   * @param columnNumber - The column number.
   * @returns The ending column name.
   *
   * @example
   * calculateEndingColumnName(27) // returns 'Z'
   * calculateEndingColumnName(28) // returns 'AA'
   * calculateEndingColumnName(703) // returns 'ZZ'
   */
  const calculateEndingColumnName = (columnNumber: number) => {
    let columnName = "";
    while (columnNumber > 0) {
      const remainder = (columnNumber - 1) % 26;
      columnName = String.fromCharCode(65 + remainder) + columnName;
      columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return columnName;
  };

  /**
   * Downloads the excel file with the provided sheets.
   *
   * @returns {Promise<void>} A promise that resolves when the file is downloaded.
   */
  const downloadExcel = async () => {
    setLoading(true);

    // Create a new workbook
    const workbook = new ExcelJS.Workbook();

    let fullData;

    try {
      // If there's a checkFun provided, use it to fetch data
      if (checkFun) {
        fullData = await checkFun();
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }

    // Use the mainData provided, or the fullData if sheets is empty
    const mainData = sheets.length === 0 ? fullData : sheets;

    // Define the left sided and right sided columns
    const leftSided = [
      "Client Approval Document",
      "Client PO",
      "Client Invoice",
      "Requirements",
      "Payment Link",
    ];

    mainData?.forEach((sheet: any) => {
      const { sheetName, titleRow, data } = sheet;

      // Create a new worksheet for each sheet
      const worksheet = workbook.addWorksheet(sheetName.toUpperCase());

      // Set the title of the worksheet
      const sheetNameCell = worksheet.getCell("A1");
      sheetNameCell.value = sheetName.toUpperCase();
      sheetNameCell.font = {
        bold: true,
        size: 16,
        color: { argb: "000000" },
      };
      sheetNameCell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
      sheetNameCell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" },
      };

      // Merge the title row cells
      const endingColumn =
        titleRow?.length > 65
          ? calculateEndingColumnName(65 + titleRow?.length)
          : calculateEndingColumnName(titleRow?.length);

      worksheet.mergeCells(`A1:${endingColumn}1`);

      // Set the title row style and width
      const titleRowCell = worksheet.addRow(titleRow);
      titleRowCell.font = {
        bold: true,
        color: { argb: "000000" },
      };
      titleRowCell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };

      titleRowCell.eachCell((cell: any, colNumber: any) => {
        const column = worksheet.getColumn(colNumber);
        const cellWidth = Math.max(35, cell?.value?.toString()?.length + 2);
        column.width = cellWidth;
      });

      data.forEach((rowData: any) => {
        const updatedRowData = rowData.map((cell: any) =>
          cell !== "" ? cell : ""
        );
        const columnCells = worksheet.addRow(updatedRowData);
        columnCells.eachCell((cell, colNumber) => {
          const isLeftSided = leftSided.includes(titleRow[colNumber - 1]);
          cell.alignment = {
            vertical: "middle",
            horizontal: isLeftSided ? "left" : "center",
          };
          cell.border = {
            top: { style: "thin", color: { argb: "000000" } },
            left: { style: "thin", color: { argb: "000000" } },
            bottom: { style: "thin", color: { argb: "000000" } },
            right: { style: "thin", color: { argb: "000000" } },
          };
        });

        if (JSON.stringify(rowData).toLowerCase().includes("subtotal")) {
          columnCells.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFFF00" },
          };
        }
      });
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}.xlsx`;
      a.click();
    });

    setLoading(false);
  };

  return (
    <Button onClick={() => downloadExcel()}>
      Excel Download &nbsp;
      {loading ? (
        <CircularProgress size={18} color="primary" />
      ) : (
        <IconDownload size={18} />
      )}
    </Button>
  );
};

export default MExcelDownload;
