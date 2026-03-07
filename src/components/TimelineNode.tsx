import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ChevronDown } from "lucide-react";

export interface TimelineNodeData {
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  accentColor?: string;
  icon?: string;
  logoSrc?: string; // path like /images/companies/stb-bank.png
}

interface TimelineNodeProps {
  data: TimelineNodeData;
  index: number;
  isLast: boolean;
}

export default function TimelineNode({ data, index, isLast }: Readonly<TimelineNodeProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const accent = data.accentColor ?? "#22d3ee";
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-start md:items-center gap-0`}>

      {/* Content card */}
      <motion.div
        className={`w-full md:w-[calc(50%-28px)] ${isEven ? "md:pr-8" : "md:pl-8"}`}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <button
          type="button"
          className="w-full text-left p-5 rounded-2xl cursor-pointer transition-all duration-300"
          style={{
            background: "rgba(10,22,40,0.8)",
            border: `1px solid ${accent}18`,
            boxShadow: expanded ? `0 8px 32px ${accent}14` : "none",
          }}
          onClick={() => setExpanded(v => !v)}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = `${accent}40`;
            (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 8px 32px ${accent}12`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = `${accent}18`;
            (e.currentTarget as HTMLButtonElement).style.boxShadow = expanded ? `0 8px 32px ${accent}14` : "none";
          }}
        >
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {/* Logo image or emoji icon fallback */}
              {data.logoSrc ? (
                <img
                  src={data.logoSrc}
                  alt={data.subtitle}
                  className="flex-shrink-0 object-contain rounded"
                  style={{ width: 28, height: 28, background: "rgba(255,255,255,0.05)", padding: 2 }}
                  onError={e => {
                    e.currentTarget.style.display = "none";
                    const sib = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (sib) sib.style.display = "inline";
                  }}
                />
              ) : null}
              {/* Emoji fallback (also shown when logo fails) */}
              {data.icon && (
                <span
                  className="text-lg flex-shrink-0"
                  style={{ display: data.logoSrc ? "none" : "inline" }}
                >
                  {data.icon}
                </span>
              )}
              <h3
                className="text-sm font-bold leading-snug truncate"
                style={{ color: "#f1f5f9", fontFamily: "Syne, Inter, sans-serif" }}
              >
                {data.title}
              </h3>
            </div>
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-md flex-shrink-0"
              style={{ background: `${accent}12`, border: `1px solid ${accent}28`, color: accent }}
            >
              {data.period}
            </span>
          </div>

          <p className="text-xs font-semibold mb-2 pl-0" style={{ color: accent }}>
            {data.subtitle}
          </p>

          {/* Expandable description */}
          {data.description && data.description.length > 0 && (
            <>
              <button
                className="flex items-center gap-1 text-xs transition-colors mt-1"
                style={{ color: "#475569" }}
                onClick={e => { e.stopPropagation(); setExpanded(v => !v); }}
                aria-expanded={expanded}
              >
                <ChevronDown
                  size={12}
                  className="transition-transform duration-300"
                  style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                />
                {expanded ? "Less" : "More details"}
              </button>

              <motion.div
                initial={false}
                animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <ul className="mt-3 space-y-1.5">
                  {data.description.map((item) => (
                    <li key={item.slice(0, 30)} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#64748b" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: accent, opacity: 0.7 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </button>
      </motion.div>

      {/* Center dot + line */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-10">
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.2, duration: 0.4, type: "spring", stiffness: 300 }}
        >
          <div
            className="w-4 h-4 rounded-full border-2 z-10 relative"
            style={{
              backgroundColor: accent,
              borderColor: "#020b18",
              boxShadow: `0 0 16px ${accent}80, 0 0 4px ${accent}`,
            }}
          />
        </motion.div>

        {/* Connecting line to next node */}
        {!isLast && (
          <motion.div
            className="flex-1 w-px mt-1"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.12 + 0.35, duration: 0.6, ease: "easeOut" }}
            style={{
              background: `linear-gradient(to bottom, ${accent}60, rgba(129,140,248,0.2), transparent)`,
              transformOrigin: "top",
            }}
          />
        )}
      </div>

      {/* Mobile line */}
      {!isLast && (
        <div className="md:hidden w-px h-8 ml-5 mt-1"
          style={{ background: `linear-gradient(to bottom, ${accent}40, transparent)` }}
        />
      )}
    </div>
  );
}
