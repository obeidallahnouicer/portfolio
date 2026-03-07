
import { EXPERIENCE } from "../constants";
import Section from "./Section";
import GraphTimeline from "./GraphTimeline";
import { type TimelineNodeData } from "./TimelineNode";

const COMPANY_COLORS: Record<string, string> = {
  "STB BANK": "#22d3ee",
  "JEMS": "#818cf8",
  "Bank of Tunisia": "#34d399",
};

const COMPANY_LOGOS: Record<string, string> = {
  "STB BANK": "/images/companies/stb-bank.png",
  "JEMS": "/images/companies/jems.png",
  "Bank of Tunisia": "/images/companies/bank-of-tunisia.png",
};

const COMPANY_ICONS: Record<string, string> = {
  "STB BANK": "🏦",
  "JEMS": "🤖",
  "Bank of Tunisia": "🏛️",
};

const experienceNodes: TimelineNodeData[] = EXPERIENCE.map(exp => ({
  title: exp.role,
  subtitle: exp.company,
  period: exp.period,
  description: exp.description,
  accentColor: COMPANY_COLORS[exp.company] ?? "#22d3ee",
  icon: COMPANY_ICONS[exp.company],
  logoSrc: COMPANY_LOGOS[exp.company],
}));

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <GraphTimeline items={experienceNodes} />
    </Section>
  );
}
