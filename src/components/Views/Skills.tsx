import React from "react";
import { motion } from "framer-motion";
import SkillSection from "../SkillSection";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px]  text-2xl">
        Skills
      </h3>

      <SkillSection />
    </motion.div>
  );
};

export default Skills;
