import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "../components/ui/sonner";
import { LoadingScreen } from "../components/portfolio/LoadingScreen";
import { Navbar } from "../components/portfolio/Navbar";
import { Hero } from "../components/portfolio/Hero";
import { CurrentlyBuilding } from "../components/portfolio/CurrentlyBuilding";
import { About } from "../components/portfolio/About";
import { Experience } from "../components/portfolio/Experience";
import { FeaturedProjects } from "../components/portfolio/FeaturedProjects";
import { Skills } from "../components/portfolio/Skills";
import { TechStack } from "../components/portfolio/TechStack";
import { Statistics } from "../components/portfolio/Statistics";
import { Achievements } from "../components/portfolio/Achievements";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";
import {
  MouseSpotlight,
  ScrollProgress,
} from "../components/portfolio/effects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agnan Toro — Full Stack Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Agnan Toro, a Full Stack Developer and AI Enthusiast building scalable web applications and intelligent digital solutions.",
      },
      {
        property: "og:title",
        content: "Agnan Toro — Full Stack Developer & AI Enthusiast",
      },
      {
        property: "og:description",
        content:
          "Building scalable web applications and intelligent digital solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <MouseSpotlight />
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <CurrentlyBuilding />
        <About />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <TechStack />
        <Statistics />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}
