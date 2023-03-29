import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headder from "@/components/Headder";
import LandingPage from "@/components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-green  h-screen w-screen">
      <Head>
        <title>Priyank&apos;s Portfolio</title>
      </Head>

      {/* Headder Section */}

      <Headder />

      {/* Intro  Section */}
      <section id="LandingPage">
        <LandingPage />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Projects */}

      {/* Contact ME */}
    </div>
  );
}
