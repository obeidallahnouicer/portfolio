import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import TechIcon from "./TechIcon";

interface SkillBubbleProps {
  name: string;
  accent: string;
  index: number;
  proficiency: number; // 0–100
}

function SkillBubble({ name, accent, index, proficiency }: Readonly<SkillBubbleProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (proficiency / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 cursor-default"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Ring + icon */}
      <div className="relative w-14 h-14">
        {/* SVG progress ring */}
        <svg className="absolute inset-0 -rotate-90" width="56" height="56" viewBox="0 0 56 56">
          {/* Track */}
          <circle
            cx="28" cy="28" r={radius}
            fill="none"
            stroke={`${accent}18`}
            strokeWidth="2.5"
          />
          {/* Progress */}
          <motion.circle
            cx="28" cy="28" r={radius}
            fill="none"
            stroke={accent}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: "easeOut" }}
          />
        </svg>

        {/* Icon bubble */}
        <motion.div
          className="absolute inset-1.5 rounded-full flex items-center justify-center text-lg"
          style={{
            background: hovered ? `${accent}22` : `${accent}0e`,
            boxShadow: hovered ? `0 0 16px ${accent}50` : "none",
            transition: "all 0.25s ease",
          }}
        >
          <TechIcon name={name} size={22} />
        </motion.div>
      </div>

      <span
        className="text-xs font-medium text-center leading-tight max-w-[60px]"
        style={{ color: hovered ? "#f1f5f9" : "#64748b", transition: "color 0.25s ease" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

interface CategoryConfig {
  accent: string;
  bg: string;
  border: string;
  skills: Array<{ name: string; proficiency: number }>;
}

interface SkillsCloudProps {
  categories: Record<string, CategoryConfig>;
}

export default function SkillsCloud({ categories }: Readonly<SkillsCloudProps>) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categoryNames = Object.keys(categories);

  const tabs = ["all", ...categoryNames];

  const allSkills = Object.entries(categories).flatMap(([cat, cfg]) =>
    cfg.skills.map(s => ({ ...s, category: cat, accent: cfg.accent }))
  );

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : (categories[activeCategory]?.skills ?? []).map(s => ({
          ...s,
          category: activeCategory,
          accent: categories[activeCategory].accent,
        }));

  const activeCfg = activeCategory === "all" ? null : categories[activeCategory];

  return (
    <div className="w-full">
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map(tab => {
          const isActive = tab === activeCategory;
          const cfg = tab === "all" ? null : categories[tab];
          const accent = cfg?.accent ?? "#22d3ee";
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-250 capitalize"
              style={{
                background: isActive ? `${accent}20` : "rgba(10,22,40,0.5)",
                border: `1px solid ${isActive ? accent : "rgba(100,116,139,0.2)"}`,
                color: isActive ? accent : "#64748b",
                boxShadow: isActive ? `0 0 12px ${accent}30` : "none",
              }}
            >
              {tab === "all" ? "✦ All" : tab}
            </button>
          );
        })}
      </div>

      {/* Bubbles grid */}
      <motion.div
        key={activeCategory}
        className="flex flex-wrap justify-center gap-x-6 gap-y-8 px-4 py-4 rounded-2xl"
        style={{
          background: activeCfg ? `${activeCfg.accent}06` : "transparent",
          border: activeCfg ? `1px solid ${activeCfg.border}` : "none",
          transition: "all 0.35s ease",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {filteredSkills.map((skill, i) => (
          <div key={`${skill.category}-${skill.name}`}>
            <SkillBubble
              name={skill.name}
              accent={skill.accent}
              index={i}
              proficiency={skill.proficiency}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
