import React from "react";
import PdfComponent from "@/components/pdfComponent/PdfComponent";
type Props = {};

const hsc = (props: Props) => {
  return <PdfComponent title="XII Marksheet" docUrl="/Pdf/hsc.pdf" />;
};

export default hsc;
