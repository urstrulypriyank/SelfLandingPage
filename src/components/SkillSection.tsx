import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type props = {
  directionLeft?: boolean;
};
const SkillSection = ({ directionLeft }: props) => {
  return (
    <div className="mt-10">
      <motion.div
        className="group relative flex cursor-pointer"
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="min-h-screen flex justify-center items-center w-screen ">
          <div className="max-w-screen-lg    shadow-lg p-10 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className=" font-bold mb-2 md:text-sm ">Languages</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Bash</li>
                  <li>C/C++</li>
                </ul>
              </div>
              <div>
                <h3 className=" font-bold mb-2 md:text-sm">Core</h3>
                <ul>
                  <li>Operating System</li>
                  <li>Computer Networks</li>
                  <li>Data Structure and Algorithms</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2 md:text-sm">Frameworks</h3>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Next.js</li>
                  <li>React Native</li>
                  <li>Tailwindcss</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div>
                <h3 className=" font-bold mb-2 md:text-sm">Markup Languages</h3>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>YAML</li>
                </ul>
              </div>

              <div>
                <h3 className=" font-bold mb-2 sm:text-sm">Databases</h3>
                <ul>
                  <li>MySql</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className=" font-bold mb-2 sm:text-sm">Tools</h3>
                <ul>
                  <li>Linux</li>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Github</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-screen flex flex-col justify-center items-center px-4">
          <div className="max-w-screen-md w-full shadow-lg p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2 space-x-2">
                  Programming Languages
                </h3>
                <ul>
                  <li className="mb-1">JavaScript</li>
                  <li className="mb-1">TypeScript</li>
                  <li className="mb-1">Python</li>
                  <li className="mb-1">Bash</li>
                  <li className="mb-1">C/C++</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Frameworks and Libraries
                </h3>
                <ul>
                  <li className="mb-1">Node, Express</li>
                  <li className="mb-1">React, Redux</li>
                  <li className="mb-1">Next.js</li>
                  <li className="mb-1">React Native</li>
                  <li className="mb-1">Tailwindcss</li>
                  <li className="mb-1">Bootstrap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Markup Languages</h3>
                <ul>
                  <li className="mb-1">HTML5</li>
                  <li className="mb-1">CSS3</li>
                  <li className="mb-1">YAML</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Core Subjects</h3>
                <ul>
                  <li className="mb-1">Operating System</li>
                  <li className="mb-1">Computer Networking</li>
                  <li className="mb-1">Data Structure</li>
                  <li className="mb-1">Cloud Computing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Databases</h3>
                <ul>
                  <li className="mb-1">MySql</li>
                  <li className="mb-1">MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Tools</h3>
                <ul>
                  <li className="mb-1">Linux</li>
                  <li className="mb-1">Docker</li>
                  <li className="mb-1">Git</li>
                  <li className="mb-1">Github</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default SkillSection;
