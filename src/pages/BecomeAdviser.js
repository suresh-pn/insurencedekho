import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Card, Alert } from 'react-bootstrap';
import { FaUserTie, FaEnvelope, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';

const BecomeAdviser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('adviserData', JSON.stringify(formData)); // Save in localStorage
    setShowAlert(true); // Show alert

    setTimeout(() => {
      setShowAlert(false); // Hide alert
      navigate('/advisers'); // Navigate after 2 seconds
    }, 2000);
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm p-4 rounded-4">
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className="fw-bold text-primary mb-3">Become an Insurance Adviser</h2>
            <p className="text-secondary">
              Join our team and help customers choose the right insurance plan.
            </p>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><FaBriefcase className="me-2 text-success" /> Work from anywhere</li>
              <li className="mb-2"><FaPhoneAlt className="me-2 text-warning" /> Full support & training</li>
              <li className="mb-2"><FaUserTie className="me-2 text-info" /> High earnings potential</li>
            </ul>
          </Col>

          <Col md={6}>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Your application has been submitted successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <h5 className="fw-semibold mb-3">Apply Now</h5>

              <Form.Group className="mb-3">
                <Form.Label><FaUserTie className="me-1" /> Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaEnvelope className="me-1" /> Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaPhoneAlt className="me-1" /> Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label><FaBriefcase className="me-1" /> Experience</Form.Label>
                <Form.Control
                  as="textarea"
                  name="experience"
                  rows={2}
                  value={formData.experience}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit Application
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default BecomeAdviser;
