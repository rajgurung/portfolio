const projects = [
    {
        id: 3,
        title: "Premier League Bot",
        description: "Slack bot that delivers the latest news and match updates for your favorite Premier League team. Automated notifications and real-time score tracking.",
        tech: ["Ruby", "Slack API", "Webhooks"],
        github: null,
        demo: null,
        featured: false,
        impact: ["50+ teams tracked", "Real-time updates"],
        image: "/images/projects/pl-bot.png"
    },
    {
        id: 4,
        title: "Data Structures Visualizer",
        description: "Interactive visual course helping developers understand core data structures and algorithms. Simplified explanations with animated demonstrations.",
        tech: ["JavaScript", "D3.js", "HTML5 Canvas"],
        github: null,
        demo: null,
        featured: false,
        impact: ["Visual learning", "Interactive demos"],
        image: "/images/projects/ds-visual.png"
    },
    {
        id: 5,
        title: "Twitter Mood Generator",
        description: "Analyzes Twitter trends to generate mood and sentiment analysis. Provides insights into public opinion on trending topics.",
        tech: ["Python", "Twitter API", "NLP"],
        github: null,
        demo: null,
        featured: false,
        impact: ["Sentiment analysis", "Trend tracking"],
        image: "/images/projects/twitter-mood.png"
    },
    {
        id: 6,
        title: "Alexa Skills",
        description: "Custom Alexa voice skills for smart home automation and daily productivity. Voice-controlled tasks and reminders.",
        tech: ["Ruby", "AWS Lambda", "Alexa Skills Kit"],
        github: null,
        demo: null,
        featured: false,
        impact: ["Voice automation", "Smart home integration"],
        image: "/images/projects/alexa.png"
    },
    {
        id: 7,
        title: "Make Nepal Great",
        description: "Democratic polling platform for Nepal's political engagement, enabling secure voting with Gmail authentication. Connects global Nepali diaspora for transparent, data-driven political discourse. Full-stack application with Go REST API backend and Next.js frontend.",
        tech: ["Next.js", "Go", "Gin", "PostgreSQL", "Redis", "JWT", "OAuth", "Docker"],
        github: null,
        demo: "https://makenepalgreat.com",
        featured: true,
        impact: ["5,000+ verified voters", "25+ countries represented", "Go REST API backend", "Redis session storage"],
        image: "/images/projects/make-nepal-great.png"
    },
    {
        id: 8,
        title: "Stock Intelligence",
        description: "AI-powered stock analysis platform providing real-time market insights, technical indicators, and predictive analytics. Built with modern React frontend and Python ML backend for intelligent investment decisions.",
        tech: ["React", "Python", "TensorFlow", "REST API", "Real-time Data"],
        github: "https://github.com/rajgurung/stock-intelligence-frontend",
        demo: "https://stock-intelligence-frontend.vercel.app",
        featured: true,
        impact: ["Real-time market data", "ML-powered insights", "Technical analysis tools"],
        image: "/images/projects/stock-intelligence.png"
    }
];

export default projects;
