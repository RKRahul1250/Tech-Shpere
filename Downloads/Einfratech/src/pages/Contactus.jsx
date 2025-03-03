import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaGlobe } from 'react-icons/fa';
import './Contactus.css';

const Contactus = () => {
    const [formStatus, setFormStatus] = useState('idle');
    const [focusedField, setFocusedField] = useState(null);

    useEffect(() => {
        const cards = document.querySelectorAll('.info-card');
        
        const handleMouseMove = (e, card) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.setProperty('--rotateX', `${rotateX}deg`);
            card.style.setProperty('--rotateY', `${rotateY}deg`);
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--rotateX', '0deg');
                card.style.setProperty('--rotateY', '0deg');
            });
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');
        setTimeout(() => setFormStatus('success'), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
            className="contact-wrapper"
        >
            <div className="contact-background"></div>
            <section id="contact" className="contact-section">
                <motion.div 
                    className="container section-title"
                    variants={itemVariants}
                >
                    <h2 className="gradient-heading">
                        <FaGlobe className="title-icon" />
                        Contact Us
                    </h2>
                    <p className="section-subtitle">
                        Let's connect! Get in touch for Support or Collaboration.
                    </p>
                </motion.div>

                <div className="container contact-container">
                    <div className="row gy-4">
                        <motion.div 
                            className="col-lg-6"
                            variants={itemVariants}
                        >
                            <div className="info-cards-grid">
                                <motion.div 
                                    className="info-card"
                                    whileHover={{ 
                                        scale: 1.03,
                                        rotateY: 5,
                                        boxShadow: "0 20px 50px rgba(31, 38, 135, 0.2)"
                                    }}
                                >
                                    <div className="icon-wrapper">
                                        <FaMapMarkerAlt className="info-icon" />
                                    </div>
                                    <h3>Address</h3>
                                    <p>IT Park, MBP Rd, Millenium Business Park, MIDC Industrial Area,
                                       Sector 1, Kopar Khairane, Navi Mumbai, Maharashtra 400710</p>
                                </motion.div>

                                <motion.div 
                                    className="info-card"
                                    whileHover={{ 
                                        scale: 1.03,
                                        rotateY: 5,
                                        boxShadow: "0 20px 50px rgba(31, 38, 135, 0.2)"
                                    }}
                                >
                                    <div className="icon-wrapper">
                                        <FaPhone className="info-icon" />
                                    </div>
                                    <h3>Call Us</h3>
                                    <p>+91 892.904.2908</p>
                                </motion.div>

                                <motion.div 
                                    className="info-card"
                                    whileHover={{ 
                                        scale: 1.03,
                                        rotateY: 5,
                                        boxShadow: "0 20px 50px rgba(31, 38, 135, 0.2)"
                                    }}
                                >
                                    <div className="icon-wrapper">
                                        <FaEnvelope className="info-icon" />
                                    </div>
                                    <h3>Email Us</h3>
                                    <p>einfratech@gmail.com</p>
                                </motion.div>
                            </div>

                            <motion.div 
                                className="map-container"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.813893652865!2d73.0269571!3d19.1180869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b906f5dfedc3%3A0x8e9d57d06e6e00fa!2sMillennium%20Business%20Park%2C%20Mahape%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710%2C%20India!5e0!3m2!1sen!2sin!4v1708691234567"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                    className="map-frame"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="col-lg-6"
                            variants={itemVariants}
                        >
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-grid">
                                    <motion.div 
                                        className={`form-field ${focusedField === 'name' ? 'focused' : ''}`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </motion.div>

                                    <motion.div 
                                        className={`form-field ${focusedField === 'email' ? 'focused' : ''}`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            required
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </motion.div>

                                    <motion.div 
                                        className={`form-field full-width ${focusedField === 'subject' ? 'focused' : ''}`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            required
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </motion.div>

                                    <motion.div 
                                        className={`form-field full-width ${focusedField === 'message' ? 'focused' : ''}`}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <textarea
                                            name="message"
                                            rows="6"
                                            placeholder="Message"
                                            required
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                        ></textarea>
                                    </motion.div>

                                    <div className="form-submit full-width">
                                        <AnimatePresence mode="wait">
                                            {formStatus === 'loading' && (
                                                <motion.div 
                                                    className="loading-spinner"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    <div className="spinner"></div>
                                                </motion.div>
                                            )}
                                            {formStatus === 'success' && (
                                                <motion.div 
                                                    className="success-message"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                >
                                                    Message sent successfully!
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        
                                        <motion.button 
                                            type="submit"
                                            className="submit-button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={formStatus === 'loading'}
                                        >
                                            <FaPaperPlane className="button-icon" />
                                            Send Message
                                        </motion.button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contactus;