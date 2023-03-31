import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headder from "@/components/Views/Headder";
import LandingPage from "@/components/Views/LandingPage";
import Experience from "@/components/Views/Experience";
import Projects from "@/components/Views/Projects";
import Contact from "@/components/Views/Contact";
import About from "@/components/Views/About";
import Skills from "@/components/Views/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-green-700 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Priyank&apos;s Portfolio</title>
      </Head>

      {/* Headder Section */}

      <nav className="snap-start  ">
        <Headder />
      </nav>

      {/* Intro  Section */}
      <section id="LandingPage" className="snap-start">
        <LandingPage />
      </section>

      {/* About */}
      <section id="About" className="h-screen snap-start">
        <About />
      </section>

      {/* Experience */}
      <section id="Experience" className="h-screen snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="Skills" className="h-screen snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="Projects" className="h-screen snap-center">
        <Projects />
      </section>

      {/* Contact ME */}
      <section id="Contact" className="h-screen bg-blue-600 snap-center">
        <Contact />
      </section>
    </div>
  );
}
