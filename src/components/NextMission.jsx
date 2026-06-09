import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";
import { ChapterTag, Sfx, Speech } from "./ComicElements";

export default function NextMission({ onOpenPrivacy }) {
  const [showEmailPanel, setShowEmailPanel] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [messageBody, setMessageBody] = useState(
    "Hello, I would love to recruit this hero for a new mission. Let's chat over coffee and explore how we can work together.",
  );

  const email = "sundarshyam27241@gmail.com";
  const phone = "+91 87542 96370";

  function handleSendBriefing() {
    setShowEmailPanel(true);
    window.location.href = `mailto:${email}`;
  }

  async function handleCopy(value, label) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(`${label} copied!`);
      window.setTimeout(() => setCopyMessage(""), 2200);
    } catch (error) {
      setCopyMessage("Copy failed. Try manually.");
      window.setTimeout(() => setCopyMessage(""), 2200);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 city-bg text-white overflow-hidden"
    >
      <div className="city-skyline opacity-80" />
      <div className="city-windows" />
      <div className="absolute inset-0 bg-halftone-white bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <ChapterTag number="∞" title="THE NEXT MISSION" tone="dark" />

        <div className="grid lg:grid-cols-12 gap-10 items-center mt-6">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="comic-title-white comic-title text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.85]"
            >
              READY FOR
              <br />
              THE NEXT
              <br />
              MISSION?
            </motion.h2>

            <div className="mt-7 max-w-xl">
              <Speech tone="cyan">
                The hero is online and accepting briefings. Drop a mission file,
                schedule a call, or just say hi.
              </Speech>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="btn-comic red inline-flex items-center gap-2"
                type="button"
                onClick={handleSendBriefing}
              >
                <FiMail /> Send Briefing
              </button>
              <a
                className="btn-comic cyan"
                href="https://www.linkedin.com/in/shyam-sundar-f-35a8a524a/"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin /> Connect on LinkedIn
              </a>
              <a
                className="btn-comic"
                href="https://github.com/FShyamsundar"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub /> GitHub Profile
              </a>
            </div>

            {showEmailPanel ? (
              <div className="mt-6 p-5 bg-white/95 border-[3px] border-black rounded-3xl text-black max-w-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bang text-xs uppercase opacity-80 tracking-[0.35em] mb-2">
                      Email briefing details
                    </div>
                    <p className="text-sm leading-relaxed mb-3">
                      Your email client should open automatically. If not, use
                      the details below and copy them with one tap.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm uppercase tracking-[0.2em] text-comic-navy hover:text-black"
                    onClick={() => setShowEmailPanel(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="comic-panel bg-comic-yellow text-black p-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bang text-[10px] opacity-60">
                        Email
                      </div>
                      <div className="font-bang truncate">{email}</div>
                    </div>
                    <button
                      type="button"
                      className="btn-comic blue text-xs py-2 px-3"
                      onClick={() => handleCopy(email, "Email")}
                    >
                      Copy
                    </button>
                  </div>
                  <div className="comic-panel bg-comic-yellow text-black p-3 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-bang text-[10px] opacity-60">
                        Hotline
                      </div>
                      <div className="font-bang truncate">{phone}</div>
                    </div>
                    <button
                      type="button"
                      className="btn-comic blue text-xs py-2 px-3"
                      onClick={() => handleCopy(phone, "Number")}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="font-bang text-[10px] uppercase opacity-60 tracking-[0.35em] mb-2 block">
                    Send a message
                  </label>
                  <textarea
                    value={messageBody}
                    onChange={(e) => setMessageBody(e.target.value)}
                    className="w-full min-h-[140px] p-3 border-[3px] border-black rounded-3xl text-sm font-comic resize-none"
                    placeholder="Hello, I would love to recruit this hero..."
                  />
                  <div className="mt-3 flex flex-wrap gap-3 items-center">
                    <button
                      type="button"
                      className="btn-comic blue text-sm py-2 px-4"
                      onClick={() => handleCopy(messageBody, "Message")}
                    >
                      Copy Message
                    </button>
                  </div>
                </div>

                <div
                  className="mt-3 text-sm text-comic-navy font-bang"
                  aria-live="polite"
                >
                  {copyMessage ||
                    "Tap copy to copy email, phone, or your message."}
                </div>
              </div>
            ) : null}

            <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl">
              <Channel
                icon={<FiMail />}
                label="EMAIL"
                value="sundarshyam27241@gmail.com"
              />
              <Channel
                icon={<FiPhone />}
                label="HOTLINE"
                value="+91 87542 96370"
              />
              <Channel
                icon={<FiGithub />}
                label="GITHUB"
                value="github.com/FShyamsundar"
              />
            </div>
          </div>

          {/* End-of-issue panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="comic-panel bg-comic-yellow text-black p-7 relative">
              <div className="tape" style={{ background: "#FF2E63" }} />
              <div className="flex items-center justify-between">
                <span className="badge-kapow">END OF ISSUE</span>
                <Sfx color="red" rotate={6}>
                  TO BE CONTINUED…
                </Sfx>
              </div>

              <h3 className="font-hero text-4xl mt-5 leading-none">
                NEXT ISSUE:
                <br />
                <span className="text-comic-red">YOUR PRODUCT.</span>
              </h3>

              <p className="mt-4 font-comic text-lg">
                Got a feature stuck in development hell? A side-project that
                needs a real engineer? Let's ship the next chapter together.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <Mini label="ISSUE" value="#002" />
                <Mini label="GENRE" value="MERN" />
                <Mini label="RATING" value="EPIC" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-16 pt-10 pb-8 text-black">
        <div className="comic-panel bg-comic-yellow text-black border-[3px] border-black p-8 grid gap-8 lg:grid-cols-[1.8fr_2fr_1fr]">
          <div className="space-y-4">
            <div className="text-2xl font-bang tracking-[0.4em] uppercase text-comic-navy">
              SHYAMVERSE
            </div>
            <p className="max-w-md leading-relaxed text-sm opacity-95">
              Full stack hero building polished web experiences for modern
              products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <div className="font-bang uppercase text-xs opacity-80 tracking-[0.35em] mb-3">
                Quick Links
              </div>
              <ul className="space-y-2 text-sm opacity-95">
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#hero"
                  >
                    Hero
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#origin"
                  >
                    Origin
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#missions"
                  >
                    Missions
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#battles"
                  >
                    Battles
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#awakening"
                  >
                    Powers
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#certificates"
                  >
                    Power Ups
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#arsenal"
                  >
                    Arsenal
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#recruiter"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="underline decoration-black/30 hover:text-black"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="underline decoration-black/30 hover:text-black text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-bang uppercase text-xs opacity-80 tracking-[0.35em] mb-3">
                Social
              </div>
              <ul className="space-y-2 text-sm opacity-95">
                <li>
                  <a
                    className="inline-flex items-center gap-2 underline decoration-black/30 hover:text-black"
                    href="https://github.com/FShyamsundar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 underline decoration-black/30 hover:text-black"
                    href="https://www.linkedin.com/in/shyam-sundar-f-35a8a524a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2 underline decoration-black/30 hover:text-black"
                    href="mailto:sundarshyam27241@gmail.com"
                    title="Send an email"
                  >
                    <FiMail /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div className="bg-white border-[3px] border-black rounded-2xl p-5">
              <div className="font-bang uppercase text-xs opacity-80 tracking-[0.35em] mb-3">
                Ready to launch?
              </div>
              <a
                className="inline-flex items-center gap-2 text-comic-navy font-bang text-sm hover:text-black"
                href="#hero"
              >
                <FiArrowUp /> Back to top
              </a>
            </div>
            <div className="text-xs opacity-80 leading-relaxed">
              © 2026 Shyam Sundar. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

function Channel({ icon, label, value }) {
  return (
    <div className="comic-panel bg-white text-black p-3 flex items-center gap-3">
      <div className="w-10 h-10 grid place-items-center border-[3px] border-black bg-comic-yellow rounded-lg shrink-0">
        {icon}
      </div>
      <div className="leading-tight min-w-0">
        <div className="font-bang text-[11px] opacity-60">{label}</div>
        <div className="font-bang truncate">{value}</div>
      </div>
    </div>
  );
}

function Mini({ label, value }) {
  return (
    <div className="border-[3px] border-black rounded-lg p-2 bg-white">
      <div className="text-[10px] font-bang opacity-60">{label}</div>
      <div className="font-bang text-lg">{value}</div>
    </div>
  );
}
