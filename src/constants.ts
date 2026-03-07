
export const PERSONAL_INFO = {
  name: "OBEID ALLAH NOUICER",
  title: "AI Engineer & Financial Analyst",
  tagline: "Building production-ready Generative AI systems",
  email: "onouicer@gmail.com",
  phone: "+216 94 321 758",
  github: "https://github.com/obeidallahnouicer",
  linkedin: "https://www.linkedin.com/in/obeid-nouicer-866982218?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  about: "As an AI Engineer and Financial Analyst, I stand at the unique intersection of cutting-edge Generative AI and robust financial operations. My passion lies in crafting and deploying production-ready AI systems that drive efficiency, enhance decision-making, and mitigate risk within the enterprise banking and finance sector. With hands-on experience in LLM development, RAG architectures, and secure AI deployments, I bridge the gap between complex AI models and real-world business challenges, ensuring tangible impact and measurable value."
};

export const EXPERIENCE = [
  {
    role: "Corporate Banking Officer",
    company: "STB BANK",
    period: "Jan 2026 – Present",
    description: [
      "Credit analysis & risk assessment for corporate clients.",
      "Financial statement evaluation for lending decisions.",
      "Managed corporate & retail lending portfolios."
    ]
  },
  {
    role: "Generative AI Consultant",
    company: "JEMS",
    period: "Sep 2024 – Dec 2025",
    description: [
      "Developed production LLM applications with robust guardrails.",
      "Built an AI recruitment system with semantic CV matching.",
      "Designed a visual web generator (NLP → HTML/CSS/JS).",
      "Implemented Text-to-SQL chatbot using LangGraph.",
      "Managed CI/CD for AI systems (GitLab, Docker, Azure)."
    ]
  },
  {
    role: "Banking Intern",
    company: "Bank of Tunisia",
    period: "Jul – Aug 2023",
    description: [
      "Supported credit documentation and client onboarding.",
      "Assisted in financial statement analysis for loan applications."
    ]
  }
];

export const SKILLS = {
  "AI & Machine Learning": [
    "Generative AI",
    "LLMs & RAG",
    "LangChain & Multi-Agent",
    "Prompt Engineering",
    "Guardrail Engineering"
  ],
  "Software Development": [
    "Python",
    "JavaScript",
    "Flask & FastAPI",
    "PostgreSQL & pgvector"
  ],
  "DevOps": [
    "Docker",
    "GitLab CI/CD",
    "Azure"
  ],
  "Finance & Risk": [
    "Credit Analysis",
    "Financial Modeling",
    "Risk Management"
  ]
};

export type ProjectLinks = {
  github?: string;
  github2?: string;
  github3?: string;
  demo?: string;
};

export type Project = {
  title: string;
  description: string;
  links: ProjectLinks;
};

export const PROJECTS: Project[] = [
  {
    title: "EduAI - Educational Platform",
    description: "AI-powered educational platform leveraging LLMs for personalized learning paths and interactive content generation.",
    links: {
      github: "https://github.com/obeidallahnouicer/EduAI",
    }
  },
  {
    title: "Resume Optimizer - AI Enhancement Tool",
    description: "An AI-driven tool to optimize resumes using semantic analysis and keyword matching for better job prospects.",
    links: {
      github: "https://github.com/obeidallahnouicer/resumeoptimiser",
    }
  },

  {
    title: "FixTrade - Trading Analytics",
    description: "Real-time trading analytics system providing insights into market trends and portfolio performance.",
    links: {
      github: "https://github.com/obeidallahnouicer/FixTrade"
    }
  },
 
  {
    title: "Speed Alert - Real-Time Speed Monitoring",
    description: "A full-stack IoT system that monitors vehicle speed in real-time and sends live alerts with GPS location and itinerary tracking. Features end-to-end AES encryption, fingerprint biometric authentication, WebSocket live data streaming, and a cross-platform mobile app. Composed of a Node.js backend, a React web dashboard, and a Flutter mobile client.",
    links: {
      github: "https://github.com/obeidallahnouicer/nodeiot",
      github2: "https://github.com/obeidallahnouicer/iotfront",
      github3: "https://github.com/obeidallahnouicer/iotflutter"
    }
  }
];

export const EDUCATION = [
  {
    degree: "Master's in Business Analytics & Generative AI",
    institution: "ESPRIT",
    period: "2024 - Present",
    details: "Specializations: LLMs, RAG, Prompt Engineering, Machine Learning for Business."
  },
  {
    degree: "Bachelor's in Finance",
    institution: "IHEC Carthage",
    period: "2020 - 2024",
    details: "Focus: Credit risk, financial analysis, corporate finance."
  }
];

export const LANGUAGES = [
  { language: "Arabic", level: "Native" },
  { language: "French", level: "Fluent" },
  { language: "English", level: "Fluent" }
];
