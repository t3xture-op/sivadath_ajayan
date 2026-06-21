import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Github = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((el) => observer.observe(el));

    return () => {
      projectCards.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projectsData = [
    {
      id: 1,
      title: 'MalWatch Malware Sandbox',
      category: 'Cybersecurity Analyst',
      year: '2026',
      summary: 'A behavior-based malware analysis sandbox that monitors system activity in real-time and detects suspicious behavior such as ransomware and process bursts.',
      stats: 'Real-time Threat Audits',
      tech: ['Python', 'psutil', 'watchdog', 'Log Analysis', 'JSON Report Engine', 'Git'],
      github: 'https://github.com/t3xture-op/MalWatch',
      demo: '#',
      gradient: 'var(--accent-gradient-3)',
      bullets: [
        'Designed a behavioral analyzer capturing file modifications, process spawns, and network connections in real-time.',
        'Implemented heuristics to detect suspicious process bursts and ransomware renaming patterns (mass extension shifts).',
        'Engineered a custom risk-scoring engine that aggregates threat vectors and outputs detailed JSON reports.',
        'Built safe-testing validation protocols (network isolation checks, VM context warnings).'
      ]
    },
    {
      id: 2,
      title: 'AI-Enabled Attendance System',
      category: 'AI/ML Developer',
      year: '2024',
      summary: 'An automated computer vision model for tracking student attendance, featuring deep pipeline structures and administrative interfaces.',
      stats: '92% Accurate | -40% Time',
      tech: ['Python', 'OpenCV', 'AI/ML Pipeline', 'Database Integration', 'Bash Scripting', 'Git'],
      github: 'https://github.com/vickyte/ai',
      demo: '#',
      gradient: 'var(--accent-gradient-2)',
      bullets: [
        'Architected an end-to-end capture, pre-processing, and neural network inference pipeline.',
        'Engineered custom OpenCV face-alignment and histogram-equalization routines, achieving 92% accurate matches.',
        'Reduced administrative attendance verification timelines by 40% for batches of 30+ students.',
        'Linked local classification engines to sqlite structures for automated Excel export operations.'
      ]
    },
    {
      id: 3,
      title: 'Anand Medicals E-Commerce Platform',
      category: 'Full Stack MERN',
      year: '2023',
      summary: 'A fully functional, responsive medical e-commerce application serving 100+ product listings with unified cart and order tracking.',
      stats: '100+ Listings | 15+ APIs',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'CSS3', 'Git'],
      github: 'https://github.com/t3xture-op/anand-medicals',
      demo: '#',
      gradient: 'var(--accent-gradient-1)',
      bullets: [
        'Independently translated complex Figma UI/UX requirements into reusable, modular React components.',
        'Designed and integrated 15+ RESTful API endpoints for catalog retrieval, cart persistence, and order workflows.',
        'Applied responsive CSS best practices to guarantee seamless layout matching across phone, tablet, and desktop viewports.',
        'Optimized core asset bundles and script execution to reduce average initial page load latency.'
      ]
    }
  ];

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid grid-3">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass reveal">
              {/* Graphic Header card */}
              <div
                className="project-banner"
                style={{ background: project.gradient }}
              >
                <div className="banner-overlay"></div>
                <div className="banner-content">
                  <span className="project-year badge">{project.year}</span>
                  <span className="project-stats-pill badge badge-accent">{project.stats}</span>
                  <h3 className="project-banner-title">{project.title}</h3>
                  <span className="project-banner-category">{project.category}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="project-info">
                <p className="project-summary">{project.summary}</p>

                {/* Tech Pills */}
                <div className="project-tech-badges">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="badge">{t}</span>
                  ))}
                </div>

                {/* Expanding Details */}
                <div className={`project-bullets-container ${expandedProject === project.id ? 'expanded' : ''}`}>
                  <h4 className="bullets-title">Key Contributions:</h4>
                  <ul className="bullets-list">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx}>
                        <CheckCircle size={14} className="bullet-check" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions & Toggle */}
                <div className="project-card-footer">
                  <button
                    className="btn-text-toggle"
                    onClick={() => toggleExpand(project.id)}
                  >
                    <span>{expandedProject === project.id ? 'Hide Details' : 'View Details'}</span>
                    {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      title="View Source Code"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        className="project-link-btn primary"
                        title="View Live Demo"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
        }

        .project-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-align: left;
          height: fit-content;
        }

        /* Banner Graphics styling */
        .project-banner {
          height: 180px;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          color: #070a13;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(7, 10, 19, 0.05) 0%, rgba(7, 10, 19, 0.8) 100%);
          z-index: 1;
        }

        .banner-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .project-year {
          position: absolute;
          top: -100px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          color: var(--text-primary);
          font-weight: 600;
        }

        .project-stats-pill {
          position: absolute;
          top: -100px;
          left: 0;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .project-banner-title {
          font-size: 1.4rem;
          line-height: 1.25;
          margin-bottom: 4px;
          color: #ffffff;
        }

        .project-banner-category {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--accent-1);
        }

        /* Info Block */
        .project-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Tech Pills styling */
        .project-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        /* Expanded Bullets transition */
        .project-bullets-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-top: 0px solid var(--border-color);
        }

        .project-bullets-container.expanded {
          max-height: 350px;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
          margin-bottom: 24px;
        }

        .bullets-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-primary);
        }

        .bullets-list {
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bullets-list li {
          display: flex;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .bullet-check {
          color: var(--accent-3);
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Card Footer styling */
        .project-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        .btn-text-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          background: transparent;
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .btn-text-toggle:hover {
          color: var(--accent-1);
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.05);
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .project-link-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: all 0.25s ease;
        }

        .project-link-btn:hover {
          border-color: var(--accent-color);
          color: var(--accent-1);
          background: rgba(var(--accent-rgb), 0.05);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .project-banner {
            height: 150px;
            padding: 16px;
          }
          
          .project-banner-title {
            font-size: 1.15rem;
          }
          
          .project-info {
            padding: 16px;
          }
          
          .project-card-footer {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          
          .project-links {
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
