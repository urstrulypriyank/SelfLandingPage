import React from "react";
import Educations from "../Educations";
import { motion } from "framer-motion";

type Props = {};

const Education = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-10"
      initial={{
        x: -350,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
        opacity: 1,
      }}
    >
      <h3 className="absolute top-5 uppercase tracking-[20px]  text-2xl underline max-md:text-lg ">
        Education and Experience
      </h3>
      <Educations />
    </motion.div>
  );
};

export default Education;
