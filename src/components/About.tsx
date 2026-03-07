
import { Mail, Phone, MapPin } from "lucide-react";
import { GitHubSVG, LinkedInSVG } from "./BrandIcons";
import { PERSONAL_INFO } from "../constants";
import Section from "./Section";
import AboutAnimated from "./AboutAnimated";

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Who I am and what I do">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Main bio */}
        <div className="md:col-span-3">
          <AboutAnimated text={PERSONAL_INFO.about} />

          {/* Dual-role highlight pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["AI Engineer", "Financial Analyst", "LLM Developer", "RAG Architect", "Banking Professional"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.18)',
                  color: '#22d3ee',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <div
          className="md:col-span-2 rounded-2xl p-6 flex flex-col gap-5"
          style={{
            background: 'rgba(10,22,40,0.7)',
            border: '1px solid rgba(6,182,212,0.12)',
          }}
        >
          <h3
            className="text-xs font-semibold tracking-widest uppercase mb-1"
            style={{ color: '#22d3ee' }}
          >
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}
              >
                <Mail size={13} />
              </span>
              <div>
                <span className="block text-xs mb-0.5" style={{ color: '#475569' }}>Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm transition-colors"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}
              >
                <Phone size={13} />
              </span>
              <div>
                <span className="block text-xs mb-0.5" style={{ color: '#475569' }}>Phone</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm transition-colors"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 p-1.5 rounded-lg"
                style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee' }}
              >
                <MapPin size={13} />
              </span>
              <div>
                <span className="block text-xs mb-0.5" style={{ color: '#475569' }}>Location</span>
                <span className="text-sm" style={{ color: '#cbd5e1' }}>Tunis, Tunisia</span>
              </div>
            </li>
          </ul>

          {/* Social links */}
          <div
            className="flex gap-3 pt-4"
            style={{ borderTop: '1px solid rgba(6,182,212,0.08)' }}
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium flex-1 justify-center transition-all"
              style={{
                background: 'rgba(6,182,212,0.06)',
                border: '1px solid rgba(6,182,212,0.15)',
                color: '#94a3b8',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.15)';
              }}
            >
              <GitHubSVG size={14} /> GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium flex-1 justify-center transition-all"
              style={{
                background: 'rgba(6,182,212,0.06)',
                border: '1px solid rgba(6,182,212,0.15)',
                color: '#94a3b8',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.35)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.15)';
              }}
            >
              <LinkedInSVG size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
