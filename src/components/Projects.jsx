import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /projects
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
        >
          Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20 rounded-lg p-5 flex flex-col"
            >
              <h4 className="text-lg font-bold">{project.name}</h4>
              <p className="text-sm text-warm-muted dark:text-dark-muted mt-2 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-warm-accent/10 text-warm-accent dark:bg-dark-accent/10 dark:text-dark-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-warm-sand/20 dark:border-dark-sand/20">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
                  >
                    <Github size={15} />
                    Code
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-sm text-warm-muted/50 dark:text-dark-muted/50 cursor-not-allowed">
                    <Lock size={14} />
                    Code coming soon
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-warm-muted hover:text-warm-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
