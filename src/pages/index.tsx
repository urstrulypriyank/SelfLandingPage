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
import Education from "@/components/Views/Education";
import Footer from "@/components/Views/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-green-700 h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-green-500/50 ">
      <Head>
        <title>Priyank&apos;s Portfolio</title>
      </Head>

      {/* Headder/Navbar Section */}

      <nav className="w-screen snap-start  ">
        <Headder />
      </nav>

      {/* Introduction  Section */}
      <section id="LandingPage" className="h-screen w-screen snap-start">
        <LandingPage />
      </section>

      {/* About me*/}
      <section id="About" className="h-screen w-screen snap-start">
        <About />
      </section>

      {/* Education and Experience*/}
      <section id="Education" className=" h-screen w-screen snap-center  ">
        <Education />
      </section>

      {/* Skills */}
      <section id="Skills" className=" h-screen w-screen snap-center  ">
        <Skills />
      </section>

      {/* Projects */}
      <section id="Projects" className=" h-screen w-screen snap-start">
        <Projects />
      </section>

      {/* Contact ME */}
      <section id="Contact" className=" h-screen w-screen snap-start">
        <Contact />
      </section>

      {/* Footer */}
      <section id="Footer" className=" h-screen w-screen   snap-start">
        <Footer />
      </section>
    </div>
  );
}
