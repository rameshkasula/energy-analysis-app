import Box from "@mui/material/Box";
import MButton from "./MButton";
import * as React from "react";
// import { exportComponentAsPDF } from "react-component-export-image";
import DomToPdf from "dom-to-pdf";

export default function MPdfButton({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef(null);
  const generatePDF = () => {
    const element = ref.current;
    //  exportComponentAsPDF({ html: element });
    DomToPdf(element, { filename: `${title}.pdf` });
  };

  return (
    <React.Fragment>
      <MButton sx={{ float: "right", mb: 1 }} onClick={generatePDF}>
        {" "}
        Generate PDF{" "}
      </MButton>
      <Box ref={ref}>{children}</Box>
    </React.Fragment>
  );
}
