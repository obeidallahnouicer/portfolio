
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = "" }: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className={`py-12 ${className}`}
      style={{ borderBottom: '1px solid rgba(6,182,212,0.07)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {title && (
          <div className="mb-8">
            <div className="section-accent mb-3">
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#06b6d4' }}
              >
                {title}
              </span>
            </div>
            <h2
              className="text-3xl font-extrabold"
              style={{ fontFamily: 'Syne, Inter, sans-serif', color: '#f1f5f9' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm" style={{ color: '#64748b' }}>{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
