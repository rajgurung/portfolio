import React from 'react';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            {/* Project Image/Thumbnail */}
            <div className="project-image-container">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                <div className="project-image-placeholder">
                    <span className="project-icon">📦</span>
                </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">
                        {project.title}
                        {project.featured && <span className="featured-badge">⭐</span>}
                    </h3>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="project-tech">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Impact Metrics */}
                {project.impact && project.impact.length > 0 && (
                    <div className="project-impact">
                        {project.impact.map((item, index) => (
                            <span key={index} className="impact-item">
                                💡 {item}
                            </span>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="project-links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            GitHub
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link project-link-primary"
                        >
                            Live Demo →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
