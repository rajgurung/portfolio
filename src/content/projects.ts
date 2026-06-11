export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
  status?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Softly",
    description:
      "Life admin tool — one calm place to manage the stuff that quietly piles up.",
    tech: ["Rails", "PostgreSQL", "Tailwind CSS"],
    demo: "https://mysoftly.app",
    image: "/images/projects/softly.png",
    featured: true,
  },
  {
    title: "staffOS",
    description:
      "The trust, review, and documentation layer for AI-assisted engineering work.",
    tech: ["Ruby", "Rails", "PostgreSQL"],
    github: "https://github.com/rajgurung/staffOS",
    image: "/images/projects/staffos.png",
    featured: true,
  },
  {
    title: "PulseCheck",
    description:
      "AI-powered signal monitoring — track what matters, get alerted when it shifts.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    demo: "https://pulsecheck-landing.vercel.app",
    github: "https://github.com/rajgurung/pulsecheck-landing",
    image: "/images/projects/pulsecheck.png",
    featured: true,
  },
  {
    title: "Make Nepal Great",
    description:
      "Democratic polling platform for Nepal's political engagement — secure Gmail auth, transparent voting, connecting the global Nepali diaspora.",
    tech: ["Next.js", "Go", "Gin", "PostgreSQL", "Redis", "JWT", "Docker"],
    demo: "https://makenepalgreat.com",
    image: "/images/projects/make-nepal-great.png",
    featured: true,
  },
  {
    title: "Stock Intelligence",
    description:
      "AI-powered stock analysis platform with real-time market insights, technical indicators, and ML-driven predictions.",
    tech: ["React", "Python", "TensorFlow", "REST API"],
    demo: "https://stock-intelligence-frontend.vercel.app",
    github: "https://github.com/rajgurung/stock-intelligence-frontend",
    image: "/images/projects/stock-intelligence.png",
    featured: true,
    status: "shelved",
  },
  {
    title: "Premier League Bot",
    description:
      "Slack bot delivering live match updates and news for your favourite Premier League team.",
    tech: ["Ruby", "Slack API", "Webhooks"],
  },
  {
    title: "Data Structures Visualizer",
    description:
      "Interactive visual course explaining core data structures and algorithms through animated demos.",
    tech: ["JavaScript", "D3.js", "Canvas"],
  },
  {
    title: "Twitter Mood Generator",
    description:
      "Sentiment analysis over Twitter trends — public mood, distilled.",
    tech: ["Python", "Twitter API", "NLP"],
  },
  {
    title: "Alexa Skills",
    description:
      "Custom Alexa voice skills for smart home automation and daily productivity.",
    tech: ["Ruby", "AWS Lambda", "Alexa Skills Kit"],
  },
];
