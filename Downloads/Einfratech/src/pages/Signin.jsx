import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css"; // Make sure to include custom styling

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`signin-container ${isSignUp ? "active" : ""}`}
      >
        <Row className="g-0">
          {/* Left Image Section */}
          <Col md={6} className="signin-image d-flex align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h3>{isSignUp ? "Already have an account?" : "New here?"}</h3>
              <Button
                variant="light"
                className="mt-3 toggle-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Button>
            </motion.div>
          </Col>

          {/* Right Form Section */}
          <Col md={6}>
            <Card className="p-4 shadow-lg">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-center mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h2>
                <Form>
                  {isSignUp && (
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                  </Form.Group>
                  {!isSignUp && (
                    <p className="text-end text-primary forgot-pass">Forgot password?</p>
                  )}
                  <Button className="w-100" variant="primary" type="submit">
                    {isSignUp ? "Sign Up" : "Sign In"}
                  </Button>
                </Form>
              </motion.div>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default SignIn;
