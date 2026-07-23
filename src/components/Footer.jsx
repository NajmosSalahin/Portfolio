import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-warm-sand/20 dark:border-dark-sand/20">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-warm-muted dark:text-dark-muted">
          &copy; {year} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
