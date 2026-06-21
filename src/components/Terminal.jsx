import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

const Terminal = ({ showTerminal, setShowTerminal }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Sivadath Ajayan\'s Interactive Developer CLI Console!' },
    { type: 'output', text: 'Type "help" to see a list of available commands.' },
    { type: 'output', text: '' },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showTerminal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showTerminal]);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', text: `sivadath-dev:~$ ${input}` }];
      
      if (trimmedInput === '') {
        setHistory(newHistory);
        setInput('');
        return;
      }

      let response = [];

      switch (trimmedInput) {
        case 'help':
          response = [
            'Available Commands:',
            '  about       - Get Sivadath\'s professional summary',
            '  skills      - List core security, AI/ML & web skills',
            '  experience  - Show timeline of experience',
            '  projects    - Highlight key projects',
            '  certs       - Show certifications & credentials',
            '  contact     - Retrieve phone, email & social links',
            '  clear       - Clear the terminal console',
            '  secret      - Reveal terminal easter egg',
            '  close       - Close the CLI window'
          ];
          break;
        case 'about':
          response = [
            'Sivadath Ajayan | Offensive Security Enthusiast & AI/ML Developer',
            '=================================================================',
            'Focused on breaking systems to find what others miss.',
            'Hands-on with pentesting, ethical hacking, exploit development,',
            'web app exploitation (OWASP Top 10), privilege escalation,',
            'enumeration, and post-exploitation techniques.',
            'Active on TryHackMe — currently building an offensive security project.',
            'Also proficient in AI/ML pipelines (OpenCV, scikit-learn)',
            'and full-stack web development with the MERN stack.',
            'Seeking roles in Penetration Testing, Red Teaming, or Offensive Security.'
          ];
          break;
        case 'skills':
          response = [
            'Technical Skill Profile:',
            '=======================================',
            '  [Security]   - Pentesting (80%), Web App Exploitation (80%), Privesc (75%)',
            '               - Recon & Enumeration (80%), Exploit Dev & Tooling (70%)',
            '               - Malware Analysis (75%)',
            '  [AI/ML]      - Python (90%), OpenCV (85%), Data Engineering (85%), ML Pipelines (75%)',
            '  [Web Dev]    - React.js (90%), Node.js (80%), Express.js (80%), MongoDB (80%)',
            '  [DevOps]     - Linux CLI (80%), Git/GitHub (85%), Shell Scripting (75%), AWS (55%)'
          ];
          break;
        case 'experience':
          response = [
            'Professional Experience:',
            '========================',
            'AI Intern - ICT Academy of Kerala (Dec 2025 - Jan 2026)',
            '  * Developed and optimized Python-based ML workflows for real-world datasets.',
            '  * Engineered automated data pre-processing and feature extraction pipelines.',
            '  * Collaborated with mentors on model evaluation using precision, recall, and F1 metrics.',
            '',
            'Software Engineering Intern - ICT Academy of Kerala (Jun - Aug 2023)',
            '  * Developed modular, clean Python backend scripts.',
            '  * Collaborated with team in 10+ workshops.',
            '  * Documented experimental setups and machine learning outcomes.'
          ];
          break;
        case 'projects':
          response = [
            'Projects Portfolio:',
            '===================',
            '1. MalWatch Malware Sandbox (Cybersecurity · 2026)',
            '   * Behavioral malware analysis sandbox with real-time threat detection.',
            '   * Detects ransomware patterns, process bursts, and suspicious network activity.',
            '',
            '2. AI-Enabled Attendance System (AI/ML · 2024)',
            '   * OpenCV-based facial recognition pipeline with 92% accuracy.',
            '   * Reduced administrative verification time by 40%.',
            '',
            '3. Anand Medicals E-Commerce (MERN Stack · 2023)',
            '   * Full-stack platform with 15+ REST APIs and 100+ product listings.'
          ];
          break;
        case 'certs':
          response = [
            'Certifications & Credentials:',
            '==============================',
            '  [SECURITY]  Foundations of Cybersecurity (Google via Coursera)',
            '  [SECURITY]  TryHackMe Pre Security Learning Path',
            '  [AI/ML]     AI and Machine Learning Certification (ICT Academy)',
            '  [DEVOPS]    AWS with Hands-on Labs (KodeKloud)',
            '  [DEVOPS]    Shell Scripting Certification (KodeKloud)'
          ];
          break;
        case 'contact':
          response = [
            'Contact Details:',
            '================',
            '  Email:    sivadathajayan.work@gmail.com',
            '  Phone:    +91 8304874459',
            '  GitHub:   https://github.com/t3xture-op',
            '  LinkedIn: https://linkedin.com/in/sivadath-ajayan',
            '  Location: Kollam, Kerala, India'
          ];
          break;
        case 'secret':
          response = [
            '🔮 EASTER EGG UNLOCKED! 🔮',
            '==========================',
            '   _____ __  ______  ___    ____ ______',
            '  / ___// / / / __ )/   |  / __ \\/_  _/',
            '  \\__ \\/ / / / __  / /| | / / / / / /',
            ' ___/ / /_/ / /_/ / ___ |/ /_/ / / /',
            '/____/\\____/_____/_/  |_/_____/ /_/',
            '',
            '🛡️  "The best defense is a proactive offense." — Sivadath',
            'Congrats, you found the secret! Here is a cookie: 🍪'
          ];
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'close':
          setShowTerminal(false);
          setInput('');
          return;
        default:
          response = [
            `Command not found: "${input}".`,
            'Type "help" to see a list of valid commands.'
          ];
          break;
      }

      setHistory([...newHistory, ...response.map(text => ({ type: 'output', text }))]);
      setInput('');
    }
  };

  if (!showTerminal) return null;

  return (
    <div className={`terminal-overlay ${isMaximized ? 'maximized' : ''}`} onClick={() => setShowTerminal(false)}>
      <div 
        className="terminal-window glass" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-close" onClick={() => setShowTerminal(false)} title="Close"></span>
            <span className="dot dot-minimize" onClick={() => setShowTerminal(false)} title="Minimize"></span>
            <span className="dot dot-maximize" onClick={() => setIsMaximized(!isMaximized)} title="Toggle Maximize"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} />
            <span>sivadath-dev: bash (CLI Console)</span>
          </div>
          <div className="terminal-window-actions">
            <button className="window-action-btn" onClick={() => setIsMaximized(!isMaximized)}>
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button className="window-action-btn close-btn" onClick={() => setShowTerminal(false)}>
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-feed">
            {history.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input */}
          <div className="terminal-input-line">
            <span className="terminal-prompt">sivadath-dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      <style>{`
        .terminal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .terminal-window {
          width: 100%;
          max-width: 800px;
          height: 500px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--terminal-bg);
          border: 1px solid rgba(0, 242, 254, 0.25);
          box-shadow: 0 20px 50px rgba(0, 242, 254, 0.15);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .terminal-overlay.maximized .terminal-window {
          max-width: 100%;
          height: 100%;
          border-radius: 0;
        }

        /* Header Window */
        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid var(--border-color);
          user-select: none;
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
        }

        .dot-close { background-color: #ff5f56; }
        .dot-minimize { background-color: #ffbd2e; }
        .dot-maximize { background-color: #27c93f; }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .terminal-window-actions {
          display: flex;
          gap: 12px;
        }

        .window-action-btn {
          background: transparent;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          border-radius: 4px;
        }

        .window-action-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .window-action-btn.close-btn:hover {
          color: #ff5f56;
        }

        /* Body Window */
        .terminal-body {
          flex-grow: 1;
          padding: 20px;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          text-align: left;
          color: #38ef7d; /* Classic green terminal print */
        }

        /* Set output lines default terminal texts */
        body.light-theme .terminal-body {
          color: #11998e;
        }

        .terminal-feed {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.5;
        }

        .terminal-line.input {
          color: var(--text-primary);
          font-weight: 500;
        }

        .terminal-line.output {
          opacity: 0.95;
        }

        /* Input command line */
        .terminal-input-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
        }

        .terminal-prompt {
          color: var(--accent-1);
          font-weight: 600;
        }

        .terminal-input {
          flex-grow: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .terminal-overlay {
            padding: 0;
          }
          .terminal-window {
            height: 100%;
            border-radius: 0;
            border: none;
          }
          .terminal-body {
            padding: 16px;
            font-size: 0.8rem;
          }
          .terminal-input {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Terminal;
