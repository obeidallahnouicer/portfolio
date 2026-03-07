import { useRef } from "react";
import { motion, useInView } from "motion/react";

const KEYWORDS = ["AI Engineer", "Generative AI", "LLM", "RAG", "financial", "banking", "enterprise", "production-ready"];

function highlightText(text: string) {
  const parts = text.split(new RegExp(`(${KEYWORDS.join("|")})`, "gi"));
  return parts.map((part, i) => {
    const isKeyword = KEYWORDS.some(k => k.toLowerCase() === part.toLowerCase());
    return isKeyword ? (
      <mark
        key={i}
        className="font-semibold"
        style={{
          background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(129,140,248,0.12))",
          color: "#22d3ee",
          padding: "0 3px",
          borderRadius: "4px",
          WebkitTextFillColor: "#22d3ee",
        }}
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

interface AboutAnimatedProps {
  text: string;
}

export default function AboutAnimated({ text }: Readonly<AboutAnimatedProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Split into sentences for stagger reveal
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];

  return (
    <div ref={ref}>
      <p className="text-base leading-8" style={{ color: "#94a3b8" }}>
        {sentences.map((sentence, i) => (
          <motion.span
            key={i}
            className="inline"
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: i * 0.18, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {highlightText(sentence)}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
