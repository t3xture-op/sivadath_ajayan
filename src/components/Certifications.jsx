import React, { useEffect } from 'react';
import { Award, ShieldCheck, Server, Terminal, Shield } from 'lucide-react';

const Certifications = () => {
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

    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((el) => observer.observe(el));

    return () => {
      certCards.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const certData = [
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google (via Coursera)',
      icon: <ShieldCheck size={24} />,
      gradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    },
    {
      title: 'TryHackMe Pre Security Learning Path',
      issuer: 'TryHackMe',
      icon: <Shield size={24} />,
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
    },
    {
      title: 'AI and Machine Learning Certification',
      issuer: 'ICT Academy of Kerala',
      icon: <Award size={24} />,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    },
    {
      title: 'AWS with Hands-on Labs',
      issuer: 'KodeKloud',
      icon: <Server size={24} />,
      gradient: 'linear-gradient(135deg, #ff9900 0%, #ff5500 100%)',
    },
    {
      title: 'Shell Scripting Certification',
      issuer: 'KodeKloud',
      icon: <Terminal size={24} />,
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certs-grid grid-3">
          {certData.map((cert, index) => (
            <div key={index} className="cert-card glass glass-hover reveal">
              <div
                className="cert-icon-container"
                style={{ background: cert.gradient }}
              >
                {cert.icon}
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>Verified Credential Issued by: <strong>{cert.issuer}</strong></p>
                <span className="badge badge-accent">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .certs-grid {
          margin-top: 24px;
        }

        .cert-card {
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          text-align: left;
        }

        .cert-icon-container {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #070a13;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .cert-info h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 4px;
          line-height: 1.4;
        }

        .cert-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .cert-card {
            padding: 16px;
            gap: 16px;
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          
          .cert-icon-container {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
