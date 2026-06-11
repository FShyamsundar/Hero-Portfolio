import { motion } from "framer-motion";
import { BATTLES } from "../data/content";
import { ChapterTag } from "./ComicElements";

export default function Battle() {
  return (
    <section
      id="battles"
      className="relative py-24 bg-comic-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-fade bg-dots-lg opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="02" title="WORK EXPERIENCE" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            BATTLE
            <br />
            HISTORY.
          </h2>
          <p className="font-bang text-lg max-w-md">
            Internships fought, shipped and survived. Every internship was a
            real-world boss fight with clear dates.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[6px] bg-black -translate-x-1/2 rounded-full" />

          <div className="space-y-12 md:space-y-16">
            {BATTLES.map((b, i) => (
              <motion.article
                key={b.company}
                initial={{ opacity: 0, x: i % 2 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`comic-panel bg-white p-6 ${
                    i % 2 ? "md:text-right" : ""
                  } relative min-w-0`}
                >
                  <div
                    className="tape"
                    style={{ background: i % 2 ? "#FF2E63" : "#FFD93D" }}
                  />
                  <span className="font-bang text-sm bg-black text-comic-yellow px-2 py-0.5 rounded">
                    EXPERIENCE 0{i + 1}
                  </span>
                  <h3 className="mt-3 font-bang text-3xl leading-tight break-words">
                    {b.role}
                  </h3>
                  <p className="mt-1 font-comic font-bold text-comic-red break-words">
                    {b.company}
                  </p>
                  <p className="mt-2 inline-flex font-bang text-xs bg-black text-comic-yellow px-2 py-1 rounded">
                    {b.period}
                  </p>
                  <ul className={`mt-4 space-y-2 ${i % 2 ? "md:ml-auto" : ""}`}>
                    {b.wins.map((w) => (
                      <li
                        key={w}
                        className="flex items-start gap-2 font-comic font-bold text-[15px] break-words"
                      >
                        <span className="mt-1 w-2 h-2 bg-comic-red border-[2px] border-black rounded-full shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 grid place-items-center border-[4px] border-black bg-comic-yellow rounded-full font-bang text-2xl shadow-comic">
                      {i + 1}
                    </div>
                    <div className="absolute inset-0 -m-2 border-[3px] border-dashed border-black/40 rounded-full animate-spin-slow" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
