"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { BsArrowUpRightSquare } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="md:pb-36">
        <div
          className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2
      py-16 my-10 sm:py-32 md:pt-48 md:pb-28 md:flex-row md:space-x-4 md:text-left"
        >
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/img.png"
              alt="Profile Picture"
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </div>

          <div className="md:mt-2 md:w-3/5 md:p-4">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
              Hi, I&#39;m Pratyay!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a&nbsp;
              <span className="font-semibold text-teal-600">
                Software Engineer&nbsp;
              </span>
              based in India. Working towards creating software that makes life
              easier and more meaningful.
            </p>
            <div className="text-neutral-100 font-semibold bg-teal-600 rounded-lg shadow hover:bg-teal-700 py-2 px-4 inline-block">
              <a
                href="https://drive.google.com/file/d/1K3Mqom35N2mhs1TyeMd1_xBtmfD5iRHk/view"
                target={"_blank"}
                download={true}
              >
                Resume
                <BsArrowUpRightSquare className="pl-2 float-right" size={25} />
              </a>
            </div>
            <div className="ml-2 md:ml-8 text-xl font:medium capitalize text-dark underline inline-block">
              <a href="mailto:pratyayroy18@gmail.com" target={"_blank"}>
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
