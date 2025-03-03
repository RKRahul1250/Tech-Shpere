import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
  Dropdown,
  Modal,
  Form,
  ListGroup,
  Offcanvas,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      
      setVisible(!isScrolledDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const searchData = [
    { name: "Dashboard", path: "/dashboard", icon: "bi-speedometer2" },
    { name: "Healthcare", path: "/healthcare", icon: "bi-heart-pulse" },
    { name: "Retail Industry", path: "/retailpage", icon: "bi-shop" },
    { name: "Public Sector", path: "/publicsector", icon: "bi-building" },
    { name: "Life Sciences", path: "/lifescience", icon: "bi-microscope" },
    { name: "Customer", path: "/customer", icon: "bi-people" },
    { name: "Services", path: "/services", icon: "bi-gear" },
    { name: "Features", path: "/features", icon: "bi-stars" },
    { name: "Contact Us", path: "/contactus", icon: "bi-envelope" },
    { name: "About Us", path: "/about", icon: "bi-info-circle" },
  ];

  const filteredResults = searchData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = (path) => {
    navigate(path);
    setShowSearchModal(false);
    setSearchTerm("");
    setShowSidebar(false);
  };

  return (
    <>
      <Navbar 
        bg="white" 
        variant="light" 
        expand="lg" 
        className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <img src="/images/logop.png" alt="Logo" className="navbar-logo" />
            <span className="navbar-title">Einfratech Systems</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setShowSidebar(true)} />

          <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <i className="bi bi-grid-fill me-2"></i>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <NavDropdown title={<><i className="bi bi-speedometer2 me-2"></i>Dashboard</>} id="dashboard-dropdown">
                  <NavDropdown.Item as={NavLink} to="/dashboard" onClick={() => setShowSidebar(false)}>
                    <i className="bi bi-house me-2"></i>Dashboard Home
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {searchData.slice(1, 6).map((item, index) => (
                    <NavDropdown.Item 
                      key={index}
                      as={NavLink} 
                      to={item.path}
                      onClick={() => setShowSidebar(false)}
                    >
                      <i className={`bi ${item.icon} me-2`}></i>
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                {['Customer', 'Services', 'Features'].map((item, index) => (
                  <Nav.Link 
                    key={index}
                    as={NavLink} 
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setShowSidebar(false)}
                  >
                    <i className={`bi ${searchData.find(d => d.name === item)?.icon} me-2`}></i>
                    {item}
                  </Nav.Link>
                ))}

                <Dropdown>
                  <Dropdown.Toggle as="div" className="nav-link">
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Contact
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/contactus" onClick={() => setShowSidebar(false)}>
                      <i className="bi bi-envelope me-2"></i>Contact Us
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/about" onClick={() => setShowSidebar(false)}>
                      <i className="bi bi-info-circle me-2"></i>About Us
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/professional" onClick={() => setShowSidebar(false)}>
                      <i className="bi bi-briefcase me-2"></i>Professional Services
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Button 
                  as={NavLink} 
                  to="/signin" 
                  className="sign-in-btn mt-3"
                  onClick={() => setShowSidebar(false)}
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Sign In
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto align-items-center">
              <NavDropdown 
                title={<><i className="bi bi-speedometer2 me-2"></i>Dashboard</>} 
                id="dashboard-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/dashboard">
                  <i className="bi bi-house me-2"></i>Dashboard Home
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {searchData.slice(1, 6).map((item, index) => (
                  <NavDropdown.Item key={index} as={NavLink} to={item.path}>
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {['Customer', 'Services', 'Features'].map((item, index) => (
                <Nav.Link key={index} as={NavLink} to={`/${item.toLowerCase()}`}>
                  <i className={`bi ${searchData.find(d => d.name === item)?.icon} me-2`}></i>
                  {item}
                </Nav.Link>
              ))}

              <Dropdown>
                <Dropdown.Toggle as="div" className="nav-link">
                  <i className="bi bi-person-lines-fill me-2"></i>
                  Contact
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/contactus">
                    <i className="bi bi-envelope me-2"></i>Contact Us
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/about">
                    <i className="bi bi-info-circle me-2"></i>About Us
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/professional">
                    <i className="bi bi-briefcase me-2"></i>Professional Services
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button 
                variant="outline-primary" 
                className="search-icon-btn ms-4" 
                onClick={() => setShowSearchModal(true)}
              >
                <i className="bi bi-search"></i>
              </Button>

              <Button as={NavLink} to="/signin" className="sign-in-btn ms-3">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign In
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal 
        show={showSearchModal} 
        onHide={() => setShowSearchModal(false)} 
        centered
        className="search-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-search me-2"></i>
            Quick Search
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="search-input-wrapper">
            <i className="bi bi-search search-prefix-icon"></i>
            <Form.Control
              type="text"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="search-input"
            />
          </div>
          <ListGroup className="search-results-list">
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleNavigate(item.path)}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  <span>{item.name}</span>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="no-results">
                <i className="bi bi-emoji-neutral me-2"></i>
                <span>No results found</span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavBar;