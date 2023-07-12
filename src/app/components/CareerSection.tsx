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
    work: "Worked in integrating FlexPLM with various systems using PTC ThingWorx platforms, implementing APIs, mapping data, and ensuring seamless data flow. Also looked in troubleshooting integration issues, system bugs, and performance problems; collaborating with team members to gather requirements and ensure successful integration implementation.",
  },
  {
    position: "Android Developer",
    company: "Jan ELaaj",
    time: "Oct, 2020 - Mar, 2021",
    address: "Kolkata, West Bengal (Remote)",
    work: "Responsible for maintaining two native Android applications, collaborating with Product, UX/UI, and Back-end teams to design and implement new features. Utilizing retrofit for efficient RESTful services, optimizing performance through libraries like Glide and Exoplayer, and integrating Google Cloud Storage. Employing modern Android libraries & architecture for scalability and system optimization.",
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

        <div className="flex flex-col items-center md:px-32 space-y-24">
          {careers.map((career, ind) => {
            return (
              <div key={ind}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex flex-col">
                        <div className="uppercase font-bold text-2xl">
                          {career.position}
                        </div>
                        <div className="text-teal-600 font-bold">
                          {career.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end md:justify-end">
                        <div className="text-gray-400">{career.address}</div>
                        <div className="text-red-500">{career.time}</div>
                      </div>
                    </div>
                    <div className="py-4 items-start">{career.work}</div>
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
