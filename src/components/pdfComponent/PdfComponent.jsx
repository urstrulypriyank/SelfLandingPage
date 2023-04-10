import Link from "next/link";
import React from "react";

const PdfComponent = ({ title, docUrl }) => {
  console.log(title);
  return (
    <>
      <div className="flex items-center justify-center h-full w-screen bg-gray-100">
        <div className="w-screen rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 py-4 px-6 text-white flex w-screen items-center justify-center flex-col">
            <h1 className="text-xl font-semibold text-center">{title}</h1>
            <button className="bg-gray-600 m-2 p-2 rounded-md border border-green ">
              <Link href="/">Home</Link>
            </button>
          </div>
          <div className="bg-white py-6 px-6">
            <iframe
              src={docUrl}
              style={{ width: "100%", height: "100vh" }}
              className="w-full h-80"
              title={docUrl}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfComponent;
