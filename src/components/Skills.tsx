
import Section from "./Section";
import SkillsCloud from "./SkillsCloud";

const CLOUD_CATEGORIES = {
  "AI & Machine Learning": {
    accent: "#22d3ee",
    bg: "rgba(6,182,212,0.06)",
    border: "rgba(6,182,212,0.18)",
    skills: [
      { name: "Gen AI", proficiency: 92 },
      { name: "LLMs & RAG", proficiency: 90 },
      { name: "LangChain", proficiency: 88 },
      { name: "Prompt Eng", proficiency: 87 },
      { name: "Guardrails", proficiency: 82 },
      { name: "TensorFlow", proficiency: 80 },
      { name: "PyTorch", proficiency: 78 },
      { name: "Scikit-learn", proficiency: 75 },
    ],
  },
  "Software Dev": {
    accent: "#818cf8",
    bg: "rgba(129,140,248,0.06)",
    border: "rgba(129,140,248,0.18)",
    skills: [
      { name: "Python", proficiency: 93 },
      { name: "JavaScript", proficiency: 78 },
      { name: "FastAPI", proficiency: 84 },
      { name: "Flask", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 76 },
      { name: "React", proficiency: 85 },
      { name: "Node.js", proficiency: 80 },
    ],
  },
  "DevOps": {
    accent: "#34d399",
    bg: "rgba(52,211,153,0.06)",
    border: "rgba(52,211,153,0.18)",
    skills: [
      { name: "Docker", proficiency: 85 },
      { name: "GitLab CI", proficiency: 82 },
      { name: "Azure", proficiency: 74 },
    ],
  },
  "Finance & Risk": {
    accent: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    border: "rgba(251,146,60,0.18)",
    skills: [
      { name: "Credit Analysis", proficiency: 90 },
      { name: "Fin Modeling", proficiency: 86 },
      { name: "Risk Mgmt", proficiency: 84 },
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
