import { motion } from "framer-motion";
import { EDUCATION } from "../data/content";
import { ChapterTag, Speech } from "./ComicElements";

const VALUES = [
  {
    t: "Scalable Products",
    d: "Architect features that survive growth - pagination, caching, queues, lazy loads.",
  },
  {
    t: "Clean Architecture",
    d: "Separation of concerns, typed contracts, predictable state, readable code.",
  },
  {
    t: "Problem Solving",
    d: "Triage symptoms, find the root cause, ship a fix that does not return.",
  },
  {
    t: "Full Stack Ownership",
    d: "From DB schema to UI polish - I take features end-to-end.",
  },
];

export default function Recruiter() {
  return (
    <section
      id="recruiter"
      className="relative py-24 bg-comic-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-fade bg-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <ChapterTag number="07" title="ABOUT THE HERO" />
          <h2 className="comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            MEET
            <br />
            THE HERO.
          </h2>

          <Speech tone="yellow" className="mt-7 max-w-xl">
            I'm Shyam - a full stack developer who treats every feature like a
            side-quest worth completing perfectly. I love building real things
            that real users actually use.
          </Speech>

          <p className="mt-6 font-comic text-lg leading-relaxed max-w-2xl">
            My background blends engineering rigor with a designer's eye for
            detail. I think in user stories, speak in REST endpoints, and dream
            in component trees. When I'm not shipping code, I'm
            reverse-engineering interesting products to learn how they tick.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="comic-panel bg-white p-4"
              >
                <div className="font-bang text-xl">{v.t}</div>
                <p className="mt-1 text-sm font-comic font-bold text-black/80 break-words">
                  {v.d}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-8 comic-panel bg-comic-yellow text-black p-5"
          >
            <div className="font-bang text-sm tracking-widest uppercase">
              Education
            </div>
            <div className="mt-2 font-bang text-2xl leading-tight break-words">
              {EDUCATION.degree} - {EDUCATION.college}
            </div>
            <div className="mt-2 font-comic font-bold text-black/80">
              CGPA: {EDUCATION.cgpa} | {EDUCATION.period}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="comic-panel bg-white text-black p-6 relative">
            <div className="tape" />
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl border-[3px] border-black bg-gradient-to-br from-comic-cyan to-comic-yellow grid place-items-center font-bang text-2xl text-black">
                FS
              </div>
              <div>
                <div className="font-bang text-2xl leading-none text-comic-navy">
                  F. SHYAM SUNDAR
                </div>
                <div className="text-comic-cyan font-bang text-sm tracking-wider">
                  FULL STACK DEVELOPER
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <IdRow label="HQ" value="Chennai, IN" />
              <IdRow label="UNIVERSE" value="MERN" />
              <IdRow label="ALIGNMENT" value="LAWFUL GOOD" />
              <IdRow label="WEAKNESS" value="BAD COFFEE" />
            </div>

            <div className="mt-5 p-3 bg-comic-navy/10 border-[2px] border-comic-cyan rounded-lg">
              <div className="font-bang text-xs text-comic-cyan">
                SECRET POWER
              </div>
              <div className="font-comic font-bold text-black">
                Turning vague Figma frames into responsive, accessible,
                deploy-ready features.
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Node", "Mongo", "Tailwind", "Socket.io"].map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 text-xs font-bang bg-black text-white border-[2px] border-black rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IdRow({ label, value }) {
  return (
    <div className="p-2 border-[2px] border-black/15 rounded-md bg-black/[0.02]">
      <div className="text-[10px] font-bang text-comic-navy">{label}</div>
      <div className="font-bang break-words">{value}</div>
    </div>
  );
}
