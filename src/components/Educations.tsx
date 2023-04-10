import Link from "next/link";
import React from "react";

type Props = {};
const eduInformation = [
  {
    course: "Bachelor of Technology in Computer Science and Engineering",
    college: "LNCTS, Bhopal",
    university: "RGPV, Bhopal",
    grade: "8.2",
    courseDuration: "June 2019 - May 2023",
    docUrl: "/marksheet/graduation",
  },
  {
    course: "Higher Secondary School",
    college: "CCBSSS, Jabalpur",
    university: "CBSE",
    grade: "55.6%",
    courseDuration: "June 2017 - May 2018",
    docUrl: "/marksheet/hsc",
  },
  {
    course: "Secondary School Certificate",
    college: "British Fort Foundation, Jabalpur",
    university: "CBSE",
    grade: "8.6",
    courseDuration: "June 2015 - May 2016",
    docUrl: "/marksheet/ssc",
  },
];
const Educations = (props: Props) => {
  return (
    <div className="  flex w-screen h-screen mb-5  flex-col justify-center  items-center space-y-2 ">
      {eduInformation.map((detail) => (
        <div
          className="border border-green-500 md:w-[80%] w-screen justify-center items-center max-sm:text-xs max-sm:mt-10 shadow-xl rounded-lg"
          key={detail.course}
        >
          {/* Degreen and Stream Detail */}
          <div className="flex flex-row justify-between items-center px-5 py-5 max-md:flex-col ">
            <h4 className="text-green-500 font-bold tracking-wider md:text-xl text-sm ">
              {detail.course}
            </h4>
            <span className="bg-green-800 text-white/70  hover:text-green-300 px-5 py-3 ">
              <Link href={detail.docUrl} target="_blank">
                Download
              </Link>
            </span>
          </div>

          {/* table for course detail */}
          <div className="flex gird  grid-cols-4  gap-8 justify-around max-md:justify-start md:p-5">
            <div>
              <h4 className="row-start-1"> College</h4>
              <h4 className="row-start-1"> {detail.college}</h4>
            </div>
            <div>
              <h4 className="row-start-2">University</h4>
              <h4 className="row-start-2">{detail.university}</h4>
            </div>
            <div>
              <h4 className="row-start-1">Grade</h4>
              <h4 className="row-start-1">{detail.grade}</h4>
            </div>
            <div>
              <h4 className="row-start-2">Course Duration</h4>
              <h4 className="row-start-2"> {detail.courseDuration}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Educations;
