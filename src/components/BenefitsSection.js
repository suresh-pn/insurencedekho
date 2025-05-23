import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaClock, FaUsers, FaHeadset } from 'react-icons/fa'; // React Icons

const benefits = [
  {
    title: "5 Minutes Policy Issuance",
    text: "Instant policy with zero paperwork. Get insured in just 5 minutes.",
    icon: <FaClock />,
  },
  {
    title: "Over 80 Lac Happy Customers",
    text: "Trusted by millions with transparent and fast processes.",
    icon: <FaUsers />,
  },
  {
    title: "Dedicated Support Team",
    text: "Experts available 24x7 to help you at any step.",
    icon: <FaHeadset />,
  }
];

const BenefitsSection = () => (
  <Container className="py-5">
    <h3 className="text-center fw-bold text-primary mb-5">Benefits of InsuranceDhoka</h3>
    <Row className="gy-4">
      {benefits.map((item, idx) => (
        <Col md={4} sm={6} xs={12} key={idx}>
          <Card className="text-center border-0 shadow-lg h-100 rounded-4 p-3">
            <div
              className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#e9f5ff',
                fontSize: '24px',
                color: '#007bff'
              }}
            >
              {item.icon}
            </div>
            <Card.Body>
              <Card.Title className="fs-5 fw-semibold">{item.title}</Card.Title>
              <Card.Text className="text-muted">{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default BenefitsSection;
