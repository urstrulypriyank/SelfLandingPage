import React from "react";
import { SocialSiteData } from "@/lib/constant";
// import CirclePulse from "./Theme/Background/CirclePulse";
type Props = {};

const Footer = (props: Props) => {
  const date = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center flex-col mb-24 h-screen space-y-5 snap-center border-t ">
      <p className="text-2xl italic tracking-[0.3rem]">You can find me on </p>
      <div className="flex space-x-3 ">
        {SocialSiteData.map((Item) => {
          return (
            <a
              key={Item.id}
              href={Item.href}
              target="_blank"
              className="hover:-translate-y-1"
            >
              <Item.icon key={Item.id} className="w-auto h-16" />
            </a>
          );
        })}
      </div>
      <p>
        {" "}
        Made with{" "}
        <span className="text-2xl font-extrabold text-red-600">
          &hearts;
        </span>{" "}
        in India{" "}
      </p>
      <p>Feel free to copy | No &copy; copyright issue</p>
      <p>
        Source Code avilable in{" "}
        <a
          className="underline text-blue-500"
          href="https://github.com/urstrulypriyankrai/SelfLandingPage/"
          target="_blank"
        >
          Github
        </a>{" "}
      </p>
    </footer>
  );
};
export default Footer;
