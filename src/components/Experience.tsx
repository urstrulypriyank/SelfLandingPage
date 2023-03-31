import React from "react";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px]  text-2xl">
        Experience
      </h3>
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
