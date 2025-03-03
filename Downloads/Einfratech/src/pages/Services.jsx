import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section className="services section light-background mt-5">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Services</h2>
                <p>Discover how we optimize workplace operations with cutting-edge solutions.</p>
            </div>

            {/* Services Grid */}
            <div className="container ">
                <div className="row g-4 ">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
                            <div className={`service-item ${service.bgClass} position-relative`}>
                                <i className={`bi ${service.icon} icon`} />
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <a href="#" className="read-more stretched-link">
                                        Learn More <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll to Top Button */}
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short" />
            </a>
        </section>
    );
};

// Services Data
const servicesData = [
    {
        title: "Facility Management",
        description: "Optimize facility operations with AI-driven automation and predictive maintenance.",
        icon: "bi-gear",
        bgClass: "item-cyan"
    },
    {
        title: "Real Estate Planning",
        description: "Enhance space utilization and cost efficiency through data-driven insights.",
        icon: "bi-buildings",
        bgClass: "item-orange"
    },
    {
        title: "Security & Compliance",
        description: "Ensure workplace safety with advanced security solutions and compliance management.",
        icon: "bi-shield-check",
        bgClass: "item-teal"
    },
    {
        title: "Energy & Sustainability",
        description: "Reduce environmental impact with sustainable energy solutions and resource optimization.",
        icon: "bi-lightbulb",
        bgClass: "item-red"
    },
    {
        title: "Remote Workplace Solutions",
        description: "Enable seamless remote work management with integrated cloud-based tools.",
        icon: "bi-globe",
        bgClass: "item-indigo"
    },
    {
        title: "Smart IoT Integration",
        description: "Leverage IoT technology for predictive analytics and intelligent automation.",
        icon: "bi-cpu",
        bgClass: "item-pink"
    }
];

export default Services;
