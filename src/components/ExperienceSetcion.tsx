import React from "react";
import SectionHeading from "./common/SectionHeading";

type Props = {};

const ExperienceSetcion = (props: Props) => {
  return (
    <section className="w-screen h-screen snap-center space-y-10 pt-10">
      <SectionHeading heading="Experinece" className="" />
      <Education />
    </section>
  );
};

export default ExperienceSetcion;

const Education = () => {
  const educationData = [
    {
      institution: "Freelance Developer",
      degree: "",
      startDate: "feb 2024",
      endDate: "current",
      description:
        "Providing services and developing application for the clients",
    },
    {
      institution: "Software Engineer",
      degree: "Exia Technology private limited",
      startDate: "Oct 2023",
      endDate: "Dec 2023",
      description: "Worked as full stack solo developer in saas prouduct",
    },
    {
      institution: "LNCTS",
      degree: "Bachelor's Of Technology in Computer Science & Engineering",
      startDate: "June 2019",
      endDate: "May 2023",
      description: "",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  my-auto">
      <div className="relative pt-20 grid py-auto">
        <div className="hidden md:block border-l-4 border-muted-foreground absolute h-[90%] top-0 left-1/2 transform -translate-x-1/2"></div>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-center md:items-start justify-between w-full"
          >
            <div
              className={`w-full md:w-5/12 ${
                index % 2 === 0
                  ? "md:order-1 md:text-right md:pr-8"
                  : "md:order-3 md:text-left md:pl-8"
              } text-center md:text-left`}
            >
              <h3 className="text-2xl font-bold text-primary">
                {edu.institution}
              </h3>
              <p className="text-secondary-foreground">{edu.degree}</p>
              <p className="text-secondary-foreground/45">{`${edu.startDate} - ${edu.endDate}`}</p>
              <p className="mt-4 text-primary">{edu.description}</p>
            </div>
            <div className="order-2 bg-muted-foreground w-8 h-8 rounded-full shadow-lg flex items-center justify-center my-4 md:my-0 hidden md:block"></div>
            <div
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? "order-3" : "order-1"
              } hidden md:block`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
