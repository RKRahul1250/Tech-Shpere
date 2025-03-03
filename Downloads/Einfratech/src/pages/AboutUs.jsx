import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaBuilding, FaHandshake } from 'react-icons/fa';
import './AboutUs.css';
import CountUp from './CountUp';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const officeCards = [
    { country: "United States", image: "./images/usa.jpg" },
    { country: "United Kingdom", image: "./images/uk.jpg" },
    { country: "India", image: "./images/india.jpg" },
    { country: "Canada", image: "./images/canada1.jpg" },
    { country: "Australia", image: "./images/Aus.jpg" },
    { country: "Germany", image: "./images/germany.jpg" }
  ];

  const investors = [
    { name: "Insight Partners", logo: "/images/insight.jpeg" },
    { name: "Kaiser Permanente Ventures", logo: "/images/kaiser logo.png" },
    { name: "NEA", logo: "/images/nea.png" },
    { name: "Revelation Partners", logo: "/images/re.png" },
    { name: "ServiceNow", logo: "/images/service.png" }
  ];

  return (
    <div className="about-us-container">
      <motion.div 
        className="about-us-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="about-us-content-container"
          {...fadeInUp}
        >
          <header className="about-us-header">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Who We Are
            </motion.h1>
          </header>
          <main className="about-us-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We're a company built on a clear set of values. Our goal is to empower you to do your best work in the most efficient way possible. That shines through in everything we do, from innovation to delivery, we strive to deliver a solution that makes you proud of the work that you do.
            </motion.p>
          </main>
        </motion.div>
      </motion.div>

      <div className="stats-bar">
        <motion.div 
          className="stats-item"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="number">
            <CountUp end={400} />
          </span>
          <span className="label">Employees</span>
        </motion.div>

        <motion.div 
          className="stats-item"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="number">
            <CountUp end={1500} />
          </span>
          <span className="label">Clients</span>
        </motion.div>

        <motion.div 
          className="stats-item"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="number">
            <CountUp end={10} />
          </span>
          <span className="label">Years of Industry Experience</span>
        </motion.div>
      </div>

      <motion.div 
        className="offices-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="offices-header-container"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="offices-header">
            <FaGlobeAmericas className="header-icon" /> Our Worldwide Offices
          </h2>
        </motion.div>

        <div className="offices-grid">
          {officeCards.map((office, index) => (
            <motion.div 
              key={office.country}
              className="office-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={office.image}
                alt={`${office.country} Office`}
                className="office-image"
              />
              <div className="office-details">
                <div className="office-company">Elnfratech Systems India</div>
                <div className="office-country">{office.country}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
  className="investors-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <motion.div 
    className="investors-header-container"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="investors-header">
      <FaHandshake className="header-icon" />
      <span>Our Trusted Investors</span>
    </h2>
  </motion.div>

  <div className="investors-container">
    <div className="investors-grid">
      {investors.map((investor, index) => (
        <motion.div
          key={investor.name}
          className="investor-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <motion.img
  src={investor.logo}
  alt={investor.name}
  className="investor-logo"
  whileHover={{ 
    scale: 1.05,
    
    opacity: 1,
    transition: { duration: 0.3 }
  }}
/>
          <motion.h3 
            className="investor-name"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {investor.name}
          </motion.h3>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
    </div>
  );
};

export default AboutUs;
