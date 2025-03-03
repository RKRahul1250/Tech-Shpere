import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";
<link href="https://fonts.googleapis.com/css2?family=Molle:ital@1&display=swap" rel="stylesheet"></link>
const Hero = () => {
    return (
        <motion.section 
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-container">
                
                {/* Hero Image - Moves to Top in Mobile */}
                <motion.div 
                    className="hero-image"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img 
                        src="/images/hero-services-img.webp" 
                        alt="Workplace Management" 
                        className="animated-hero-image" 
                    />
                </motion.div>

                {/* Hero Text Content */}
                <motion.div 
                    className="hero-content"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="gradient-text">Welcome</h1>
                    <h2 className="gradient-text">EInfratech Systems</h2>
                    <p className="gradient-text">
                        Innovating the Future of Workplace Management with intelligent, 
                        scalable, and secure solutions.
                    </p>

                    {/* Buttons - Stay Below Text */}
                    <div className="hero-buttons">
                        <Link to="/shedule"  className="btn btn-primary">Schedule Demo</Link>
                        <Link to="https://mail.hostinger.com/?_task=mail&_mbox=INBOX" className="btn btn-outline-secondary">Employee Webmail</Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
