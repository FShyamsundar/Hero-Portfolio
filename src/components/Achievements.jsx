import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/content'
import { ChapterTag, Sfx } from './ComicElements'

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-comic-yellow overflow-hidden">
      <div className="absolute inset-0 bg-halftone bg-dots opacity-25 pointer-events-none" />
      <div className="absolute top-10 right-10 rotate-12 hidden md:block">
        <Sfx color="red" rotate={10}>KAPOW!</Sfx>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="04" title="ACHIEVEMENT VAULT" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            TROPHY<br/>WALL.
          </h2>
          <p className="font-bang text-lg max-w-md">
            Real outcomes from real builds — production, payments, real-time, RBAC, the works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: 0 }}
              className="comic-panel pop-card bg-white p-5 sm:p-6 relative"
            >
              <div className="tape" style={{ background: i % 2 ? '#00F0FF' : '#FF2E63' }} />
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0 w-14 h-14 grid place-items-center border-[3px] border-black rounded-full bg-comic-yellow">
                  <span>{a.icon}</span>
                </div>
                <div>
                  <h3 className="font-bang text-xl leading-tight">{a.title}</h3>
                  <p className="mt-1 text-sm font-comic font-bold text-black/70">{a.sub}</p>
                </div>
              </div>
              <div className="mt-5 motion-lines h-2 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
