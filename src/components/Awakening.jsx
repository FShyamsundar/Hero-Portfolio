import { motion } from "framer-motion";
import { SKILLS } from "../data/content";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiSocketdotio,
  SiWebrtc,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
  SiMongoose,
} from "react-icons/si";
import { ChapterTag, Sfx, Speech } from "./ComicElements";

const colorMap = {
  cyan: { panel: "bg-comic-cyan", ink: "text-black", soft: "text-black/80" },
  yellow: {
    panel: "bg-comic-yellow",
    ink: "text-black",
    soft: "text-black/80",
  },
  red: { panel: "bg-comic-red", ink: "text-white", soft: "text-white/90" },
  navy: { panel: "bg-comic-navy", ink: "text-white", soft: "text-white/90" },
};

export default function Awakening() {
  return (
    <section
      id="awakening"
      className="relative py-24 bg-comic-navy text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-white bg-dots opacity-20 pointer-events-none" />
      <div className="absolute -top-8 -left-8 w-72 h-72 bg-comic-red rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-comic-cyan rounded-full blur-3xl opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="02" title="THE AWAKENING" tone="dark" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <h2 className="comic-title-cyan comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            SUPER
            <br />
            POWERS.
          </h2>
          <div className="flex items-center gap-4">
            <Sfx color="yellow" rotate={-6}>
              BOOM!
            </Sfx>
            <Sfx color="red" rotate={8}>
              SNAP!
            </Sfx>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {SKILLS.map((skill, i) => {
            const c = colorMap[skill.color] || colorMap.cyan;
            const isDark = c.ink && c.ink.includes("white");
            const badgeBase =
              "inline-flex items-center justify-center border-[3px] border-black rounded-md px-2 py-1 font-bang";
            const badgeLeftClass = `${badgeBase} text-sm ${isDark ? "bg-white text-black" : "bg-black/85 text-comic-yellow"}`;
            const badgeRightClass = `${badgeBase} text-[10px] ${isDark ? "bg-white text-black" : "bg-black/85 text-comic-yellow"}`;
            const skillIcons = {
              "React.js": <SiReact size={28} color="#00D8FF" />,
              HTML5: <SiHtml5 size={28} color="#E34F26" />,
              CSS3: <SiCss size={28} color="#2965F1" />,
              Vite: <SiVite size={28} color="#646CFF" />,
              "Node.js": <SiNodedotjs size={28} color="#3C873A" />,
              "Express.js": <SiExpress size={28} color="#000000" />,
              MySQL: <SiMysql size={28} color="#4479A1" />,
              MongoDB: <SiMongodb size={28} color="#47A248" />,

              JavaScript: <SiJavascript size={28} color="#F0DB4F" />,
              "Redux Toolkit": <SiRedux size={28} color="#764ABC" />,
              "Tailwind CSS": <SiTailwindcss size={28} color="#38B2AC" />,
              "Socket.io": <SiSocketdotio size={28} color="#010101" />,
              WebRTC: <SiWebrtc size={28} color="#FF6B6B" />,
              "JWT Authentication": (
                <SiJsonwebtokens size={28} color="#F3732B" />
              ),

              Figma: <SiFigma size={28} color="#F24E1E" />,
            };
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 4 : -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                whileHover={{ y: -6, rotate: 0, scale: 1.04 }}
                className={`comic-panel pop-card ${c.panel} ${c.ink} p-4 relative`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={badgeLeftClass}>
                    PWR-{(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className={badgeRightClass}>LVL {skill.power}</span>
                </div>
                <div className="w-12 h-12 grid place-items-center border-[3px] border-black bg-white text-black rounded-xl font-bang text-xl">
                  {skillIcons[skill.name] || skill.icon}
                </div>
                <h3 className="mt-3 inline-block px-2 py-1 bg-white text-black border-[2px] border-black rounded-md font-bang text-xl leading-tight shadow-comic-sm break-words">
                  {skill.name}
                </h3>
                <div className="mt-3 h-3 border-[3px] border-black rounded-full bg-white overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.power}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="h-full bg-black"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 max-w-2xl">
          <Speech tone="cyan">
            Each tool here is battle-tested in real production code — not just
            tutorials.
          </Speech>
        </div>
      </div>
    </section>
  );
}
