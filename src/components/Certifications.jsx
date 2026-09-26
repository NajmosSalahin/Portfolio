import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 bg-warm-surface/50 dark:bg-dark-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /certifications
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-5 block group"
            >
              <Award
                size={24}
                className="text-warm-accent dark:text-dark-accent mb-3"
              />
              <h4 className="font-bold text-sm leading-snug group-hover:text-warm-accent dark:group-hover:text-dark-accent transition-colors">
                {cert.name}
              </h4>
              <p className="text-xs text-warm-muted dark:text-dark-muted mt-1">
                {cert.issuer}
              </p>
              <p className="font-mono text-xs text-warm-muted/60 dark:text-dark-muted/60 mt-1">
                {cert.date}
              </p>
              <p className="text-xs text-warm-muted dark:text-dark-muted mt-2 leading-relaxed">
                {cert.details}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-warm-accent dark:text-dark-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
