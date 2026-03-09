/**
 * PhaserGame.tsx — Chronological Life Story Platformer
 *
 * Player walks RIGHT through Obeid's life, chapter by chapter.
 * Approach a glowing milestone sign → Press E (or tap it) → story popup.
 * No forced progression — the player controls pacing completely.
 *
 * CHAPTERS  (horizontal world, ~8000px wide):
 *   CH0  START        – intro / controls
 *   CH1  IHEC 2020    – Bachelor Finance begins, campus life, books
 *   CH2  BANK INTERN  – Bank of Tunisia Jul–Aug 2023, coins & documents
 *   CH3  FINANCE SKILLS – credit, risk, money skills unlocked
 *   CH4  ESPRIT+JEMS  – Sep 2024 onwards: juggling Master's + AI job
 *   CH5  TECH ZONE    – Python snakes, Docker whales, LLMs
 *   CH6  STB BANK     – Jan 2026 Corporate Banking Officer
 *   CH7  CONTACT      – all the ways to reach Obeid
 */

import { useEffect, useRef } from "react";
import Phaser from "phaser";

// ─── Real data ───────────────────────────────────────────────
const NAME       = "OBEID ALLAH NOUICER";
const TITLE_LINE = "AI Engineer & Financial Analyst";
const EMAIL      = "onouicer@gmail.com";
const PHONE      = "+216 94 321 758";
const GITHUB     = "github.com/obeidallahnouicer";
const LINKEDIN   = "linkedin.com/in/obeid-nouicer";

// ─── World dimensions ────────────────────────────────────────
const GW = 480;
const GH = 560;
const CH_W = 960;          // width per chapter
const WORLD_W = CH_W * 8;  // 8 chapters
const FLOOR_Y = GH - 60;   // ground level (screen-space; world has same floor)

// ─── Chapter colour palettes ─────────────────────────────────
const CHAPTERS = [
  { label: "START",         sky1: 0x020b18, sky2: 0x0d1f3c, ground: 0x1e3a5f, accent: 0x06b6d4, trim: 0x0891b2 },
  { label: "IHEC  2020",    sky1: 0x0d1b3e, sky2: 0x1a2a5c, ground: 0x1e3a5f, accent: 0x818cf8, trim: 0x6366f1 },
  { label: "BANK INTERN",   sky1: 0x0a1a10, sky2: 0x0f2e18, ground: 0x14532d, accent: 0x34d399, trim: 0x10b981 },
  { label: "FINANCE SKILLS",sky1: 0x1a1200, sky2: 0x2d1e00, ground: 0x78350f, accent: 0xfbbf24, trim: 0xf59e0b },
  { label: "ESPRIT + JEMS", sky1: 0x14082a, sky2: 0x1e0e3a, ground: 0x4c1d95, accent: 0xc084fc, trim: 0xa855f7 },
  { label: "TECH ZONE",     sky1: 0x001a10, sky2: 0x002a18, ground: 0x052e16, accent: 0x4ade80, trim: 0x22c55e },
  { label: "STB BANK  2026",sky1: 0x1a0800, sky2: 0x2d1000, ground: 0x7c2d12, accent: 0xfb923c, trim: 0xf97316 },
  { label: "CONTACT",       sky1: 0x020b18, sky2: 0x0a1a28, ground: 0x0c4a6e, accent: 0x38bdf8, trim: 0x0ea5e9 },
];

// ─────────────────────────────────────────────────────────────
// MILESTONE DATA  (each is a sign the player walks up to & reads)
// ─────────────────────────────────────────────────────────────
type Milestone = {
  wx: number;       // world x position of sign
  icon: string;
  title: string;
  lines: string[];
  accent: number;
  wide?: boolean;   // wider popup
};

