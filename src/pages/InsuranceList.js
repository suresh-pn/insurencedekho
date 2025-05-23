import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Car', subtitle: 'Insurance', icon: '🚗', path: '/insurance/car' },
  { name: 'Bike', subtitle: 'Insurance', icon: '🏍️', path: '/insurance/bike' },
  { name: 'Health', subtitle: 'Insurance', icon: '🏥', badge: 'Upto 25% Off*', path: '/insurance/health' },
  { name: 'Term', subtitle: 'Insurance', icon: '☂️', badge: 'Save On Tax*', path: '/insurance/term' },
  { name: 'Investment', subtitle: 'Plans', icon: '💹', path: '/insurance/investment' },
  { name: 'Business', subtitle: 'Insurance', icon: '🏢', badge: 'NEW', path: '/insurance/business' },
  { name: 'Family Health', subtitle: 'Insurance', icon: '👨‍👩‍👧‍👦', path: '/insurance/HealthInsurancePlan' },
  { name: 'Guaranteed', subtitle: 'Return Plans', icon: '💰', path: '/insurance/guaranteed-return' },
  { name: 'View More', subtitle: '', icon: '🔍', path: '/insurance/more-insurance-options' },
];

const InsuranceCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="my-5">

      <div className="p-4 rounded-5 bg-white shadow-sm">
        <Row className="gy-4">
          {categories.map((cat, idx) => (
            <Col key={idx} xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <Card
                className="border-0 text-center category-card"
                onClick={() => handleCategoryClick(cat.path)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => { if (e.key === 'Enter') handleCategoryClick(cat.path); }}
              >
                <div className="position-relative d-flex justify-content-center">
                  <div className="category-icon">{cat.icon}</div>
                  {cat.badge && (
                    <Badge bg="success" className="position-absolute top-0 start-100 translate-middle badge-sm">
                      {cat.badge}
                    </Badge>
                  )}
                </div>
                <Card.Body className="px-2 pt-2 pb-1">
                  <Card.Title className="mb-1 fs-6 fw-bold text-dark">{cat.name}</Card.Title>
                  {cat.subtitle && <Card.Text className="text-muted mb-0 fs-6">{cat.subtitle}</Card.Text>}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <style jsx>{`
        .category-card {
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .category-card:hover {
          transform: translateY(-6px);
        }
        .category-icon {
          width: 60px;
          height: 60px;
          background-color: #e6f0ff;
          font-size: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 6px rgba(0, 123, 255, 0.2);
        }
        .badge-sm {
          font-size: 0.6rem;
          padding: 0.2em 0.4em;
          border-radius: 0.5rem;
        }
      `}</style>
    </Container>
  );
};

export default InsuranceCategories;
