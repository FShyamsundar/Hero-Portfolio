import { motion } from 'framer-motion'
import { ARSENAL } from '../data/content'
import { ChapterTag, Sfx } from './ComicElements'

export default function Arsenal() {
  return (
    <section id="arsenal" className="relative py-24 bg-comic-red text-white overflow-hidden">
      <div className="absolute inset-0 bg-halftone-white bg-dots opacity-25 pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-comic-yellow rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-comic-cyan rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="07" title="THE ARSENAL" tone="dark" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="comic-title-white comic-title text-[12vw] sm:text-[8vw] lg:text-7xl">
            HERO<br/>GADGETS.
          </h2>
          <Sfx color="yellow" rotate={-8}>EQUIP!</Sfx>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {ARSENAL.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: 0, scale: 1.04 }}
              className="comic-panel pop-card bg-white text-black p-5 text-center"
            >
              <div className="mx-auto w-14 h-14 grid place-items-center border-[3px] border-black bg-comic-yellow rounded-xl font-bang text-2xl">
                {t.icon}
              </div>
              <h3 className="mt-3 font-bang text-xl">{t.name}</h3>
              <div className="mt-1 inline-block font-bang text-[11px] bg-black text-comic-yellow px-2 py-0.5 rounded">
                {t.tag.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
