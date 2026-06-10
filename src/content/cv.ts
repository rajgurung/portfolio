export type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string;
  bullets: string[];
  tech?: string;
};

export const cv = {
  name: "Raj Gurung",
  title: "Senior Software Engineer (Staff-Track)",
  email: "gurungraj26@gmail.com",
  linkedin: "https://www.linkedin.com/in/raj---gurung",
  github: "https://github.com/rajgurung",
  summary:
    "Senior Software Engineer with 10+ years designing, building, and operating large-scale distributed systems across startups and enterprise. Experienced leading cross-functional work spanning ML integration, platform reliability, and performance — on systems handling millions of requests daily. Known for end-to-end ownership, driving alignment through RFCs and design reviews, and raising the bar through mentorship and operational excellence.",
  experience: [
    {
      company: "Indeed",
      title: "Snr. Software Engineer",
      dates: "Mar 2021 — Aug 2025",
      location: "Remote (London)",
      description:
        "Continued from Syft post-acquisition with expanded scope and platform scale.",
      bullets: [
        "Technical lead for core job offering and agency partner systems, ensuring Time SLA compliance across time-sensitive workflows.",
        "Led ML decisioning model integration into the core offering pipeline, improving allocation accuracy and operational efficiency.",
        "Owned platform reliability and observability — SLOs, alerts, and Datadog dashboards for fast incident response.",
        "Reduced underperforming core API response times from 1+ minute to sub-second.",
        "Led the Service Excellence initiative — onboarded a major enterprise client through phased rollout, enabling multi-million-pound contracts.",
        "Operated on systems handling 2M+ daily and 12M+ weekly requests.",
        "Mentored junior, mid and senior engineers, resulting in multiple promotions.",
        "Interviewed Senior and Staff Engineer candidates, raising the technical bar.",
      ],
      tech: "AWS · Ruby on Rails · Sidekiq · Kafka · Snowflake · PostgreSQL · Datadog · React",
    },
    {
      company: "Syft",
      title: "Snr. Software Engineer",
      dates: "Oct 2017 — Mar 2021",
      location: "Remote (London)",
      description:
        "Real-time matching of job seekers with on-demand opportunities — acquired by Indeed.",
      bullets: [
        "Early technical hire with end-to-end ownership from ideation to production.",
        "Led development of key verticals: workforce management, multi-tenant employer, and agency partner solutions.",
        "Designed scalable backend systems for real-time job matching based on worker availability and employer demand.",
        "Owned production stability — diagnosing and resolving live issues under load as usage scaled.",
        "Played a key role during the Indeed acquisition, ensuring platform stability and continuity.",
      ],
      tech: "Heroku · Ruby on Rails · Sidekiq · PostgreSQL · Rollbar · React",
    },
    {
      company: "The Ai Corporation",
      title: "Software Engineer",
      dates: "Jan 2016 — Sep 2017",
      location: "Guildford",
      description: "Industry-leading fraud management service.",
      bullets: [
        "Built real-time systems used to assess and prevent fraudulent transactions.",
        "Designed high-throughput, low-latency workflows in a distributed system.",
        "Improved transaction processing performance by 10x while preserving accuracy.",
        "Built and maintained scalable APIs supporting core fraud detection.",
      ],
    },
    {
      company: "In4System",
      title: "Software Engineer",
      dates: "Dec 2013 — Dec 2015",
      location: "Wokingham",
      description:
        "Asset management software covering 850K social housing units. Later acquired by MRI Software.",
      bullets: [
        "Led a large-scale migration from ASP.NET to Rails, standardising best practices.",
        "Developed REST APIs for a remote mobile team across cross-functional collaboration.",
      ],
    },
    {
      company: "Antix",
      title: "Junior Software Engineer",
      dates: "Oct 2012 — Nov 2013",
      location: "Reading",
      description:
        "Native games across STBs, TVs, phones, tablets and PCs.",
      bullets: [
        "Developed a global online game platform with multi-language support.",
        "Integrated social logins for seamless cross-device access.",
      ],
    },
  ] satisfies Role[],
  skills: {
    Languages: ["Ruby", "JavaScript", "TypeScript", "SQL", "Elixir", "Go", "Java", "Rust (learning)"],
    Frameworks: ["Rails", "Phoenix", "React", "Sidekiq"],
    Data: ["PostgreSQL", "Redis", "Kafka", "Snowflake"],
    Infrastructure: ["AWS", "Heroku", "Docker", "Datadog", "CI/CD", "Terraform", "Railway"],
    "GenAI": ["Anthropic Claude", "OpenAI", "LLM-assisted Dev"],
    Practices: ["Distributed Systems", "System Design", "Performance Tuning", "Observability/SLOs", "Mentoring"],
  },
  education: [
    { degree: "MSc Information Systems", school: "University of Surrey, Guildford", years: "2011 — 2012" },
    { degree: "BSc (Hons) Computer Science", school: "Anglia Ruskin University, Chelmsford", years: "2008 — 2011" },
    { degree: "BTech Information Technology", school: "Bracknell & Wokingham College", years: "2005 — 2007" },
  ],
};
