import React from "react";
import PdfComponent from "@/components/pdfComponent/PdfComponent";
type Props = {};

const graduation = (props: Props) => {
  return <PdfComponent title="VII SEM MARKSHEET" docUrl="/Pdf/graduation.pdf" />;
};

export default graduation;
