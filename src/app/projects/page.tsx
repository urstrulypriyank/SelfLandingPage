import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import React from "react";
import GithubProjects from "./githubRepos";
type Props = {};

const page = (props: Props) => {
  return (
    <section className="snap-center overflow-y-scroll py-20">
      <SectionHeading heading="My Projects" />
      <div className="w-screen h-screen  flex mx-auto  px-10 flex-wrap justify-center space-y-6  py-10">
        {Object.entries(projectList).map(([key, value]) => {
          return <ProjectCard key={value.id} {...value} />;
        })}
      </div>
      {/* <GithubProjects /> */}
    </section>
  );
};

export default page;

const ProjectCard = ({ name, techStack, description, image }: any) => {
  return (
    <div className="md:w-[91%] w-full h-fit grid md:grid-cols-6 grid-cols-3  bg-card border border-input/55 rounded-xl shadow-md md:grid-rows-1 grid-rows-2 ">
      <div className="md:col-span-4 col-span-3 row-span-1 order-1 md:-order-1 m-6">
        {/* Project Details */}
        <h3 className="font-bold text-xl tracking-wide mt-2">{name}</h3>
        <ul className="flex space-x-0.5 w-full ">
          {techStack.map((name: string, index: number) => (
            <li
              key={name + index}
              className="border border-input p-1 rounded bg-accent"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="w-[80%] text-justify text-ellipsis mt-2 text-foreground/60">
          {description}
        </p>
      </div>

      <div className="md:col-span-2 col-span-3 grid place-items-center  ">
        {/* image contianer */}
        <Image
          src={"/ss.png"}
          alt={name}
          className="relative w-full h-full rounded p-6"
          width={200}
          height={200}
        />
        <div className="space-x-2 *:border-input *:border *:p-1  m-4">
          <button>Preview</button>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
};

const projectList = {
  ytClone: {
    id: 1,
    name: "Youtube Client",
    techStack: ["parcel", "react", "tailwindcss"],
    image: "",
    description:
      "lorem islkjdflk sf lksldkflk sdlfjsldkjflksd;lfkjsdlkjfl;skd jfl",
  },
  chess: {
    id: 2,
    name: "Multiplayer chess application",
    techStack: ["parcel", "react", "tailwindcss"],

    image: "",
    description: "",
  },
  capsule: {
    id: 3,
    name: "Pharmacy Store",
    techStack: ["parcel", "react", "tailwindcss"],

    image: "",
    description: "",
  },
};
