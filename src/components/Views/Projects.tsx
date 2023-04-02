import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px]  text-2xl max-sm:top-5">
        Projects
      </h3>

      <div className="w-screen flex flex-col  items-center space-y-5 mt-10 justify-end  max-md:text-sm">
        {/* project 1 */}
        <div className="border border-green-500 w-[50%] max-sm:w-full flex flex-col justify-center items-center p-5">
          <h4 className="font-semibold text-xl">Food Delivery Clone</h4>
          <ul className="list-disc">
            <li>FUll stack Food ordering and delivery application </li>
            <li>Built using reactNative for client and nodejs in backed </li>
            <li>
              listing food items, resutrant serach,cart, delivery tracking
            </li>
            <li>reactNative + tailwidncss + nodejs + yup</li>
          </ul>
        </div>

        {/* project 2 */}
        <div className="border border-green-500 w-[50%] max-sm:w-full flex flex-col justify-center items-center p-5">
          <h4 className="font-semibold text-xl">
            Video Confrensing Application
          </h4>
          <ul className="list-disc">
            <li>FUll stack Video Confrensing App </li>
            <li>Built using Nextjs for client and nodejs </li>
            <li>Used webRTC and socket.io for communication</li>
            <li>Nextjs + tailwidncss + nodejs + webRTC</li>
          </ul>
        </div>
        {/* project 2 */}
        <div className="border border-green-500 w-[50%] max-sm:w-full flex flex-col justify-center items-center p-5">
          <h4 className="font-semibold text-xl">Note Sharing Application</h4>
          <ul className="list-disc">
            <li>Full-Stack Notes Sharing Application </li>
            <li>Built using React and nodejs </li>
            <li>
              Functionality Include Create Update Delete, Search for Notes
            </li>
            <li>React + Node.js + MongoDb + express + etc...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
