import Image from "next/image";
import React from "react";
import myDp from "../../assets/Images/Img1.jpeg";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px]  text-2xl max-sm:top-5">
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
          className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w64 md:h-96 xl:w-[600px] xl:h-[500px] mr-10 mt-10 max-md:mb-5"
        />
      </motion.div>

      {/* About Me  */}
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-gray-400 text-2xl font-semibold">
          Here is a Little <span className="text-green-700">Background</span>
        </h4>
        <p className="text-sm text-justify">
          Hi, my name is Priyank Rai, and I&apos;m a skilled full stack
          developer and DevOps enthusiast. I have over five years of experience
          working with Linux, and I recently graduated with a degree in Computer
          Science from Lakshmi Narain College of Technology & Science, Bhopal. I
          have a strong track record of developing and deploying high-quality
          software applications, and I&apos;m comfortable working on both
          front-end and back-end technologies. I&apos;m passionate about
          building scalable, reliable systems and working collaboratively with
          teams to achieve project success. If you&apos;re looking for a
          dedicated and experienced software developer, please don&apos;t
          hesitate to reach out and connect with me.
        </p>
      </div>
    </div>
  );
};

export default About;
