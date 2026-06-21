import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light';
  });
  const [showTerminal, setShowTerminal] = useState(false);

  // Sync theme with body class and local storage
  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightTheme]);

  // Section observer for Navbar active status
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Standard scroll listener for other elements
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run initially in case elements are already visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  const handleScrollTo = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        isLightTheme={isLightTheme}
        toggleTheme={toggleTheme}
        setShowTerminal={setShowTerminal}
      />

      {/* Main Sections */}
      <Hero handleScrollTo={handleScrollTo} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      {/* Terminal Simulator overlay */}
      <Terminal showTerminal={showTerminal} setShowTerminal={setShowTerminal} />

      {/* Footer */}
      <footer className="footer glass">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Sivadath Ajayan. All rights reserved.</p>
          <p className="footer-built">Built with React, Vite, and Premium CSS.</p>
        </div>
      </footer>

      <style>{`
        /* Global App wrapper adjustments */
        .footer {
          margin-top: 80px;
          padding: 30px 24px;
          text-align: center;
          border-radius: 0;
          border-left: none;
          border-right: none;
          border-bottom: none;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-built {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default App;
