
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import MobileSidebar from "./MobileSidebar";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Education",  href: "#education" },
  { name: "Contact",    href: "#contact" },
];

interface NavbarProps {
  onPlayGame?: () => void;
}

export default function Navbar({ onPlayGame }: Readonly<NavbarProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onPlayGame={onPlayGame} />

      <nav
        className="sticky top-0 z-30 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(2,11,24,0.92)" : "rgba(2,11,24,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(6,182,212,0.15)"
            : "1px solid rgba(6,182,212,0.06)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #818cf8)",
                  color: "#020b18",
                }}
              >
                OA
              </span>
              <span
                className="text-sm font-semibold tracking-wide hidden sm:block"
                style={{ color: "#f1f5f9", fontFamily: "Syne, Inter, sans-serif" }}
              >
                Obeid Allah Nouicer
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(6,182,212,0.07)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </a>
              ))}
              {/* Pixel Game button */}
              <button
                onClick={onPlayGame}
                className="ml-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                title="Play my life as a pixel adventure!"
                style={{
                  background: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.06))",
                  border: "1px solid rgba(251,191,36,0.35)",
                  color: "#fbbf24",
                  fontFamily: "monospace",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(251,191,36,0.22), rgba(251,191,36,0.12))";
                  e.currentTarget.style.boxShadow = "0 0 14px rgba(251,191,36,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.06))";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "13px" }}>▶</span> Play
              </button>

              <a
                href="#contact"
                className="ml-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(129,140,248,0.15))",
                  border: "1px solid rgba(6,182,212,0.3)",
                  color: "#22d3ee",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(6,182,212,0.25), rgba(129,140,248,0.25))";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 12px rgba(6,182,212,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(129,140,248,0.15))";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile hamburger — triggers sidebar */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#94a3b8" }}
              aria-label="Open navigation"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
