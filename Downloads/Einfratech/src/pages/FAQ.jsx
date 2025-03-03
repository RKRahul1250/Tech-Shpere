import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-5 mt-5">
          <h6 className="text-primary fw-bold">FAQ</h6>
          <h2 className="fw-bold">Frequently Asked Questions.</h2>
          <p className="text-muted">
            There are some frequently asked questions.
          </p>
        </div>

        {/* Right Section - FAQ */}
        <div className="col-md-7">
          <Accordion defaultActiveKey="0">
            
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-danger">
              What services does Synergy Kortex provide?
              </Accordion.Header>
              <Accordion.Body>
              Synergy Kortex offers a wide range of IT solutions, including software development, cloud computing, AI & automation, cybersecurity, data analytics, and IT consulting. We help businesses leverage technology for growth and efficiency.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>How can your IT consulting services help my business?</Accordion.Header>
              <Accordion.Body>
              Our IT consulting services help businesses streamline operations, adopt the latest technologies, and enhance overall efficiency. We provide strategic guidance tailored to your needs, ensuring a smooth digital transformation.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
              What industries do you serve?
              </Accordion.Header>
              <Accordion.Body>
              We work with diverse industries, including finance, healthcare, e-commerce, manufacturing, and education. Our solutions are customized to meet industry-specific challenges and requirements.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
              What makes Synergy Kortex different from other IT service providers?
              </Accordion.Header>
              <Accordion.Body>
              Our customer-centric approach, deep industry expertise, and innovative solutions set us apart. We focus on delivering tailored IT solutions that align with your business goals and drive long-term success.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
              How do I get started with your services?
              </Accordion.Header>
              <Accordion.Body>
              Getting started is easy! Contact us through our website, and our team will reach out to discuss your needs and create a customized strategy for your business.
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </div>
      </div>
      <div className="row mt-5">
        <h3 className="fw-bold">Don't find your answer?</h3>
        <div className="hero-buttons">
        <button className="btn btn-primary" onClick={() => navigate("/contactus")}>
            CONTACT US
          </button>
          </div>
      </div>
    </div>
  );
};

export default FAQ;