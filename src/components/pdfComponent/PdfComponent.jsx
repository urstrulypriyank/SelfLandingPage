import React from "react";

const PdfComponent = ({ title, docUrl }) => {
  console.log(title);
  return (
    <>
      <div className="flex items-center justify-center h-full w-screen bg-gray-100">
        <div className="w-screen rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 py-4 px-6 text-white">
            <h1 className="text-xl font-semibold text-center">{title}</h1>
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
