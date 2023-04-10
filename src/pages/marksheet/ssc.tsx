import React from "react";
import PdfComponent from "@/components/pdfComponent/PdfComponent";
type Props = {};

const ssc = (props: Props) => {
  return <PdfComponent title="X Marksheet" docUrl="/Pdf/ssc.pdf" />;
};

export default ssc;
