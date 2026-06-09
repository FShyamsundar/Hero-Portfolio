import { motion, AnimatePresence } from "framer-motion";
import { ChapterTag, Speech } from "./ComicElements";
import { FiX } from "react-icons/fi";

export default function PrivacyPolicy({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 lg:inset-12 z-50 bg-comic-paper overflow-y-auto rounded-2xl border-[3px] border-black shadow-2xl"
          >
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-10 h-10 grid place-items-center border-[3px] border-black rounded-lg bg-comic-red text-white shadow-comic-sm hover:bg-red-700 transition-colors z-10"
              >
                <FiX size={20} />
              </button>

              {/* Content */}
              <div>
        <ChapterTag number="PR" title="PRIVACY POLICY" tone="dark" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="comic-title text-[10vw] sm:text-[6vw] lg:text-[4.5vw] leading-[0.9] text-comic-navy">
              Your trust is the
              <br /> top priority.
            </h2>

            <Speech tone="white" className="mt-8 max-w-2xl">
              This portfolio is built for professional visibility. It collects
              no personal data unless you choose to contact me directly.
            </Speech>

            <div className="mt-10 space-y-8">
              <section>
                <h3 className="font-bang text-xl uppercase tracking-[0.35em] mb-3">
                  Information I collect
                </h3>
                <p className="text-sm leading-relaxed text-black/85">
                  I do not collect cookies, user accounts, or payment details on
                  this website. Any information shared through email or contact
                  messages is used only to respond to your inquiry.
                </p>
              </section>

              <section>
                <h3 className="font-bang text-xl uppercase tracking-[0.35em] mb-3">
                  How your data is used
                </h3>
                <p className="text-sm leading-relaxed text-black/85">
                  Data provided voluntarily through the contact form or email is
                  used solely for communication, recruiting, and project
                  follow-up. It is never sold, shared, or reused outside of
                  those purposes.
                </p>
              </section>

              <section>
                <h3 className="font-bang text-xl uppercase tracking-[0.35em] mb-3">
                  No third-party sharing
                </h3>
                <p className="text-sm leading-relaxed text-black/85">
                  I do not share your information with advertisers, recruiters,
                  analytics providers, or any third-party partners.
                </p>
              </section>

              <section>
                <h3 className="font-bang text-xl uppercase tracking-[0.35em] mb-3">
                  Security note
                </h3>
                <p className="text-sm leading-relaxed text-black/85">
                  This site is a static portfolio with no user login. Any
                  contact details submitted are protected by the hosting
                  provider and used only for direct professional outreach.
                </p>
              </section>
            </div>
          </div>

          <div className="comic-panel bg-white border-[3px] border-black p-8 shadow-comic-sm">
            <div className="space-y-5">
              <div>
                <div className="font-bang uppercase text-xs opacity-80 tracking-[0.35em] mb-2">
                  Contact for privacy
                </div>
                <p className="text-sm text-black/85 leading-relaxed">
                  If you need more details or prefer not to proceed, get in
                  touch by email and I will respond quickly.
                </p>
              </div>

              <div className="grid gap-3">
                <a
                  href="mailto:sundarshyam27241@gmail.com"
                  className="btn-comic red inline-flex justify-center"
                >
                  Email Shyam
                </a>
                
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 flex flex-col gap-6 text-sm text-black/80"
        >
          <div>
            <strong className="font-bang uppercase tracking-[0.35em]">
              Scope
            </strong>
            <p className="mt-2 leading-relaxed">
              This privacy policy applies only to the public portfolio website
              hosted by Shyam Sundar. It does not cover external links,
              third-party profiles, or services used outside this site.
            </p>
          </div>

          <div>
            <strong className="font-bang uppercase tracking-[0.35em]">
              Voluntary data
            </strong>
            <p className="mt-2 leading-relaxed">
              Any personal data you share is voluntary and is handled only for
              direct communication. You are not required to provide sensitive
              information to receive an initial response.
            </p>
          </div>

          <div>
            <strong className="font-bang uppercase tracking-[0.35em]">
              Updates
            </strong>
            <p className="mt-2 leading-relaxed">
              This policy may be updated over time. The latest version is always
              available on this site and linked from the footer.
            </p>
          </div>
              </motion.div>
              <div></div></div>
            </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
