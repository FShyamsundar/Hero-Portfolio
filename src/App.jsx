import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Origin from "./components/Origin";
import Awakening from "./components/Awakening";
import Missions from "./components/Missions";
import PowerUps from "./components/PowerUps";
import Battle from "./components/Battle";
import Arsenal from "./components/Arsenal";
import Recruiter from "./components/Recruiter";
import NextMission from "./components/NextMission";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Parallax-ish lift on every section header
      gsap.utils
        .toArray(
          "section .comic-title, section .comic-title-cyan, section .comic-title-white",
        )
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60 },
            {
              y: -40,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            },
          );
        });

      // Page-turn flash between chapters
      gsap.utils.toArray("section[id]").forEach((sec) => {
        gsap.fromTo(
          sec,
          { filter: "brightness(0.85)" },
          {
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
              end: "top 30%",
              scrub: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Origin />
        <Awakening />
        <Missions />
        <PowerUps />
        <Battle />
        <Arsenal />
        <Recruiter />
        <NextMission />
      </main>
    </div>
  );
}