const MILESTONES: Milestone[] = [
  // CH0 – intro
  {
    wx: 140, icon: "🗺", title: "YOUR ADVENTURE BEGINS",
    lines: [
      "Walk RIGHT to travel through Obeid's life.",
      "Press  E  or  tap a glowing sign  to read",
      "each milestone. Take your time — nothing",
      "is skipped for you. You control the story."
    ],
    accent: 0x06b6d4,
  },
  {
    wx: 560, icon: "👤", title: NAME,
    lines: [
      TITLE_LINE,
      "",
      "\"I sit at the intersection of AI and Finance.",
      " Building production-ready systems that make",
      " banking smarter, faster, and safer.\""
    ],
    accent: 0x818cf8,
  },

  // CH1 – IHEC
  {
    wx: CH_W * 1 + 160, icon: "🎓", title: "IHEC CARTHAGE — Sep 2020",
    lines: [
      "Bachelor's in Finance begins.",
      "Focus: corporate finance, credit risk,",
      "financial modelling, economic theory.",
      "",
      "4 years of building the analytical",
      "foundation for everything to come."
    ],
    accent: 0x818cf8,
  },
  {
    wx: CH_W * 1 + 520, icon: "📚", title: "FINANCE COURSEWORK",
    lines: [
      "◆ Corporate Finance & Valuation",
      "◆ Financial Accounting & Reporting",
      "◆ Econometrics & Statistics",
      "◆ Credit Risk & Portfolio Theory",
      "◆ Capital Markets & Derivatives",
      "",
      "Every lecture = a building block."
    ],
    accent: 0x818cf8,
  },
  {
    wx: CH_W * 1 + 800, icon: "📊", title: "SKILLS EMERGING",
    lines: [
      "Excel modelling, financial statements,",
      "ratio analysis, DCF valuations.",
      "",
      "Learning to read companies like books —",
      "their numbers tell stories."
    ],
    accent: 0xa78bfa,
  },

  // CH2 – Bank Intern
  {
    wx: CH_W * 2 + 160, icon: "🏦", title: "BANK OF TUNISIA — Jul 2023",
    lines: [
      "First real banking experience.",
      "Summer internship: Jul – Aug 2023.",
      "",
      "Role: Banking Intern",
      "Supported credit documentation",
      "and client onboarding processes."
    ],
    accent: 0x34d399,
  },
  {
    wx: CH_W * 2 + 460, icon: "📄", title: "WHAT I DID INSIDE",
    lines: [
      "◆ Credit documentation review",
      "◆ Client onboarding & KYC support",
      "◆ Financial statement analysis",
      "  for loan applications",
      "",
      "First taste of how real money moves."
    ],
    accent: 0x34d399,
    wide: true,
  },
  {
    wx: CH_W * 2 + 760, icon: "💡", title: "THE REALISATION",
    lines: [
      "Banks run on data — but slow data.",
      "Everything manual. Everything paper.",
      "",
      "\"What if we could automate this with AI?\"",
      "",
      "That question changed everything."
    ],
    accent: 0xfbbf24,
  },

  // CH3 – Finance skills
  {
    wx: CH_W * 3 + 120, icon: "💰", title: "FINANCE TOOLKIT UNLOCKED",
    lines: [
      "By graduation (2024), mastered:",
      "",
      "◆ Credit Analysis & Risk Assessment",
      "◆ Financial Statement Evaluation",
      "◆ Corporate Lending Principles",
      "◆ Retail Banking Operations",
      "◆ Portfolio Risk Management"
    ],
    accent: 0xfbbf24,
    wide: true,
  },
 
  {
    wx: CH_W * 3 + 800, icon: "🏆", title: "IHEC GRADUATION — 2024",
    lines: [
      "Bachelor's in Finance — COMPLETED.",
      "",
      "But the plan was already in motion:",
      "enrol in a Master's AND start an AI",
      "consulting job at the same time.",
      "",
      "Level up: HARD MODE unlocked. 🔥"
    ],
    accent: 0xfbbf24,
  },

  // CH4 – ESPRIT + JEMS parallel
  {
    wx: CH_W * 4 + 120, icon: "⚡", title: "JUGGLING TWO WORLDS — Sep 2024",
    lines: [
      "Simultaneously:",
      "",
      "🎓 ESPRIT – Master's in Business",
      "   Analytics & Generative AI",
      "",
      "💼 JEMS – Generative AI Consultant",
      "   (Sep 2024 – Dec 2025)",
      "",
      "Morning: Production AI. Evening: Coursework. Weekends: Both. 😄"
    ],
    accent: 0xc084fc,
    wide: true,
  },
  {
    wx: CH_W * 4 + 420, icon: "🎓", title: "ESPRIT — MASTER'S PROGRAMME",
    lines: [
      "Master's in Business Analytics",
      "& Generative AI",
      "",
      "Specialisations:",
      "◆ Large Language Models (LLMs)",
      "◆ RAG Architectures",
      "◆ Prompt Engineering",
      "◆ ML for Business Decision-Making"
    ],
    accent: 0xc084fc,
    wide: true,
  },
  {
    wx: CH_W * 4 + 720, icon: "💼", title: "JEMS — AI CONSULTANT",
    lines: [
      "Sep 2024 – Dec 2025",
      "",
      "◆ Production LLM apps + guardrails",
      "◆ AI recruitment: semantic CV match",
      "◆ Visual web generator (NLP→HTML)",
      "◆ Text-to-SQL chatbot (LangGraph)",
      "◆ CI/CD: GitLab · Docker · Azure"
    ],
    accent: 0xa855f7,
    wide: true,
  },

  // CH5 – Tech zone
  {
    wx: CH_W * 5 + 120, icon: "🐍", title: "PYTHON — THE MAIN WEAPON",
    lines: [
      "Python became the core language.",
      "",
      "◆ LangChain & LangGraph pipelines",
      "◆ FastAPI & Flask microservices",
      "◆ PostgreSQL + pgvector (embeddings)",
      "◆ NumPy / Pandas / Scikit-learn",
      "",
      "If it touches AI, it's Python first."
    ],
    accent: 0x4ade80,
    wide: true,
  },
  {
    wx: CH_W * 5 + 420, icon: "🐳", title: "DOCKER & DEVOPS",
    lines: [
      "Every AI system needs a home.",
      "",
      "◆ Docker — containerise everything",
      "◆ GitLab CI/CD — automate pipelines",
      "◆ Azure — cloud deployments",
      "◆ Guardrail engineering in prod",
      "",
      "Build once. Ship anywhere."
    ],
    accent: 0x38bdf8,
    wide: true,
  },
  {
    wx: CH_W * 5 + 700, icon: "🤖", title: "AI PROJECTS SHIPPED",
    lines: [
      "EduAI – personalised learning platform",
      "Resume Optimizer – semantic CV enhancer",
      "Text-to-SQL chatbot – LangGraph",
      "AI Recruitment engine – semantic match",
      "Visual web generator – NLP→HTML/CSS",
      "",
      "All production. All real users."
    ],
    accent: 0x4ade80,
    wide: true,
  },

  // CH6 – STB Bank
  {
    wx: CH_W * 6 + 120, icon: "🏛", title: "STB BANK — Jan 2026",
    lines: [
      "Corporate Banking Officer",
      "Société Tunisienne de Banque",
      "",
      "All those years of finance +",
      "all that AI expertise =",
      "one very unusual banker. 😄"
    ],
    accent: 0xfb923c,
  },
  {
    wx: CH_W * 6 + 420, icon: "💳", title: "WHAT I DO DAILY",
    lines: [
      "◆ Credit analysis & risk assessment",
      "  for corporate clients",
      "◆ Financial statement evaluation",
      "  for lending decisions",
      "◆ Managed corporate & retail",
      "  lending portfolios",
      "",
      "Finance + AI brain. Rare combo."
    ],
    accent: 0xfb923c,
    wide: true,
  },
  {
    wx: CH_W * 6 + 720, icon: "📋", title: "THE VISION",
    lines: [
      "Automate credit risk with LLMs.",
      "Build AI that reads financial",
      "statements better than humans.",
      "",
      "RAG over loan histories.",
      "Agentic credit scoring systems.",
      "",
      "The future of banking is AI-native."
    ],
    accent: 0xf97316,
    wide: true,
  },

  // CH7 – Contact
  {
    wx: CH_W * 7 + 160, icon: "✉", title: "LET'S CONNECT",
    lines: [
      EMAIL,
      PHONE,
      "",
      GITHUB,
      LINKEDIN,
      "",
      "Always open to interesting problems."
    ],
    accent: 0x38bdf8,
    wide: true,
  },
  {
    wx: CH_W * 7 + 560, icon: "🎮", title: "THANKS FOR PLAYING!",
    lines: [
      "You just walked through",
      "4 years of finance, 2 years of AI,",
      "and a career that bridges both.",
      "",
      `\"${NAME}\"`,
      "",
      "Press PLAY AGAIN to restart. ★"
    ],
    accent: 0x06b6d4,
    wide: true,
  },
];

// ─────────────────────────────────────────────────────────────
// PIXEL ART HELPERS
// ─────────────────────────────────────────────────────────────

/** Draw a Mario-style character. px/py = top-left, S = pixel scale */
/**
 * drawPlayer — pixel-art Obeid avatar
 *
 * Visual reference: public/images/avatar/photo.jpg
 *   Hair  : near-black dark brown  (#1c1c23)
 *   Skin  : warm medium-brown      (#c8956c)
 *   Shirt : dark navy suit         (#1e2a3a)  (professional banking photo)
 *   Tie   : amber / gold           (#d4a017)
 *   Stubble: dark shadow under jaw (#5c3a2a)
 *   Eyes  : very dark brown        (#1a0e0a)
 *
 * Character is 16×20 pixels × S scale.
 * px / py = top-left corner of the bounding box.
 */
