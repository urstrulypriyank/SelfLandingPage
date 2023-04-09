import React from "react";

type Props = {};

const edu = (props: Props) => {
  return (
    <>
      {/* <h1>College Documents</h1>
      <iframe src="/docs/MyResume.pdf" className="flex w-screen h-screen" /> */}

      <div className="flex items-center justify-center h-full w-screen bg-gray-100">
        <div className="w-screen rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 py-4 px-6 text-white">
            <h1 className="text-xl font-semibold text-center">
              Priyank Rai Resume
            </h1>
          </div>
          <div className="bg-white py-6 px-6">
            <iframe
              src="/docs/MyResume.pdf"
              style={{ width: "100%", height: "100vh" }}
              className="w-full h-80"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default edu;
