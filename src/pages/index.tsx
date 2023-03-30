import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headder from "@/components/Headder";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-green-700 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Priyank&apos;s Portfolio</title>
      </Head>

      {/* Headder Section */}
      <nav className="snap-start">
        <Headder />
      </nav>

      {/* Intro  Section */}
      <section id="LandingPage" className="snap-center">
        <LandingPage />
      </section>

      {/* About */}
      <section id="about" className="h-screen bg-blue-600 snap-center">
        <div className="flex justify-center items-center h-full ">
          <p>Hi</p>
        </div>
      </section>

      {/* Experience */}

      {/* Projects */}

      {/* Contact ME */}
    </div>
  );
}
