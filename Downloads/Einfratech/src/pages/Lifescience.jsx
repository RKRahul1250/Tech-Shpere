import React from "react";

function LifeScience1() {
    return (
        <>
          <div>
 
  {/* Page Title */}
  <div className="page-title">
    <div className="container text-center">
      <h1 data-aos="fade-down"className="text-light">Connected Workplace for Life Sciences</h1>
      <p data-aos="fade-up"className="text-light">
        Optimize lab &amp; facility management with cutting-edge solutions.
      </p>
      <a href="shedule" className="btn btn-primary mt-3 btn-animate">Schedule a Demo</a>
    </div>
  </div>
  {/* Main Content */}

  <section className=" service-details container my-5">
      <div className="row align-items-center mb-5">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600" // Replace with actual image path
            alt="Team Discussion"
            className="img-fluid rounded shadow-lg"
            // style={{height: '55%'}}
          />
        </div>
        
        {/* Text Section */}
        <div className="col-md-6 px-5">
        <div className="service-section mb-5" data-aos="fade-up">
        <h3><i className="bi bi-heart-pulse" /> Keep Your Operations Running Smoothly</h3>
        <div className="text-start">
            <p>
              Bringing life-saving therapies to market is complex. Your software should simplify—not complicate—facility and lab management.
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-cpu" /> <strong>GxP & Non-GxP Asset Management</strong></li>
              <li><i className="bi bi-building" /> <strong>Real Estate & Space Planning</strong></li>
              <li><i className="bi bi-diagram-3" /> <strong>Capital Planning & Projects</strong></li>
            </ul>
          </div>
          
        </div>
        </div>
      </div>

      <div className="row align-items-center mt-4">
        {/* Image Section */}
        <div className="col-md-6 text-left px-3">
           <div className="service-section mb-5" data-aos="fade-up">
           <h3><i className="bi bi-sliders" /> Simplify Your Workplace</h3>
           <div className="text-start">
            <p>
              Manage all facility and lab operations seamlessly with a <strong>single platform</strong>.
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-people" /> <strong>Break Down Silos:</strong> Foster cross-team collaboration.</li>
              <li><i className="bi bi-gear-wide" /> <strong>Optimize Operations:</strong> Automate workflows & data integration.</li>
              <li><i className="bi bi-check-circle" /> <strong>Be Always Audit-Ready:</strong> Maintain regulatory compliance.</li>
            </ul>
          </div>
          
        </div>
        </div>
        
        {/* Text Section */}
        <div className="col-md-6">
        <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual image path
            alt="Team Discussion"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </section>

  {/* Explore Life Sciences Solutions (Now Below the Main Content) */}
  <section className="explore-solutions py-5">
    <div className="container text-center">
      <h2 data-aos="fade-up">Explore Life Sciences Solutions</h2>
      <p data-aos="fade-up" className="mb-4">
        Manage your facilities, assets, and compliance effortlessly.
      </p>
      <div className="row">
        {/* Card 1: GxP Asset Management */}
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card hover-effect">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" alt="GxP" className="card-img-top" />
            <div className="card-body text-center">
              <h5>GxP Asset Management</h5>
              <p>Ensure compliance and streamline asset tracking.</p>
            </div>
          </div>
        </div>
        {/* Card 2: Calibration Integration */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="card hover-effect">
            <img src="https://as2.ftcdn.net/v2/jpg/03/22/52/23/1000_F_322522389_VOcO0YZGFNzyR5po7L1hte6Cpqlnc1Nx.jpg" alt="Calibration" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Calibration Integration</h5>
              <p>Automate calibration workflows &amp; ensure accuracy.</p>
            </div>
          </div>
        </div>
        {/* Card 3: Real Estate & Space Planning */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="card hover-effect">
            <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400" alt="Real Estate Planning" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Real Estate &amp; Space Planning</h5>
              <p>Optimize lab &amp; facility space utilization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


 {/* some additional contant */}
 <section className="container-fluid bg-primary text-white py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center text-md-start">
          <img
            src="https://images.unsplash.com/photo-1721354737629-fe43b912c095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
            alt="Factory Worker"
            className="img-fluid publicimg rounded shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start mt-4 mt-md-0 px-3">
          <h2 className="fw-bold">
          How GMP Facilities Use Connected Workplace for Life Sciences
          </h2>
          <p className="mt-3 fs-5">
          Learn how we helped our customer transform their facilities and asset management processes.
          </p>
          
        </div>
      </div>
    </section>
  
  
</div>

        </>
    )
}

export default LifeScience1;