import { motion, useReducedMotion } from "framer-motion";
import { education } from "../data/portfolio";

export default function Education() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section id="education" className="py-20 px-4 sm:px-6 bg-warm-surface/50 dark:bg-dark-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /education
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          Education
        </motion.h3>

        <div className="relative">
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-warm-sand/30 dark:bg-dark-sand/30" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 sm:pl-14"
              >
                <div className="absolute left-2.5 sm:left-3.5 top-1.5 w-3 h-3 rounded-full bg-warm-accent dark:bg-dark-accent border-2 border-warm-bg dark:border-dark-bg" />

                <div className="bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-5">
                  <span className="font-mono text-xs text-warm-accent dark:text-dark-accent">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold mt-1">{item.degree}</h4>
                  <p className="text-sm text-warm-muted dark:text-dark-muted mt-1">
                    {item.school}
                  </p>
                  {item.details && (
                    <p className="text-sm text-warm-muted dark:text-dark-muted mt-2 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
