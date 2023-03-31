import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Headder({}: Props) {
  return (
    <header className="  p-2 flex flex-row justify-between rounded-xl max-w-7xl mx-auto z-20 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        id="socialIconLeft"
        className="flex flex-row items-center cursor-pointer"
      >
        {/* Social Icons  */}
        <SocialIcon
          url="https://github.com/urstrulypriyank"
          bgColor="transparent"
          fgColor="darkgreen"
        />
        <SocialIcon
          url="https://linkedin.com/in/urstrulypriyank"
          bgColor="transparent"
          fgColor="darkgreen"
        />
        <SocialIcon
          url="https://priyankrai.hashnode.dev/"
          bgColor="transparent"
          fgColor="darkgreen"
        />
      </motion.div>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        id="socialIconRight"
        className="flex flex-row items-center cursor-pointer"
      >
        {/* SocailIcons Contact */}
        <SocialIcon
          url="mailto:0priyankrai+contact@gmail.com"
          bgColor="transparent"
          fgColor="darkgreen"
        />
        <p className="uppercase hidden md:inline-flex font-medium text-green-500">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}

export default Headder;
