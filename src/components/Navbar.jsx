import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  ["Hero", "hero"],
  ["Origin", "origin"],
  ["Battles", "battles"],
  ["Missions", "missions"],
  ["Powers", "awakening"],
  ["Power Ups", "certificates"],
  ["Arsenal", "arsenal"],
  ["About", "recruiter"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-[3px] border-black rounded-2xl bg-white shadow-comic ${scrolled ? "" : "bg-comic-yellow"}`}
        >
          <a href="#hero" className="flex items-center gap-2">
            <span className="coin !w-10 !h-10 !text-base">S</span>
            <span className="font-bang text-2xl tracking-widest leading-none">
              SHYAM<span className="text-comic-red">VERSE</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-3 py-1.5 font-bang tracking-wider text-[15px] rounded-md hover:bg-black hover:text-comic-yellow transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex btn-comic red !py-2 !px-3 !text-sm"
          >
            Recruit Me
          </a>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 grid place-items-center border-[3px] border-black rounded-lg bg-comic-cyan shadow-comic-sm"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm z-50 bg-comic-paper border-l-4 border-black p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bang text-2xl">MENU</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 grid place-items-center border-[3px] border-black rounded-lg bg-comic-red text-white shadow-comic-sm"
                >
                  <FiX size={20} />
                </button>
              </div>
              <ul className="space-y-3">
                {LINKS.map(([label, id], i) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 border-[3px] border-black rounded-xl bg-white font-bang tracking-wider text-lg shadow-comic-sm hover:bg-comic-yellow"
                      style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 btn-comic red w-full justify-center"
              >
                Recruit Me
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
