
import Section from "./Section";
import SkillsCloud from "./SkillsCloud";

const CLOUD_CATEGORIES = {
  "AI & Machine Learning": {
    accent: "#22d3ee",
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.18)",
    skills: [
      { name: "Gen AI", icon: "🤖", proficiency: 92 },
      { name: "LLMs & RAG", icon: "🧠", proficiency: 90 },
      { name: "LangChain", icon: "⛓️", proficiency: 88 },
      { name: "Prompt Eng", icon: "✍️", proficiency: 87 },
      { name: "Guardrails", icon: "🛡️", proficiency: 82 },
      { name: "TensorFlow", icon: "🔢", proficiency: 80 },
      { name: "PyTorch", icon: "🔥", proficiency: 78 },
      {name: "Scikit-learn", icon: "📊", proficiency: 75 },
    ],
  },
  "Software Dev": {
    accent: "#818cf8",
    bg: "rgba(129,140,248,0.06)",
    border: "rgba(129,140,248,0.18)",
    skills: [
      { name: "Python", icon: "🐍", proficiency: 93 },
      { name: "JavaScript", icon: "🌐", proficiency: 78 },
      { name: "FastAPI", icon: "⚡", proficiency: 84 },
      { name: "Flask", icon: "🍶", proficiency: 80 },
      { name: "PostgreSQL", icon: "🐘", proficiency: 76 },
      { name: "React", icon: "⚛️", proficiency: 85 },
      { name: "Node.js", icon: "🟢", proficiency: 80 },
      
    ],
  },
  "DevOps": {
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.18)",
    skills: [
      { name: "Docker", icon: "🐳", proficiency: 85 },
      { name: "GitLab CI", icon: "🦊", proficiency: 82 },
      { name: "Azure", icon: "☁️", proficiency: 74 },
    ],
  },
  "Finance & Risk": {
    accent: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    border: "rgba(251,146,60,0.18)",
    skills: [
      { name: "Credit Analysis", icon: "📋", proficiency: 90 },
      { name: "Fin Modeling", icon: "📈", proficiency: 86 },
      { name: "Risk Mgmt", icon: "⚖️", proficiency: 84 },
    ],
  },
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <SkillsCloud categories={CLOUD_CATEGORIES} />
    </Section>
  );
}
