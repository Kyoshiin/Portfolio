import React from "react";
import SlideUp from "./SlideUp";
import Link from "next/link";
import Image from "next/image";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const careers = [
  {
    position: "Programmer Analyst",
    company: "Cognizant",
    time: "Aug, 2022 - Present",
    address: "Kolkata, West Bengal (Hybrid)",
    work: "Worked in FlexPlm integration team, developing PLM features and maintaing discrete transfer of data",
  },
  {
    position: "Android Developer",
    company: "Jan ELaaj",
    time: "Oct, 2020 - Mar, 2021",
    address: "Kolkata, West Bengal (Remote)",
    work: "Worked in FlexPlm integration team, developing PLM features and maintaing discrete transfer of data",
  },
];

const CareerSection = () => {
  return (
    <section id="career">
      <div className="my-12 pb-12 md:pt-16 md:pb-36">
        <h1 className="my-10 text-center font-bold text-4xl">
          Careers
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col items-center space-y-28">
          {careers.map((career, ind) => {
            return (
              <div key={ind}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubiBezier animation-delay-4">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-col">
                        <div className="uppercase font-bold text-2xl">
                          {career.position}
                        </div>
                        <div className="text-teal-600 font-bold">
                          {career.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-gray-400">{career.address}</div>
                        <div className="text-red-500 font-light">
                          {career.time}
                        </div>
                      </div>
                    </div>
                    <div className="">{career.work}</div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
