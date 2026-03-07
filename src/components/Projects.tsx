
import { PROJECTS } from "../constants";
import Section from "./Section";
import { ExternalLink } from "lucide-react";
import { GitHubSVG } from "./BrandIcons";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// Try local image first; fall back to a Pexels stock photo
const PROJECT_LOCAL_IMAGE: Record<string, string> = {
  "EduAI - Educational Platform":             "/images/projects/eduai.jpg",
  "Resume Optimizer - AI Enhancement Tool":   "/images/projects/resume-optimizer.jpg",
  "Big Data Analytics":                       "/images/projects/big-data-analytics.jpg",
  "FixTrade - Trading Analytics":             "/images/projects/fixtrade.jpg",
  "BioFront - Biometric Frontend":            "/images/projects/biofront.jpg",
  "IoT Suite":                                "/images/projects/iot-suite.jpg",
};

const PROJECT_FALLBACK_IMAGE: Record<string, string> = {
  "EduAI - Educational Platform":           "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Resume Optimizer - AI Enhancement Tool": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Big Data Analytics":                     "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
  "FixTrade - Trading Analytics":           "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  "BioFront - Biometric Frontend":          "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  "IoT Suite":                              "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const PROJECT_TAGS: Record<string, string[]> = {
  "EduAI - Educational Platform":           ["Python", "LangChain", "Flask", "PostgreSQL"],
  "Resume Optimizer - AI Enhancement Tool": ["Python", "NLP", "FastAPI", "React"],
  "Big Data Analytics":                     ["Python", "Spark", "Kafka"],
  "FixTrade - Trading Analytics":           ["Python", "Pandas", "Flask"],
  "BioFront - Biometric Frontend":          ["JavaScript", "React", "Node.js"],
  "IoT Suite":                              ["Node.js", "React", "Flutter", "MQTT"],
};

const ACCENT_COLORS = ["#22d3ee", "#818cf8", "#34d399", "#fb923c", "#c084fc", "#f472b6"];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="projects" title="Featured Projects" subtitle="Things I've built">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => {
          const localImg   = PROJECT_LOCAL_IMAGE[project.title];
          const fallbackImg = PROJECT_FALLBACK_IMAGE[project.title];
          const tags       = PROJECT_TAGS[project.title] ?? [];
          const accent     = ACCENT_COLORS[idx % ACCENT_COLORS.length];

          return (
            <motion.article
              key={project.title}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "rgba(10,22,40,0.7)", border: `1px solid ${accent}14` }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, boxShadow: `0 16px 48px ${accent}18`, borderColor: `${accent}40` } as never}
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden bg-slate-900 flex-shrink-0">
                <img
                  src={localImg}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => { e.currentTarget.src = fallbackImg; }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 20%, rgba(10,22,40,0.92) 100%)` }}
                />
                {/* Accent top border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3
                  className="text-sm font-bold leading-snug"
                  style={{ color: "#f1f5f9", fontFamily: "Syne, Inter, sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-xs leading-relaxed flex-1" style={{ color: "#64748b" }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md"
                        style={{ background: `${accent}0e`, border: `1px solid ${accent}28`, color: accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* ── Always-visible action bar ── */}
                <div
                  className="flex items-center gap-2 pt-3 mt-1"
                  style={{ borderTop: `1px solid ${accent}14` }}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex-1 justify-center"
                      style={{ background: `${accent}10`, border: `1px solid ${accent}30`, color: accent }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${accent}22`;
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 14px ${accent}30`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${accent}10`;
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                      }}
                    >
                      <GitHubSVG size={13} />
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex-1 justify-center"
                      style={{ background: "rgba(248,250,252,0.04)", border: "1px solid rgba(248,250,252,0.1)", color: "#94a3b8" }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,250,252,0.25)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(248,250,252,0.1)";
                      }}
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}


const projectImages: Record<string, string> = {
  "EduAI - Educational Platform": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Resume Optimizer - AI Enhancement Tool": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  "Big Data Analytics": "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
  "FixTrade - Trading Analytics": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  "BioFront - Biometric Frontend": "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  "IoT Suite": "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const projectTags: Record<string, string[]> = {
  "EduAI - Educational Platform": ["Python", "LangChain", "Flask", "PostgreSQL"],
  "Resume Optimizer - AI Enhancement Tool": ["Python", "NLP", "FastAPI", "React"],
  "Big Data Analytics": ["Python", "Spark", "Kafka"],
  "FixTrade - Trading Analytics": ["Python", "Pandas", "Flask"],
  "BioFront - Biometric Frontend": ["JavaScript", "React", "Node.js"],
  "IoT Suite": ["Node.js", "React", "Flutter", "MQTT"],
};
