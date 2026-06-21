import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

const Navbar = ({ activeSection, isLightTheme, toggleTheme, setShowTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" className="logo" onClick={(e) => handleClick(e, '#home')}>
          <span className="logo-initials">SA</span>
          <span className="logo-text">teXture.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="cli-btn"
            onClick={() => setShowTerminal(prev => !prev)}
            title="Open Interactive CLI Console"
          >
            <Terminal size={18} />
            <span>CLI Mode</span>
          </button>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="nav-controls-mobile">
          <button className="theme-toggle-mobile" onClick={toggleTheme} aria-label="Toggle Theme">
            {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="cli-btn-mobile" onClick={() => setShowTerminal(prev => !prev)} title="Open CLI">
            <Terminal size={18} />
          </button>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`nav-link-mobile ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            onClick={(e) => handleClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
      </div>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 24px 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }

        .navbar-container.scrolled {
          padding: 16px 0;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--card-shadow);
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
          font-family: var(--font-heading);
        }

        .logo-initials {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--accent-gradient-1);
          color: #070a13;
          font-size: 0.95rem;
        }

        .logo-text {
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          padding: 6px 0;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gradient-1);
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .cli-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.25);
          color: var(--accent-1);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .cli-btn:hover {
          background: var(--accent-gradient-1);
          color: #070a13;
          border-color: transparent;
          box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.4);
          transform: translateY(-2px);
        }

        .theme-toggle {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          border-color: var(--accent-color);
          color: var(--accent-1);
          background: rgba(var(--accent-rgb), 0.05);
        }

        .nav-controls-mobile {
          display: none;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-mobile, .cli-btn-mobile {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hamburger {
          background: transparent;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-menu-mobile {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-menu-mobile.open {
          transform: translateX(0);
        }

        .nav-link-mobile {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 600;
          font-family: var(--font-heading);
        }

        .nav-link-mobile:hover, .nav-link-mobile.active {
          color: var(--accent-1);
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }
          .nav-controls-mobile {
            display: flex;
          }
          .navbar-container {
            padding: 16px 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
