export type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Make Nepal Great",
    description:
      "Democratic polling platform for Nepal's political engagement — secure Gmail auth, transparent voting, connecting the global Nepali diaspora.",
    tech: ["Next.js", "Go", "Gin", "PostgreSQL", "Redis", "JWT", "Docker"],
    demo: "https://makenepalgreat.com",
    featured: true,
  },
  {
    title: "Stock Intelligence",
    description:
      "AI-powered stock analysis platform with real-time market insights, technical indicators, and ML-driven predictions.",
    tech: ["React", "Python", "TensorFlow", "REST API"],
    demo: "https://stock-intelligence-frontend.vercel.app",
    github: "https://github.com/rajgurung/stock-intelligence-frontend",
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
