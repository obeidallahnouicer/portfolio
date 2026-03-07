
import { PERSONAL_INFO } from "../constants";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubSVG, LinkedInSVG } from "./BrandIcons";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden py-20"
      style={{ borderTop: '1px solid rgba(6,182,212,0.1)' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.06) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Top CTA */}
        <div className="text-center mb-16">
          <div className="section-accent justify-center mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: '#06b6d4' }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: 'Syne, Inter, sans-serif', color: '#f1f5f9' }}
          >
            Let's Build Something{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p
            className="text-base max-w-md mx-auto mb-8 leading-relaxed"
            style={{ color: '#64748b' }}
          >
            Interested in collaborating on AI systems, fintech solutions, or just want to connect?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #818cf8)',
                color: '#020b18',
                boxShadow: '0 0 24px rgba(6,182,212,0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 36px rgba(6,182,212,0.5)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(6,182,212,0.3)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <Mail size={16} />
              Email Me
              <ArrowUpRight size={14} />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(10,22,40,0.8)',
                border: '1px solid rgba(6,182,212,0.2)',
                color: '#94a3b8',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.2)';
              }}
            >
              <GitHubSVG size={16} />
              View GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Name + tagline */}
          <div>
            <span
              className="text-sm font-bold block"
              style={{ color: '#f1f5f9', fontFamily: 'Syne, Inter, sans-serif' }}
            >
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs" style={{ color: '#475569' }}>
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Nav links */}
          <div className="flex gap-5">
            {["#about", "#experience", "#skills", "#projects", "#education"].map((href) => (
              <a
                key={href}
                href={href}
                className="text-xs capitalize transition-colors"
                style={{ color: '#475569' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg transition-all"
              title="Email"
              style={{ color: '#475569', border: '1px solid rgba(6,182,212,0.08)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.08)';
              }}
            >
              <Mail size={15} />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all"
              title="GitHub"
              style={{ color: '#475569', border: '1px solid rgba(6,182,212,0.08)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.08)';
              }}
            >
              <GitHubSVG size={15} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all"
              title="LinkedIn"
              style={{ color: '#475569', border: '1px solid rgba(6,182,212,0.08)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#22d3ee';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(6,182,212,0.08)';
              }}
            >
              <LinkedInSVG size={15} />
            </a>
          </div>
        </div>

        <p className="text-center text-xs mt-8" style={{ color: '#334155' }}>
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
