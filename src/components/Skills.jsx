import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-warm-surface/50 dark:bg-dark-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /skills
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          Skills
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-5"
            >
              <h4 className="font-mono text-xs text-warm-accent dark:text-dark-accent uppercase tracking-wider mb-3">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-warm-sand/10 text-warm-muted dark:bg-dark-sand/10 dark:text-dark-muted border border-warm-sand/20 dark:border-dark-sand/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
