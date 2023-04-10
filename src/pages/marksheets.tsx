import PdfComponent from "@/components/pdfComponent/PdfComponent";
import Head from "next/head";
import React from "react";

type Props = {};

const marksthees = (props: Props) => {
  return (
    <>
      <Head>
        <title>Documents & Marksheets</title>
      </Head>
      <PdfComponent title="My Marksheet" docUrl="/docs/MyResume.pdf" />
      <PdfComponent title="My Marksheet" docUrl="/docs/MyResume.pdf" />
      <PdfComponent title="My Marksheet" docUrl="/docs/MyResume.pdf" />
    </>
  );
};

export default marksthees;
