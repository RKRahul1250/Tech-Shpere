// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Features.css';
function Features() {
    return (
        <div>
            <div>
                <div className="page-title mt-4">
                    <div className="container text-center">
                        <h1 data-aos="fade-down">Our Features</h1>
                        <p data-aos="fade-up">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                            consectetur velit
                        </p>
                    </div>
                </div>

                <section id="features" className="features section my-5">
                    <div className="container">
                        <div id="grid" className="row gx-4 gy-4 align-items-center">

                            
                            <div className="col-lg-7 col-md-6 d-flex align-items-center flex-column" style={{ minHeight: "400px" }}>
                                <ul className="nav nav-pills w-100" data-aos="fade-up" data-aos-delay="100">
                                    <li  className="nav-item mb-3 w-100">
                                        <a className="nav-link active show p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-1"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-binoculars"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Cloud-Based Access</h4>
                                                <p>Manage workplace operations from anywhere with secure cloud solutions.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-2"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-box-seam"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Multi-Device Compatibility</h4>
                                                <p>Seamless access across desktops, tablets, and mobile devices.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-3"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-brightness-high"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Predictive Maintenance</h4>
                                                <p>AI-driven alerts to prevent equipment failures before they happen.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-4"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-brightness-high"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Custom Workflows</h4>
                                                <p>Tailor workplace processes to match specific business needs.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                           
                            <div className="col-lg-5 col-md-6">
                                <div className="tab-content img-hover-zoom" data-aos="fade-up" data-aos-delay="200">
                                    <div className="tab-pane fade active show" id="features-tab-1">
                                        <img src="/images/tabs-1.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                    <div className="tab-pane fade" id="features-tab-2">
                                        <img src="/images/tabs-2.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                    <div className="tab-pane fade" id="features-tab-3">
                                        <img src="/images/tabs-3.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="features-details" className="features-details section mb-5">
                    <div className="container">
                       
                        <div className="row align-items-center gy-4">
                         
                            <div style={{width:"40%",height:"20%"}} className="col-lg-6 col-md-12 text-center img-hover-zoom" data-aos="fade-up" data-aos-delay="100">
                                <img src="/images/features-1.jpg" className="img-fluid rounded shadow-lg" alt="Feature 1" style={{ maxWidth: "90%", height: "auto" }} />
                            </div>
                            

                        
                            <div className="col-lg-6 col-md-12 text-lg-start text-center" data-aos="fade-up" data-aos-delay="200">
                                <div className="content px-3" style={{ maxWidth: "100%" }}>
                                    <h3 className="">Enhancing Workplace Efficiency with Innovation</h3>
                                    <p
                                        className=""
                                        style={{
                                            maxWidth: "100%",
                                            // fontSize: "1rem",
                                            overflowWrap: "break-word",
                                            wordBreak: "break-word",
                                            // lineHeight: "1.6",
                                            textAlign: "justify"
                                        }}
                                    >
                                        Optimize your workplace with cutting-edge technology and seamless integration.
                                        Our solutions help businesses streamline operations, reduce costs, and improve
                                        productivity. Experience a smarter way to manage your facilities with real-time
                                        insights and automation.
                                    </p>
                                    <a
                                        href="#"
                                        className="btn btn-primary text-white px-4 py-2 fw-bold"
                                        style={{
                                        //    fontSize: "1.2rem",
                                           marginTop:"27px"
                                        }}
                                    >
                                        Discover More
                                    </a>
                                </div>

                            </div>
                        </div>

                  
                        <div className="row gy-4 mt-5">
                        
                            <div className="col-lg-6 col-md-12 text-lg-start text-center order-lg-1 order-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="content px-3" style={{ maxWidth: "100%"}}>
                                    <h3 className="">Smart Workplace Solutions for Enhanced Efficiency</h3>
                                    <p className="">
                                        Leverage advanced technology to transform your workplace.
                                        Our innovative solutions provide real-time insights, enhance
                                        operational efficiency, and reduce costs. Automate
                                        processes, improve decision-making, and create a more
                                        productive work environment.Gain instant access to crucial 
                                        data.
                                    </p>
                                    <a href="#" style={{marginTop:"20px"}} className="btn btn-primary text-white px-4 py-2 ">
                                        Discover More  
                                    </a>
                                </div>
                            </div>

                         
                            <div className="col-lg-6 col-md-12 text-center order-lg-2 order-1 img-hover-zoom" data-aos="fade-up" data-aos-delay="200">
                                <img src="/images/features-2.jpg" className="img-fluid rounded shadow-lg" alt="Feature 2" style={{ width: "90%", height: "80%" }} />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Features