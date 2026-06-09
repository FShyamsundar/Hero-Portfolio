import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";
import { MISSIONS } from "../data/content";
import { ChapterTag, Sfx } from "./ComicElements";

const accents = {
  cyan: {
    panel: "bg-comic-cyan",
    ink: "text-black",
    soft: "text-black/80",
  },
  red: {
    panel: "bg-comic-red",
    ink: "text-black",
    soft: "text-black/80",
  },
  yellow: {
    panel: "bg-comic-yellow",
    ink: "text-black",
    soft: "text-black/80",
  },
};

export default function Missions() {
  return (
    <section
      id="missions"
      className="relative py-24 bg-comic-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-fade bg-dots opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="02" title="MISSION ARCHIVES" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            THE
            <br />
            MISSIONS.
          </h2>
          <Sfx color="red" rotate={-6}>
            CLASSIFIED!
          </Sfx>
        </div>

        <div className="space-y-12">
          {MISSIONS.map((m, i) => (
            <MissionCard key={m.code} m={m} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionCard({ m, flip }) {
  const accent = accents[m.accent] || accents.cyan;
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid lg:grid-cols-12 gap-6 items-stretch"
    >
      {/* Story panel */}
      <div
        className={`comic-panel p-6 sm:p-8 ${accent.panel} ${accent.ink} lg:col-span-7 min-w-0 ${flip ? "lg:order-2" : ""}`}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="font-bang text-lg bg-black text-comic-yellow px-3 py-1 rounded">
            {m.code}
          </span>
          <span className="inline-flex items-center gap-1 font-bang bg-white text-black px-3 py-1 border-[3px] border-black rounded-full text-sm">
            <FiCheckCircle /> {m.status}
          </span>
        </div>
        <h3 className="font-hero text-3xl sm:text-5xl leading-[0.95] break-words">
          {m.title}
        </h3>
        <p
          className={`mt-1 font-bang tracking-wider break-words ${accent.soft}`}
        >
          {m.role}
        </p>
        <p
          className={`mt-5 text-[16px] leading-relaxed font-comic break-words ${accent.soft}`}
        >
          {m.story}
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {m.features.map((f) => (
            <div
              key={f}
              className="flex items-start gap-2 bg-white/90 text-black border-[3px] border-black rounded-lg p-3 min-w-0"
            >
              <FiCheckCircle className="mt-1 shrink-0 text-comic-red" />
              <span className="text-sm font-comic font-bold break-words">
                {f}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn-comic white"
            href={m.links.demo}
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            className="btn-comic navy"
            href={m.links.code}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> GitHub
          </a>
          <a
            className="btn-comic"
            href={m.links.study}
            target="_blank"
            rel="noreferrer"
          >
            <FiFileText /> Case Study
          </a>
        </div>
      </div>

      {/* Dossier */}
      <div
        className={`comic-panel bg-white p-6 sm:p-7 lg:col-span-5 relative min-w-0 ${flip ? "lg:order-1" : ""}`}
      >
        <div className="tape" />
        <div className="font-bang text-sm tracking-widest bg-black text-comic-yellow inline-block px-2 py-0.5 rounded">
          DOSSIER
        </div>
        <h4 className="mt-3 font-bang text-2xl">TECH STACK</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {m.stack.map((t) => (
            <span
              key={t}
              className="px-3 py-1 border-[3px] border-black rounded-full font-bang text-sm bg-comic-paper shadow-comic-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          <Stat label="ROLE" value="LEAD" />
          <Stat label="STATUS" value="WON" />
          <Stat label="IMPACT" value="HIGH" />
        </div>

        <div className="mt-6 p-4 bg-comic-navy text-comic-cyan border-[3px] border-black rounded-xl font-mono text-xs leading-relaxed">
          <div className="opacity-70">// build log</div>
          <div>$ ship --mission {m.code.toLowerCase().replace(" ", "-")}</div>
          <div className="text-comic-yellow">✓ deployed · 0 critical bugs</div>
        </div>
      </div>
    </motion.article>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border-[3px] border-black rounded-lg p-2">
      <div className="text-[10px] font-bang opacity-60">{label}</div>
      <div className="font-bang text-lg leading-tight">{value}</div>
    </div>
  );
}
