
import { LANGUAGES } from "../constants";
import Section from "./Section";

const languageFlags: Record<string, string> = {
  Arabic: "🇹🇳",
  French: "🇫🇷",
  English: "🇬🇧",
};

const languageLevelWidth: Record<string, string> = {
  Native: "100%",
  Fluent: "90%",
  "Professional": "75%",
  Intermediate: "55%",
};

export default function Languages() {
  return (
    <Section id="languages" title="Languages" subtitle="Communication capabilities">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {LANGUAGES.map((lang) => (
          <div
            key={lang.language}
            className="p-5 rounded-2xl flex flex-col gap-4"
            style={{
              background: 'rgba(10,22,40,0.7)',
              border: '1px solid rgba(6,182,212,0.1)',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{languageFlags[lang.language] ?? '🌐'}</span>
              <div>
                <h3 className="text-sm font-bold" style={{ color: '#f1f5f9' }}>{lang.language}</h3>
                <p className="text-xs mt-0.5" style={{ color: '#22d3ee' }}>{lang.level}</p>
              </div>
            </div>
            {/* Progress bar */}
            <div
              className="w-full rounded-full h-1.5 overflow-hidden"
              style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: languageLevelWidth[lang.level] ?? '70%',
                  background: 'linear-gradient(90deg, #06b6d4, #818cf8)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
