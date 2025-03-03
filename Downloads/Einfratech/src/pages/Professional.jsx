import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    text: "The entire team is very customer-focused, resourceful, and extremely proficient at explaining how the application works. Thank you to the entire team for this successful implementation!",
    company: "Large Hospital",
    role: "Facilities Director",
  },
  {
    text: "This was a very complex project. Thank you all for the amazing dedication and effort!",
    company: "Manufacturing",
    role: "Facilities Manager",
  },
  {
    text: "I want to thank the members of your team for their willingness to listen to the customer, putting efforts to provide valuable solutions, as well as sharing constraints/limitations so that mutually acceptable solutions can be reached.",
    company: "Higher Education",
    role: "University Director and Program Manager",
  },
];

const Professional = () => {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container bg-white p-4 rounded shadow-sm">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-md-start text-center">
            <h1 className="fw-bold">Professional Services</h1>
            <p className="text-muted">
              It’s your Connected Workplace - We’ll just help you get there.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/images/1.jpg"
              alt="Professional Services"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Goals Section */}
        <div className="text-center my-5">
          <h3 className="fw-bold">Your Goals Are Our Goals</h3>
          <p>
            Everyone’s version of a perfect workplace is different - and we understand
            that. Our team is here to listen and help build an environment with your
            requirements in mind.
          </p>
        </div>

        {/* Implementation & Customer-Centric Approach Sections */}
        <div className="row g-4">
          <div className="col-md-12">
            <div className="card border-0 shadow-sm bg-light">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="/images/2.jpg"
                    alt="Team Discussion"
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8 p-4">
                  <h5 className="fw-bold">A Best-in-Class Implementation Experience</h5>
                  <p>
                    Let us help you design your version of a Connected Workplace.
                    We’ll work closely with your team to ensure all of your goals
                    and requirements are met.
                  </p>
                  <ul>
                    <li>80+ implementations completed annually</li>
                    <li>Globally dispersed Professional Services team</li>
                    <li>Extensive network of global system integrators for flexible implementation</li>
                    <li>Out-of-the-box best practice implementation options</li>
                    <li>A structured iterative implementation approach for accelerated deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card border-0 shadow-sm bg-light">
              <div className="row g-0 align-items-center">
                <div className="col-md-8 p-4">
                  <h5 className="fw-bold">A Customer-Centric Approach</h5>
                  <p>
                    Before we start building your environment, we make certain we
                    understand your goals through:
                  </p>
                  <ul>
                    <li>Ongoing team collaboration</li>
                    <li>Learning about your objectives and use cases</li>
                    <li>Preparing roadmaps for success</li>
                    <li>Providing support beyond implementation</li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <img
                    src="/images/3.jpg"
                    alt="Collaboration"
                    className="img-fluid rounded-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center my-5">
          <h2 className="fw-bold">Customer Testimonials</h2>
          <p className="text-muted">
            See what our customers have to say about working with our Professional Services Team.
          </p>
          <div className="row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-4 d-flex align-items-stretch">
                <div className="card shadow-sm border-0 p-4 mb-4 bg-light text-dark">
                  <div className="card-body">
                    <p className="card-text">{testimonial.text}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h6 className="fw-bold mb-0">{testimonial.company}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;