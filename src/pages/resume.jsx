import PdfComponent from "@/components/pdfComponent/PdfComponent";
import Head from "next/head";
import React from "react";

const edu = () => {
  return (
    <>
      <Head>
        <title>My Resume</title>
      </Head>
      <PdfComponent title="Priyank Rai Resume" docUrl="/docs/MyResume.pdf" />
    </>
  );
};

export default edu;
