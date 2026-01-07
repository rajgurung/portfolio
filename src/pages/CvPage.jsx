import { cvData } from '../data/cv';

export default function CvPage() {
  return (
    <div className="cv-page">
      {/* Two Column Layout */}
      <div className="cv-container">
        {/* Main Content */}
        <main className="cv-main">
          {/* Name/Title - integrated at top of column */}
          <div className="cv-name-section">
            <h1 className="cv-name">{cvData.name}</h1>
            <p className="cv-title">{cvData.title}</p>
          </div>

          {/* Summary */}
          <section className="cv-section">
            <h2 className="cv-section-title">Professional Summary</h2>
            <p className="cv-summary">{cvData.summary}</p>
          </section>

          {/* Experience */}
          <section className="cv-section">
            <h2 className="cv-section-title">Experience</h2>
            {cvData.experience.map((job, index) => (
              <article key={index} className="cv-job">
                <div className="cv-job-header">
                  <h3 className="cv-company">{job.company}</h3>
                  <span className="cv-dates">{job.dates}</span>
                </div>
                <p className="cv-job-title">{job.title} • {job.location}</p>
                {job.description && (
                  <p className="cv-job-description">{job.description}</p>
                )}
                <ul className="cv-bullets">
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} dangerouslySetInnerHTML={{ __html: bullet }} />
                  ))}
                </ul>
                {job.tech && (
                  <p className="cv-tech">
                    <strong>Tech:</strong> {job.tech}
                  </p>
                )}
              </article>
            ))}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="cv-sidebar">
          {/* Contact + Download */}
          <div className="cv-sidebar-section">
            <h3 className="cv-sidebar-title">Contact</h3>
            <a href={`mailto:${cvData.email}`} className="cv-contact-item">
              📧 {cvData.email}
            </a>
            <a
              href={`https://${cvData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-contact-item"
            >
              💼 LinkedIn
            </a>
            <a
              href={`https://${cvData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-contact-item"
            >
              🐙 GitHub
            </a>
            <a
              href="/raj-gurung-cv.pdf"
              download="raj-gurung-cv.pdf"
              className="cv-download-btn"
            >
              📄 Download PDF
            </a>
          </div>

          {/* Skills */}
          <div className="cv-sidebar-section">
            <h3 className="cv-sidebar-title">Skills</h3>
            {Object.entries(cvData.skills).map(([category, skillGroups]) => (
              <div key={category} className="cv-skill-category">
                <h4 className="cv-skill-category-name">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <div className="cv-skill-lines">
                  {skillGroups.map((group, index) => (
                    <p key={index} className="cv-skill-line">
                      <span className="cv-skill-arrow">→</span> {group.join(', ')}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="cv-sidebar-section">
            <h3 className="cv-sidebar-title">Education</h3>
            {cvData.education.map((edu, index) => (
              <div key={index} className="cv-education-item">
                <p className="cv-degree">{edu.degree}</p>
                <p className="cv-school">{edu.school}</p>
                <p className="cv-years">{edu.years}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
