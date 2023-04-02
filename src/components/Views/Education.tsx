import React from "react";
import Educations from "../Educations";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-10">
      <h3 className="absolute top-5 uppercase tracking-[20px]  text-2xl underline max-md:text-lg ">
        Education and Experience
      </h3>
      <Educations />
    </div>
  );
};

export default Education;
