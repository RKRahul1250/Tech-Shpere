import React from "react";

function Publicsector() {
    return(
        <>
        <div>
  {/* Page Title */}
  <div className="page-title"
  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1580715737151-6cdda40e54b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', height: '50vh' }}>
    <div className="container text-center">
      <h1 data-aos="fade-down" className="text-light" >Connected Workplace for Public Sector</h1>
      <p data-aos="fade-up"className="text-light">
        Drive digital transformation across government agencies &amp;
        institutions.
      </p>
      <a href="shedule" className="btn btn-primary mt-3 btn-animate">Schedule a Demo</a>
      
      {/* <button className="btn btn-primary mt-3 btn-animate" onClick={() => navigate("/Contact")}>Schedule a Demo</button> */}

    </div>
  </div>
  {/* Main Content */}
  
    <section className=" service-details container my-5">
      <div className="row align-items-center mb-5">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5daa08776763cb0006091765/Group-of-businesspeople-high-fiving-while-sitting-in-a-meeting-/960x0.jpg?format=jpg&width=960" // Replace with actual image path
            alt="Team Discussion"
            className="img-fluid rounded shadow-lg"
            // style={{height: '55%'}}
          />
        </div>
        
        {/* Text Section */}
        <div className="col-md-6 px-5">
        <div className="service-section mb-5" data-aos="fade-up">
        <h3><i className="bi bi-globe" /> Connect Your Teams</h3>
        <p>
              Consolidate systems across various departments for operational
              efficiency.
            </p>
            <ul>
              <li>
                <i className="bi bi-tools" /> Maintenance &amp; Asset Management
              </li>
              <li>
                <i className="bi bi-building" /> Physical Space Allocation
              </li>
              <li><i className="bi bi-diagram-3" /> Construction Projects</li>
              <li>
                <i className="bi bi-clipboard-check" /> Real Estate Planning
              </li>
            </ul>
          
        </div>
        </div>
      </div>

      <div className="row align-items-center mt-4">
        {/* Image Section */}
        <div className="col-md-6 text-left px-3">
           <div className="service-section mb-5" data-aos="fade-up">
           <h3><i className="bi bi-bar-chart" /> Achieve Operational Efficiency </h3> 
        <p>
              Bring together all aspects of enterprise service management into
              one platform.
            </p>
            <ul>
              <li>
                <i className="bi bi-link" />
                <strong>Ensure Complete Connectivity:</strong> Connect teams,
                processes &amp; assets.
              </li>
              <li>
                <i className="bi bi-person-check" />
                <strong>Enable Agencies &amp; Mission Partners:</strong> Improve
                workflow &amp; productivity.
              </li>
              <li>
                <i className="bi bi-graph-up-arrow" />
                <strong>Access Data Anytime:</strong> Custom dashboards &amp;
                real-time insights.
              </li>
            </ul>
          
        </div>
        </div>
        
        {/* Text Section */}
        <div className="col-md-6">
        <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww" // Replace with actual image path
            alt="Team Discussion"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </section>

  {/* some additional contant */}
 <section className="container-fluid bg-primary text-white py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center text-md-start">
          <img
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
            alt="Factory Worker"
            className="img-fluid publicimg rounded shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-center text-md-start mt-4 mt-md-0 px-3">
          <h2 className="fw-bold">
            See How USAID Streamlined Their Supply Chain with EInfratech Systems India
          </h2>
          <p className="mt-3 fs-5">
            "If you can't see what's going on, you really have nothing. You have no ability to make decisions and just constantly guessing, which is how it felt for a long time."
          </p>
          <p className="mt-2 fst-italic">
            - Program of Food for Peace, USAID
          </p>
        </div>
      </div>
    </section>
  {/* Explore Public Sector Solutions */}
  <section className="explore-solutions py-5">
    <div className="container text-center">
      <h2 data-aos="fade-up">Explore Public Sector Solutions</h2>
      <p data-aos="fade-up" className="mb-4">
        Comprehensive solutions for public sector operations.
      </p>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card hover-effect">
            <img src="https://www.camcode.com/wp-content/uploads/2018/06/shutterstock_2399344103-1135x675.webp" alt="Facilities Maintenance" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Facilities Maintenance</h5>
              <p>Ensure smooth operation of public infrastructure.</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="card hover-effect">
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/real_estate_strategic_plan_powerpoint_ppt_template_bundles_slide01.jpg" alt="Real Estate Planning" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Space &amp; Real Estate Planning</h5>
              <p>Optimize space usage and future resource planning.</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="card hover-effect">
            <img src="https://media.licdn.com/dms/image/v2/D5612AQE1bO17sMHB3w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725426181808?e=2147483647&v=beta&t=ss6pQCTLzh-PKLFFjz_n4zlqoBH0VymRgunjzeDKn1A" alt="OT Security" className="card-img-top" />
            <div className="card-body text-center">
              <h5>OT Security</h5>
              <p>Enhance cybersecurity for public sector infrastructure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<section id="clients" className="clients section mt-4">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
            <h3 className="text-center">Implementation Partners</h3>

          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-1.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-2.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-3.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-4.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-5.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
          <div className="col-xl-2 col-md-3 col-6 client-logo">
            <img src="src/assets/img/clients/client-6.png" className="img-fluid" alt />
          </div>
          {/* End Client Item */}
        </div>
      </div>
    </section>


        </>
    )
}

export default Publicsector;