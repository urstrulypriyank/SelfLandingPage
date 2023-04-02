import React from "react";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px]  text-2xl underline  ">
        Education and Experience
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory x-20 "></div>
    </div>
  );
};

export default Education;
