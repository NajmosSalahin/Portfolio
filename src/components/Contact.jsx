import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /contact
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
        >
          Get in Touch
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 hover:border-warm-accent/50 dark:hover:border-dark-accent/50 transition-colors group"
            >
              <Mail size={18} className="text-warm-accent dark:text-dark-accent shrink-0" />
              <div>
                <p className="text-xs font-mono text-warm-muted dark:text-dark-muted">Email</p>
                <p className="text-sm group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 hover:border-warm-accent/50 dark:hover:border-dark-accent/50 transition-colors group"
            >
              <Phone size={18} className="text-warm-accent dark:text-dark-accent shrink-0" />
              <div>
                <p className="text-xs font-mono text-warm-muted dark:text-dark-muted">Phone</p>
                <p className="text-sm group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20">
              <MapPin size={18} className="text-warm-accent dark:text-dark-accent shrink-0" />
              <div>
                <p className="text-xs font-mono text-warm-muted dark:text-dark-muted">Location</p>
                <p className="text-sm">{profile.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 hover:border-warm-accent/50 dark:hover:border-dark-accent/50 text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 hover:border-warm-accent/50 dark:hover:border-dark-accent/50 text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-6"
          >
            <p className="text-sm text-warm-muted dark:text-dark-muted mb-4">
              Want to work together? Drop me a message and I'll get back to you.
            </p>

            <form
              action="https://formspree.io/f/xwvgngjz"
              method="POST"
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-warm-muted dark:text-dark-muted mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-warm-bg dark:bg-dark-bg border border-warm-sand/20 dark:border-dark-sand/20 text-sm focus:outline-none focus:border-warm-accent dark:focus:border-dark-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-warm-muted dark:text-dark-muted mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-warm-bg dark:bg-dark-bg border border-warm-sand/20 dark:border-dark-sand/20 text-sm focus:outline-none focus:border-warm-accent dark:focus:border-dark-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-warm-muted dark:text-dark-muted mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-warm-bg dark:bg-dark-bg border border-warm-sand/20 dark:border-dark-sand/20 text-sm focus:outline-none focus:border-warm-accent dark:focus:border-dark-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-warm-accent text-white hover:bg-warm-accent/90 dark:bg-dark-accent dark:text-dark-bg dark:hover:bg-dark-accent/90 font-medium transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