function drawPlayer(
  g: Phaser.GameObjects.Graphics,
  px: number, py: number, S: number,
  frame: number, dir: number, air: boolean
) {
  // ── colours ────────────────────────────────────────────────
  const SKIN    = 0xc8956c;   // warm medium-brown skin
  const SKIN_SH = 0xa8724e;   // shadow / neck
  const HAIR    = 0x1c1c23;   // near-black hair
  const EYE     = 0x1a0e0a;   // very dark eye
  const STUBBLE = 0x5c3a2a;   // short beard stubble strip
  const SUIT    = 0x1e2a3a;   // dark navy suit jacket
  const SUIT_SH = 0x111824;   // suit shadow / lapel
  const SHIRT_W = 0xdde8f0;   // white dress-shirt visible at collar
  const TIE     = 0xd4a017;   // gold tie
  const TROUSER = 0x16202e;   // dark trousers
  const SHOE    = 0x0d0d0d;   // black leather shoes

  // ── ground shadow ──────────────────────────────────────────
  g.fillStyle(0x000000, 0.15);
  g.fillEllipse(px + 8 * S, py + 20 * S, 16 * S, 3 * S);

  // ── HAIR (top of head, slightly taller on left = natural part) ──
  g.fillStyle(HAIR, 1);
  g.fillRect(px + 3 * S, py - S,       10 * S, 3 * S);   // top hair mass
  g.fillRect(px + 2 * S, py,            2 * S, 2 * S);   // left side-burn
  g.fillRect(px + 12 * S, py,           2 * S, 2 * S);   // right side-burn
  // slight natural part highlight
  g.fillStyle(0x2e2e3a, 1);
  g.fillRect(px + 7 * S, py - S,        2 * S, S);

  // ── HEAD / FACE ────────────────────────────────────────────
  g.fillStyle(SKIN, 1);
  g.fillRect(px + 3 * S, py + 1 * S,   10 * S, 6 * S);  // main face
  // ear (facing side)
  const earX = dir > 0 ? px + 13 * S : px + 2 * S;
  g.fillStyle(SKIN_SH, 1);
  g.fillRect(earX, py + 3 * S, S, 2 * S);

  // ── EYES (dark brown, expressive) ─────────────────────────
  // front eye closer to nose, back eye further
  const eyeFront = dir > 0 ? px + 8 * S : px + 4 * S;
  const eyeBack  = dir > 0 ? px + 5 * S : px + 9 * S;
  g.fillStyle(EYE, 1);
  g.fillRect(eyeFront, py + 3 * S, 2 * S, 2 * S);   // front eye (bigger)
  g.fillRect(eyeBack,  py + 3 * S, S,     2 * S);   // back eye (foreshortened)
  // small white highlight
  g.fillStyle(0xffffff, 0.8);
  g.fillRect(eyeFront + S, py + 3 * S, S, S);

  // ── STUBBLE / BEARD shadow (clean short beard) ────────────
  g.fillStyle(STUBBLE, 0.7);
  g.fillRect(px + 3 * S, py + 5 * S,   10 * S, 2 * S);  // jaw stubble strip
  // thin moustache line
  g.fillStyle(STUBBLE, 0.9);
  g.fillRect(px + 5 * S, py + 4 * S,   6 * S,  S);      // moustache

  // ── COLLAR / SHIRT ─────────────────────────────────────────
  g.fillStyle(SHIRT_W, 1);
  g.fillRect(px + 6 * S,  py + 7 * S,  4 * S, 2 * S);   // white collar centre
  // V-neck collar points
  g.fillRect(px + 5 * S,  py + 7 * S,  S,     S);
  g.fillRect(px + 10 * S, py + 7 * S,  S,     S);

  // ── TIE ────────────────────────────────────────────────────
  g.fillStyle(TIE, 1);
  g.fillRect(px + 7 * S,  py + 8 * S,  2 * S, 4 * S);   // tie body
  g.fillRect(px + 7 * S,  py + 12 * S, 2 * S, S);        // tie tip wider
  g.fillStyle(0xb8860b, 1);                               // tie shadow stripe
  g.fillRect(px + 8 * S,  py + 8 * S,  S,     4 * S);

  // ── SUIT JACKET ────────────────────────────────────────────
  g.fillStyle(SUIT, 1);
  g.fillRect(px + 3 * S,  py + 7 * S,  10 * S, 6 * S);  // jacket body
  // lapels
  g.fillStyle(SUIT_SH, 1);
  g.fillRect(px + 3 * S,  py + 7 * S,  3 * S,  5 * S);  // left lapel
  g.fillRect(px + 10 * S, py + 7 * S,  3 * S,  5 * S);  // right lapel
  // pocket square (tiny white on left breast)
  g.fillStyle(0xffffff, 0.8);
  g.fillRect(px + 4 * S,  py + 8 * S,  2 * S,  S);

  // ── ARMS — swing with walk cycle ──────────────────────────
  const aSw = frame % 2 === 0 ? 0 : S;
  // suit sleeves
  g.fillStyle(SUIT, 1);
  g.fillRect(px + S,       py + 7 * S + aSw,  2 * S, 5 * S);
  g.fillRect(px + 13 * S,  py + 7 * S - aSw,  2 * S, 5 * S);
  // hands (skin)
  g.fillStyle(SKIN, 1);
  g.fillRect(px + S,       py + 12 * S + aSw, 2 * S, 2 * S);
  g.fillRect(px + 13 * S,  py + 12 * S - aSw, 2 * S, 2 * S);

  // ── LEGS — trousers ────────────────────────────────────────
  if (air) {
    // jump: legs tucked
    g.fillStyle(TROUSER, 1);
    g.fillRect(px + 4 * S, py + 13 * S, 3 * S, 4 * S);
    g.fillRect(px + 9 * S, py + 13 * S, 3 * S, 4 * S);
    g.fillStyle(SHOE, 1);
    g.fillRect(px + 3 * S,  py + 16 * S, 4 * S, 2 * S);
    g.fillRect(px + 9 * S,  py + 16 * S, 4 * S, 2 * S);
  } else {
    const strides: [number, number][] = [[0,0],[S,-S],[0,0],[-S,S]];
    const [l1, l2] = strides[frame % 4];
    g.fillStyle(TROUSER, 1);
    g.fillRect(px + 4 * S, py + 13 * S + l1, 3 * S, 5 * S - l1);
    g.fillRect(px + 9 * S, py + 13 * S + l2, 3 * S, 5 * S - l2);
    // trouser crease highlight
    g.fillStyle(0x253040, 1);
    g.fillRect(px + 5 * S, py + 13 * S + l1, S, 4 * S - l1);
    g.fillRect(px + 10 * S,py + 13 * S + l2, S, 4 * S - l2);
    // shoes
    g.fillStyle(SHOE, 1);
    g.fillRect(px + 3 * S, py + 17 * S + l1, 5 * S, 2 * S);
    g.fillRect(px + 9 * S, py + 17 * S + l2, 5 * S, 2 * S);
    // shoe shine highlight
    g.fillStyle(0x333333, 1);
    g.fillRect(px + 4 * S, py + 17 * S + l1, 2 * S, S);
    g.fillRect(px + 10 * S,py + 17 * S + l2, 2 * S, S);
  }
}

/** Draw a glowing interactive sign post */
function drawSign(
  g: Phaser.GameObjects.Graphics,
  wx: number, wy: number,
  icon: string, accent: number,
  nearbyScene: Phaser.Scene
) {
  // post
  g.fillStyle(0x64748b, 1);
  g.fillRect(wx + 14, wy + 30, 4, 28);
  // board
  g.fillStyle(0x0f172a, 1);      g.fillRect(wx, wy, 32, 30);
  g.lineStyle(2, accent, 0.9);   g.strokeRect(wx, wy, 32, 30);
  // pulse glow
  g.fillStyle(accent, 0.08);     g.fillRect(wx - 4, wy - 4, 40, 38);
  // icon text
  nearbyScene.add.text(wx + 16, wy + 15, icon, {
    fontSize: "14px", fontFamily: "serif",
  }).setOrigin(0.5).setDepth(6);
}

/** Draw a simple coin (finance zones) */
function drawCoin(g: Phaser.GameObjects.Graphics, x: number, y: number, col = 0xfbbf24) {
  g.fillStyle(col, 1);           g.fillCircle(x, y, 7);
  g.fillStyle(0xfef3c7, 0.6);    g.fillCircle(x - 2, y - 2, 3);
  g.fillStyle(0x92400e, 0.3);    g.fillCircle(x + 2, y + 2, 2);
}

/** Draw a book (education zone) */
function drawBook(g: Phaser.GameObjects.Graphics, x: number, y: number, col: number) {
  g.fillStyle(col, 1);           g.fillRect(x, y, 18, 24);
  g.fillStyle(0xffffff, 0.15);   g.fillRect(x + 2, y, 2, 24);
  g.fillStyle(0x000000, 0.25);   g.fillRect(x, y, 18, 2);
  g.fillStyle(0xffffff, 0.6);
  g.fillRect(x + 5, y + 6, 8, 1); g.fillRect(x + 5, y + 9, 6, 1);
  g.fillRect(x + 5, y + 12, 8, 1);
}

/** Draw a document/paper */
function drawDoc(g: Phaser.GameObjects.Graphics, x: number, y: number) {
  g.fillStyle(0xf1f5f9, 1);      g.fillRect(x, y, 20, 26);
  g.fillStyle(0x0f172a, 0.4);
  for (let i = 0; i < 4; i++) g.fillRect(x + 3, y + 5 + i * 5, 14, 1);
  g.fillStyle(0x34d399, 0.7);    g.fillRect(x + 3, y + 22, 8, 2);
}

/** Draw a snake (Python) */
function drawSnake(g: Phaser.GameObjects.Graphics, x: number, y: number) {
  const segs = [[x, y],[x+8,y-4],[x+16,y],[x+24,y-4],[x+32,y],[x+40,y+4]];
  segs.forEach(([sx, sy], i) => {
    g.fillStyle(i === 0 ? 0x15803d : 0x16a34a, 1);
    g.fillCircle(sx, sy, i === 0 ? 7 : 5);
  });
  // eyes
  g.fillStyle(0xfbbf24, 1); g.fillCircle(x - 3, y - 3, 2); g.fillCircle(x + 3, y - 3, 2);
  g.fillStyle(0x000000, 1); g.fillCircle(x - 3, y - 3, 1); g.fillCircle(x + 3, y - 3, 1);
}

