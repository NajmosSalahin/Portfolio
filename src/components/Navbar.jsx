import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Sun, Moon } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "education", label: "Education" },
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
  { to: "contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-mono text-sm transition-all duration-300 ${
        scrolled
          ? "bg-warm-bg/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          className="text-lg font-bold tracking-tight cursor-pointer text-warm-accent dark:text-dark-accent"
        >
          {initials}
        </ScrollLink>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              spy
              activeClass="text-warm-accent dark:text-dark-accent"
              className="cursor-pointer text-warm-muted dark:text-dark-muted hover:text-warm-text dark:hover:text-dark-text transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded-lg hover:bg-warm-sand/20 dark:hover:bg-dark-sand/20 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-warm-sand/20 dark:hover:bg-dark-sand/20 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-warm-bg dark:bg-dark-bg z-40 flex flex-col items-center justify-center gap-6">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              spy
              onClick={() => setOpen(false)}
              className="text-xl font-mono text-warm-muted dark:text-dark-muted hover:text-warm-accent dark:hover:text-dark-accent transition-colors cursor-pointer"
            >
              {link.label}
            </ScrollLink>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="mt-4 p-3 rounded-full border border-warm-muted/30 dark:border-dark-muted/30"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      )}
    </nav>
  );
}
