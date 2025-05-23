import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, Modal } from 'react-bootstrap';
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

  // State for modal popup
  const [showModal, setShowModal] = useState(false);

  // Age and Income state
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert('Please agree to the terms & conditions and privacy policy.');
      return;
    }
    // Show modal to enter age & income
    setShowModal(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!age || !income) {
      alert('Please enter your age and annual income');
      return;
    }
    // Navigate to plans page with form data + age + income as state
    navigate('/plans', { state: { form, age, income } });
  };

  return (
    <Container className="py-5">
      <Button variant="outline-secondary" className="mb-4" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Row className="mb-4 text-center">
        <Col>
          <h2 className="fw-bold text-primary">
            Get ₹1 Crore Return by Investing <span className="text-success">₹10,000/month*</span> onwards
          </h2>
          <p className="text-muted">Compare plans from top insurers with high returns & tax benefits</p>
        </Col>
      </Row>

      <Row className="g-3 mb-5 justify-content-center">
        {insurers.map((insurer, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <Card className="text-center border-0 shadow-sm h-100">
              <Card.Body>
                <h6 className="mb-2 text-primary">{insurer.name}</h6>
                {insurer.rate ? (
                  <p className="mb-0 fw-bold text-success">{insurer.rate}</p>
                ) : (
                  <p className="mb-0 text-muted small">Rate on request</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-4 text-center">
        <Col>
          <h5 className="text-dark">
            Get <span className="text-success">Tax Benefits</span> under Section 80C & 10(10D)
          </h5>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 border-0 shadow">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Enter your Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="e.g. Suresh Kumar"
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
                    <option value="+91">IND (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                  </Form.Select>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter Mobile Number"
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
                      I agree to the <a href="#terms">terms & conditions</a> and <a href="#privacy">privacy policy</a>.
                    </>
                  }
                  required
                />
              </Form.Group>

              <Button type="submit" variant="success" className="w-100 fw-bold py-3">
                View Plans →
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Modal for Age & Income */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Help Us Suggest The Best Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleModalSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Please enter your age</Form.Label>
              <Form.Control
                type="number"
                min="18"
                max="100"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder="e.g. 30"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Annual Income (in lakhs)</Form.Label>
              <div className="d-flex justify-content-between">
                {['<2', '2-5', '5-10', '>10'].map((range) => (
                  <Button
                    key={range}
                    variant={income === range ? 'success' : 'outline-secondary'}
                    onClick={() => setIncome(range)}
                    className="flex-fill mx-1"
                    type="button"
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 fw-bold py-3">
              View Plans For Free →
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default InvestmentPlan;