/** Draw a Docker whale */
function drawWhale(g: Phaser.GameObjects.Graphics, x: number, y: number) {
  // body
  g.fillStyle(0x0ea5e9, 1);
  g.fillEllipse(x + 22, y + 16, 48, 28);
  // tail
  g.fillStyle(0x0284c7, 1);
  g.fillTriangle(x, y + 18, x - 10, y + 8, x - 10, y + 28);
  // containers on back
  [[x+8,y+4],[x+20,y+2],[x+32,y+4]].forEach(([cx2,cy2]) => {
    g.fillStyle(0xffffff, 0.9); g.fillRect(cx2, cy2, 10, 8);
    g.lineStyle(1, 0x0ea5e9, 0.5); g.strokeRect(cx2, cy2, 10, 8);
  });
  // eye
  g.fillStyle(0xffffff, 1); g.fillCircle(x + 38, y + 14, 4);
  g.fillStyle(0x0f172a, 1); g.fillCircle(x + 39, y + 14, 2);
  // water spout
  g.fillStyle(0x7dd3fc, 0.5);
  g.fillRect(x + 34, y - 8, 3, 10); g.fillRect(x + 30, y - 4, 3, 6);
}

/** Draw a loan/credit document stack */
function drawLoanDoc(g: Phaser.GameObjects.Graphics, x: number, y: number) {
  // stack
  for (let i = 2; i >= 0; i--) {
    g.fillStyle(i === 0 ? 0xfef3c7 : 0xf1f5f9, 1);
    g.fillRect(x + i * 3, y + i * 3, 26, 34);
    g.lineStyle(1, 0xfb923c, 0.4); g.strokeRect(x + i * 3, y + i * 3, 26, 34);
  }
  // APPROVED stamp
  g.fillStyle(0x16a34a, 0.7); g.fillRect(x + 3, y + 12, 20, 8);
  g.fillStyle(0xffffff, 1);
  // "✓"
  g.fillRect(x + 6, y + 16, 2, 2); g.fillRect(x + 9, y + 18, 2, 2);
  g.fillRect(x + 12, y + 15, 2, 4); g.fillRect(x + 15, y + 13, 2, 6);
}

// ─────────────────────────────────────────────────────────────
// TITLE SCENE
// ─────────────────────────────────────────────────────────────
class TitleScene extends Phaser.Scene {
  constructor() { super({ key: "TitleScene" }); }

  create() {
    const cx = GW / 2;
    const bg = this.add.graphics();
    // sky gradient bands
    [[0, 0x020b18],[140,0x0a1628],[300,0x0d1f3c],[450,0x0a2840]].forEach(([y, c]: number[], i, arr) => {
      const ny = i + 1 < arr.length ? arr[i+1][0] : GH;
      bg.fillStyle(c, 1); bg.fillRect(0, y, GW, ny - y);
    });
    // stars
    const rng = new Phaser.Math.RandomDataGenerator(["ts42"]);
    for (let i = 0; i < 100; i++) {
      bg.fillStyle(0xffffff, rng.realInRange(0.08, 0.6));
      bg.fillRect(rng.integerInRange(0,GW), rng.integerInRange(0,GH-100), rng.integerInRange(1,2), rng.integerInRange(1,2));
    }
    // ground
    bg.fillStyle(0x16a34a,1); bg.fillRect(0,GH-52,GW,20);
    bg.fillStyle(0x166534,1); bg.fillRect(0,GH-32,GW,32);
    [60,140,220,300,380].forEach((bx,i) => {
      bg.fillStyle(i%2===0?0xd97706:0xb45309,1); bg.fillRect(bx,GH-110-(i%2)*36,28,28);
      bg.fillStyle(0xfbbf24,1);                  bg.fillRect(bx+10,GH-100-(i%2)*36,8,8);
    });

    // card
    const bx=28,bw=GW-56,by=46,bh=320;
    const card=this.add.graphics();
    card.fillStyle(0x020b18,0.93); card.fillRect(bx,by,bw,bh);
    card.lineStyle(2,0x06b6d4,1); card.strokeRect(bx,by,bw,bh);
    [[bx,by],[bx+bw-3,by],[bx,by+bh-3],[bx+bw-3,by+bh-3]].forEach(([x,y])=>{
      card.fillStyle(0x06b6d4,1); card.fillRect(x,y,3,10); card.fillRect(x,y,10,3);
    });

    this.add.text(cx, 72, "◆  PIXEL LIFE  ◆", { fontFamily:"monospace", fontSize:"20px", color:"#06b6d4", letterSpacing:4 }).setOrigin(0.5);
    this.add.text(cx, 108, NAME, { fontFamily:"monospace", fontSize:"12px", color:"#ffffff", letterSpacing:1, wordWrap:{width:bw-30} }).setOrigin(0.5);
    this.add.text(cx, 130, TITLE_LINE, { fontFamily:"monospace", fontSize:"9px", color:"#818cf8" }).setOrigin(0.5);

    const dv=this.add.graphics(); dv.fillStyle(0x06b6d4,0.3); dv.fillRect(55,148,GW-110,1);

    this.add.text(cx, 162, "Walk through a life. Read every milestone.", { fontFamily:"monospace", fontSize:"9px", color:"#94a3b8", wordWrap:{width:bw-30} }).setOrigin(0.5);

    [["← → / A D","walk"],["↑ / W / SPACE","jump"],["E  or  tap sign","read milestone"]].forEach(([k,v],i)=>{
      const row=184+i*22;
      this.add.text(cx-6, row, k,       { fontFamily:"monospace", fontSize:"9px", color:"#fbbf24" }).setOrigin(1,0.5);
      this.add.text(cx+6, row, "→  "+v, { fontFamily:"monospace", fontSize:"9px", color:"#94a3b8" }).setOrigin(0,0.5);
    });

    // character preview (Obeid in a suit)
    const pg=this.add.graphics();
    drawPlayer(pg,cx-16,252,2,0,1,false);
    this.tweens.add({targets:pg,y:-6,duration:700,yoyo:true,repeat:-1,ease:"Sine.easeInOut"});

    // chapter chips
    ["IHEC","INTERN","SKILLS","ESPRIT+JEMS","TECH","STB BANK","CONTACT"].forEach((l,i)=>{
      const col=CHAPTERS[i+1].accent;
      const chip=this.add.graphics();
      const cx2=24+i*64, cw=58;
      chip.fillStyle(col,0.1); chip.fillRoundedRect(cx2,320,cw,18,4);
      chip.lineStyle(1,col,0.4); chip.strokeRoundedRect(cx2,320,cw,18,4);
      this.add.text(cx2+cw/2,329,l,{fontFamily:"monospace",fontSize:"6px",color:"#"+col.toString(16).padStart(6,"0")}).setOrigin(0.5);
    });

    const blink=this.add.text(cx,GH-90,"▶  PRESS ANY KEY OR CLICK  ◀",{fontFamily:"monospace",fontSize:"11px",color:"#fbbf24",letterSpacing:1}).setOrigin(0.5);
    this.tweens.add({targets:blink,alpha:0.1,duration:500,yoyo:true,repeat:-1});
    this.add.text(cx,GH-64,"Walk RIGHT to travel through time →",{fontFamily:"monospace",fontSize:"8px",color:"#334155"}).setOrigin(0.5);

    const go=()=>{this.cameras.main.fadeOut(300,0,0,0);this.time.delayedCall(320,()=>this.scene.start("GameScene"));};
    this.input.keyboard!.once("keydown",go);
    this.input.once("pointerdown",go);
    this.cameras.main.fadeIn(500,0,0,0);
  }
}

