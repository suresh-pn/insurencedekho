import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button, Image, Card, Modal, ProgressBar,
} from 'react-bootstrap';
import { CarFrontFill, ChevronRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const CarInsuranceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    registrationNumber: '',
    isBrandNew: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [showPlans, setShowPlans] = useState(false);
  const [details, setDetails] = useState({
    brand: '',
    fuel: '',
    variant: '',
    year: '',
  });

  const [plans, setPlans] = useState([]);

  const carBrands = ['Maruti', 'Hyundai', 'Tata', 'Honda', 'Mahindra', 'Kia', 'Toyota', 'Skoda'];
  const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];
  const brandVariants = {
    Maruti: ['Alto', 'Swift', 'Dzire', 'Baleno', 'Brezza'],
    Hyundai: ['i10', 'i20', 'Creta', 'Venue', 'Verna'],
    Tata: ['Nexon', 'Punch', 'Harrier', 'Altroz'],
    Honda: ['City', 'Amaze', 'Jazz', 'WR-V'],
    Mahindra: ['Thar', 'XUV300', 'Scorpio', 'Bolero'],
    Kia: ['Seltos', 'Sonet', 'Carnival'],
    Toyota: ['Innova', 'Fortuner', 'Glanza'],
    Skoda: ['Rapid', 'Kushaq', 'Octavia'],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.toUpperCase(),
    }));
  };

  // Helper function to calculate base price depending on year (newer = more expensive)
  const basePriceByYear = (year) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age <= 1) return 6000;
    if (age <= 3) return 5000;
    if (age <= 5) return 4000;
    if (age <= 8) return 3000;
    return 2000;
  };

  // Helper function to adjust price based on brand popularity
  const brandMultiplier = (brand) => {
    switch (brand) {
      case 'Toyota': return 1.3;
      case 'Hyundai': return 1.2;
      case 'Kia': return 1.15;
      case 'Honda': return 1.1;
      case 'Maruti': return 1.0;
      case 'Tata': return 0.95;
      case 'Mahindra': return 0.9;
      case 'Skoda': return 1.05;
      default: return 1.0;
    }
  };

  // Helper function to adjust price based on fuel type
  const fuelMultiplier = (fuel) => {
    switch (fuel) {
      case 'Electric': return 1.25;
      case 'Diesel': return 1.1;
      case 'Petrol': return 1.0;
      case 'CNG': return 0.85;
      default: return 1.0;
    }
  };

  // Generate plans dynamically
  const generatePlans = () => {
    const basePrice = basePriceByYear(parseInt(details.year));
    const brandMult = brandMultiplier(details.brand);
    const fuelMult = fuelMultiplier(details.fuel);

    // Calculate price helper
    const calcPrice = (base, extra = 0) => Math.round((base * brandMult * fuelMult) + extra);

    return [
      {
        planName: 'Comprehensive Cover',
        id: 'plan_comprehensive',
        price: calcPrice(basePrice, 1500),
      },
      {
        planName: 'Third-Party Only',
        id: 'plan_thirdparty',
        price: calcPrice(basePrice, -1000),
      },
      {
        planName: 'Zero Depreciation',
        id: 'plan_zero_depr',
        price: calcPrice(basePrice, 2500),
      },
      {
        planName: 'Personal Accident Cover',
        id: 'plan_personal_accident',
        price: calcPrice(1000),
      },
      {
        planName: 'Engine Protect Cover',
        id: 'plan_engine_protect',
        price: calcPrice(1200),
      },
      {
        planName: 'Roadside Assistance',
        id: 'plan_roadside_assist',
        price: calcPrice(700),
      },
      {
        planName: 'Return to Invoice',
        id: 'plan_return_invoice',
        price: calcPrice(basePrice, 1800),
      },
    ].map(plan => ({
      ...plan,
      brand: details.brand,
      fuel: details.fuel,
      variant: details.variant,
      year: details.year,
    }));
  };

  const handleStepChange = (key, value) => {
    setDetails((prev) => ({ ...prev, [key]: value }));
    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      setShowModal(false);
      const generatedPlans = generatePlans();
      setPlans(generatedPlans);
      setShowPlans(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regPattern = /^[A-Z]{2}-\d{2}-[A-Z]{1,2}-\d{4}$/;
    if (!regPattern.test(formData.registrationNumber.trim())) {
      alert('Please enter a valid registration number (e.g., DL-12-AB-1234)');
      return;
    }
    setStep(1);
    setShowModal(true);
  };

  // Redirect to payment page on Buy Now click
  const handleBuyNow = (plan) => {
    navigate('/payment', { state: { plan, registrationNumber: formData.registrationNumber, details } });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Form.Select
            aria-label="Select Car Brand"
            value={details.brand}
            onChange={(e) => handleStepChange('brand', e.target.value)}
            className="shadow-sm"
          >
            <option value="">Select Car Brand</option>
            {carBrands.map((brand) => <option key={brand}>{brand}</option>)}
          </Form.Select>
        );
      case 2:
        return (
          <Form.Select
            aria-label="Select Fuel Type"
            value={details.fuel}
            onChange={(e) => handleStepChange('fuel', e.target.value)}
            className="shadow-sm"
          >
            <option value="">Select Fuel Type</option>
            {fuelTypes.map((fuel) => <option key={fuel}>{fuel}</option>)}
          </Form.Select>
        );
      case 3:
        return (
          <Form.Select
            aria-label="Select Variant"
            value={details.variant}
            onChange={(e) => handleStepChange('variant', e.target.value)}
            className="shadow-sm"
          >
            <option value="">Select Variant</option>
            {(brandVariants[details.brand] || []).map((variant) => (
              <option key={variant}>{variant}</option>
            ))}
          </Form.Select>
        );
      case 4:
        return (
          <Form.Select
            aria-label="Select Registration Year"
            value={details.year}
            onChange={(e) => handleStepChange('year', e.target.value)}
            className="shadow-sm"
          >
            <option value="">Select Registration Year</option>
            {Array.from({ length: 15 }, (_, i) => {
              const y = new Date().getFullYear() - i;
              return <option key={y}>{y}</option>;
            })}
          </Form.Select>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="my-5 p-4 bg-white rounded shadow">
      <Button
        variant="outline-secondary"
        onClick={() => navigate(-1)}
        className="mb-4 fw-semibold"
      >
        ← Back
      </Button>

      <Row className="align-items-center gy-4">
        <Col md={7}>
          <div className="d-flex align-items-center mb-4 gap-3">
            <CarFrontFill size={48} color="#0d6efd" />
            <h2 className="fw-bold mb-0">Car Insurance</h2>
          </div>
          <p className="text-muted fs-5 mb-4">
            Starting from <span className="fw-semibold text-primary">₹ 6/day*</span>
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="registrationNumber" className="mb-4">
              <Form.Label className="fw-semibold">Your Car Number</Form.Label>
              <Form.Control
                type="text"
                name="registrationNumber"
                placeholder="Eg: DL-12-AB-2345"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
                className="shadow-sm"
                style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
              />
              <Form.Text className="text-muted fst-italic">
                Format: Two letters - two digits - 1 or 2 letters - 4 digits
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="isBrandNew" className="mb-4">
              <Form.Check
                type="checkbox"
                label="Is your car brand new?"
                name="isBrandNew"
                checked={formData.isBrandNew}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary" size="lg" className="w-100 fw-semibold shadow-sm">
              Proceed &nbsp; <ChevronRight size={18} />
            </Button>
          </Form>

          <p className="mt-3 fs-7 text-muted">
            By clicking proceed, you agree to our{' '}
            <a href="/terms" target="_blank" rel="noreferrer">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            .
          </p>
        </Col>

        <Col md={5} className="text-center">
          <Image
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80"
            alt="Car Insurance"
            rounded
            fluid
            className="shadow"
          />
        </Col>
      </Row>

      {/* Modal for multi-step form */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Step {step} of 4</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar
            now={(step / 4) * 100}
            style={{ height: '12px', borderRadius: '6px' }}
            className="mb-3"
            animated
            striped
          />
          {renderStepContent()}
        </Modal.Body>
        <Modal.Footer>
          {step > 1 && (
            <Button
              variant="outline-secondary"
              onClick={() => setStep((prev) => prev - 1)}
            >
              ← Back
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Show generated plans */}
      {showPlans && (
        <>
          <h3 className="mt-5 fw-bold text-center">Recommended Plans for your {details.variant}</h3>
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {plans.map(({ planName, price, id }) => (
              <Col key={id}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{planName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">₹ {price} / year</Card.Subtitle>
                    <Card.Text className="flex-grow-1">
                      Comprehensive cover with benefits tailored for your {details.fuel} {details.brand} {details.variant}, registered in {details.year}.
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleBuyNow({ planName, price, id })}
                      className="mt-auto fw-semibold"
                    >
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default CarInsuranceForm;
