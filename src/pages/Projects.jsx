import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="projects-page">
            <div className="projects-container">
                <header className="projects-header">
                    <h1 className="projects-main-title">My Projects</h1>
                    <p className="projects-subtitle">Things I've built and launched</p>
                </header>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <section className="projects-section">
                        <h2 className="section-heading">Featured</h2>
                        <div className="projects-grid">
                            {featuredProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <section className="projects-section">
                        <h2 className="section-heading">Other Projects</h2>
                        <div className="projects-grid">
                            {otherProjects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
