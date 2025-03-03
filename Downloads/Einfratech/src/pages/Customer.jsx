import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaChartLine, FaMicrochip, FaTimes, FaArrowRight } from "react-icons/fa";
import "./Customer.css";

const Customer = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = {
    'Seamless Integration': {
      icon: <FaLightbulb />,
      title: 'Seamless Integration',
      shortDesc: 'Unified platforms for optimized workflows.',
      fullDesc: 'Our unified platforms create a cohesive ecosystem that streamlines your business operations.',
      points: [
        'Real-time data synchronization across platforms',
        'Automated workflow management systems',
        'Custom API integrations for existing software',
        'Scalable solutions that grow with your business',
        'End-to-end process automation',
        'Seamless third-party integrations'
      ]
    },
    'Data-Driven Insights': {
      icon: <FaChartLine />,
      title: 'Data-Driven Insights',
      shortDesc: 'Smart analytics for informed decision-making.',
      fullDesc: 'Transform raw data into actionable intelligence with our advanced analytics solutions.',
      points: [
        'Advanced data visualization dashboards',
        'Predictive analytics for business forecasting',
        'Real-time performance monitoring',
        'Custom reporting and analytics tools',
        'Machine learning-powered insights',
        'Trend analysis and pattern recognition'
      ]
    },
    'Advanced Technology': {
      icon: <FaMicrochip />,
      title: 'Advanced Technology',
      shortDesc: 'AI-powered solutions for modern enterprises.',
      fullDesc: 'Leverage cutting-edge AI and machine learning solutions for your business.',
      points: [
        'AI-powered process automation',
        'Machine learning algorithms for optimization',
        'Smart resource allocation systems',
        'Intelligent decision support tools',
        'Neural network implementations',
        'Deep learning capabilities'
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="customer-container"
    >
      <div id="cus" className="content-section">
        <motion.div 
          className="content glass-effect"
          variants={itemVariants}
        >
          <h2 className="gradient-text">Who We Are</h2>
          <p className="highlight-text">Innovating the Future of Workplace Management</p>
          <p className="main-description">
            At EInfratech Systems, we specialize in delivering intelligent, scalable, and secure workplace management solutions.
            Our mission is to streamline operations, enhance efficiency, and drive digital transformation across industries.
          </p>
          <motion.ul className="feature-list">
            {Object.entries(features).map(([key, feature], index) => (
              <motion.li 
                key={key}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                onClick={() => {
                  setSelectedFeature(key);
                  setShowDetails(true);
                }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <strong>{feature.title}</strong>
                  <span>{feature.shortDesc}</span>
                </div>
                <FaArrowRight className="arrow-icon" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="image-grid"
          variants={containerVariants}
        >
          <motion.div 
            className="grid-item div1"
            variants={itemVariants}
            whileHover={{ scale: 1.05, zIndex: 1 }}
          >
            <img src="/images/about-company-1.jpg" alt="Workplace 1" />
          </motion.div>
          <motion.div 
            className="grid-item div2"
            variants={itemVariants}
            whileHover={{ scale: 1.05, zIndex: 1 }}
          >
            <img src="/images/about-company-2.jpg" alt="Workplace 2" />
          </motion.div>
          <motion.div 
            className="grid-item div3"
            variants={itemVariants}
            whileHover={{ scale: 1.05, zIndex: 1 }}
          >
            <img src="/images/about-company-2.jpg" alt="Workplace 3" />
          </motion.div>
          
          
        </motion.div>
      </div>

      <motion.hr 
        className="divider"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
      />

      <motion.div 
        id="mid" 
        className="support-section"
        variants={itemVariants}
      >
        <h1 className="section-title">Support For Your Connected Workplace</h1>

        <motion.div 
          className="support-grid"
          variants={containerVariants}
        >
          {[
            {
              img: "/images/cus3.jpg",
              title: "All Day, Every Day",
              text: "Industry leading technical support when you need it."
            },
            {
              img: "/images/cus1.jpg",
              title: "Easy-to-Use Portal",
              text: "Quickly request enhancements or report issues."
            },
            {
              img: "/images/cus2.jpg",
              title: "Customer Obsessed",
              text: "Direct access to a dedicated CSM who knows your projects and objectives."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="support-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="card-image">
                <img src={item.img} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.hr 
        className="divider"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
      />

      <motion.div 
        className="partners-section"
        variants={itemVariants}
      >
        <h3 className="gradient-text">Our Trusted Partners</h3>
        <motion.div
          className="partners-grid"
          variants={containerVariants}
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div 
              key={num}
              className="partner-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                filter: "brightness(1.2)"
              }}
            >
              <img src={`images/client-${num}.png`} alt={`Partner ${num}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showDetails && selectedFeature && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="close-button"
                onClick={() => setShowDetails(false)}
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                {features[selectedFeature].icon}
                <h2>{features[selectedFeature].title}</h2>
              </div>

              <p className="modal-description">
                {features[selectedFeature].fullDesc}
              </p>

              <div className="modal-features">
                {features[selectedFeature].points.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaArrowRight className="feature-bullet" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Customer;