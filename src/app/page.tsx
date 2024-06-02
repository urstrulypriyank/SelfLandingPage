import ExperienceSetcion from "@/components/ExperienceSetcion";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import SkillSection from "@/components/SkillSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Priyank's Portfolio - Full Stack Developer",
  description:
    "Priyank is a passionate Full Stack developer skilled in building and scaling applications using React and JavaScript.",
  creator: "Priyank Rai",
  applicationName: "Priyank's portfolio",
  authors: [
    {
      name: "priyank rai",
      url: "https://linkedin.com/in/urstrulypriyankrai",
    },
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://priyankrai.in",
    title: "Priyank's Portfolio - Full Stack Developer",
    siteName: "priyankrai.in",
    description:
      "Priyank is a passionate Full Stack developer skilled in building and scaling applications using React and JavaScript.",
    images: [
      {
        url: "https://priyankrai.in/ss.png",
        width: 1080,
        height: 1080,
        alt: "Priyank’s Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Priyank's Portfolio - Full Stack Developer",
    description:
      "Priyank is a passionate Full Stack developer skilled in building and scaling applications using React and JavaScript.",
  },
  keywords:
    "Full Stack Developer, React, JavaScript, Portfolio, Web Developer, Priyank, MERN Developer ",
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <SkillSection />
      <ExperienceSetcion />
    </div>
  );
  ``;
}
