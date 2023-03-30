import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import { url } from "inspector";
import myDp from "../assets/Images/Img1.jpeg";

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
    <div className="flex flex-col  items-center justify-center h-screen space-y-8 overflow-hidden">
      <BackgroundCircle />
      <Image
        src={myDp}
        alt="My Image"
        width={150}
        height={150}
        className="rounded-full relative"
      />
      <div className="flex flex-col justify-between items-center mt-5">
        <h2 className="text-sm uppercase text-gray-500">Software Engineer</h2>
        <p className="font-extrabold sm:text-xl md:text-4xl text-green-500 ">
          {text}
          <Cursor cursorColor="#F7ABa4" />
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
