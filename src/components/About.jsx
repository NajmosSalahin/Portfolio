import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code, User } from "lucide-react";
import { profile } from "../data/portfolio";
import profileImg from "../assets/profile.jpg";

const initials = profile.name
  .split(" ")
  .filter((w) => !w.includes(".") && w.length > 1)
  .map((w) => w[0])
  .join("")
  .slice(0, 2);

const facts = [
  { icon: MapPin, label: "Based in", value: profile.location },
  { icon: GraduationCap, label: "Studying", value: "B.Sc. Statistics & Data Science" },
  { icon: Code, label: "Focus", value: profile.focus },
];

export default function About() {
  const [imgError, setImgError] = useState(false);

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
            className="flex flex-col items-center md:items-start"
          >
            {imgError ? (
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-warm-accent/20 dark:bg-dark-accent/20 flex items-center justify-center text-warm-accent dark:text-dark-accent shrink-0">
                <span className="text-3xl font-bold font-mono">{initials}</span>
              </div>
            ) : (
              <img
                src={profileImg}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-warm-sand/30 dark:border-dark-sand/30"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15 }}
          className="mt-8"
        >
          <p className="text-base sm:text-lg leading-relaxed text-warm-muted dark:text-dark-muted">
            {profile.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
