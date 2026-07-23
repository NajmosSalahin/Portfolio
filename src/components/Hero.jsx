import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";

const lines = [
  "$ python portfolio.py --build",
  ">>> analyst.full_stack()",
  ">>> data → insights → apps",
  ">>> Build complete.",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const tick = useCallback(() => {
    const currentLine = lines[lineIndex];
    if (!isDeleting) {
      setDisplayed(currentLine.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
      if (charIndex + 1 === currentLine.length) {
        if (lineIndex === lines.length - 1) return;
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
    } else {
      setDisplayed(currentLine.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        return;
      }
    }
  }, [lineIndex, charIndex, isDeleting]);

  useEffect(() => {
    if (lineIndex === lines.length - 1 && charIndex === lines[lines.length - 1].length) {
      return;
    }
    const speed = isDeleting ? 30 : 60;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, lineIndex, charIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-base sm:text-lg text-warm-accent dark:text-dark-accent mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-warm-muted dark:text-dark-muted mb-6"
        >
          {profile.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-warm-muted dark:text-dark-muted max-w-2xl mx-auto mb-8"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            className="px-6 py-3 rounded-lg bg-warm-accent text-white hover:bg-warm-accent/90 dark:bg-dark-accent dark:text-dark-bg dark:hover:bg-dark-accent/90 font-medium transition-colors cursor-pointer"
          >
            View Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            className="px-6 py-3 rounded-lg border border-warm-accent text-warm-accent hover:bg-warm-accent/10 dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent/10 font-medium transition-colors cursor-pointer"
          >
            Get in Touch
          </ScrollLink>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-warm-muted/30 text-warm-muted hover:bg-warm-muted/10 dark:border-dark-muted/30 dark:text-dark-muted dark:hover:bg-dark-muted/10 font-medium transition-colors inline-flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-xs sm:text-sm bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-3 sm:p-4 inline-block mx-auto text-left max-w-lg w-full"
        >
          <div className="flex items-start gap-2">
            <span className="text-warm-muted dark:text-dark-muted shrink-0">$</span>
            <span className="break-all">{displayed}</span>
            {(lineIndex < lines.length - 1 || charIndex < lines[lines.length - 1].length) && (
              <span
                className={`inline-block w-2 h-4 bg-warm-accent dark:bg-dark-accent ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              />
            )}
          </div>
          {lineIndex === lines.length - 1 &&
            charIndex === lines[lines.length - 1].length && (
              <div className="flex items-start gap-2 mt-1">
                <span className="text-warm-muted dark:text-dark-muted shrink-0">$</span>
                <span className="text-warm-accent dark:text-dark-accent">
                  Ready to build something.
                </span>
                <span
                  className={`inline-block w-2 h-4 bg-warm-accent dark:bg-dark-accent ${
                    showCursor ? "opacity-100" : "opacity-0"
                  } transition-opacity`}
                />
              </div>
            )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <ScrollLink
            to="about"
            smooth
            duration={500}
            className="inline-flex flex-col items-center text-warm-muted dark:text-dark-muted hover:text-warm-accent dark:hover:text-dark-accent transition-colors cursor-pointer"
          >
            <span className="text-xs font-mono mb-2">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}
