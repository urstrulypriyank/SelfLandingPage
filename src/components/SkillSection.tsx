"use client";
import React from "react";
import SectionHeading from "./common/SectionHeading";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
type Props = {};

const SkillSection = (props: Props) => {
  return (
    <section className="w-screen h-screen snap-center overflow-hidden bg-background text-foreground">
      <SectionHeading heading="My Skills" />
      <div className="w-full h-full grid md:grid-cols-2 grid-cols-1 grid-rows-5 md:grid-rows-1 ">
        <SkillGraph />
        <SkillsList />
      </div>
    </section>
  );
};

export default SkillSection;

const skillsData = [
  { skill: "JavaScript", level: 90 },
  { skill: "React", level: 95 },
  { skill: "NextJS", level: 90 },
  { skill: "Node.js", level: 80 },
  { skill: "React Native", level: 80 },
  { skill: "C++", level: 75 },
  { skill: "CSS", level: 70 },
  { skill: "HTML", level: 70 },
  { skill: "MongoDB", level: 70 },
  { skill: "Linux", level: 96 },
];

const data = {
  labels: skillsData.map((skill) => skill.skill),
  datasets: [
    {
      label: "Skill Level",
      data: skillsData.map((skill) => skill.level),
      backgroundColor: "transparent",
      borderColor: "grey",
      borderWidth: 1,
      pointHoverBackgroundColor: "grey",
    },
  ],
};

const options = {
  scales: {
    r: {
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Tech Skills",
    },
  },
};

const SkillGraph = () => {
  return (
    <div className=" bg-background/40 md:col-span-1 col-span-2 row-span-2 md:row-span-1">
      <div className="w-full mx-auto md:h-[90%] h-full py-0  md:py-20 grid place-items-center">
        {/* @ts-ignore */}
        <Radar data={data} options={options} className="border-input" />
      </div>
    </div>
  );
};

const SkillsList = () => {
  const skills = {
    BackEnd: ["C++", "NodeJS", "MongoDB"],
    FrontEnd: [
      "JavaScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "ReactQuery",
      "React Native",
    ],
    Core: ["Linux", "Computer Networking", "DSA"],
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-background text-foreground overflow-y-scroll row-span-3 md:row-span-1">
      {Object.keys(skills).map((category) => (
        <div
          key={category}
          className="w-full max-w-md p-4 mb-2 bg-card text-card-foreground rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <h2 className="mb-4 text-xl font-semibold border-b-2 border-border pb-2">
            {category}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {/* @ts-ignore */}
            {skills[category].map((skill, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
// export default SkillsList;
