import { motion } from "framer-motion";
import {
  FiDownload,
  FiSend,
  FiTarget,
  FiCode,
  FiCpu,
  FiZap,
  FiCoffee,
} from "react-icons/fi";
import { HERO, RESUME_FILE } from "../data/content";
import { Burst, Sfx, Speech } from "./ComicElements";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 city-bg overflow-hidden"
    >
      <div className="city-skyline" />
      <div className="city-windows" />

      {/* Floating action stars */}
      <motion.div
        className="absolute top-28 right-[6%] z-10 hidden md:block"
        animate={{ rotate: [0, 8, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Burst rotate={-10}>
          <span className="text-2xl block">NEW!</span>
          <span className="text-sm block">FULL STACK</span>
          <span className="text-sm block">HERO</span>
        </Burst>
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-[5%] z-10 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sfx color="red" rotate={-12}>
          POW!
        </Sfx>
      </motion.div>
      <motion.div
        className="absolute top-44 left-[8%] z-10 hidden md:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.6 }}
      >
        <Sfx color="cyan" rotate={6}>
          ZAP!
        </Sfx>
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT: title + bio */}
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-comic-yellow border-[3px] border-black rounded-full text-black font-bang tracking-widest shadow-comic-sm"
          >
            <span className="w-2 h-2 bg-comic-red rounded-full animate-pulse" />
            ISSUE #001 — ORIGIN
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="comic-title text-[15vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.85]"
          >
            SHYAM
            <br />
            VERSE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 inline-block bang text-xl sm:text-2xl px-3 py-1 bg-comic-red text-white border-[3px] border-black shadow-comic-sm -rotate-1"
          >
            {HERO.role.toUpperCase()} · RISE OF THE HERO
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-xl"
          >
            <Speech tone="white">
              <span className="text-lg">“{HERO.tagline}”</span>
            </Speech>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-white text-black border-[3px] border-black rounded-xl shadow-comic-sm">
              <span className="coin">
                <FiTarget size={28} />
              </span>
              <div className="leading-tight">
                <div className="font-bang text-lg">{HERO.name}</div>
                <div className="text-sm text-black/70">
                  {HERO.role} · {HERO.location}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              className="btn-comic"
              href={encodeURI(RESUME_FILE)}
              download="Shyam_Sundar_Resume.pdf"
            >
              <FiDownload /> Download Resume
            </a>
            <a className="btn-comic cyan" href="#missions">
              <FiTarget /> View Missions
            </a>
            <a className="btn-comic red" href="#contact">
              <FiSend /> Recruit This Hero
            </a>
          </motion.div>
        </div>

        {/* RIGHT: stat panel */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="comic-panel bg-white p-6 sm:p-7 rotate-2">
            <div className="tape" />
            <div className="flex items-center justify-between mb-4">
              <span className="badge-kapow text-lg">HERO STATS</span>
              <span className="font-bang text-sm bg-black text-comic-yellow px-2 py-0.5 rounded">
                PWR LVL · MAX
              </span>
            </div>

            <div className="space-y-3">
              {HERO.stats.map((s) => (
                <StatBar key={s.label} {...s} />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t-[3px] border-dashed border-black/30 flex items-center justify-between">
              <div className="font-bang text-sm">SECRET IDENTITY</div>
              <div className="font-bang text-sm text-comic-red">
                SHYAM ◆ CHENNAI HQ
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="relative z-20 mt-12 border-y-[3px] border-black bg-comic-yellow overflow-hidden">
        <motion.div
          className="flex gap-10 whitespace-nowrap py-3 font-bang text-2xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex items-center gap-10">
              <span>★ REACT</span>
              <span>◆ NODE</span>
              <span>● MONGODB</span>
              <span>▲ SOCKET.IO</span>
              <span>★ WEBRTC</span>
              <span>◆ JWT</span>
              <span>● TAILWIND</span>
              <span>▲ REDUX</span>
              <span>★ EXPRESS</span>
              <span>◆ JAVASCRIPT</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatBar({ label, value, color }) {
  const bg =
    color === "red"
      ? "bg-comic-red"
      : color === "cyan"
        ? "bg-comic-cyan"
        : "bg-comic-yellow";
  const iconMap = {
    "Code Power": <FiCode size={18} />,
    Logic: <FiCpu size={18} />,
    Creativity: <FiZap size={18} />,
    "Problem Solving": <FiTarget size={18} />,
    "Coffee Power": <FiCoffee size={18} />,
  };
  return (
    <div>
      <div className="flex items-center justify-between font-bang text-sm tracking-wider">
        <span className="flex items-center gap-2">
          {iconMap[label]}
          {label}
        </span>
        <span>{value}/100</span>
      </div>
      <div className="mt-1 h-4 border-[3px] border-black rounded-full bg-white overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${bg} bg-halftone-white bg-dots`}
        />
      </div>
    </div>
  );
}
