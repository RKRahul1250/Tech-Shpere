import React, { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';
import { FaBuilding, FaLock, FaRocket, FaUsers, FaServer, FaClipboardCheck, FaHeadset } from "react-icons/fa";
import './Dashboard.css';
import { motion, useInView } from 'framer-motion';
import { FaRobot, FaShieldAlt, FaCloud, FaNetworkWired } from 'react-icons/fa';


// Counter Component
const NumberCounter = ({ start, end, increment, interval = 2000, suffix = '' }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= end) return start;
                return prevCount + increment;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [start, end, increment, interval]);

    return <>{count}{suffix}</>;
};

const Dashboard = () => {
    const cardContainerRef = useRef(null);
    const isInView = useInView(cardContainerRef, { once: true, margin: "-100px" });

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.8,
                ease: [0.17, 0.67, 0.83, 0.67]
            }
        })
    };


    return (
        <div>
            <Hero />
            <motion.div 
                ref={cardContainerRef}
                className="dashboard-container"
            >
                {[0, 1, 2].map((index) => (
                    <motion.div
                        key={index}
                        className="dashboard-card"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {index === 0 && (
                            <>
                                <FaBuilding className="dashboard-icon" />
                                <div className="dashboard-text">
                                    <h3 className="molle-font">Smart Workplace Solutions</h3>
                                    <p>Enhance efficiency with automated facility operations and seamless data sharing.</p>
                                </div>
                            </>
                        )}
                        {index === 1 && (
                            <>
                                <FaLock className="dashboard-icon" />
                                <div className="dashboard-text">
                                    <h3 className="molle-font">Connected & Secure Systems</h3>
                                    <p>Leverage integrated workplace management for real-time insights and better decision-making.</p>
                                </div>
                            </>
                        )}
                        {index === 2 && (
                            <>
                                <FaRocket className="dashboard-icon" />
                                <div className="dashboard-text">
                                    <h3 className="molle-font">Future-Ready Technology</h3>
                                    <p>Ensure scalability, sustainability, and optimal performance across industries.</p>
                                </div>
                            </>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Connected Workplace Section */}
<motion.div 
    className="container my-5"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: "easeOut" }}
>
    <div className="row d-flex align-items-stretch">
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-md-6 d-flex align-items-center p-0"
            style={{ minHeight: "100%" }}
        >
            <motion.img
                src="/images/cw.jpg"
                alt="Connected Workplace"
                className="img-fluid rounded shadow-lg feature-image"
                style={{ objectFit: "cover", minHeight: "100%" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-md-6 feature-content p-4"
        >
            <h2 className="molle-font gradient-heading">Transforming Workplaces with Smart Connectivity</h2>
            <p className="lead molle-font feature-text mb-4">
                Unlock a new era of workplace efficiency with seamlessly integrated technology.
                Our connected solutions ensure real-time data access, enhanced security, and
                optimized workflows, creating an environment where innovation thrives.
            </p>
            <div className="feature-cards-grid">
                <motion.div 
                    className="feature-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <FaRobot className="feature-card-icon" />
                    <h4>AI-Driven Automation</h4>
                    <p>Smart systems that learn and adapt to optimize your workplace efficiency</p>
                </motion.div>

                <motion.div 
                    className="feature-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <FaShieldAlt className="feature-card-icon" />
                    <h4>Real-Time Security</h4>
                    <p>Advanced monitoring systems with instant threat detection and response</p>
                </motion.div>

                <motion.div 
                    className="feature-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <FaCloud className="feature-card-icon" />
                    <h4>Cloud Integration</h4>
                    <p>Scalable infrastructure that grows seamlessly with your business</p>
                </motion.div>

                <motion.div 
                    className="feature-info-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <FaNetworkWired className="feature-card-icon" />
                    <h4>Smart Connectivity</h4>
                    <p>Unified communication platform for seamless team collaboration</p>
                </motion.div>
            </div>
        </motion.div>
    </div>
</motion.div>
            {/* We've Got You Covered Section */}
            <motion.div 
                className="container my-5 p-4 rounded feature-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="row align-items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-md-6"
                    >
                        <h2 className="molle-font gradient-heading text-center">We've Got You Covered</h2>
                        <p className="lead text-center molle-font feature-text">
                            We've worked with clients across industries to make their workplace experience better.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-md-6"
                    >
                        
                        <div className="row text-center">
            <motion.div 
                className="col-6 mb-3 stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaUsers className="icon-large icon-animated" />
                <p className="fs-3 text-black molle-font">
                    <strong>
                        <NumberCounter start={1600} end={1650} increment={1} interval={100} suffix="+" />
                    </strong> Clients Served
                </p>
            </motion.div>
            <motion.div 
                className="col-6 mb-3 stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaServer className="icon-xxl icon-animated" />
                <p className="fs-3 text-black molle-font">
                    <strong>
                        <NumberCounter start={12} end={15} increment={1} interval={500} suffix="M+" />
                    </strong> OT Assets Managed
                </p>
            </motion.div>
            <motion.div 
                className="col-6 stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaClipboardCheck className="icon-xl icon-animated" />
                <p className="fs-3 text-black molle-font">
                    <strong>
                        <NumberCounter start={25} end={30} increment={1} interval={300} suffix="M+" />
                    </strong> Work Orders per Month
                </p>
            </motion.div>
            <motion.div 
                className="col-6 stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <FaHeadset className="icon-xl icon-animated" />
                <p className="fs-3 text-black molle-font">
                    <strong>24x7</strong> Global Customer Care
                </p>
            </motion.div>
        </div>

                    </motion.div>
                </div>
            </motion.div>

            {/* Additional Sections */}
            <motion.div 
    className="container my-5 py-5 feature-section rounded"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: "easeOut" }}
>
    <motion.div 
        className="row align-items-stretch mb-5 text-center feature-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
        <motion.div 
            className="col-md-6 d-flex align-items-center justify-content-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img 
                src="/images/robust.png" 
                alt="Facilities Maintenance" 
                className="img-fluid rounded shadow-lg feature-image" 
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
        <motion.div 
            className="col-md-6 feature-content d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className="content-wrapper">
                <h2 className="molle-font gradient-heading">Comprehensive Facilities Maintenance</h2>
                <p className="text-center molle-font feature-text">
                    Ensure the longevity and optimal performance of your assets with our proactive facilities maintenance services.
                    We utilize advanced Integrated Workplace Management Systems (IWMS) to monitor and manage your facilities efficiently, minimizing downtime and reducing operational costs.
                    Our team is dedicated to maintaining a safe and productive environment for your organization.
                </p>
            </div>
        </motion.div>
    </motion.div>

    <motion.div 
        className="row align-items-stretch mb-5 text-center feature-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
        <motion.div 
            className="col-md-6 order-md-2 d-flex align-items-center justify-content-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img 
                src="/images/imghome.png" 
                alt="Space Planning" 
                className="img-fluid rounded shadow-lg feature-image" 
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
        <motion.div 
            className="col-md-6 order-md-1 feature-content d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className="content-wrapper">
                <h2 className="molle-font gradient-heading">Strategic Space Planning and Optimization</h2>
                <p className="text-center molle-font feature-text">
                    Maximize your workspace potential with our strategic space planning solutions.
                    By analyzing your current utilization and future needs, we design layouts that enhance collaboration and efficiency.
                    Our approach ensures that your real estate investments align with your organizational goals, providing a flexible and adaptive work environment.
                </p>
            </div>
        </motion.div>
    </motion.div>

    <motion.div 
        className="row align-items-stretch mb-5 text-center feature-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
        <motion.div 
            className="col-md-6 d-flex align-items-center justify-content-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img 
                src="/images/image_2025_02_28T05_43_11_279Z.png" 
                alt="OT Security" 
                className="img-fluid rounded shadow-lg feature-image" 
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
        <motion.div 
            className="col-md-6 feature-content d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className="content-wrapper">
                <h2 className="molle-font gradient-heading">Robust Operational Technology (OT) Security</h2>
                <p className="text-center molle-font feature-text">
                    Protect your critical infrastructure with our comprehensive OT security services.
                    We implement advanced security measures, including next-generation firewalls and real-time monitoring, to safeguard your operational technology assets from cyber threats. Our solutions are designed to detect, prevent, and respond to potential vulnerabilities, ensuring the resilience of your industrial control systems.
                    FORTINET.COM
                </p>
            </div>
        </motion.div>
    </motion.div>

    <motion.div 
        className="row align-items-stretch mb-5 text-center feature-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, duration: 1 }}
    >
        <motion.div 
            className="col-md-6 order-md-2 d-flex align-items-center justify-content-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img 
                src="/images/image_2025_02_28T05_43_11_275Z.png" 
                alt="Energy Management" 
                className="img-fluid rounded shadow-lg feature-image" 
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
        <motion.div 
            className="col-md-6 order-md-1 feature-content d-flex flex-column justify-content-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className="content-wrapper">
                <h2 className="molle-font gradient-heading">Sustainable Energy Management Solutions</h2>
                <p className="text-center molle-font feature-text">
                    Promote environmental responsibility with our sustainable energy management services.
                    We provide smart energy solutions that reduce consumption and operational costs, integrating eco-friendly practices into your daily operations. Our team assists in implementing renewable energy sources and optimizing energy usage, contributing to a greener and more sustainable future.
                </p>
            </div>
        </motion.div>
    </motion.div>
</motion.div>
        </div>
    );
};

export default Dashboard;