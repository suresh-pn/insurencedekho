import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HealthInsuranceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', gender: '', mobile: '' });
  const [showModal, setShowModal] = useState(false);
  const [members, setMembers] = useState([]);
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [plans, setPlans] = useState([]);
  const [showPlans, setShowPlans] = useState(false);

  const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];

  // More detailed base plans with basePrice to calculate dynamic prices
  const basePlans = [
    { id: 1, title: 'Basic Health Plan', company: 'HealthCare Inc.', basePrice: 5000 },
    { id: 2, title: 'Family Health Plan', company: 'SecureLife', basePrice: 12000 },
    { id: 3, title: 'Premium Health Cover', company: 'Wellness Plus', basePrice: 20000 },
    { id: 4, title: 'Senior Citizen Plan', company: 'Golden Age Insurers', basePrice: 15000 },
    { id: 5, title: 'Comprehensive Cover', company: 'Shield Health', basePrice: 25000 },
    { id: 6, title: 'Critical Illness Plan', company: 'LifeGuard', basePrice: 18000 },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const toggleMember = (member) => {
    setMembers(
      members.includes(member)
        ? members.filter((m) => m !== member)
        : [...members, member]
    );
  };

  // Calculate price based on number of members and dummy city adjustment
  const calculatePlanPrices = () => {
    const numMembers = members.length;
    // City multiplier (example: higher premiums for metro cities)
    const cityMultiplier = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'].includes(city) ? 1.2 : 1;

    return basePlans.map((plan) => {
      // Simple formula: base price * number of members * city multiplier
      const price = Math.round(plan.basePrice * numMembers * cityMultiplier);

      return {
        ...plan,
        priceDisplay: `₹${price.toLocaleString()}/year`,
        calculatedPrice: price,
        title: `${plan.title} (${city || 'Your City'})`, // Show city in title for demo
      };
    });
  };

  const handleModalContinue = () => {
    if (!pincode || !city || members.length === 0) {
      alert('Please select at least one member, enter pincode and select city.');
      return;
    }
    setShowModal(false);
  
    const calculatedPlans = calculatePlanPrices();
    setPlans(calculatedPlans);
    setShowPlans(true);
  };

  const renderMemberButton = (label, icon) => (
    <Button
      key={label}
      variant={members.includes(label) ? 'success' : 'outline-secondary'}
      className="m-1 rounded-pill shadow-sm"
      onClick={() => toggleMember(label)}
      style={{ minWidth: '110px', fontWeight: '500', transition: 'all 0.3s ease' }}
    >
      <i className={`bi ${icon} me-2 fs-5`}></i>
      {label}
    </Button>
  );

  const handleBuyNow = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan, user: formData, members, city, pincode } });
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg border-0 bg-white rounded-4">
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Buy Health Insurance Plans Online</h2>
            <p className="text-muted fs-5">
              Protect yourself and your family from medical expenses like hospitalization,
              ambulance charges, medicines and more. Save taxes under Section 80D.
            </p>
            <ul className="ps-4 mb-4" style={{ lineHeight: '1.8' }}>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>134 Plans from 22 Companies</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Free expert advice</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>24x7 claim support</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Flexible payment options</li>
              <li><i className="bi bi-emoji-smile-fill text-success me-2"></i>1 lakh+ happy families</li>
            </ul>
            <div className="bg-success text-white p-3 rounded shadow-sm fw-semibold fs-5">
              🎉 Get Online Discount up to 25% Off*
            </div>
          </Col>

          <Col lg={6}>
            <Button
              variant="outline-secondary"
              size="sm"
              className="mb-3"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <Form onSubmit={handleSubmit} className="bg-light p-4 rounded-4 shadow-sm">
              <h4 className="mb-4 text-primary fw-semibold">Get Your Health Insurance Quote</h4>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    value="Male"
                    onChange={handleChange}
                    required
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    value="Female"
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow-sm"
                  style={{ fontSize: '1.1rem' }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Mobile Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-2 shadow-sm">
                    <i className="bi bi-phone-fill fs-5"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="shadow-sm"
                    style={{ fontSize: '1.1rem' }}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Text className="text-muted d-block mb-4" style={{ fontSize: '0.9rem' }}>
                By clicking, I agree to the <a href="#!">terms & conditions</a> and <a href="#!">privacy policy</a>.
              </Form.Text>

              <div className="d-grid gap-3">
                <Button type="submit" variant="primary" size="lg" className="shadow">
                  View Plans
                </Button>
                <Button variant="outline-success" size="lg" className="shadow" onClick={() => alert('WhatsApp details request sent!')}>
                  <i className="bi bi-whatsapp me-2"></i>Get Details on WhatsApp
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        dialogClassName="rounded-4"
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">
            <i className="bi bi-heart-pulse-fill text-danger me-2 fs-4"></i>Choose Family Members
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="fw-semibold mb-3">Select Adults</h5>
          <div className="mb-4 d-flex flex-wrap justify-content-start">
            {renderMemberButton('Self', 'bi-person')}
            {renderMemberButton('Spouse', 'bi-person-hearts')}
            {renderMemberButton('Mother', 'bi-person-vcard')}
            {renderMemberButton('Father', 'bi-person-bounding-box')}
          </div>

          <h5 className="fw-semibold mb-3">Select Children (up to 30 years)</h5>
          <div className="mb-4 d-flex flex-wrap justify-content-start">
            {renderMemberButton('Son', 'bi-gender-male')}
            {renderMemberButton('Daughter', 'bi-gender-female')}
          </div>

          <Row className="gy-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Area Pincode</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="bg-white border-2 shadow-sm">
                    <i className="bi bi-geo-alt-fill text-primary"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    maxLength={6}
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/, ''))}
                    required
                    className="shadow-sm"
                    style={{ fontSize: '1.1rem' }}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">Select City</Form.Label>
                <Form.Select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="shadow-sm"
                  style={{ fontSize: '1.1rem' }}
                >
                  <option value="">Select city</option>
                  {cities.map((cityName) => (
                    <option key={cityName} value={cityName}>
                      {cityName}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-start me-auto ms-3 fw-semibold text-muted">
            Selected members: {members.length}
          </div>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleModalContinue}>
            Show Plans
          </Button>
        </Modal.Footer>
      </Modal>

      {/* PLANS DISPLAY */}
      {showPlans && (
        <section className="my-5">
          <h3 className="mb-4 text-center fw-semibold text-primary">Available Health Insurance Plans</h3>
          {plans.length === 0 ? (
            <p className="text-center text-muted">No plans available for selected options.</p>
          ) : (
            <Row xs={1} md={2} lg={3} className="g-4">
              {plans.map((plan) => (
                <Col key={plan.id}>
                  <Card className="shadow-sm border-0 h-100 rounded-4">
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="fw-bold fs-5">{plan.title}</Card.Title>
                        <Card.Subtitle className="mb-3 text-muted fs-6">
                          {plan.company}
                        </Card.Subtitle>
                        <Card.Text className="fs-6">
                          Sum Insured: ₹5 Lakh to ₹50 Lakh
                        </Card.Text>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="fw-semibold fs-5 text-success">{plan.priceDisplay}</span>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleBuyNow(plan)}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </section>
      )}
    </Container>
  );
};

export default HealthInsuranceForm;
