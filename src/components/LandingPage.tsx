import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

function LandingPage({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Priyank Rai",
      "Full-Stack Developer",
      "<Love to code/>",
      "Experienced Linux user for over half a decade as primary desktop os",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className=" flex justify-center text-center">
      <BackgroundCircle />
      <p className="font-extrabold  text-4xl text-green-500">
        {text}
        <Cursor cursorColor="#F7ABa4" />
      </p>
    </div>
  );
}

export default LandingPage;
