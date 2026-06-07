import { motion } from 'framer-motion'

/* Reusable comic building blocks. Code-first, almost no PNGs. */

export function Burst({ children, className = '', rotate = -8 }) {
  return (
    <div
      className={`burst ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div style={{ transform: `rotate(${-rotate}deg)` }} className="font-bang text-black px-3 leading-tight">
        {children}
      </div>
    </div>
  )
}

export function ChapterTag({ number, title, tone = 'light' }) {
  const subtitleClass =
    tone === 'dark' ? 'text-white/80' : 'text-black/70'
  const lineClass =
    tone === 'dark' ? 'bg-white/45' : 'bg-black/80'

  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="chapter-tag">CHAPTER {number}</span>
      <span className={`h-[3px] flex-1 rounded-full ${lineClass}`} />
      <span className={`font-bang tracking-widest ${subtitleClass}`}>{title}</span>
    </div>
  )
}

export function Speech({ children, side = 'left', tone = 'white', className = '' }) {
  const bg =
    tone === 'yellow' ? 'bg-comic-yellow'
    : tone === 'cyan' ? 'bg-comic-cyan'
    : tone === 'red'  ? 'bg-comic-red text-white'
    : 'bg-white'
  return (
    <div className={`speech ${side === 'right' ? 'right' : ''} ${bg} ${className}`}>
      {children}
    </div>
  )
}

export function Panel({ children, color = 'white', className = '', tilt = 0 }) {
  const map = {
    white: 'bg-white text-black',
    yellow: 'bg-comic-yellow text-black',
    cyan: 'bg-comic-cyan text-black',
    red: 'bg-comic-red text-white',
    navy: 'bg-comic-navy text-white',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: tilt - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`comic-panel ${map[color]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function HalftoneCorner({ color = 'cyan', side = 'tl' }) {
  const sideMap = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  }
  const colorMap = {
    cyan: 'bg-comic-cyan',
    yellow: 'bg-comic-yellow',
    red: 'bg-comic-red',
  }
  return (
    <div
      className={`pointer-events-none absolute ${sideMap[side]} w-40 h-40 ${colorMap[color]} bg-halftone bg-dots opacity-70`}
      style={{
        clipPath:
          side === 'tl' ? 'polygon(0 0,100% 0,0 100%)'
          : side === 'tr' ? 'polygon(0 0,100% 0,100% 100%)'
          : side === 'bl' ? 'polygon(0 0,0 100%,100% 100%)'
          : 'polygon(100% 0,100% 100%,0 100%)',
      }}
    />
  )
}

export function Sfx({ children, color = 'yellow', rotate = -8, className = '' }) {
  const map = {
    yellow: 'bg-comic-yellow text-black',
    red: 'bg-comic-red text-white',
    cyan: 'bg-comic-cyan text-black',
  }
  return (
    <span
      className={`inline-block px-3 py-1 border-[3px] border-black font-bang text-2xl ${map[color]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, boxShadow: '4px 4px 0 #000' }}
    >
      {children}
    </span>
  )
}
