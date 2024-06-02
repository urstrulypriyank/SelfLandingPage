import React from "react";

const SectionHeading = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  return (
    <h2
      className={` text-2xl md:text-4xl font-semibold tracking-[1rem] text-center md:mt-10 mt-12 ${className}`}
    >
      {heading}
    </h2>
  );
};

export default SectionHeading;
