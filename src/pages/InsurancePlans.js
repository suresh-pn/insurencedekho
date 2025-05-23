import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const mockPlans = [
  {
    id: 1,
    name: 'Basic Cover',
    provider: 'PolicyBazaar',
    price: '₹4,999/year',
    features: ['Third-party cover', 'Cashless garage'],
  },
  {
    id: 2,
    name: 'Premium Plan',
    provider: 'Digit',
    price: '₹6,999/year',
    features: ['Own damage + Third-party', 'Roadside Assistance'],
  },
];

const InsurancePlans = ({ data }) => {
  return (
    <div className="mt-4">
      <h5>Available Insurance Plans:</h5>
      <Row>
        {mockPlans.map(plan => (
          <Col md={6} key={plan.id} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{plan.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {plan.provider}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Price: {plan.price}</strong>
                  <ul>
                    {plan.features.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InsurancePlans;
