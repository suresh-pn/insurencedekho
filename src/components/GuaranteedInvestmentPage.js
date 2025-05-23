import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const companies = [
  { name: 'Axis Max Life', rate: '15.18%' },
  { name: 'HDFC Life', rate: '14.58%' },
  { name: 'Bajaj Allianz', rate: '14.31%' },
  { name: 'TATA AIA Life', rate: '17.98%' },
  { name: 'ICICI Pru Life', rate: '12.17%' },
  { name: 'Bandhan Life', rate: 'N/A' },
  { name: 'PNB MetLife', rate: 'N/A' },
];

const GuaranteedInvestmentPage = () => {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState('+91');
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to terms & conditions');
      return;
    }
    alert(`Details submitted for ${fullName}, mobile: ${countryCode} ${mobile}`);
  };

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Button
        variant="outline-secondary"
        className="mb-4 shadow-sm"
        onClick={() => navigate(-1)}
        style={{ minWidth: '100px' }}
      >
        ← Back
      </Button>

      <Row className="align-items-center gy-5">
        {/* Left Info Section */}
        <Col md={7} className="pe-md-5">
          <h1 className="display-5 fw-bold lh-base">
            Get <span className="text-primary">₹1 Crore</span> guaranteed return by Investing
            <br />
            <span className="text-primary">₹10,000/month*</span> onwards
          </h1>
          <p className="text-muted fs-5 mt-3">Tax Benefits u/s 80C &amp; 10(10D)</p>
          <p className="text-secondary fs-6 mt-4" style={{ maxWidth: '420px' }}>
            Secure your future with our trusted plans offering guaranteed returns and tax
            advantages. Invest smartly today and reap the benefits tomorrow.
          </p>
        </Col>

        {/* Right Form Section */}
        <Col md={5}>
          <Card className="shadow-lg border-0 rounded-4 p-4 bg-white">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName" className="mb-4">
                <Form.Label className="fw-semibold fs-6">Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="shadow-sm"
                />
              </Form.Group>

              <Form.Label className="fw-semibold fs-6 mb-2">Mobile Number</Form.Label>
              <InputGroup className="mb-4 shadow-sm rounded">
                <DropdownButton
                  variant="outline-secondary"
                  title={countryCode}
                  id="input-group-dropdown-1"
                  onSelect={(code) => setCountryCode(code)}
                  className="border-end-0"
                  style={{ minWidth: '6rem' }}
                >
                  <Dropdown.Item eventKey="+91">IND (+91)</Dropdown.Item>
                  <Dropdown.Item eventKey="+1">USA (+1)</Dropdown.Item>
                  <Dropdown.Item eventKey="+44">UK (+44)</Dropdown.Item>
                  <Dropdown.Item eventKey="+61">AUS (+61)</Dropdown.Item>
                </DropdownButton>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  maxLength={10}
                  className="border-start-0"
                />
              </InputGroup>

              <Form.Group controlId="formTerms" className="mb-4">
                <Form.Check
                  type="checkbox"
                  label={
                    <>
                      I agree to the{' '}
                      <a href="#terms" className="text-decoration-underline">
                        terms & conditions
                      </a>{' '}
                      and{' '}
                      <a href="#privacy" className="text-decoration-underline">
                        privacy policy
                      </a>
                      .
                    </>
                  }
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  required
                  className="user-select-none"
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 mb-3 fw-semibold shadow-sm">
                View Plans &rarr;
              </Button>
              <Button
                variant="success"
                className="w-100 fw-semibold shadow-sm"
                onClick={() => alert('WhatsApp details request sent!')}
              >
                Get Details on WhatsApp
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <h4 className="mt-5 mb-4 fw-bold">Top Investment Companies & Returns</h4>
      <Row className="g-4">
        {companies.map((comp, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <Card className="text-center shadow-sm h-100 border rounded-3 hover-shadow">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center p-3">
                <Card.Title className="fs-6 fw-semibold">{comp.name}</Card.Title>
                <Card.Text className="text-primary fw-bold fs-5 mt-2">{comp.rate}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 6px 15px rgba(0, 123, 255, 0.25) !important;
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </Container>
  );
};

export default GuaranteedInvestmentPage;
