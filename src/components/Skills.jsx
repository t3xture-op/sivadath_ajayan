import React, { useState, useEffect } from 'react';
import { Shield, Brain, Layout, Settings } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

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

    const el = document.querySelector('.reveal-skills');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'cyber', name: 'Cybersecurity', icon: <Shield size={16} /> },
    { id: 'aiml', name: 'AI & Machine Learning', icon: <Brain size={16} /> },
    { id: 'web', name: 'Web Development', icon: <Layout size={16} /> },
    { id: 'devops', name: 'DevOps & Tools', icon: <Settings size={16} /> },
  ];

  const skillsData = [
    // Cybersecurity (Offensive)
    { name: 'Penetration Testing', category: 'cyber', level: '80%', desc: 'Active exploitation of systems, services, and web apps in lab and CTF environments.' },
    { name: 'Web App Exploitation', category: 'cyber', level: '80%', desc: 'Identifying and exploiting OWASP Top 10 vulnerabilities — SQLi, XSS, SSRF, IDOR, RCE.' },
    { name: 'Privilege Escalation', category: 'cyber', level: '75%', desc: 'Linux and Windows privesc techniques — SUID abuse, kernel exploits, token impersonation, misconfigs.' },
    { name: 'Recon & Enumeration', category: 'cyber', level: '80%', desc: 'Nmap, Gobuster, ffuf, service fingerprinting, subdomain enumeration, and attack surface mapping.' },
    { name: 'Exploit Development & Tooling', category: 'cyber', level: '70%', desc: 'Writing custom exploits, Burp Suite, Metasploit, payload crafting, and post-exploitation techniques.' },
    { name: 'Malware Analysis', category: 'cyber', level: '75%', desc: 'Behavioral sandbox analysis — monitoring process spawns, file changes, and network activity.' },

    // AI & Machine Learning
    { name: 'Python Programing', category: 'aiml', level: '90%', desc: 'Automation scripting, system checks, and custom analytics.' },
    { name: 'OpenCV Computer Vision', category: 'aiml', level: '85%', desc: 'Facial detection pipelines, alignment filters, and feature classification.' },
    { name: 'Data Engineering', category: 'aiml', level: '85%', desc: 'Data cleaning, feature manipulation, and plotting with Pandas, NumPy, and Matplotlib.' },
    { name: 'ML Pipeline Workflows', category: 'aiml', level: '75%', desc: 'Supervised learning architectures, feature scaling, and precision/recall/F1 audits.' },

    // Web Development
    { name: 'React.js', category: 'web', level: '90%', desc: 'Modular components, reactive states, hooks, and dynamic data-binding.' },
    { name: 'Node.js & Express.js', category: 'web', level: '80%', desc: 'Routing, middleware, controller paradigms, and server orchestration.' },
    { name: 'RESTful API Engineering', category: 'web', level: '85%', desc: 'Creating request validation schemes and endpoint specifications.' },
    { name: 'MongoDB & Databases', category: 'web', level: '80%', desc: 'NoSQL document references, aggregation queries, and MySQL integrations.' },

    // DevOps & Tools
    { name: 'Linux OS & CLI', category: 'devops', level: '80%', desc: 'Terminal navigation, execution triggers, and file system permissions.' },
    { name: 'Bash & Shell Scripting', category: 'devops', level: '75%', desc: 'Automation of file management operations, parsing utilities, and process audits.' },
    { name: 'Git & GitHub versioning', category: 'devops', level: '85%', desc: 'Branch management, pull-request pipelines, and code conflicts mitigation.' },
    { name: 'AWS Cloud', category: 'devops', level: '55%', desc: 'EC2 configuration, basic networking parameters, and cloud bucket setups.' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="reveal-skills reveal-content">
          {/* Tab Navigation */}
          <div className="skills-tabs glass">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.icon && <span className="tab-icon">{cat.icon}</span>}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid grid-3">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card glass glass-hover">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-badge badge badge-accent">{skill.level}</span>
                </div>
                <p className="skill-desc">{skill.desc}</p>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
        }

        .reveal-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal-content.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tabs Styling */
        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          padding: 8px;
          border-radius: 9999px;
          gap: 6px;
          margin-bottom: 48px;
          max-width: fit-content;
          margin-left: auto;
          margin-right: auto;
          justify-content: center;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          background: transparent;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .tab-btn.active {
          background: var(--accent-gradient-1);
          color: #070a13;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.2);
        }

        .tab-icon {
          display: flex;
          align-items: center;
        }

        /* Skills Cards */
        .skill-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .skill-header h4 {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .skill-badge {
          font-size: 0.75rem;
          font-weight: 700;
        }

        .skill-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
          flex-grow: 1;
        }

        /* Progress Bar */
        .progress-bar-container {
          width: 100%;
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: var(--accent-gradient-1);
          border-radius: 9999px;
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
        }

        @media (max-width: 768px) {
          .skills-tabs {
            border-radius: 20px;
            width: 100%;
            max-width: none;
            padding: 12px;
          }
          
          .tab-btn {
            flex-grow: 1;
            justify-content: center;
            padding: 8px 12px;
            font-size: 0.8rem;
          }
          
          .skill-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
