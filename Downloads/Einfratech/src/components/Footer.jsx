import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-column logo-column">
          <img
            src="/images/logop.png"
            alt="Elnfratech Systems India Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon linkedin">in</span>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon youtube">▶</span>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3 onClick={() => setShowLinks(!showLinks)} className="footer-heading text-start">
            Useful Links
          </h3>
          <ul className={showLinks ? "footer-list show" : "footer-list"}>
            <li><a href="/dashboard" className="footer-link">Dashboard</a></li>
            <li><a href="/contactus" className="footer-link">Contact Us</a></li>
            <li><a href="/features" className="footer-link">Features</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/faq" className="footer-link">FAQs</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h3 onClick={() => setShowServices(!showServices)} className="footer-heading text-start">
            Our Services
          </h3>
          <ul className={showServices ? "footer-list show" : "footer-list"}>
            <li><a href="/healthcare" className="footer-link ">Health Care</a></li>
            <li><a href="/retailpage" className="footer-link">Retail Industry</a></li>
            <li><a href="/publicsector" className="footer-link">Public Sector</a></li>
            <li><a href="/lifescience" className="footer-link">Life Science</a></li>
            <li><a href="/education" className="footer-link">Education</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Privacy Policy</p>
        <p>© Elnfratech Systems India 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;