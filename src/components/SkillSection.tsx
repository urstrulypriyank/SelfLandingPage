import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// type props = {
//   directionLeft?: boolean;
// };
const SkillSection = () => {
  return (
    <div className="mt-10">
      <motion.div
        className=" relative flex cursor-pointer"
        initial={{ x: -200, opacity: 0 }}
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
      </motion.div>
    </div>
  );
};

export default SkillSection;
