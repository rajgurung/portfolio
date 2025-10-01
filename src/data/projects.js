const projects = [
    {
        id: 1,
        title: "Football API",
        description: "Premier League data API serving hundreds of clients with real-time match data, statistics, and team information. Built to handle high-volume requests efficiently.",
        tech: ["Phoenix", "Elixir", "PostgreSQL", "Redis"],
        github: null, // Add your GitHub link if public
        demo: null,   // Add live demo link if available
        featured: true,
        impact: ["500+ daily users", "50k API calls/day"],
        image: "/images/projects/football-api.png" // You can add actual images later
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "This website! A minimal, clean portfolio built with React featuring a blog system, dark mode toggle, and responsive design. Focused on readability and user experience.",
        tech: ["React", "JavaScript", "React Router", "CSS"],
        github: "https://github.com/rajgurung/portfolio",
        demo: "https://rajgurung.me",
        featured: true,
        impact: ["Dark mode support", "Markdown-based blog", "Mobile responsive"],
        image: "/images/projects/portfolio.png"
    },
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
    }
];

export default projects;
