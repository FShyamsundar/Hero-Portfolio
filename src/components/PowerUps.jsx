import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../data/content";
import { ChapterTag, Sfx } from "./ComicElements";

const accentMap = {
  cyan: {
    badge: "bg-comic-cyan text-black",
    chip: "bg-comic-cyan text-black",
  },
  yellow: {
    badge: "bg-comic-yellow text-black",
    chip: "bg-comic-yellow text-black",
  },
  red: {
    badge: "bg-comic-red text-white",
    chip: "bg-comic-red text-white",
  },
};

export default function PowerUps() {
  return (
    <section
      id="certificates"
      className="relative py-24 bg-comic-navy text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-halftone-white bg-dots opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="05" title="POWER UPS" tone="dark" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="comic-title-cyan comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            POWER - UPS
            <br />
          </h2>
          <Sfx color="yellow" rotate={-6}>
            ARCHIVE!
          </Sfx>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, rotate: 0 }}
              className="relative comic-panel bg-white text-black p-5 sm:p-6 pop-card"
              style={{ rotate: `${i % 2 ? 1 : -1}deg` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`badge-kapow ${accentMap[cert.accent].badge}`}>
                  CERTIFIED
                </span>
                <span className="font-bang text-sm bg-black text-comic-yellow px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>

              <div className="mt-4 rounded-2xl border-[3px] border-black bg-comic-paper p-3 shadow-comic-sm">
                <img
                  src={encodeURI(cert.mainImage)}
                  alt={`${cert.issuer} certificate`}
                  className="h-56 sm:h-60 w-full object-contain"
                  loading="lazy"
                />
              </div>

              {cert.supportingImages.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {cert.supportingImages.map((src, idx) => (
                    <div
                      key={src}
                      className="rounded-xl border-[2px] border-black bg-comic-paper p-2 shadow-comic-sm"
                    >
                      <img
                        src={encodeURI(src)}
                        alt={`${cert.title} supporting certificate ${idx + 1}`}
                        className="h-32 w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <div className="font-bang text-2xl leading-tight text-comic-navy">
                  {cert.issuer}
                </div>
                <p className="mt-1 text-sm font-comic font-bold text-black/80">
                  {cert.title}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-[11px] font-bang border-[2px] border-black rounded ${accentMap[cert.accent].chip}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
