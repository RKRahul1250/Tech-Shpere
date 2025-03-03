import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Education.css';
import { useNavigate } from 'react-router-dom';

function Education() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeTool, setActiveTool] = useState(null);
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const stats = [
        { number: 1000, suffix: "+", text: "Students Enrolled" },
        { number: 50, suffix: "+", text: "Partner Institutions" },
        { number: 95, suffix: "%", text: "Success Rate" },
        { number: 24, suffix: "/7", text: "Support Available" }
    ];

    const navigate = useNavigate();

    const features = [
        {
            title: "Smart Learning",
            description: "AI-powered personalized learning paths",
            icon: "bi-lightbulb-fill",
            color: "#4299e1",
            details: [
                "Adaptive Learning Algorithms",
                "Real-time Performance Analysis",
                "Custom Study Plans",
                "Interactive Content Delivery"
            ]
        },
        {
            title: "Live Collaboration",
            description: "Real-time interactive sessions",
            icon: "bi-people-fill",
            color: "#48bb78",
            details: [
                "Virtual Classrooms",
                "Group Projects",
                "Peer Learning",
                "Global Connectivity"
            ]
        },
        {
            title: "Progress Tracking",
            description: "Detailed analytics and insights",
            icon: "bi-graph-up-arrow",
            color: "#ed64a6",
            details: [
                "Performance Metrics",
                "Learning Analytics",
                "Progress Reports",
                "Achievement Tracking"
            ]
        }
    ];

    const programs = [
        {
            title: "K-12 Education",
            description: "Comprehensive digital learning solutions for primary and secondary education",
            features: ["Interactive Learning", "Progress Tracking", "Parent Portal"]
        },
        {
            title: "Higher Education",
            description: "Advanced platforms for colleges and universities",
            features: ["Research Tools", "Virtual Labs", "Academic Analytics"]
        },
        {
            title: "Professional Development",
            description: "Continuous learning solutions for educators",
            features: ["Certification Programs", "Skill Enhancement", "Teaching Resources"]
        }
    ];

    const testimonials = [
        {
            name: "Dr. Sarah Johnson",
            role: "University Professor",
            text: "The platform has revolutionized how we conduct virtual labs and research collaborations.",
            image: "/images/canada1.jpg"
        },
        {
            name: "Mark Wilson",
            role: "High School Principal",
            text: "Student engagement has increased significantly since implementing these digital tools.",
            image: "/images/education2.jpg"
        }
    ];

    const learningTools = [
        {
            title: "Virtual Reality Classrooms",
            icon: "bi-display",
            details: {
                description: "Immersive 3D learning environments that transform education",
                features: [
                    "360° Interactive Virtual Environments",
                    "Real-time Virtual Labs and Simulations",
                    "Global Virtual Field Trips",
                    "Interactive 3D Models and Demonstrations"
                ],
                benefits: [
                    "Enhanced Student Engagement",
                    "Hands-on Learning Experience",
                    "Safe Practice Environment",
                    "Cross-cultural Learning Opportunities"
                ],
                image: "/images/education1.jpg"
            }
        },
        {
            title: "AI-Powered Learning Assistant",
            icon: "bi-robot",
            details: {
                description: "Personalized learning support powered by artificial intelligence",
                features: [
                    "24/7 Intelligent Tutoring",
                    "Adaptive Learning Paths",
                    "Progress Analytics Dashboard",
                    "Natural Language Processing Support"
                ],
                benefits: [
                    "Personalized Learning Experience",
                    "Immediate Feedback System",
                    "Skill Gap Analysis",
                    "Custom Study Plans"
                ],
                image: "/images/education2.jpg"
            }
        },
        {
            title: "Real-time Collaboration Tools",
            icon: "bi-people-fill",
            details: {
                description: "Interactive tools for seamless group learning and collaboration",
                features: [
                    "Live Document Sharing",
                    "Virtual Whiteboards",
                    "Group Project Spaces",
                    "Real-time Communication Channels"
                ],
                benefits: [
                    "Enhanced Team Learning",
                    "Global Collaboration",
                    "Project-Based Learning",
                    "Peer-to-Peer Support"
                ],
                image: "/images/canada1.jpg"
            }
        },
        {
            title: "Interactive Assessments",
            icon: "bi-clipboard-check",
            details: {
                description: "Dynamic assessment tools for comprehensive learning evaluation",
                features: [
                    "Adaptive Question Banks",
                    "Real-time Progress Tracking",
                    "Multi-format Assessments",
                    "Instant Feedback System"
                ],
                benefits: [
                    "Personalized Assessment",
                    "Comprehensive Evaluation",
                    "Performance Analytics",
                    "Learning Path Optimization"
                ],
                image: "/images/education1.jpg"
            }
        }
    ];

    return (
        <div className="education-root">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="education-page"
                style={{ backgroundImage: `url('/images/hero-bg-light.webp')` }}
            >
                <div className="hero-section" style={{ backgroundImage: `url('/images/hero-bg-light.webp')` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <motion.h1
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Empowering Digital Learning & Collaboration
                        </motion.h1>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Transform education with innovative digital solutions
                        </motion.p>
                        
                    </div>
                </div>

                <div className="stats-section" ref={ref}>
                    <div className="stats-container">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="stat-number">
                                    {inView && (
                                        <CountUp
                                            end={stat.number}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    )}
                                </div>
                                <div className="stat-text">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <section className="programs-section">
                    <h2>Educational Programs</h2>
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                className="program-card"
                                whileHover={{ y: -10 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3>{program.title}</h3>
                                <p>{program.description}</p>
                                <ul>
                                    {program.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="features-section">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Features
                    </motion.h2>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <motion.div
                                    className="feature-icon-wrapper"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <i className={`bi ${feature.icon}`} style={{ color: feature.color }}></i>
                                </motion.div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                                <motion.ul className="feature-details-list">
                                    {feature.details.map((detail, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <i className="bi bi-check-circle-fill" style={{ color: feature.color }}></i>
                                            <span>{detail}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="testimonials-section">
                    <h2>Success Stories</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonial-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="testimonial-image">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div className="testimonial-content">
                                    <p>"{testimonial.text}"</p>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="interactive-section">
                    <div className="interactive-content">
                        <div className="text-content">
                            <h2>Interactive Learning Experience</h2>
                            <p>Engage with our cutting-edge digital learning tools</p>
                            <div className="learning-tools">
                                {learningTools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        className={`tool-item ${activeTool === index ? 'active' : ''}`}
                                        onClick={() => setActiveTool(index)}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <i className={`bi ${tool.icon}`}></i>
                                        <span>{tool.title}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <AnimatePresence mode='wait'>
                                {activeTool !== null && (
                                    <motion.div
                                        className="tool-details"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3>{learningTools[activeTool].title}</h3>
                                        <p>{learningTools[activeTool].details.description}</p>

                                        <div className="details-grid">
                                            <div className="features-list">
                                                <h4>Key Features</h4>
                                                <ul>
                                                    {learningTools[activeTool].details.features.map((feature, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                        >
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="benefits-list">
                                                <h4>Benefits</h4>
                                                <ul>
                                                    {learningTools[activeTool].details.benefits.map((benefit, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                        >
                                                            {benefit}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <motion.img
                                            src={learningTools[activeTool].details.image}
                                            alt={learningTools[activeTool].title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-content">
                        <h2>Ready to Transform Education?</h2>
                        <p>Get in touch with our experts today</p>
                        <motion.button
                            className="contact-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </section>
            </motion.div>
        </div>
    );
}

export default Education;