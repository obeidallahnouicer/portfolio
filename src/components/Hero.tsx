import { ArrowRight, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { GitHubSVG, LinkedInSVG } from "./BrandIcons";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import HeroAnimation from "./HeroAnimation";

const stats = [
  { value: "3+", label: "Years AI Experience" },
  { value: "5+", label: "Enterprise Projects" },
  { value: "GPA 3.9", label: "Academic Excellence" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-16 overflow-hidden"
      style={{ borderBottom: "1px solid rgba(6,182,212,0.1)" }}
    >
      <HeroAnimation />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
        aria-hidden="true"
      />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div className="flex justify-center mb-7" variants={fadeUp}>
          <div className="relative float">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-2 rounded-2xl opacity-50 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.35) 0%, transparent 70%)", filter: "blur(10px)" }}
            />
            <div className="w-24 h-24 rounded-2xl overflow-hidden glow-cyan relative" style={{ border: "2px solid rgba(6,182,212,0.4)" }}>
              <img
                src="/images/avatar/photo.jpg"
                alt="Obeid Allah Nouicer"
                className="w-full h-full object-cover"
                onError={e => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent && !parent.querySelector(".avatar-fallback")) {
                    const fb = document.createElement("div");
                    fb.className = "avatar-fallback w-full h-full flex items-center justify-center text-3xl font-black";
                    fb.style.cssText = "background:linear-gradient(135deg,#06b6d4,#818cf8);color:#020b18;font-family:Syne,sans-serif;";
                    fb.textContent = "O";
                    parent.appendChild(fb);
                  }
                }}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 pulse-dot" style={{ backgroundColor: "#22d3ee", borderColor: "#020b18" }} />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div className="flex justify-center mb-5" variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
            style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(129,140,248,0.12))", border: "1px solid rgba(6,182,212,0.25)", color: "#22d3ee" }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: "#22d3ee" }} />
            {PERSONAL_INFO.title}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-none tracking-tight"
          style={{ fontFamily: "Syne, Inter, sans-serif", color: "#f1f5f9" }}
          variants={fadeUp}
        >
          {PERSONAL_INFO.name.split(" ").map((word) =>
            word === "OBEID" ? (
              <span key={word} className="text-gradient">{word} </span>
            ) : (
              <span key={word}>{word} </span>
            )
          )}
        </motion.h1>

        {/* Tagline */}
        <motion.p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "#94a3b8" }} variants={fadeUp}>
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Chips */}
        <motion.div className="flex flex-wrap items-center justify-center gap-3 mb-10" variants={fadeUp}>
          {[
            { icon: <MapPin size={11} style={{ color: "#22d3ee" }} />, label: "Tunis, Tunisia", href: undefined },
            { icon: <Mail size={11} style={{ color: "#22d3ee" }} />, label: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
            { icon: <Phone size={11} style={{ color: "#22d3ee" }} />, label: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
          ].map(({ icon, label, href }) =>
            href ? (
              <a key={label} href={href}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors"
                style={{ backgroundColor: "rgba(15,31,56,0.8)", border: "1px solid rgba(6,182,212,0.12)", color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
              >{icon}{label}</a>
            ) : (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                style={{ backgroundColor: "rgba(15,31,56,0.8)", border: "1px solid rgba(6,182,212,0.12)", color: "#94a3b8" }}
              >{icon}{label}</span>
            )
          )}
        </motion.div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" variants={fadeUp}>
          <a href="#contact"
            className="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #06b6d4, #818cf8)", color: "#020b18", boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px rgba(6,182,212,0.5)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(6,182,212,0.3)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
          >
            Get in Touch <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <div className="flex items-center gap-2">
            {[
              { href: PERSONAL_INFO.github, icon: <GitHubSVG size={18} />, label: "GitHub", external: true },
              { href: PERSONAL_INFO.linkedin, icon: <LinkedInSVG size={18} />, label: "LinkedIn", external: true },
              { href: `mailto:${PERSONAL_INFO.email}`, icon: <Mail size={18} />, label: "Email", external: false },
            ].map(({ href, icon, label, external }) => (
              <a key={label} href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="p-3 rounded-xl transition-all duration-200" title={label}
                style={{ backgroundColor: "rgba(10,22,40,0.8)", border: "1px solid rgba(6,182,212,0.15)", color: "#94a3b8" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#22d3ee"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.4)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 12px rgba(6,182,212,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.15)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
              >{icon}</a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="inline-grid grid-cols-3 rounded-2xl overflow-hidden"
          style={{ backgroundColor: "rgba(10,22,40,0.6)", border: "1px solid rgba(6,182,212,0.12)" }}
          variants={fadeUp}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="px-8 py-4 text-center"
              style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(6,182,212,0.1)" : "none" }}
            >
              <div className="text-2xl font-bold text-gradient-cyan mb-0.5" style={{ fontFamily: "Syne, Inter, sans-serif" }}>{stat.value}</div>
              <div className="text-xs" style={{ color: "#64748b" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#64748b", fontSize: "10px" }}>scroll</span>
        <ChevronDown size={14} style={{ color: "#22d3ee" }} className="animate-bounce" />
      </div>
    </section>
  );
}
