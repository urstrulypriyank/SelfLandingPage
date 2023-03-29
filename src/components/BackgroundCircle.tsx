import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-red-500 rounded-full h-[200px] w-[200px]  mt-52 animate-ping  " />
      <div className="absolute border border-red-500 rounded-full h-[250px] w-[250px] mt-52 animate-ping" />
      <div className="absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div
        className="absolute border border-red-500 rounded-full h-[450px] w-[450px] mt-52
        animate-ping"
      />
      <div className="absolute border border-red-500 rounded-full h-[400px] w-[400px] mt-52 animate-pulse" />
    </div>
  );
};

export default BackgroundCircle;
