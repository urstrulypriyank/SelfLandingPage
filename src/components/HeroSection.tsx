import React from "react";
import Link from "next/link";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className="w-screen h-screen snap-center px-10 md:mt-10">
        <h1 className="pt-20 text-4xl font-medium tracking-[1rem] ">
          Hey I&apos;m Priyank Rai{" "}
        </h1>

        <AboutMe />
      </div>
    </>
  );
};

export default HeroSection;

export const AboutMe = () => {
  return (
    <div className="md:grid   md:grid-cols-5 md:space-y-0  gap-x-4 flex flex-col space-y-6 justify-center items-center md:grid-rows-1 md:items-start md:mt-10">
      <div className="col-span-3 mt-6 md:mt-0 place-content-start ">
        <p>
          I&apos;m a Full Stack Developer 🚀 who is passionate about building
          fast, performant, and scalable web applications from scratch. I ace on
          building and scaling application from scratch.
          <span className="hidden lg:block">
            I have had worked on startup i.e Exia Automation and developed SaaS
            Product as solo full stack developer and after that I have been
            indulged in small freelance projects. I&apos;m Open to discuss the
            projects
          </span>
        </p>

        <p className="mx-auto flex flex-col justify-center items-center space-y-2 py-4">
          <Link href={"/api/resume"} target="_blank">
            <button className=" border border-input px-10 py-3 rounded-full bg-primary hover:bg-accent-foreground  flex flex-col items-center  md:my-20">
              <span className="text-primary-foreground font-semibold tracking-wide">
                Download Resume
              </span>
            </button>
          </Link>
        </p>
      </div>

      <div className="col-span-2 flex mx-auto flex-col ">
        <div className="w-60 h-60 border border-border rounded-xl bg-[#7d5a7b] p-2">
          <video
            loop
            autoPlay={true}
            preload="true"
            muted
            className="rounded-full  relative h-full w-full grid place-items-center"
            width={300}
            height={300}
          >
            <source src={"/heroVideo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