// ─────────────────────────────────────────────────────────────
// GAME SCENE
// ─────────────────────────────────────────────────────────────
class GameScene extends Phaser.Scene {
  private platforms!: Phaser.Physics.Arcade.StaticGroup;
  private player!: Phaser.Physics.Arcade.Image;
  private pg!: Phaser.GameObjects.Graphics;         // player graphics
  private keys!: {
    left: Phaser.Input.Keyboard.Key; right: Phaser.Input.Keyboard.Key;
    up:   Phaser.Input.Keyboard.Key; a:     Phaser.Input.Keyboard.Key;
    d:    Phaser.Input.Keyboard.Key; w:     Phaser.Input.Keyboard.Key;
    space:Phaser.Input.Keyboard.Key; e:     Phaser.Input.Keyboard.Key;
  };
  private dir = 1; private frame = 0; private fTimer = 0; private jCool = 0;
  private mL = false; private mR = false; private mJ = false;
  private eJustPressed = false;
  private popupOpen = false;
  private chapterHUD!: Phaser.GameObjects.Text;
  private chapterFlash!: Phaser.GameObjects.Text;
  private currentCh = -1;
  private signZones: { zone: Phaser.Geom.Rectangle; ms: Milestone }[] = [];
  private activeMsIndex = -1;
  private eHintText!: Phaser.GameObjects.Text;

  constructor() { super({ key: "GameScene" }); }

  create() {
    this.physics.world.setBounds(0, 0, WORLD_W, GH + 200);
    this.physics.world.gravity.y = 900;
    this.popupOpen = false;
    this.signZones = [];
    this.activeMsIndex = -1;

    this._buildWorld();

    this.platforms = this.physics.add.staticGroup();
    this._buildGround();
    this._buildPlatforms();

    this._buildPlayer();
    this.physics.add.collider(this.player, this.platforms);

    this.cameras.main.setBounds(0, 0, WORLD_W, GH + 200);
    this.cameras.main.startFollow(this.player, true, 0.08, 0.08);
    this.cameras.main.fadeIn(400, 0, 0, 0);

    this.pg = this.add.graphics().setDepth(30);

    this.keys = this.input.keyboard!.addKeys({
      left:  Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      up:    Phaser.Input.Keyboard.KeyCodes.UP,
      a:     Phaser.Input.Keyboard.KeyCodes.A,
      d:     Phaser.Input.Keyboard.KeyCodes.D,
      w:     Phaser.Input.Keyboard.KeyCodes.W,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE,
      e:     Phaser.Input.Keyboard.KeyCodes.E,
    }) as typeof this.keys;

    this._buildHUD();
    this._buildMobile();

    this.dir = 1; this.frame = 0; this.fTimer = 0; this.jCool = 0;
    this.mL = false; this.mR = false; this.mJ = false; this.eJustPressed = false;
    this.currentCh = -1;

    this.chapterFlash = this.add.text(GW / 2, GH / 2 - 40, "", {
      fontFamily: "monospace", fontSize: "16px", color: "#fff",
      backgroundColor: "#00000099", padding: { x: 14, y: 8 },
    }).setOrigin(0.5).setScrollFactor(0).setDepth(210).setAlpha(0);

    this.eHintText = this.add.text(GW / 2, GH - 88, "Press  E  to read", {
      fontFamily: "monospace", fontSize: "11px", color: "#fbbf24",
      backgroundColor: "#000000cc", padding: { x: 8, y: 4 },
    }).setOrigin(0.5).setScrollFactor(0).setDepth(210).setAlpha(0);
  }

