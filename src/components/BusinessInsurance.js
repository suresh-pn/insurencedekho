// src/pages/BusinessInsurance.js
import React from 'react';
import { Container, Row, Col, Card, Dropdown, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BriefcaseFill, ShieldFillCheck, Building, Fire, Truck, PeopleFill } from 'react-bootstrap-icons';

const businessCategories = {
  'Employee Benefits': [
    'Group Medical Coverage',
    'Group Term Life',
    'Group Personal Accident',
  ],
  Engineering: [
    'Contractor’s Plant & Machinery',
    'Erection All Risk',
    'Contractors\' All Risk',
  ],
  Liability: [
    'Workmen Compensation',
    'Directors and Officers',
    'Errors and Omissions',
    'Commercial General',
    'Carrier Legal',
    'Public Liability',
    'Professional Indemnity',
    'Fidelity',
    'Cyber',
  ],
  Marine: ['Specific Marine', 'Open Marine', 'Marine Hull'],
  Property: [
    'Fire & Burglary',
    'Shopkeeper',
    'Home',
    'Jeweller\'s Block Package',
    'Machinery Breakdown Damage',
    'Office Package',
  ],
};

const popularProducts = [
  { name: 'Fire & Burglary', icon: <Fire size={40} color="#d9534f" /> },
  { name: 'Specific Marine', icon: <Truck size={40} color="#0275d8" /> },
  { name: 'Contractor’s Plant & Machinery', icon: <Building size={40} color="#5bc0de" /> },
  { name: 'Workmen Compensation', icon: <PeopleFill size={40} color="#5cb85c" /> },
  { name: 'Group Medical Coverage', icon: <ShieldFillCheck size={40} color="#f0ad4e" /> },
  { name: 'Group Personal Accident', icon: <BriefcaseFill size={40} color="#292b2c" /> },
];

const BusinessInsurance = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Button
        variant="outline-secondary"
        onClick={() => navigate(-1)}
        className="mb-4 fw-semibold rounded-pill px-4"
        style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}
      >
        ← Back
      </Button>

      <div className="text-center mb-5 px-3">
        <h2 className="fw-bold mb-2" style={{ letterSpacing: '0.05em' }}>
          Compare & Buy Business Insurance Online
        </h2>
        <h5 className="text-muted mb-1">Vyapaar ka Best Insurance Kavach</h5>
        <p className="text-primary fw-semibold fs-5 mb-3">Starting at just ₹8 per day*</p>
        <Button
          variant="danger"
          className="mt-2 px-5 py-2 fw-semibold shadow-sm"
          style={{ fontSize: '1.1rem', borderRadius: '30px' }}
        >
          Get A Quote
        </Button>
      </div>

      {/* Category Dropdowns */}
      <Row className="mb-5">
        {Object.entries(businessCategories).map(([category, options]) => (
          <Col md={4} className="mb-4" key={category}>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-dark"
                className="w-100 text-start fw-bold rounded-pill shadow-sm"
                style={{ padding: '0.6rem 1.2rem', fontSize: '1.1rem' }}
              >
                {category}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {options.map((item, index) => (
                  <Dropdown.Item key={index} href="#">
                    {item}
                    <Badge bg="info" className="ms-2">New</Badge>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        ))}
      </Row>

      <hr className="mb-4" />

      {/* Popular Products Section */}
      <h4 className="mb-4 text-center fw-bold text-primary">
        Popular Business Insurance Products
      </h4>
      <Row className="g-4">
        {popularProducts.map(({ name, icon }, idx) => (
          <Col md={4} key={idx}>
            <Card
              className="h-100 text-center shadow-sm border-0 rounded-4"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => alert(`You selected: ${name}`)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div className="mb-3">{icon}</div>
                <Card.Title className="fw-semibold" style={{ fontSize: '1.25rem' }}>
                  {name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <Button
          variant="outline-primary"
          className="px-5 py-2 fw-semibold rounded-pill"
          style={{ fontSize: '1.1rem' }}
        >
          Get A Quote
        </Button>
        <p className="text-muted mt-3" style={{ fontStyle: 'italic' }}>
          #InsuranceDekho | BadhteIndiaKaBharosa
        </p>
      </div>
    </Container>
  );
};

export default BusinessInsurance;
