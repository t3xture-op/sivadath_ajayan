import React, { useEffect } from 'react';
import { User, Code, Brain, Users, Shield } from 'lucide-react';

const About = () => {
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

    const reveals = document.querySelectorAll('.reveal-about');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const stats = [
    { value: 'Red Team', label: 'Offensive Security', detail: 'Pentesting, exploit development & vulnerability research' },
    { value: 'CTFs', label: 'Hands-on Hacking', detail: 'TryHackMe labs, web exploitation & privilege escalation' },
    { value: '92%', label: 'AI Facial Recognition', detail: 'OpenCV image preprocessing & model inference' },
    { value: 'MERN', label: 'Full Stack Apps', detail: 'End-to-end web architecture with secure APIs' },
  ];

  const softSkills = [
    { icon: <Shield size={24} />, title: 'Offensive Security Focus', desc: 'Pentesting, exploit development, and vulnerability research. Breaking into systems to identify weaknesses before real attackers do.' },
    { icon: <Brain size={24} />, title: 'CTF & Lab Practice', desc: 'Active on TryHackMe — hands-on with web exploitation, privilege escalation, enumeration, and network attacks. Currently building an offensive security project.' },
    { icon: <Users size={24} />, title: 'Attacker-to-Builder Mindset', desc: 'Leveraging offensive findings to write hardened code — understanding attacks from the inside out.' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid grid-2">
          {/* Professional Narrative */}
          <div className="reveal-about left-pane">
            <div className="narrative-card glass">
              <div className="narrative-header">
                <User size={22} className="accent-icon" />
                <h3>Professional Summary</h3>
              </div>
              <p>
                I got into cybersecurity by learning how things break. My focus is <strong>offensive security</strong> — penetration testing, ethical hacking, exploit development, and vulnerability research. I actively sharpen these skills on TryHackMe and through hands-on lab environments, tackling challenges in web exploitation, privilege escalation, enumeration, and network attacks.
              </p>
              <br />
              <p>
                I'm currently building an <strong>offensive security project</strong> and have previously built <strong>MalWatch</strong>, a behavioral malware analysis sandbox. In parallel, I design intelligent systems — including an AI-powered attendance pipeline using Python and OpenCV, and full-stack web applications with the MERN stack.
              </p>
              <br />
              <p>
                Currently pursuing my <strong>BCA at the College of Applied Science, Adoor</strong> (2026), my goal is to work as a penetration tester — simulating real-world attacks, finding exploits, and helping organizations harden their defenses from an attacker's perspective.
              </p>
            </div>
          </div>

          {/* Soft Skills Cards */}
          <div className="reveal-about right-pane">
            <div className="skills-values">
              {softSkills.map((skill, index) => (
                <div key={index} className="value-card glass glass-hover">
                  <div className="value-icon-container">
                    {skill.icon}
                  </div>
                  <div className="value-info">
                    <h4>{skill.title}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-container reveal-about">
          <h3>Core Competencies & Metrics</h3>
          <div className="stats-grid grid-3">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass glass-hover">
                <span className="stat-value text-gradient">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <p className="stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .about-grid {
          margin-bottom: 64px;
        }

        .reveal-about {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-about.left-pane {
          transform: translateX(-30px);
        }

        .reveal-about.right-pane {
          transform: translateX(30px);
        }

        .reveal-about.left-pane.active,
        .reveal-about.right-pane.active {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-about.active {
          opacity: 1;
          transform: translateY(0);
        }

        .narrative-card {
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .narrative-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .accent-icon {
          color: var(--accent-1);
        }

        .narrative-card h3 {
          font-size: 1.5rem;
        }

        .narrative-card p {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
        }

        .skills-values {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
          justify-content: space-between;
        }

        .value-card {
          display: flex;
          gap: 20px;
          padding: 24px;
        }

        .value-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--accent-1);
          flex-shrink: 0;
        }

        .value-info h4 {
          font-size: 1.1rem;
          margin-bottom: 6px;
        }

        .value-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Stats Grid Section */
        .stats-container {
          margin-top: 80px;
          text-align: center;
        }

        .stats-container h3 {
          font-size: 1.75rem;
          margin-bottom: 32px;
          color: var(--text-primary);
        }

        .stats-grid {
          margin-top: 16px;
        }

        .stat-card {
          padding: 32px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 2.25rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 8px;
        }

        .stat-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 6px;
        }

        .stat-detail {
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .narrative-card {
            padding: 24px;
          }
          
          .value-card {
            padding: 16px;
            gap: 16px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .stat-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