  // ── Build scrolling background ─────────────────────────────
  _buildWorld() {
    const bg = this.add.graphics().setDepth(0);

    CHAPTERS.forEach((ch, ci) => {
      const x0 = ci * CH_W;
      // sky gradient bands
      const r1 = (ch.sky1 >> 16) & 0xff, g1 = (ch.sky1 >> 8) & 0xff, b1 = ch.sky1 & 0xff;
      const r2 = (ch.sky2 >> 16) & 0xff, g2 = (ch.sky2 >> 8) & 0xff, b2 = ch.sky2 & 0xff;
      const BANDS = 12;
      for (let b = 0; b < BANDS; b++) {
        const t = b / BANDS;
        const col = (Math.round(r1 + (r2 - r1) * t) << 16)
                  | (Math.round(g1 + (g2 - g1) * t) << 8)
                  |  Math.round(b1 + (b2 - b1) * t);
        bg.fillStyle(col, 1); bg.fillRect(x0 + b * (CH_W / BANDS), 0, CH_W / BANDS + 1, FLOOR_Y);
      }
      // chapter separator pillar
      if (ci > 0) {
        bg.fillStyle(ch.accent, 0.55); bg.fillRect(x0, 0, 4, GH);
        bg.fillStyle(ch.accent, 0.12); bg.fillRect(x0 - 6, 0, 16, GH);
      }
      // ambient pixel dust
      const rng = new Phaser.Math.RandomDataGenerator([ch.label]);
      for (let i = 0; i < 50; i++) {
        bg.fillStyle(ch.accent, rng.realInRange(0.03, 0.14));
        const px2 = x0 + rng.integerInRange(0, CH_W);
        const py2 = rng.integerInRange(0, FLOOR_Y - 40);
        bg.fillRect(px2, py2, rng.integerInRange(1, 3), rng.integerInRange(1, 3));
      }
      // chapter name banner
      bg.fillStyle(0x000000, 0.45); bg.fillRect(x0, 18, CH_W, 28);
      bg.fillStyle(ch.accent, 0.55); bg.fillRect(x0, 18, CH_W, 3);
      this.add.text(x0 + CH_W / 2, 32, "◆  " + ch.label + "  ◆", {
        fontFamily: "monospace", fontSize: "11px",
        color: "#" + ch.accent.toString(16).padStart(6, "0"), letterSpacing: 3,
      }).setOrigin(0.5).setDepth(1);
    });

    // ground strip (all chapters)
    bg.fillStyle(0x166534, 1); bg.fillRect(0, FLOOR_Y + 4, WORLD_W, GH - FLOOR_Y);
    bg.fillStyle(0x16a34a, 1); bg.fillRect(0, FLOOR_Y,     WORLD_W, 6);
    bg.fillStyle(0x4ade80, 0.3); bg.fillRect(0, FLOOR_Y - 2, WORLD_W, 3);

    // ── Chapter-specific decorations ──────────────────────────
    const dg = this.add.graphics().setDepth(4);

    // CH1 – IHEC books
    [[CH_W+80,FLOOR_Y-32],[CH_W+200,FLOOR_Y-32],[CH_W+350,FLOOR_Y-44],[CH_W+500,FLOOR_Y-28]].forEach(([bx,by],i) => {
      drawBook(dg, bx, by, [0x818cf8,0x6366f1,0xa78bfa,0x818cf8][i]);
    });
    // building outline – campus
    bg.fillStyle(0x1e1b4b,1);  bg.fillRect(CH_W+640,FLOOR_Y-120,120,120);
    bg.fillStyle(0x312e81,1);  bg.fillRect(CH_W+650,FLOOR_Y-130,100,20);
    bg.fillStyle(0x818cf8,0.5);bg.fillRect(CH_W+660,FLOOR_Y-108, 20,24); // window
    bg.fillStyle(0x818cf8,0.5);bg.fillRect(CH_W+700,FLOOR_Y-108, 20,24);
    bg.fillStyle(0x818cf8,0.5);bg.fillRect(CH_W+740,FLOOR_Y-108, 20,24);
    bg.fillStyle(0x818cf8,0.7);bg.fillRect(CH_W+680,FLOOR_Y-80,  40,80); // door

    // CH2 – bank building + coins + docs
    bg.fillStyle(0x0f2e18,1);  bg.fillRect(CH_W*2+600,FLOOR_Y-140,160,140);
    bg.fillStyle(0x052e16,1);  bg.fillRect(CH_W*2+590,FLOOR_Y-155,180,20);
    bg.fillStyle(0x34d399,0.5);bg.fillRect(CH_W*2+620,FLOOR_Y-130, 22,28); // windows
    bg.fillStyle(0x34d399,0.5);bg.fillRect(CH_W*2+660,FLOOR_Y-130, 22,28);
    bg.fillStyle(0x34d399,0.5);bg.fillRect(CH_W*2+700,FLOOR_Y-130, 22,28);
    bg.fillStyle(0x34d399,0.7);bg.fillRect(CH_W*2+660,FLOOR_Y-80,  40,80); // door
    this.add.text(CH_W*2+680, FLOOR_Y-150, "BANK", { fontFamily:"monospace",fontSize:"8px",color:"#34d399" }).setOrigin(0.5).setDepth(5);
    [[CH_W*2+100,FLOOR_Y-16],[CH_W*2+280,FLOOR_Y-16],[CH_W*2+420,FLOOR_Y-16]].forEach(([cx2,cy2]) => drawCoin(dg,cx2,cy2,0xfbbf24));
    [[CH_W*2+140,FLOOR_Y-32],[CH_W*2+340,FLOOR_Y-36]].forEach(([dx,dy]) => drawDoc(dg,dx,dy));

    // CH3 – coins everywhere + money bags
    for (let i=0;i<10;i++) drawCoin(dg,CH_W*3+80+i*78,FLOOR_Y-16+(i%3)*-4,i%2===0?0xfbbf24:0xf59e0b);
    // coin tower
    bg.fillStyle(0x92400e,1); bg.fillRect(CH_W*3+740,FLOOR_Y-60,32,60);
    for (let i=0;i<4;i++) { bg.fillStyle(0xfbbf24,1); bg.fillCircle(CH_W*3+756,FLOOR_Y-64-i*16,10); }

    // CH4 – ESPRIT+JEMS – dual buildings
    bg.fillStyle(0x2e1065,1); bg.fillRect(CH_W*4+120,FLOOR_Y-160,140,160); // ESPRIT
    bg.fillStyle(0x4c1d95,1); bg.fillRect(CH_W*4+112,FLOOR_Y-174,156,20);
    bg.fillStyle(0xc084fc,0.5);bg.fillRect(CH_W*4+140,FLOOR_Y-148,24,30);
    bg.fillStyle(0xc084fc,0.5);bg.fillRect(CH_W*4+180,FLOOR_Y-148,24,30);
    bg.fillStyle(0xc084fc,0.7);bg.fillRect(CH_W*4+168,FLOOR_Y-80,44,80);
    this.add.text(CH_W*4+190,FLOOR_Y-178,"ESPRIT",{fontFamily:"monospace",fontSize:"8px",color:"#c084fc"}).setOrigin(0.5).setDepth(5);
    bg.fillStyle(0x1e0a3a,1); bg.fillRect(CH_W*4+680,FLOOR_Y-120,120,120); // JEMS
    bg.fillStyle(0x2e1065,1); bg.fillRect(CH_W*4+672,FLOOR_Y-134,136,20);
    bg.fillStyle(0xa855f7,0.5);bg.fillRect(CH_W*4+700,FLOOR_Y-110,22,24);
    bg.fillStyle(0xa855f7,0.5);bg.fillRect(CH_W*4+734,FLOOR_Y-110,22,24);
    bg.fillStyle(0xa855f7,0.7);bg.fillRect(CH_W*4+712,FLOOR_Y-80,36,80);
    this.add.text(CH_W*4+740,FLOOR_Y-138,"JEMS",{fontFamily:"monospace",fontSize:"8px",color:"#a855f7"}).setOrigin(0.5).setDepth(5);

    // CH5 – tech decorations
    [[CH_W*5+80,FLOOR_Y-18],[CH_W*5+320,FLOOR_Y-18],[CH_W*5+580,FLOOR_Y-18]].forEach(([sx,sy]) => drawSnake(dg,sx,sy));
    [[CH_W*5+160,FLOOR_Y-28],[CH_W*5+440,FLOOR_Y-28],[CH_W*5+720,FLOOR_Y-28]].forEach(([wx,wy]) => drawWhale(dg,wx,wy));

    // CH6 – STB bank + loan docs
    bg.fillStyle(0x431407,1); bg.fillRect(CH_W*6+580,FLOOR_Y-160,180,160);
    bg.fillStyle(0x7c2d12,1); bg.fillRect(CH_W*6+570,FLOOR_Y-175,200,22);
    bg.fillStyle(0xfb923c,0.5);bg.fillRect(CH_W*6+605,FLOOR_Y-148,26,32);
    bg.fillStyle(0xfb923c,0.5);bg.fillRect(CH_W*6+650,FLOOR_Y-148,26,32);
    bg.fillStyle(0xfb923c,0.5);bg.fillRect(CH_W*6+695,FLOOR_Y-148,26,32);
    bg.fillStyle(0xfb923c,0.7);bg.fillRect(CH_W*6+648,FLOOR_Y-88,44,88);
    this.add.text(CH_W*6+670,FLOOR_Y-180,"STB BANK",{fontFamily:"monospace",fontSize:"8px",color:"#fb923c"}).setOrigin(0.5).setDepth(5);
    [[CH_W*6+80,FLOOR_Y-40],[CH_W*6+200,FLOOR_Y-40],[CH_W*6+340,FLOOR_Y-40]].forEach(([lx,ly]) => drawLoanDoc(dg,lx,ly));

    // CH7 – contact stars
    const sg = this.add.graphics().setDepth(3);
    for (let i = 0; i < 20; i++) {
      const sx = CH_W*7 + 50 + i * 44, sy = 80 + (i%4)*40;
      sg.fillStyle(CHAPTERS[7].accent, 0.4 + (i%3)*0.1);
      sg.fillCircle(sx, sy, 3 + i%3);
    }

    // ── Milestone signs ──────────────────────────────────────
    const sg2 = this.add.graphics().setDepth(5);
    MILESTONES.forEach((ms, idx) => {
      drawSign(sg2, ms.wx, FLOOR_Y - 64, ms.icon, ms.accent, this);
      // glow pulse tween
      const glowG = this.add.graphics().setDepth(4);
      const drawGlow = (a: number) => {
        glowG.clear();
        glowG.fillStyle(ms.accent, a * 0.12);
        glowG.fillCircle(ms.wx + 16, FLOOR_Y - 48, 26);
      };
      drawGlow(1);
      this.tweens.add({
        targets: { a: 1 }, a: 0.2, duration: 900, yoyo: true, repeat: -1,
        onUpdate: (tw) => drawGlow((tw.targets as {a:number}[])[0].a),
      });
      // press E label above sign
      this.add.text(ms.wx + 16, FLOOR_Y - 88, "[ E ]", {
        fontFamily:"monospace", fontSize:"8px", color:"#" + ms.accent.toString(16).padStart(6,"0"),
      }).setOrigin(0.5).setDepth(6);

      // interaction zone (wider than sign for ease)
      const zone = new Phaser.Geom.Rectangle(ms.wx - 40, FLOOR_Y - 120, 120, 120);
      this.signZones.push({ zone, ms });

      // tap zone (pointer)
      const zoneGO = this.add.zone(ms.wx + 16, FLOOR_Y - 48, 60, 60).setDepth(7).setInteractive();
      zoneGO.on("pointerdown", () => {
        if (!this.popupOpen) this._openMilestone(idx);
      });
    });
  }

  // ── Ground & platforms ─────────────────────────────────────
  _buildGround() {
    const g = this.platforms.create(WORLD_W / 2, FLOOR_Y + 10) as Phaser.Physics.Arcade.Image;
    g.setVisible(false);
    g.body!.setSize(WORLD_W, 20);
    (g.body as Phaser.Physics.Arcade.StaticBody).reset(WORLD_W / 2, FLOOR_Y + 10);
  }

  _plat(x: number, y: number, w: number, col: number) {
    const pg = this.add.graphics().setDepth(5);
    pg.fillStyle(0x000000, 0.25); pg.fillRect(x + 4, y + 4, w, 14);
    pg.fillStyle(col, 1);         pg.fillRect(x, y, w, 14);
    pg.fillStyle(0xffffff, 0.18); pg.fillRect(x, y, w, 3);
    for (let bx = x + 18; bx < x + w; bx += 20) { pg.fillStyle(0x000000,0.1); pg.fillRect(bx, y, 1, 14); }
    const p = this.platforms.create(x + w / 2, y + 7) as Phaser.Physics.Arcade.Image;
    p.setVisible(false); p.body!.setSize(w, 14);
    (p.body as Phaser.Physics.Arcade.StaticBody).reset(x + w / 2, y + 7);
  }

