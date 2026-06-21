import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ============================================================
// EmailJS Configuration
// These values are now loaded from the .env file for security.
// 1. Open the .env file in the root of your project
// 2. Replace the placeholders with your actual EmailJS keys
// ============================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

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

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

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

    const contactReveal = document.querySelector('.contact-reveal');
    if (contactReveal) observer.observe(contactReveal);

    return () => {
      if (contactReveal) observer.unobserve(contactReveal);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setStatus({ 
        type: 'error', 
        message: 'Email service not configured yet. Please set up EmailJS credentials in Contact.jsx.' 
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. Sivadath will get back to you soon!' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email directly.' 
      });
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-reveal reveal grid-2">
          {/* Contact Details */}
          <div className="contact-info-pane">
            <div className="contact-info-card glass">
              <h3>Let's Scaffolding Something Together</h3>
              <p className="contact-info-desc">
                If you are a recruiter looking for a passionate Front End / React Developer, or you want to collaborate on a MERN/Python project, feel free to reach out. I am always open to discussing new opportunities.
              </p>

              <div className="details-list">
                <div className="detail-item">
                  <div className="detail-icon">
                    <Mail size={18} />
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <a href="mailto:sivadathvaliyavila@gmail.com">sivadathvaliyavila@gmail.com</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <Phone size={18} />
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <a href="tel:+918304874459">+91 8304874459</a>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <span>Kerala, India</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="socials-pane-container">
                <h4>Connect on Socials</h4>
                <div className="social-links-grid">
                  <a href="https://linkedin.com/in/sivadath-ajayan" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin" title="LinkedIn">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/t3xture-op" target="_blank" rel="noopener noreferrer" className="social-icon-btn github" title="GitHub">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-pane">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of discussion"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me how we can work together..."
                  rows="5"
                  className="form-input textarea"
                  required
                ></textarea>
              </div>

              {status.type && (
                <div className={`form-status-alert ${status.type} glass`}>
                  {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn" 
                disabled={loading}
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-info-card {
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .contact-info-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .contact-info-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        /* Detail Items List */
        .details-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .detail-item {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .detail-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(var(--accent-rgb), 0.08);
          color: var(--accent-1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-content h4 {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .detail-content a, .detail-content span {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .detail-content a:hover {
          color: var(--accent-1);
        }

        /* Connect Pane */
        .socials-pane-container h4 {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .social-links-grid {
          display: flex;
          gap: 16px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffffff;
        }

        .social-icon-btn.linkedin {
          background: #0077b5;
        }

        .social-icon-btn.github {
          background: #24292e;
        }

        .social-icon-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
          filter: brightness(1.1);
        }

        /* Form styling */
        .contact-form {
          padding: 40px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .required {
          color: #ff5f56;
        }

        .form-input {
          padding: 12px 16px;
          border-radius: 8px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.15);
          background: var(--bg-secondary);
          outline: none;
        }

        .form-input.textarea {
          resize: none;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
        }

        /* Status alerts */
        .form-status-alert {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .form-status-alert.success {
          border-color: #10b981;
          color: #10b981;
          background: rgba(16, 185, 129, 0.08);
        }

        .form-status-alert.error {
          border-color: #ff5f56;
          color: #ff5f56;
          background: rgba(255, 95, 86, 0.08);
        }

        @media (max-width: 768px) {
          .contact-info-card, .contact-form {
            padding: 24px;
          }
          
          .social-links-grid {
            flex-direction: column;
            gap: 12px;
          }
          
          .social-icon-btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
