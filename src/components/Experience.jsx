import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const Experience = () => {
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

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((el) => observer.observe(el));

    return () => {
      timelineItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const timelineData = [
    {
      type: 'work',
      title: 'AI Intern',
      subtitle: 'ICT Academy of Kerala, Trivandrum',
      date: 'Dec 2025 – Jan 2026',
      desc: 'Worked within the AI/ML division on real-world pipeline automation and technical knowledge systems.',
      bullets: [
        'Automated 3+ ML data preprocessing pipelines using Python (Pandas, NumPy), reducing manual data preparation time by ~40% and standardizing input formats.',
        'Documented end-to-end AI/ML workflows covering model training, evaluation, and deployment — used as onboarding reference material for new technical staff.',
        'Researched and applied core ML concepts including supervised learning, feature engineering, and model evaluation metrics (accuracy, precision, recall, F1).',
        'Collaborated with technical mentors to align documentation with production pipeline requirements, improving cross-team clarity on versioning and handoffs.',
        'Gained exposure to cloud infrastructure (AWS) and Linux-based environments for running ML workloads.'
      ],
      icon: <Briefcase size={20} />,
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Application (BCA)',
      subtitle: 'College of Applied Science, Adoor (MG University)',
      date: '2023 – 2026',
      desc: 'Pursuing degree with focus on fundamental software engineering, computer networks, database systems, and algorithms.',
      coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Software Engineering', 'Web Technologies'],
      icon: <GraduationCap size={20} />,
    },
    {
      type: 'education',
      title: 'Higher Secondary Schooling (Computer Science)',
      subtitle: 'Government HSS, Kottarakkara',
      date: '2021 – 2023',
      desc: 'Acquired core foundations in programming and database logic.',
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.type}`}>
              {/* Timeline Dot & Icon */}
              <div className="timeline-badge glass">
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="timeline-card glass glass-hover">
                <div className="card-header">
                  <span className="card-date badge badge-accent">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </span>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                </div>

                <div className="card-body">
                  <p>{item.desc}</p>
                  
                  {item.bullets && (
                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {item.coursework && (
                    <div className="coursework-container">
                      <h5>Relevant Coursework:</h5>
                      <div className="coursework-badges">
                        {item.coursework.map((course, idx) => (
                          <span key={idx} className="badge">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .timeline-container {
          position: relative;
          max-width: 850px;
          margin: 0 auto;
          padding: 40px 0;
        }

        /* Center Line */
        .timeline-line {
          position: absolute;
          left: 31px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
          z-index: 0;
        }

        /* Timeline Item */
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-item.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Timeline Badge Icon */
        .timeline-badge {
          position: absolute;
          left: 10px;
          top: 10px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          color: var(--accent-1);
          border: 1px solid var(--border-color);
          z-index: 2;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-badge {
          border-color: var(--accent-color);
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
          color: var(--text-primary);
          background: var(--accent-gradient-1);
        }

        /* Timeline Card */
        .timeline-card {
          padding: 32px;
          text-align: left;
        }

        .card-header h3 {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .card-header h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .card-date {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .card-body p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        /* Bullets */
        .timeline-bullets {
          padding-left: 20px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .timeline-bullets li {
          margin-bottom: 10px;
          position: relative;
          list-style: square;
        }

        /* Coursework styling */
        .coursework-container {
          margin-top: 20px;
        }

        .coursework-container h5 {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .coursework-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 21px;
          }
          
          .timeline-item {
            padding-left: 54px;
            margin-bottom: 36px;
          }
          
          .timeline-badge {
            left: 3px;
            width: 36px;
            height: 36px;
          }
          
          .timeline-card {
            padding: 20px;
          }
          
          .card-header h3 {
            font-size: 1.15rem;
          }
          
          .card-header h4 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