  _buildPlatforms() {
    // ── CH1 IHEC platforms ──
    this._plat(CH_W+100, FLOOR_Y-90,  100, 0x3730a3);
    this._plat(CH_W+280, FLOOR_Y-130, 120, 0x4c1d95);
    this._plat(CH_W+480, FLOOR_Y-100, 100, 0x3730a3);
    this._plat(CH_W+660, FLOOR_Y-140, 140, 0x312e81);
    this._plat(CH_W+830, FLOOR_Y-80,  90,  0x3730a3);
    // ── CH2 Bank intern ──
    this._plat(CH_W*2+80,  FLOOR_Y-80,  100, 0x166534);
    this._plat(CH_W*2+260, FLOOR_Y-120, 120, 0x14532d);
    this._plat(CH_W*2+460, FLOOR_Y-90,  100, 0x166534);
    this._plat(CH_W*2+700, FLOOR_Y-70,  80,  0x14532d);
    this._plat(CH_W*2+840, FLOOR_Y-110, 100, 0x166534);
    // ── CH3 Finance skills ──
    this._plat(CH_W*3+100, FLOOR_Y-100, 90,  0x92400e);
    this._plat(CH_W*3+280, FLOOR_Y-140, 110, 0x78350f);
    this._plat(CH_W*3+480, FLOOR_Y-100, 90,  0x92400e);
    this._plat(CH_W*3+650, FLOOR_Y-130, 120, 0x78350f);
    this._plat(CH_W*3+840, FLOOR_Y-80,  80,  0x92400e);
    // ── CH4 ESPRIT+JEMS ──
    this._plat(CH_W*4+80,  FLOOR_Y-100, 110, 0x4c1d95);
    this._plat(CH_W*4+280, FLOOR_Y-150, 130, 0x2e1065);
    this._plat(CH_W*4+480, FLOOR_Y-110, 110, 0x4c1d95);
    this._plat(CH_W*4+660, FLOOR_Y-80,  120, 0x2e1065);
    this._plat(CH_W*4+840, FLOOR_Y-130, 100, 0x4c1d95);
    // ── CH5 Tech zone ──
    this._plat(CH_W*5+80,  FLOOR_Y-110, 100, 0x052e16);
    this._plat(CH_W*5+280, FLOOR_Y-160, 120, 0x14532d);
    this._plat(CH_W*5+480, FLOOR_Y-110, 100, 0x052e16);
    this._plat(CH_W*5+680, FLOOR_Y-150, 120, 0x14532d);
    this._plat(CH_W*5+860, FLOOR_Y-90,  80,  0x052e16);
    // ── CH6 STB Bank ──
    this._plat(CH_W*6+80,  FLOOR_Y-90,  100, 0x7c2d12);
    this._plat(CH_W*6+280, FLOOR_Y-130, 120, 0x431407);
    this._plat(CH_W*6+480, FLOOR_Y-100, 100, 0x7c2d12);
    this._plat(CH_W*6+800, FLOOR_Y-120, 120, 0x431407);
    // ── CH7 Contact ──
    this._plat(CH_W*7+100, FLOOR_Y-110, 120, 0x0c4a6e);
    this._plat(CH_W*7+350, FLOOR_Y-150, 140, 0x075985);
    this._plat(CH_W*7+620, FLOOR_Y-110, 120, 0x0c4a6e);
    this._plat(CH_W*7+820, FLOOR_Y-80,  100, 0x075985);
  }

  // ── Player spawn ───────────────────────────────────────────
  _buildPlayer() {
    this.player = this.physics.add.image(120, FLOOR_Y - 40, null as unknown as string);
    this.player.setVisible(false);
    this.player.setCollideWorldBounds(false);
    this.player.body!.setSize(22, 36);
    this.player.setDepth(29);
  }

  // ── HUD ────────────────────────────────────────────────────
  _buildHUD() {
    this.chapterHUD = this.add.text(GW / 2, 8, "START", {
      fontFamily: "monospace", fontSize: "10px", color: "#06b6d4",
      backgroundColor: "#000000cc", padding: { x: 8, y: 3 },
    }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(200);

    this.add.text(8, 8, "← →  move   ↑ jump   E  read sign", {
      fontFamily: "monospace", fontSize: "7px", color: "#334155",
      backgroundColor: "#00000066", padding: { x: 4, y: 2 },
    }).setScrollFactor(0).setDepth(200);
  }

  // ── Mobile touch buttons ───────────────────────────────────
  _buildMobile() {
    // Support up to 3 simultaneous touch points (L + R + Jump)
    this.input.addPointer(3);

    const btnY = GH - 58;
    const btns: { x: number; y: number; w: number; h: number; lbl: string; onDown: () => void; onUp: () => void }[] = [
      { x: 10,        y: btnY, w: 56, h: 46, lbl: "◀", onDown: () => { this.mL = true; },  onUp: () => { this.mL = false; } },
      { x: 74,        y: btnY, w: 56, h: 46, lbl: "▶", onDown: () => { this.mR = true; },  onUp: () => { this.mR = false; } },
      { x: GW - 68,   y: btnY, w: 58, h: 46, lbl: "▲", onDown: () => { this.mJ = true; },  onUp: () => { this.mJ = false; } },
      { x: GW - 134,  y: btnY, w: 58, h: 46, lbl: "E",  onDown: () => {
          if (!this.popupOpen && this.activeMsIndex >= 0) this._openMilestone(this.activeMsIndex);
        }, onUp: () => {} },
    ];

    btns.forEach(({ x, y, w, h, lbl, onDown, onUp }) => {
      // Visual layer — graphics
      const gfx = this.add.graphics().setScrollFactor(0).setDepth(300);
      const drawBtnGfx = (pressed: boolean) => {
        gfx.clear();
        gfx.fillStyle(0xffffff, pressed ? 0.18 : 0.07);
        gfx.fillRoundedRect(x, y, w, h, 8);
        gfx.lineStyle(2, 0xffffff, pressed ? 0.6 : 0.25);
        gfx.strokeRoundedRect(x, y, w, h, 8);
      };
      drawBtnGfx(false);

      // Label
      this.add.text(x + w / 2, y + h / 2, lbl, {
        fontFamily: "monospace", fontSize: "18px", color: "#ffffff",
      }).setOrigin(0.5).setScrollFactor(0).setDepth(301);

      // Hit zone — Phaser zones are positioned by CENTER, so offset by half size
      const zone = this.add.zone(x + w / 2, y + h / 2, w, h)
        .setScrollFactor(0)
        .setDepth(302)
        .setInteractive();

      zone.on("pointerdown", () => { drawBtnGfx(true);  onDown(); });
      zone.on("pointerup",   () => { drawBtnGfx(false); onUp();   });
      zone.on("pointerout",  () => { drawBtnGfx(false); onUp();   });
    });

    // Global safety net: if finger lifts anywhere on screen,
    // release all movement flags so buttons never get stuck
    this.input.on("pointerup", () => {
      this.mL = false;
      this.mR = false;
      this.mJ = false;
    });
  }

  // ── Open milestone popup ───────────────────────────────────
  _openMilestone(idx: number) {
    this.popupOpen = true;
    this.scene.launch("PopupScene", { ms: MILESTONES[idx], onClose: () => { this.popupOpen = false; } });
  }

  // ── Main update ────────────────────────────────────────────
  update(_t: number, delta: number) {
    const dt = delta / 1000;

    // E key edge detection
    const eDown = this.keys.e.isDown;
    if (eDown && !this.eJustPressed && !this.popupOpen && this.activeMsIndex >= 0) {
      this._openMilestone(this.activeMsIndex);
    }
    this.eJustPressed = eDown;

    if (this.popupOpen) {
      this.player.setVelocityX(this.player.body!.velocity.x * 0.6);
      return; // freeze player while reading
    }

    this.jCool = Math.max(0, this.jCool - dt);
    const goL  = this.keys.left.isDown  || this.keys.a.isDown  || this.mL;
    const goR  = this.keys.right.isDown || this.keys.d.isDown  || this.mR;
    const jump = this.keys.up.isDown    || this.keys.w.isDown  || this.keys.space.isDown || this.mJ;
    const onGround = this.player.body!.blocked.down;

    if (goL)       { this.player.setVelocityX(-210); this.dir = -1; }
    else if (goR)  { this.player.setVelocityX( 210); this.dir =  1; }
    else           { this.player.setVelocityX(this.player.body!.velocity.x * 0.72); }

    if (jump && onGround && this.jCool <= 0) {
      this.player.setVelocityY(-580); this.jCool = 0.25;
    }

    // walk animation
    this.fTimer += dt;
    if (this.fTimer > 0.1) {
      this.fTimer = 0;
      this.frame = Math.abs(this.player.body!.velocity.x) > 8 ? (this.frame + 1) % 4 : 0;
    }

    // redraw sprite
    this.pg.clear();
    const S  = 2;
    const px = Math.round(this.player.x - 8 * S);
    const py = Math.round(this.player.y - 20);
    drawPlayer(this.pg, px, py, S, this.frame, this.dir, !onGround);

    // respawn if fell off
    if (this.player.y > GH + 100) {
      this.player.setPosition(120, FLOOR_Y - 40);
      this.player.setVelocity(0, 0);
    }

    // chapter detection
    const ch = Math.min(Math.floor(this.player.x / CH_W), CHAPTERS.length - 1);
    if (ch !== this.currentCh) {
      this.currentCh = ch;
      const c = CHAPTERS[ch];
      this.chapterHUD.setText("◆  " + c.label + "  ◆").setColor("#" + c.accent.toString(16).padStart(6, "0"));
      this.chapterFlash.setText("◆  " + c.label + "  ◆").setColor("#" + c.accent.toString(16).padStart(6, "0")).setAlpha(1);
      this.tweens.killTweensOf(this.chapterFlash);
      this.tweens.add({ targets: this.chapterFlash, alpha: 0, delay: 2000, duration: 800 });
    }

    // milestone proximity
    const playerRect = new Phaser.Geom.Rectangle(this.player.x - 30, this.player.y - 50, 60, 60);
    let nearIdx = -1;
    for (let i = 0; i < this.signZones.length; i++) {
      if (Phaser.Geom.Rectangle.Overlaps(playerRect, this.signZones[i].zone)) {
        nearIdx = i; break;
      }
    }
    this.activeMsIndex = nearIdx;
    if (nearIdx >= 0 && !this.popupOpen) {
      if (this.eHintText.alpha < 0.9) {
        this.tweens.killTweensOf(this.eHintText);
        this.tweens.add({ targets: this.eHintText, alpha: 1, duration: 200 });
      }
    } else if (this.eHintText.alpha > 0.01) {
      this.tweens.killTweensOf(this.eHintText);
      this.tweens.add({ targets: this.eHintText, alpha: 0, duration: 300 });
    }
  }
}

// ─────────────────────────────────────────────────────────────
// POPUP SCENE  (milestone reader)
// ─────────────────────────────────────────────────────────────
class PopupScene extends Phaser.Scene {
  private _ms!: Milestone;
  private _onClose!: () => void;

