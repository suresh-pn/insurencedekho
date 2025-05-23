import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const productGroups = [
  {
    title: 'Term Life Insurance',
    badge: 'Save On Tax*',
    icon: 'bi-shield-check',
    products: [
      { name: 'Term Life Insurance', details: '2 cr.' },
      { name: 'Return of Premium', details: '' },
    ],
  },
  {
    title: 'Health Insurance',
    badge: 'Save On Tax*',
    icon: 'bi-person-check-fill',
    products: [
      { name: 'Aarogya Insurance', details: '1 cr.' },
      { name: 'Health Cover', details: '' },
      { name: 'Family Insurance', details: '' },
    ],
  },
  {
    title: 'Investment Plans',
    badge: 'Save & Secure Life',
    icon: 'bi-piggy-bank',
    products: [
      { name: 'Guaranteed Return Plans', details: '' },
      { name: 'Child Savings Plans', details: '' },
      { name: 'Retirement Plans', details: '' },
      { name: 'Annuity Plans', details: '' },
    ],
  },
  {
    title: 'Motor Insurance',
    badge: null,
    icon: 'bi-truck-front',
    products: [
      { name: 'Car Insurance', details: '' },
      { name: 'Bike Insurance', details: '' },
      { name: 'Taxi Insurance', details: '' },
      { name: 'Commercial Vehicle Insurance', details: '' },
    ],
  },
];

const InsuranceProducts = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <Button variant="outline-secondary" className="mb-4" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left me-2"></i> Back
      </Button>

      <h2 className="mb-4 fw-bold text-center text-primary">Explore Insurance Products</h2>

      {productGroups.map((group, idx) => (
        <div key={idx} className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <h4 className="fw-bold me-3 text-dark">{group.title}</h4>
            {group.badge && <Badge bg="success" className="fs-6">{group.badge}</Badge>}
          </div>

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {group.products.map((product, i) => (
              <Col key={i}>
                <Card className="h-100 border-0 shadow-sm rounded-4 hover-card transition">
                  <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center p-4">
                    <div className="icon-circle bg-light mb-3">
                      <i className={`bi ${group.icon} text-primary`} style={{ fontSize: '1.8rem' }}></i>
                    </div>
                    <Card.Title className="fw-semibold fs-5">{product.name}</Card.Title>
                    {product.details && (
                      <Card.Text className="text-muted small mt-1">{product.details}</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default InsuranceProducts;
