import React from 'react';
import { Mail, Phone, MapPin, FileText, ArrowRight } from 'lucide-react';

const Github = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = ({ handleScrollTo }) => {
  return (
    <section id="home" className="hero-section">
      <div className="glow-circle glow-1"></div>
      <div className="glow-circle glow-2"></div>
      
      <div className="hero-content">
        <div className="hero-badge badge badge-accent">
          <span>Available for Cybersecurity & AI/ML Roles</span>
        </div>
        
        <h1 className="hero-title">
          Hi, I am <span className="text-gradient">Sivadath Ajayan</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Offensive Security Enthusiast & AI/ML Developer
        </h2>
        
        <p className="hero-description">
          Focused on offensive security — penetration testing, ethical hacking, exploit development, and vulnerability research. Hands-on with web exploitation, privilege escalation, enumeration, and red team techniques through TryHackMe and lab environments. Also skilled in AI/ML pipelines (Python, OpenCV) and full-stack web development (MERN stack).
        </p>

        {/* Quick Contact Bar */}
        <div className="contact-quick-bar glass">
          <div className="contact-item">
            <Mail size={16} />
            <a href="mailto:sivadathajayan.work@gmail.com">sivadathajayan.work@gmail.com</a>
          </div>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <Phone size={16} />
            <a href="tel:+918304874459">+91 8304874459</a>
          </div>
          <div className="contact-divider"></div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>Kollam, Kerala, India</span>
          </div>
        </div>

        {/* CTAs & Socials */}
        <div className="hero-actions">
          <div className="hero-btns">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#projects');
              }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
            
            {/* Direct Link to a printable resume or PDF */}
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Sivadath_Ajayan_Resume.pdf"
              className="btn btn-secondary"
            >
              <FileText size={18} />
              <span>Get Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/t3xture-op" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sivadath-ajayan" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 140px;
          position: relative;
        }

        /* Glowing Background Circles */
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: 0;
          pointer-events: none;
        }

        .glow-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-gradient-1);
          top: 10%;
          left: -10%;
        }

        .glow-2 {
          width: 350px;
          height: 350px;
          background: var(--accent-gradient-2);
          bottom: 10%;
          right: -5%;
        }

        .hero-content {
          max-width: 850px;
          text-align: center;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-badge {
          margin-bottom: 24px;
          font-weight: 600;
          letter-spacing: 0.5px;
          animation: fadeIn 1s ease;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin-bottom: 16px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        /* Contact Quick Bar */
        .contact-quick-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 16px;
          padding: 12px 28px;
          border-radius: 9999px;
          margin-bottom: 48px;
          font-size: 0.9rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
        }

        .contact-item a {
          color: var(--text-secondary);
        }

        .contact-item a:hover {
          color: var(--accent-1);
        }

        .contact-divider {
          width: 1px;
          height: 16px;
          background-color: var(--border-color);
        }

        /* Hero Actions & Buttons */
        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .hero-btns {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .btn-primary {
          background: var(--accent-gradient-1);
          color: #070a13;
          box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(var(--accent-rgb), 0.4);
          filter: brightness(1.1);
        }

        .btn-secondary {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .social-link:hover {
          color: var(--accent-1);
          border-color: var(--accent-color);
          background: rgba(var(--accent-rgb), 0.05);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .contact-quick-bar {
            flex-direction: column;
            border-radius: 20px;
            padding: 16px 20px;
            gap: 12px;
            width: 100%;
          }
          
          .contact-divider {
            display: none;
          }
          
          .hero-actions {
            flex-direction: column;
            gap: 20px;
          }
          
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