  constructor() { super({ key: "PopupScene" }); }

  init(data: { ms: Milestone; onClose: () => void }) {
    this._ms = data.ms;
    this._onClose = data.onClose;
  }

  create() {
    const ms = this._ms;
    const cx = GW / 2;
    const col = ms.accent;
    const wide = ms.wide ?? false;
    const bw = wide ? GW - 44 : GW - 76;
    const bh = 60 + ms.lines.length * 24 + 60;
    const bx = (GW - bw) / 2;
    const by = Math.max(10, GH / 2 - bh / 2 - 10);

    // dim overlay
    const ov = this.add.graphics();
    ov.fillStyle(0x000000, 0.72); ov.fillRect(0, 0, GW, GH);
    ov.setInteractive(new Phaser.Geom.Rectangle(0,0,GW,GH), Phaser.Geom.Rectangle.Contains);

    // card
    const card = this.add.graphics();
    card.fillStyle(0x000000, 0.5);  card.fillRect(bx + 6, by + 6, bw, bh);
    card.fillStyle(0x0f172a, 1);    card.fillRect(bx, by, bw, bh);
    card.lineStyle(2, col, 1);      card.strokeRect(bx, by, bw, bh);
    [[bx,by],[bx+bw-3,by],[bx,by+bh-3],[bx+bw-3,by+bh-3]].forEach(([x,y])=>{
      card.fillStyle(col,1); card.fillRect(x,y,3,10); card.fillRect(x,y,10,3);
    });
    // accent top bar
    card.fillStyle(col, 0.12); card.fillRect(bx, by, bw, 36);

    // icon + title
    this.add.text(bx + 16, by + 14, ms.icon, { fontSize:"16px", fontFamily:"serif" }).setOrigin(0, 0.5);
    this.add.text(bx + 40, by + 14, ms.title, {
      fontFamily:"monospace", fontSize:"11px",
      color:"#"+col.toString(16).padStart(6,"0"), letterSpacing:1,
      wordWrap: { width: bw - 56 },
    }).setOrigin(0, 0.5);

    // divider
    const dv = this.add.graphics();
    dv.fillStyle(col, 0.3); dv.fillRect(bx + 10, by + 36, bw - 20, 1);

    // lines
    ms.lines.forEach((line, i) => {
      const isBlank = line.trim() === "";
      this.add.text(bx + 16, by + 50 + i * 24, line, {
        fontFamily:"monospace",
        fontSize: isBlank ? "6px" : "9px",
        color: line.startsWith("◆") ? "#"+col.toString(16).padStart(6,"0") : "#e2e8f0",
        letterSpacing: 0.5,
        wordWrap: { width: bw - 32 },
      });
    });

    // close button
    const cbY = by + bh - 26;
    const cbG = this.add.graphics();
    const drawBtn = (hover: boolean) => {
      cbG.clear();
      cbG.fillStyle(col, hover ? 0.28 : 0.1);
      cbG.fillRect(bx + bw/2 - 70, cbY - 10, 140, 24);
      cbG.lineStyle(1, col, hover ? 1 : 0.6);
      cbG.strokeRect(bx + bw/2 - 70, cbY - 10, 140, 24);
    };
    drawBtn(false);
    const btnZone = this.add.zone(cx, cbY, 140, 24).setInteractive();
    btnZone.on("pointerover",  () => drawBtn(true));
    btnZone.on("pointerout",   () => drawBtn(false));
    this.add.text(cx, cbY, "CONTINUE  ▶", {
      fontFamily:"monospace", fontSize:"10px",
      color:"#"+col.toString(16).padStart(6,"0"), letterSpacing:2,
    }).setOrigin(0.5);

    const close = () => {
      if (!this.scene.isActive("PopupScene")) return;
      this._onClose();
      this.scene.stop("PopupScene");
    };

    btnZone.on("pointerdown", close);
    this.input.keyboard!.once("keydown-E", close);
    this.input.keyboard!.once("keydown-ENTER", close);
    this.input.keyboard!.once("keydown-SPACE", close);

    // fade in
    this.cameras.main.fadeIn(180, 0, 0, 0);

    // auto timeout for passive viewers (long reads only)
    // no auto-close — reader controls pacing
  }
}

// ─────────────────────────────────────────────────────────────
// REACT COMPONENT
// ─────────────────────────────────────────────────────────────
export default function PhaserGame() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width:  GW,
      height: GH,
      parent: containerRef.current,
      backgroundColor: "#020b18",
      physics: {
        default: "arcade",
        arcade: { gravity: { x: 0, y: 900 }, debug: false },
      },
      scene: [TitleScene, GameScene, PopupScene],
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      render: { pixelArt: true, antialias: false },
    });

    return () => { game.destroy(true); };
  }, []);

  return (
    <div
      id="phaser-game-root"
      ref={containerRef}
      style={{
        /* Let the canvas be exactly as tall as the available space,
           centred horizontally. Phaser's FIT + CENTER_BOTH handles
           the internal scale — we just give it a perfectly centred
           square container that matches the game's aspect ratio. */
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020b18",
        imageRendering: "pixelated",
      }}
    />
  );
}
