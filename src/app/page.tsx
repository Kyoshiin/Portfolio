import type { Metadata } from "next";
import AboutSection from "./components/AboutSection";
import CareerSection from "./components/CareerSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";

export const metadata: Metadata = {
  title: "Pratyay Roy",
  //TODO: change/remove Icon
};
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CareerSection />
    </main>
  );
}
