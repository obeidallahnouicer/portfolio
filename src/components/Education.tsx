
import { EDUCATION } from "../constants";
import Section from "./Section";
import GraphTimeline from "./GraphTimeline";
import { type TimelineNodeData } from "./TimelineNode";
import { assetUrl } from "../utils";

const SCHOOL_COLORS: Record<string, string> = {
  "ESPRIT": "#818cf8",
  "IHEC Carthage": "#34d399",
};

const SCHOOL_LOGOS: Record<string, string> = {
  "ESPRIT": assetUrl("/images/universities/esprit.png"),
  "IHEC Carthage": assetUrl("/images/universities/ihec-carthage.png"),
};

const SCHOOL_ICONS: Record<string, string> = {
  "ESPRIT": "🎓",
  "IHEC Carthage": "📊",
};

const educationNodes: TimelineNodeData[] = EDUCATION.map(edu => ({
  title: edu.degree,
  subtitle: edu.institution,
  period: edu.period,
  description: edu.details ? [edu.details] : undefined,
  accentColor: SCHOOL_COLORS[edu.institution] ?? "#22d3ee",
  icon: SCHOOL_ICONS[edu.institution],
  logoSrc: SCHOOL_LOGOS[edu.institution],
}));

export default function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background">
      <GraphTimeline items={educationNodes} />
    </Section>
  );
}
