import React, { useState, useEffect, useCallback, useRef } from 'react';
import profilePic from '../images/profile_pic.jpg';
import projects from '../data/projects';
import '../styelsheets/hire.css';

const HirePage = () => {
    // Testimonials data
    const testimonials = [
        {
            id: 1,
            author: "Jonathan Barrett",
            role: "Software Engineering Manager at Indeed",
            linkedin: "https://www.linkedin.com/in/jonathan-e-barrett/",
            paragraphs: [
                "I had the privilege of managing Raj for a few years at Indeed Flex. I watched him grow from a highly capable engineer to a strong colleague enabler.",
                "Raj is the rare engineer who is as aware of the human element of software development as he is the technical. During our time together, I was impressed by his skill in breaking down work according to the technical aspects while also considering the people on both the implementation and user sides.",
                "For example, during our work on the Service Excellence team, Raj was more than capable of triaging any issue that arrived on our desk. He could use his extensive knowledge to correctly diagnose the problem and highlight likely solutions, ready for another engineer to pick up. Additionally, he would consistently consider how quickly an issue could be patched in order to unblock the user who had reported it. This two tier approach (enabling his colleagues while ensuring users were also unblocked) allowed for us to make a significant impact on our incoming support issues, freeing up engineers for deeper work.",
                "Beyond that, Raj is also a solid mentor, having successfully onboarded many new engineers into the team, while also working closely with less senior engineers to help them grow and progress.",
                "Raj embodies the Tech Lead attitude, and I wouldn't hesitate to work with him again."
            ]
        },
        {
            id: 2,
            author: "Francisco Javier López",
            role: "Staff Backend Engineer",
            linkedin: "https://www.linkedin.com/in/fjlopez/",
            paragraphs: [
                "Working with Raj has been an absolute pleasure. He is not only a highly talented backend engineer, but also the kind of teammate that every group wishes to have. His technical skills are outstanding — from designing robust architectures to solving complex challenges with creativity and precision. Raj has an impressive ability to balance writing clean, maintainable code with delivering practical solutions that move projects forward.",
                "What makes Raj truly special, however, goes beyond his technical expertise. He is proactive, dependable, and always ready to step up when the team needs him. His positive energy is contagious and creates an environment where people feel motivated and supported. Raj has a natural talent for collaboration — he listens carefully, values others' perspectives, and contributes ideas that make the whole team stronger.",
                "I also admire his generosity in sharing knowledge. Raj takes the time to mentor and guide teammates, making sure everyone grows together. He has a unique way of making people feel comfortable and confident, which strengthens both team spirit and performance.",
                "In short, Raj combines excellence as an engineer with kindness, humility, and a true passion for teamwork. I consider myself lucky to have worked alongside him, and I have no doubt he will be a tremendous asset wherever he goes. Any organization would not only gain a great engineer, but also a wonderful person who elevates those around him."
            ]
        },
        {
            id: 3,
            author: "Palak Jain",
            role: "Senior Product Manager",
            linkedin: "https://www.linkedin.com/in/palak13/",
            paragraphs: [
                "Raj is an exceptional engineering partner - proactive, responsive, and always willing to jump in to help solve problems. He brings clarity to complex situations, asks the right questions, and ensures everyone is aligned before moving forward.",
                "What I appreciate most about Raj is his ability to balance speed with quality. He's highly collaborative, keeps communication open, and makes sure solutions are well thought out and clearly documented. Even in high-pressure situations, he remains calm, approachable, and focused on delivering the best outcome for the team and our users.",
                "Working with Raj has been an absolute pleasure, and any team would be lucky to have someone with his dedication, expertise, and positive energy."
            ]
        },
        {
            id: 4,
            author: "Adrian Booth",
            role: "Software Developer",
            linkedin: "https://www.linkedin.com/in/adrianfbooth/",
            paragraphs: [
                "I worked alongside Raj during our time at Indeed and I couldn't have asked for a better colleague to run ideas past. We worked together on the Agency team when I joined and I remember he was always willing to give a helping hand in my early days. He presented a deep and knowledgeable insight of the system and was ready to walk me through everything with patience.",
                "Raj is a great team player and approaches problems with a combination of pragmatism and the need to present a solid technical solution that won't completely fall over. He grew as a developer during our time at Indeed and was leading projects and setting the direction towards the end of his tenure. He's got a incredibly valuable skill set that can contribute to a wide range of problems that any company throws his way. Hire this man!"
            ]
        },
        {
            id: 5,
            author: "Gosha Tcherednitchenko",
            role: "Full-Stack Software Engineer",
            linkedin: "https://www.linkedin.com/in/goshatch/",
            paragraphs: [
                "I had the pleasure to work with Raj during my time at Indeed Flex. He is everything you'd want in a software engineer: highly technically skilled and caring for his craft, but also a thoughtful communicator, and an empathetic human being. Any team or organisation would be lucky to have him."
            ]
        },
        {
            id: 6,
            author: "Aliki Giakou",
            role: "Software Engineer",
            linkedin: "https://www.linkedin.com/in/alikigiakou/",
            paragraphs: [
                "I had the pleasure of working with Raj, and I can confidently say he is an exceptional software engineer. Technically strong and highly dependable, Raj consistently delivers high-quality work while maintaining a collaborative and supportive attitude. He's a true team player, always eager to help others, share knowledge and contribute to the success of the team. I would gladly work with him again and highly recommend him to any team looking for a talented and reliable engineer."
            ]
        },
        {
            id: 7,
            author: "Boris Jakubik",
            role: "Software Engineer",
            linkedin: "https://www.linkedin.com/in/boris-jakubik/",
            paragraphs: [
                "Raj is one of the best back-end developers I have ever worked with, and it was always a pleasure to collaborate with him on the same projects. He is not only highly knowledgeable and helpful but also an exceptional team player and a great person to work with. I was particularly impressed by his ability to lead cross-functional teams, ensuring smooth collaboration between different departments and driving projects to successful completion. Any company would be fortunate to have Raj on their team, both for his technical expertise and his leadership skills."
            ]
        },
        {
            id: 8,
            author: "Bhanu Vaddi",
            role: "Software Engineer",
            linkedin: "https://www.linkedin.com/in/bhanuvaddi/",
            paragraphs: [
                "I worked with Raj on Ruby project. He has great skills on that, and is very easygoing. Raj has deep knowledge of Ruby on Rails, he can solve any issue within minutes. In addition he managed meetings for the team, and has great ability to deal with his peers. I was very glad working with him in the team, and for sure I would work with him again."
            ]
        }
    ];

    // Experience data
    const experiences = [
        {
            id: 1,
            title: "Senior Software Engineer",
            company: "Indeed",
            logo: "/images/logos/indeed.png",
            website: "https://indeedflex.co.uk",
            duration: "Mar 2021 - Aug 2025",
            description: "Led multiple engineering projects and cross-functional teams using RFCs, design reviews, and retrospectives. Developed data products, eliminated bottlenecks in core APIs (reducing response time from 1min+ to under 1s), and led the Service Excellence Team. Mentored junior developers and led technical interviews for Senior and Staff Engineers.",
            tech: ["AWS", "Rails", "Sidekiq", "Kafka", "Snowflake", "PostgreSQL", "React", "Datadog"]
        },
        {
            id: 2,
            title: "Senior Software Engineer",
            company: "Syft (acquired by Indeed)",
            logo: "/images/logos/syft.png",
            website: "https://indeedflex.co.uk",
            duration: "Oct 2017 - Mar 2021",
            description: "One of the early technical members with end-to-end ownership from ideation to post-production. Led development of key verticals including workforce management, multi-tenant employer, and agency partner solutions. Helped scale the platform through to acquisition by Indeed.",
            tech: ["Heroku", "Rails", "Sidekiq", "Rollbar", "PostgreSQL", "React"]
        },
        {
            id: 3,
            title: "Software Engineer",
            company: "The Ai Corporation",
            logo: "/images/logos/ai-corp.png",
            website: "https://www.aicorporation.com",
            duration: "Jan 2016 - Sep 2017",
            description: "Industry-leading fraud management service. Optimised real-time payment to prevent fraudulent transactions in a distributed system, boosting TPS by 10x. Designed scalable APIs and led a complex authorisation system enabling granular manager access.",
            tech: ["Rails", "PostgreSQL", "Distributed Systems", "REST APIs"]
        },
        {
            id: 4,
            title: "Software Engineer",
            company: "In4System (acquired by MRI Software)",
            logo: "https://image.pitchbook.com/U3myX2sdTTCkDL19Ob6T0pxeNNQ1567112495490_200x200",
            website: "https://www.mrisoftware.com",
            duration: "Dec 2013 - Dec 2015",
            description: "Asset Management Software for 850K social housing units. Led a large-scale migration from ASP.NET to Rails, standardising best practices. Developed REST APIs for a remote mobile team, collaborating with cross-functional teams for seamless integration.",
            tech: ["Rails", "PostgreSQL", "ASP.NET", "REST APIs"]
        },
        {
            id: 5,
            title: "Junior Software Engineer",
            company: "Antix",
            logo: "/images/logos/antix.png",
            website: "https://www.crunchbase.com/organization/antix-labs#overview",
            duration: "Oct 2012 - Nov 2013",
            description: "Developed a global online game platform with multi-language support, enabling consumers to play native games on STBs, TVs, phones, tablets and PCs. Integrated social logins for seamless cross-device access, improving user experience.",
            tech: ["Gaming Platform", "Multi-device", "Social Integration", "REST APIs"]
        }
    ];

    // Refs for scroll container and experience items
    const scrollContainerRef = useRef(null);
    const experienceRefs = useRef([]);

    // Carousel state for tracking current visible item
    const [currentIndex, setCurrentIndex] = useState(0);

    // Testimonial expansion state
    const [expandedTestimonials, setExpandedTestimonials] = useState({});

    // Toggle testimonial expansion
    const toggleTestimonial = (id) => {
        setExpandedTestimonials(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Back to top button state
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Active section for sidebar navigation
    const [activeSection, setActiveSection] = useState('about');

    // Sections for sidebar
    const sections = [
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'testimonials', label: 'Testimonials' }
    ];

    // Show back to top button when scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll spy for sidebar navigation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px' }
        );

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Scroll to specific experience
    const scrollToIndex = useCallback((index) => {
        if (experienceRefs.current[index]) {
            experienceRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
            setCurrentIndex(index);
        }
    }, []);

    // Navigation handlers
    const goToNext = useCallback(() => {
        const nextIndex = Math.min(currentIndex + 1, experiences.length - 1);
        scrollToIndex(nextIndex);
    }, [currentIndex, experiences.length, scrollToIndex]);

    const goToPrev = useCallback(() => {
        const prevIndex = Math.max(currentIndex - 1, 0);
        scrollToIndex(prevIndex);
    }, [currentIndex, scrollToIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') goToPrev();
            if (e.key === 'ArrowRight') goToNext();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrev]);

    // Track scroll position to update active dot
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.scrollWidth / experiences.length;
            const index = Math.round(scrollLeft / itemWidth);
            setCurrentIndex(Math.min(index, experiences.length - 1));
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [experiences.length]);

    return (
        <div className="hire-container">
            {/* Sidebar Navigation */}
            <nav className="hire-sidebar">
                {sections.map(section => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={activeSection === section.id ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {section.label}
                    </a>
                ))}
            </nav>

            {/* Hero Section */}
            <section id="about" className="hire-section hero-section">
                <div className="hero-layout">
                    <div className="hero-photo">
                        <img src={profilePic} alt="Raj Gurung" className="profile-image" />
                        <div className="status-badge-wrapper">
                            <span className="status-badge">Available for hire</span>
                        </div>
                        <p className="location-info">
                            London, UK (GMT)<br />
                            Open to all timezones
                        </p>
                    </div>
                    <div className="hero-content">
                        <h1 className="hire-title">Raj Gurung</h1>
                        <h2 className="hire-subtitle">Senior Software Engineer & Technical Partner</h2>
                        <div className="hire-intro">
                            <p>
                                I build systems that need to work at scale. Over <strong>15 years</strong>, I've worked on platforms where downtime isn't an option, like real-time fraud detection, workforce scheduling at <strong>12M weekly requests</strong>, and gaming infrastructure across devices. At Indeed, I reduced critical API response times from <strong>60+ seconds to sub-second</strong> by redesigning data access patterns and caching layers, led the <strong>Agency Partners vertical</strong> implementing SLO-driven monitoring and automated rollbacks, and integrated ML inference into production workflows while maintaining reliability targets.
                            </p>
                            <p>
                                I care about pragmatic architecture, production observability, and teams that own their systems end-to-end. Strongest in backend systems, distributed architectures, and performance optimization. The kind of work where details matter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact/CTA Section */}
            <section id="contact" className="hire-section contact-section">
                <h2 className="section-heading">GET IN TOUCH</h2>
                <p className="contact-intro">
                    I'm always interested in hearing about new opportunities, challenging projects, or just connecting with
                    fellow developers.
                </p>

                <div className="cta-buttons">
                    <a href="mailto:gurungraj26@gmail.com" className="btn-primary">
                        <i className="fas fa-envelope"></i>
                        Send me an email
                    </a>
                    <a href="/raj-gurung-cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <i className="fas fa-download"></i>
                        Download CV
                    </a>
                    <a href="https://github.com/rajgurung" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/raj---gurung/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                </div>
            </section>

            {/* Experience Section - Horizontal Scroll Carousel */}
            <section id="experience" className="hire-section experience-section">
                <h2 className="section-heading">WORK EXPERIENCE</h2>

                <div className="experience-carousel" ref={scrollContainerRef}>
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className="experience-slide"
                            ref={el => experienceRefs.current[index] = el}
                        >
                            <div className="experience-top">
                                {experience.logo && (
                                    <div className="experience-logo">
                                        <img src={experience.logo} alt={`${experience.company} logo`} />
                                    </div>
                                )}
                                <div className="experience-header">
                                    <h3>{experience.title}</h3>
                                    <span className="company-inline">
                                        @ <a
                                            href={experience.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="company-link"
                                        >
                                            {experience.company} <span className="arrow-icon">↗</span>
                                        </a>
                                    </span>
                                    <span className="duration">{experience.duration}</span>
                                </div>
                            </div>
                            <p className="experience-description">
                                {experience.description}
                            </p>
                            <p className="tech-stack-inline">
                                <strong>Tech:</strong> {experience.tech.join(' · ')}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="carousel-navigation">
                    <button
                        className="carousel-nav-btn"
                        onClick={goToPrev}
                        disabled={currentIndex === 0}
                        aria-label="Previous experience"
                    >
                        ←
                    </button>
                    <button
                        className="carousel-nav-btn"
                        onClick={goToNext}
                        disabled={currentIndex === experiences.length - 1}
                        aria-label="Next experience"
                    >
                        →
                    </button>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="hire-section skills-section">
                <h2 className="section-heading">SKILLS</h2>
                <div className="skills-badges">
                    {[
                        { name: "Ruby", icon: "💎" },
                        { name: "Rails", icon: "🛤️" },
                        { name: "Elixir", icon: "⚗️" },
                        { name: "Phoenix", icon: "🔥" },
                        { name: "PostgreSQL", icon: "🐘" },
                        { name: "Redis", icon: "📦" },
                        { name: "AWS", icon: "☁️" },
                        { name: "Kafka", icon: "📨" },
                        { name: "Snowflake", icon: "❄️" },
                        { name: "Sidekiq", icon: "⚙️" },
                        { name: "React", icon: "⚛️" },
                        { name: "JavaScript", icon: "📜" },
                        { name: "TypeScript", icon: "📘" },
                        { name: "Docker", icon: "🐳" },
                        { name: "CI/CD", icon: "🔄" },
                        { name: "Distributed Systems", icon: "🌐" }
                    ].map((skill, index) => (
                        <span key={index} className="skill-badge">
                            <span className="skill-icon">{skill.icon}</span>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>

            {/* Selected Projects Section */}
            <section id="projects" className="hire-section projects-section">
                <h2 className="section-heading">SELECTED PROJECTS</h2>
                <div className="projects-grid">
                    {projects.filter(p => p.featured).map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('project-image-placeholder');
                                        }}
                                    />
                                ) : (
                                    <div className="project-image-placeholder"></div>
                                )}
                                {project.status && (
                                    <span className="project-status-badge">⏸️ Shelved</span>
                                )}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-badge">{tech}</span>
                                    ))}
                                </div>

                                {project.impact && (
                                    <ul className="project-impact">
                                        {project.impact.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="project-links">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link-primary"
                                        >
                                            View Site →
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="hire-section testimonials-section">
                <h2 className="section-heading">TESTIMONIALS</h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => {
                        const isExpanded = expandedTestimonials[testimonial.id];
                        const displayParagraphs = isExpanded ? testimonial.paragraphs : [testimonial.paragraphs[0]];

                        return (
                            <div key={testimonial.id} className="testimonial-item">
                                <blockquote>
                                    {displayParagraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}

                                    {testimonial.paragraphs.length > 1 && (
                                        <button
                                            className="read-more-btn"
                                            onClick={() => toggleTestimonial(testimonial.id)}
                                        >
                                            {isExpanded ? 'Show less' : 'Read more'}
                                        </button>
                                    )}

                                    <footer>
                                        <cite>
                                            — <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="testimonial-author-link">
                                                {testimonial.author} <span className="linkedin-icon">🔗</span>
                                            </a>, {testimonial.role}
                                        </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Footer */}
            <footer className="hire-footer">
                <p>© {new Date().getFullYear()} Raj Gurung</p>
                <p className="footer-attribution">
                    Made with <span className="footer-heart">❤️</span> using <span className="footer-accent">Claude Code</span>, React & JavaScript
                </p>
            </footer>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default HirePage;
