import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Form, Button, InputGroup, Modal, Badge,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const insurers = [
  { name: 'Axis Max Life', rate: '15.18%' },
  { name: 'HDFC Life', rate: '14.58%' },
  { name: 'Bajaj Allianz', rate: '14.31%' },
  { name: 'TATA AIA Life', rate: '17.98%' },
  { name: 'ICICI Pru Life', rate: '12.17%' },
  { name: 'Bandhan Life', rate: '' },
  { name: 'PNB MetLife', rate: '' },
];

const InvestmentPlan = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    countryCode: '+91',
    mobile: '',
    termsAccepted: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({ age: '', income: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert('Please agree to the terms & conditions.');
      return;
    }
    setShowModal(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!userData.age || !userData.income) {
      alert('Please enter your age and income.');
      return;
    }
    navigate('/plans', { state: { age: userData.age, income: userData.income } });
  };

  return (
    <Container className="py-5">
      <Button variant="outline-secondary" onClick={() => navigate(-1)} className="mb-4">
        ← Back
      </Button>

      <Row className="mb-4 text-center">
        <Col>
          <h2 className="fw-bold text-primary">
            Get ₹1 Crore Return by Investing <span className="text-success">₹10,000/month*</span>
          </h2>
          <p className="text-muted">Compare from trusted plans offering high returns & tax savings</p>
        </Col>
      </Row>

      <Row className="g-3 mb-5 justify-content-center">
        {insurers.map((insurer, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <Card className="border-0 shadow h-100 text-center hover-zoom">
              <Card.Body>
                <h6 className="text-primary fw-semibold mb-1">{insurer.name}</h6>
                {insurer.rate ? (
                  <Badge bg="success" className="fs-6">{insurer.rate}</Badge>
                ) : (
                  <span className="text-muted small">Rate on request</span>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-4 text-center">
        <Col>
          <h5 className="text-dark">
            Avail <span className="text-success">Tax Benefits</span> under Section 80C & 10(10D)
          </h5>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 border-0 shadow-lg rounded-4">
            <h5 className="mb-4 text-center fw-semibold">Fill Your Details to View Plans</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rajiv Sharma"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                  <Form.Select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    style={{ maxWidth: '100px' }}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </Form.Select>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{7,15}"
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="termsAccepted"
                  checked={form.termsAccepted}
                  onChange={handleChange}
                  label={
                    <>
                      I agree to the <a href="#terms">terms</a> &{' '}
                      <a href="#privacy">privacy policy</a>.
                    </>
                  }
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 py-3 fw-bold">
                View Investment Plans →
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tell Us a Bit More</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Enter Age"
                min="18"
                max="100"
                value={userData.age}
                onChange={handleUserDataChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Annual Income</Form.Label>
              <Form.Select
                name="income"
                value={userData.income}
                onChange={handleUserDataChange}
                required
              >
                <option value="">Select Income Bracket</option>
                <option value="<2">Less than 2L</option>
                <option value="2-5">2L - 5L</option>
                <option value="5-10">5L - 10L</option>
                <option value=">10">More than 10L</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="success" className="w-100 fw-bold">
              Get My Plan →
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default InvestmentPlan;
