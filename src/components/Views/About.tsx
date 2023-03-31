import Image from "next/image";
import React from "react";
import myDp from "../../assets/Images/Img1.jpeg";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px]  text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -150,
        }}
        whileInView={{
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src={myDp}
          width={450}
          height={450}
          alt="Priyank Rai"
          className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w64 md:h-96 xl:w-[600px] xl:h-[500px] mr-10 mt-10"
        />
      </motion.div>

      {/* About Me  */}
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-gray-400 text-2xl font-semibold">
          Here is a Little <span className="text-green-700">Background</span>
        </h4>
        <p className="text-sm text-justify">
          I&apos;m Priyank Rai I am a full stack developer and devops enthusiast
          and daily driving Linux for 5+ years I use arch Btw, recent computer
          science graduate from Lakshmi Narain College of Technolgy & Science,
          Bhopal, I can work for you from developing a app to deploying and
          monitoring it. I am currently seeking a software developer role in a
          dynamic and forward-thinking company where I can utilize my skills and
          contribute to its success. If you&apos;re interested in working
          together, feel free to contact and connect with me
        </p>
      </div>
    </div>
  );
};

export default About;
