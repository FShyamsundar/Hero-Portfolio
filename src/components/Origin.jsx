import { motion } from "framer-motion";
import { ORIGIN_PANELS } from "../data/content";
import { ChapterTag, Speech } from "./ComicElements";

const COLORS = {
  yellow: {
    panel: "bg-comic-yellow",
    ink: "text-black",
    soft: "text-black/80",
  },
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
  navy: {
    panel: "bg-comic-navy",
    ink: "text-black",
    soft: "text-black/80",
  },
};

export default function Origin() {
  return (
    <section
      id="origin"
      className="relative py-24 bg-comic-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-fade bg-dots-lg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="01" title="THE ORIGIN" />
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h2 className="comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            HOW IT
            <br />
            BEGAN.
          </h2>
          <div className="max-w-md">
            <Speech tone="yellow">
              Every hero needs an origin. Mine started with a curious mind, a
              borrowed laptop, and one tiny{" "}
              <span className="underline">hello world</span>.
            </Speech>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORIGIN_PANELS.map((p, i) => (
            <motion.article
              key={p.chapter}
              initial={{ opacity: 0, y: 60, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`comic-panel p-5 sm:p-6 ${COLORS[p.accent].panel} ${COLORS[p.accent].ink}`}
              style={{ rotate: `${i % 2 ? 1.5 : -1.5}deg` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-bang text-3xl leading-none opacity-80">
                  #{p.chapter}
                </span>
                <span className="badge-kapow text-sm">PANEL</span>
              </div>
              <h3 className="font-bang text-2xl tracking-wide drop-shadow-[0_1px_0_rgba(0,0,0,0.45)]">
                {p.title}
              </h3>
              <div className="mt-2 h-[3px] w-12 bg-current rounded-full opacity-50" />
              <p
                className={`mt-3 leading-relaxed text-[15px] font-comic font-bold break-words drop-shadow-[0_1px_0_rgba(0,0,0,0.35)] ${COLORS[p.accent].soft}`}
              >
                {p.text}
              </p>
              <div className="mt-4 motion-lines h-2 rounded-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
