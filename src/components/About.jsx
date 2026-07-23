import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code } from "lucide-react";
import { profile } from "../data/portfolio";

const facts = [
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: GraduationCap, label: "Studying", value: "B.Sc. Statistics & Data Science" },
  { icon: Code, label: "Focus", value: profile.focus },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-mono text-sm text-warm-accent dark:text-dark-accent mb-2"
        >
          /about
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
        >
          About Me
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-base sm:text-lg leading-relaxed text-warm-muted dark:text-dark-muted">
              {profile.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 p-3 rounded-lg bg-warm-surface dark:bg-dark-surface border border-warm-sand/20 dark:border-dark-sand/20"
                >
                  <Icon
                    size={18}
                    className="text-warm-accent dark:text-dark-accent shrink-0 mt-0.5"
                  />
                  <div className="space-y-0.5">
                    <p className="text-xs font-mono text-warm-muted dark:text-dark-muted">
                      {fact.label}
                    </p>
                    <p className="text-sm font-medium">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
