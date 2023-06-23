import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Android SDK" },
  { skill: "Flutter" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div
          className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 
        md:p-4 md:flex-row md:text-left"
        >
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Pratyay and I am a&nbsp;
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              from India.
            </p>
            <br />
            <p>
              I'm a 2022 graduated with a BTech degree in Computer Science &
              Engineering and have been working in the field ever since.
            </p>
            <br />
            <p>
              I am an avid PC gamer, immersing myself in captivating virtual
              worlds and competitive challenges. Also, I enjoy the intricate
              process of PC building, exploring hardware components and
              assembling powerful systems. These hobbies combine my passion for
              technology, gaming, and problem-solving into an exhilarating and
              fulfilling experience.
            </p>
            <br />
            <p>
              I firmly believe in continuous personal growth, constantly pushing
              the boundaries of what can be achieved. I eagerly anticipate the
              path my career will take, remaining receptive to fresh prospects
              and opportunities that come my way.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/developer.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
