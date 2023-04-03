import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col mb-24 h-screen space-y-5  ">
      <p className="text-2xl italic underline">ThankYou For Visiting </p>
      <p>
        {" "}
        Made with <span>&hearts;</span> in India{" "}
      </p>
      <p>Feel free to copy | No &copy; copyright issue</p>
    </div>
  );
};

export default Footer;
