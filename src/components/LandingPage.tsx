import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import { url } from "inspector";
import myDp from "../assets/Images/Img1.jpeg";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

function LandingPage({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Priyank Rai",
      "Full-Stack Developer",
      "<Love to code/>",
      "Experienced Linux user for over half a decade ",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="flex flex-col  items-center justify-center h-screen space-y-4 overflow-hidden">
      <BackgroundCircle />
      <Image
        src={myDp}
        alt="My Image"
        width={150}
        height={150}
        className="rounded-full relative"
      />
      <div className="flex flex-col justify-between items-center mt-5 z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-widest">
          Software Engineer
        </h2>
        <div className="flex ">
          <SocialIcon
            url="https://linkedin.com/in/urstrulypriyank"
            bgColor="transparent"
            fgColor="green"
          />
          <SocialIcon
            url="https://github.com/urstrulypriyank"
            bgColor="transparent"
            fgColor="green"
          />
        </div>
        <p className="font-extrabold sm:text-xl md:text-4xl text-green-500 ">
          {text}
          <Cursor cursorColor="#F7ABa4" />
        </p>

        <div className="text-xs lg:text-xl">
          <Link href="#About">
            <button className="Landingbtn">About</button>
          </Link>
          <Link href="#Experience">
            <button className="Landingbtn">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className="Landingbtn">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="Landingbtn">Projects </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
