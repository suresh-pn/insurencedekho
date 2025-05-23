import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaWpforms, FaClipboardCheck, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  {
    title: "Fill In Your Details",
    text: "Get quotes from top-rated insurers.",
    icon: <FaWpforms size={40} className="text-primary mb-3" />
  },
  {
    title: "Select a Plan",
    text: "Pick a plan that matches your needs and budget.",
    icon: <FaClipboardCheck size={40} className="text-success mb-3" />
  },
  {
    title: "Make Payment and Sit Back",
    text: "Pay online and get your policy instantly.",
    icon: <FaMoneyCheckAlt size={40} className="text-warning mb-3" />
  }
];

const HowItWorksSection = () => (
  <Container className="py-5 text-center">
    <h4 className="mb-4">How InsuranceDhoka Works?</h4>
    <Row className="gy-4">
      {steps.map((step, idx) => (
        <Col md={4} key={idx}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              {step.icon}
              <h5 className="fw-bold">{step.title}</h5>
              <p className="text-muted">{step.text}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default HowItWorksSection;
