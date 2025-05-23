import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const healthCompanies = [
  "Apollo Munich Health Insurance",
  "Bajaj Allianz General Insurance",
  "HDFC ERGO Health Insurance",
  "ICICI Lombard General Insurance",
  "Max Bupa Health Insurance",
  "Religare Health Insurance",
  "Star Health and Allied Insurance",
];

const healthPlans = [
  "Family Health Optima - Apollo Munich",
  "Health Guard Plan - Bajaj Allianz",
  "Optima Restore - HDFC ERGO",
  "Health Secure - ICICI Lombard",
  "Health Companion - Max Bupa",
  "Care Plan - Religare",
  "Comprehensive Health Plan - Star Health",
];

const HealthInsurancePlans = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    setTimeout(() => setButtonClicked(false), 300); // Reset animation state
    alert(`Thank you ${name}, we will show you the best plans soon!`);
    // Handle actual plan fetching or redirection here
  };

  return (
    <Container
      className={`my-5 p-4 rounded-4 shadow-sm bg-white ${fadeIn ? 'fade-in' : ''}`}
      style={{ maxWidth: '900px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Back Button */}
      <Button
        variant="outline-secondary"
        className="mb-4"
        onClick={() => navigate(-1)}
        style={{ transition: 'all 0.3s ease' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e9f5ff')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '')}
      >
        ← Back
      </Button>

      {/* Hero Section */}
      <Row className="align-items-center bg-light rounded-4 p-4 mb-5 shadow-sm">
        <Col md={6} className="mb-4 mb-md-0">
          <h1 className="fw-bold mb-3 text-primary">Find the Right Health Insurance for You</h1>
          <p className="fs-5 text-secondary">
            Comprehensive coverage for you and your family. Start your health insurance journey with trusted providers.
          </p>
          <p className="mb-1"><Badge bg="success">Rs. 5 Lakh cover for family starting at Rs. 276/month*</Badge></p>
          <p><small className="text-muted">*Standard Terms and Conditions Apply.</small></p>
          <p><small className="text-muted">**Tax benefits are subject to changes in Income Tax Act.</small></p>
        </Col>

        <Col md={6}>
          <Card className="shadow-sm p-4 rounded-4 border-0">
            <h4 className="mb-4 text-center text-primary">Get Your Plan Details</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className="form-control-custom"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className={`w-100 fw-semibold btn-animate ${buttonClicked ? 'btn-bounce' : ''}`}
              >
                View Plans &nbsp;➡️
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Companies & Plans Section */}
      <Row>
        <Col md={6} className="mb-4">
          <h3 className="mb-3 text-primary">Health Insurance Companies</h3>
          <ListGroup className="shadow-sm rounded-4 list-group-hover-effect">
            {healthCompanies.map((company, idx) => (
              <ListGroup.Item key={idx} action>
                {company}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={6} className="mb-4">
          <h3 className="mb-3 text-primary">Popular Health Insurance Plans</h3>
          <ListGroup className="shadow-sm rounded-4 list-group-hover-effect">
            {healthPlans.map((plan, idx) => (
              <ListGroup.Item key={idx} action>
                {plan}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <style type="text/css">{`
        /* Fade in animation */
        .fade-in {
          animation: fadeIn 0.8s ease forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Hover scaling and shadow for list items */
        .list-group-hover-effect .list-group-item {
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .list-group-hover-effect .list-group-item:hover {
          background-color: #e9f5ff;
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
          z-index: 1;
        }

        /* Form controls focus effect */
        .form-control-custom:focus {
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
          border-color: #007bff;
          transition: box-shadow 0.3s ease;
        }

        /* Button hover effect */
        .btn-animate {
          transition: background-color 0.3s ease, transform 0.15s ease;
        }
        .btn-animate:hover {
          background-color: #0056b3;
        }

        /* Bounce animation on click */
        .btn-bounce {
          animation: bounce 0.3s ease;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </Container>
  );
};

export default HealthInsurancePlans;
