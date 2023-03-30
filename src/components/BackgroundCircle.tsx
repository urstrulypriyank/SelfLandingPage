import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      className="relative flex justify-center items-center flex-col"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]   animate-ping  " />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-pulse" />
      <div
        className="absolute border border-green-300 rounded-full h-[450px] w-[450px]
        animate-ping"
      />
      <div className="absolute border border-[#333333]  rounded-full h-[400px] w-[400px]  animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircle;
