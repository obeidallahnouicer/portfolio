import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Home, User, Briefcase, GraduationCap, Cpu, Mail } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",       href: "#hero",       icon: Home },
  { label: "About",      href: "#about",      icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education",  href: "#education",  icon: GraduationCap },
  { label: "Skills",     href: "#skills",     icon: Cpu },
  { label: "Projects",   href: "#projects",   icon: Briefcase },
  { label: "Contact",    href: "#contact",    icon: Mail },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayGame?: () => void;
}

export default function MobileSidebar({ isOpen, onClose, onPlayGame }: Readonly<MobileSidebarProps>) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="sidebar-backdrop"
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "rgba(2,11,24,0.7)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar panel */}
          <motion.aside
            key="sidebar-panel"
            className="fixed top-0 left-0 bottom-0 z-50 w-72 flex flex-col md:hidden"
            style={{
              background: "rgba(5,15,31,0.98)",
              borderRight: "1px solid rgba(6,182,212,0.15)",
              boxShadow: "8px 0 40px rgba(0,0,0,0.6)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 h-16 flex-shrink-0"
              style={{ borderBottom: "1px solid rgba(6,182,212,0.08)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #818cf8)", color: "#020b18" }}
                >
                  OA
                </span>
                <span className="text-sm font-semibold" style={{ color: "#f1f5f9", fontFamily: "Syne, Inter, sans-serif" }}>
                  Obeid Allah
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#64748b" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
                onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-6 px-4">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.28 }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group"
                        style={{ color: "#94a3b8" }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee";
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(6,182,212,0.07)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
                          (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                        }}
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                          style={{ background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.1)" }}
                        >
                          <Icon size={15} />
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div
              className="px-5 py-5 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(6,182,212,0.08)" }}
            >
              {/* Pixel Game CTA */}
              <button
                onClick={() => { onClose(); onPlayGame?.(); }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold mb-4 transition-all duration-200 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.05))",
                  border: "1px solid rgba(251,191,36,0.3)",
                  color: "#fbbf24",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                }}
              >
                <span>▶</span> Play My Life Adventure
              </button>

              <p className="text-xs" style={{ color: "#334155" }}>
                AI Engineer &amp; Financial Analyst
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#1e3a5f" }}>
                Tunis, Tunisia
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
