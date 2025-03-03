import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaUsers, FaShoppingCart, FaChartPie, FaCashRegister, FaHeadset, FaClipboardList, FaCalendarAlt, FaStore, FaChartLine, FaToolbox, FaTruck, FaHome } from "react-icons/fa";
import "./RetailPage.css";

const RetailPage = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".animate-icon");
    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("icon-animated");
      }, index * 200);
    });
  }, []);

  return (
    <div className="retail-page ">
      {/* Hero Section */}
      <section className="Retail-section text-center text-white py-5 mt-5">
        <Container>
          <h2 className="mb-2 display-5 fw-bold">Connected Workplace for Retail</h2>
          <p className="mb-4 lead">Manage retail operations efficiently and deliver superior customer experiences.</p>

        </Container>
      </section>
      <section className="features-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="feature-card shadow-lg p-4 border-0">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3 text-primary animate-icon">
                      <FaUsers size={28} />
                    </div>
                    <h4 className="feature-title m-0 fw-bold">Keep Your Customers Coming Back</h4>
                  </div>
                  <p className="text-secondary">A positive customer experience starts with smooth store operations.</p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <FaUsers className="me-2 text-primary" />
                      <span className="text-secondary">Positive interactions & visitor management</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <FaCalendarAlt className="me-2 text-primary" />
                      <span className="text-secondary">User metrics & space planning</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <FaChartLine className="me-2 text-primary" />
                      <span className="text-secondary">Capital projects & financial planning</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="feature-card shadow-lg p-4 border-0">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="feature-icon me-3 text-success animate-icon">
                      <FaChartLine size={28} />
                    </div>
                    <h4 className="feature-title m-0 fw-bold">Achieve Complete Store Visibility</h4>
                  </div>
                  <p className="text-secondary">Gain real-time insights into store operations and financial efficiencies.</p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center">
                      <FaStore className="me-2 text-success" />
                      <span className="text-secondary">Optimize Store Operations</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <FaToolbox className="me-2 text-success" />
                      <span className="text-secondary">Break Down Silos</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <FaTruck className="me-2 text-success" />
                      <span className="text-secondary">Improve Vendor Performance</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="solutions-section py-5">
        <Container>
          <h2 className="text-center mb-3 fw-bold">Explore Retail Solutions</h2>
          <p className="text-center mb-5 text-secondary">Enhance your retail operations with these advanced solutions.</p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-primary">
                  <FaToolbox size={42} />
                </div>
                <Card.Title className="fw-bold">Facilities Maintenance</Card.Title>
                <Card.Text className="text-secondary">Maintain store equipment and ensure performance within your retail locations.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-warning">
                  <FaTruck size={42} />
                </div>
                <Card.Title className="fw-bold">Dispatch & Vendor Management</Card.Title>
                <Card.Text className="text-secondary">Ensure on-time vendor response and service delivery to your retail locations.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mb-3 mx-auto text-danger">
                  <FaHome size={42} />
                </div>
                <Card.Title className="fw-bold">Real Estate & Space Planning</Card.Title>
                <Card.Text className="text-secondary">Optimize store arrangement and space utilization for maximum efficiency.</Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="feature-card shadow-lg p-4 border-0 text-center">
                <div className="card-icon mx-auto text-primary animate-icon">
                  <FaUsers size={42} />
                </div>
                <Card.Body>
                  <h4 className="fw-bold">Customer Engagement</h4>
                  <p className="text-secondary">Enhance customer satisfaction with AI-driven insights and recommendations.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card shadow-lg p-4 border-0 text-center">
                <div className="card-icon mx-auto text-success animate-icon">
                  <FaShoppingCart size={42} />
                </div>
                <Card.Body>
                  <h4 className="fw-bold">Smart Inventory</h4>
                  <p className="text-secondary">Automate stock management and prevent losses with real-time tracking.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="feature-card shadow-lg p-4 border-0 text-center">
                <div className="card-icon mx-auto text-danger animate-icon">
                  <FaChartPie size={42} />
                </div>
                <Card.Body>
                  <h4 className="fw-bold">Data Analytics</h4>
                  <p className="text-secondary">Make informed business decisions with advanced analytics and reporting.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section py-5 bg-light">
        <Container>

          <Row className="g-4">
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mx-auto text-primary animate-icon">
                  <FaCashRegister size={42} />
                </div>
                <Card.Title className="fw-bold">POS System</Card.Title>
                <Card.Text className="text-secondary">Modernize point-of-sale systems for seamless transactions.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mx-auto text-warning animate-icon">
                  <FaHeadset size={42} />
                </div>
                <Card.Title className="fw-bold">Customer Support</Card.Title>
                <Card.Text className="text-secondary">Enhance service quality with AI-powered customer support solutions.</Card.Text>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="solution-card shadow-lg p-4 text-center border-0">
                <div className="card-icon mx-auto text-danger animate-icon">
                  <FaClipboardList size={42} />
                </div>
                <Card.Title className="fw-bold">Order Management</Card.Title>
                <Card.Text className="text-secondary">Streamline order tracking, processing, and fulfillment for efficiency.</Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center py-5 bg-light">
        <Container>
          <h2 className="fw-bold">Ready to Transform Your Retail Business?</h2>
          <p className="lead text-secondary">Join thousands of businesses using our AI-powered solutions.</p>
          <Button variant="primary" className="rounded-pill px-4 py-2 btn-pulse">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
};

export default RetailPage;
