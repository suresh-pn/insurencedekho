import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button, Image, Card, Modal, ProgressBar,
} from 'react-bootstrap';
import { Bicycle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const BikeInsuranceForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    registrationNumber: '',
    isBrandNew: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [showPlans, setShowPlans] = useState(false);
  const [plans, setPlans] = useState([]);

  const [details, setDetails] = useState({
    brand: '',
    fuel: '',
    variant: '',
    year: '',
  });

  const bikeBrands = ['Hero', 'Honda', 'TVS', 'Bajaj', 'Yamaha', 'Royal Enfield', 'Suzuki', 'KTM'];
  const fuelTypes = ['Petrol', 'Electric'];
  const brandVariants = {
    Hero: ['Splendor Plus', 'HF Deluxe', 'Passion Pro'],
    Honda: ['Shine', 'Unicorn', 'Activa 6G'],
    TVS: ['Apache RTR 160', 'Jupiter', 'Sport'],
    Bajaj: ['Pulsar 150', 'CT 100', 'Avenger'],
    Yamaha: ['FZ', 'R15', 'Ray ZR'],
    'Royal Enfield': ['Classic 350', 'Bullet 350', 'Meteor 350'],
    Suzuki: ['Access 125', 'Gixxer', 'Burgman Street'],
    KTM: ['Duke 200', 'RC 125', 'Duke 390'],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value.toUpperCase(),
    }));
  };

  const handleStepChange = (key, value) => {
    setDetails((prev) => ({ ...prev, [key]: value }));

    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      setShowModal(false);

      // Pricing logic based on year, fuel, variant, brand new status
      const currentYear = new Date().getFullYear();
      const bikeYear = parseInt(value === '' ? details.year : value, 10);
      const age = currentYear - bikeYear;
      
      // Base price determined by variant complexity (mock logic)
      const variantBasePrices = {
        'Splendor Plus': 2500,
        'HF Deluxe': 2300,
        'Passion Pro': 2700,
        'Shine': 3000,
        'Unicorn': 3500,
        'Activa 6G': 2800,
        'Apache RTR 160': 4000,
        'Jupiter': 3200,
        'Sport': 3300,
        'Pulsar 150': 3800,
        'CT 100': 2000,
        'Avenger': 4500,
        'FZ': 4200,
        'R15': 4700,
        'Ray ZR': 3900,
        'Classic 350': 5500,
        'Bullet 350': 5200,
        'Meteor 350': 6000,
        'Access 125': 2600,
        'Gixxer': 3500,
        'Burgman Street': 4000,
        'Duke 200': 5000,
        'RC 125': 4800,
        'Duke 390': 6500,
      };
      
      let basePrice = variantBasePrices[details.variant] || 3000;

      // Reduce price by 5% per year of age
      basePrice *= Math.max(0.6, 1 - (age * 0.05));

      if ((details.fuel === 'Electric') || (key === 'fuel' && value === 'Electric')) {
        basePrice *= 1.1; // 10% more for electric bikes
      }

      if (formData.isBrandNew) {
        basePrice *= 1.2; // 20% more for brand new bikes
      }

      // Create several plans with more differentiation
      const generatedPlans = [
        {
          id: 1,
          planName: `${details.brand} Basic Plan`,
          price: Math.round(basePrice * 0.8),
          coverage: 'Third-party liability',
          ...details,
        },
        {
          id: 2,
          planName: `${details.brand} Standard Plan`,
          price: Math.round(basePrice),
          coverage: 'Third-party + Own damage',
          ...details,
        },
        {
          id: 3,
          planName: `${details.brand} Premium Plan`,
          price: Math.round(basePrice * 1.3),
          coverage: 'Comprehensive + Roadside Assistance',
          ...details,
        },
        {
          id: 4,
          planName: `${details.brand} Deluxe Plan`,
          price: Math.round(basePrice * 1.6),
          coverage: 'Premium coverage + Zero Depreciation',
          ...details,
        },
      ];

      setPlans(generatedPlans);
      setShowPlans(true);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regPattern = /^[A-Z]{2}-\d{2}-[A-Z]{1,2}-\d{4}$/;
    if (!regPattern.test(formData.registrationNumber.trim())) {
      alert('Please enter a valid registration number (e.g., MH-12-AB-1234)');
      return;
    }

    setStep(1);
    setShowModal(true);
    setShowPlans(false);
  };

  // Navigate to payment page with plan info
  const handleBuyNow = (plan) => {
    // Navigate and pass plan data via state (or use context/store)
    navigate('/payment', { state: { plan, registrationNumber: formData.registrationNumber, isBrandNew: formData.isBrandNew } });
  };

  const renderStepContent = () => {
    const commonSelectClass = 'form-select form-select-lg py-3 fw-semibold';

    switch (step) {
      case 1:
        return (
          <Form.Select
            className={commonSelectClass}
            value={details.brand}
            onChange={(e) => handleStepChange('brand', e.target.value)}
            aria-label="Select Bike Brand"
          >
            <option value="">Select Bike Brand</option>
            {bikeBrands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
          </Form.Select>
        );
      case 2:
        return (
          <Form.Select
            className={commonSelectClass}
            value={details.fuel}
            onChange={(e) => handleStepChange('fuel', e.target.value)}
            aria-label="Select Fuel Type"
          >
            <option value="">Select Fuel Type</option>
            {fuelTypes.map((fuel) => <option key={fuel} value={fuel}>{fuel}</option>)}
          </Form.Select>
        );
      case 3:
        return (
          <Form.Select
            className={commonSelectClass}
            value={details.variant}
            onChange={(e) => handleStepChange('variant', e.target.value)}
            aria-label="Select Variant"
            disabled={!details.brand}
          >
            <option value="">{details.brand ? 'Select Variant' : 'Please select a brand first'}</option>
            {(brandVariants[details.brand] || []).map((variant) => (
              <option key={variant} value={variant}>{variant}</option>
            ))}
          </Form.Select>
        );
      case 4:
        return (
          <Form.Select
            className={commonSelectClass}
            value={details.year}
            onChange={(e) => handleStepChange('year', e.target.value)}
            aria-label="Select Registration Year"
          >
            <option value="">Select Registration Year</option>
            {Array.from({ length: 15 }, (_, i) => {
              const y = new Date().getFullYear() - i;
              return <option key={y} value={y}>{y}</option>;
            })}
          </Form.Select>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="my-5 p-4 bg-white rounded shadow-sm">
      <Button variant="outline-secondary" onClick={() => navigate(-1)} className="mb-3">
        ← Back
      </Button>

      <Row className="align-items-center">
        <Col md={7}>
          <div className="d-flex align-items-center mb-3">
            <Bicycle size={40} color="#0d6efd" className="me-2" />
            <h3 className="mb-0 fw-bold">Bike Insurance</h3>
          </div>
          <p className="text-muted fs-5 mb-4">
            Bike insurance starting from <span className="fw-semibold text-primary">₹ 2/day*</span>
          </p>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="registrationNumber" className="mb-3">
              <Form.Label>Your Bike Number <small className="text-muted">(e.g. MH-12-XY-7890)</small></Form.Label>
              <Form.Control
                type="text"
                name="registrationNumber"
                placeholder="Enter your bike registration number"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group controlId="isBrandNew" className="mb-4">
              <Form.Check
                type="checkbox"
                label="Brand new bike?"
                name="isBrandNew"
                checked={formData.isBrandNew}
                onChange={handleChange}
                className="form-check-input-lg"
              />
            </Form.Group>

            <Button
              type="submit"
              size="lg"
              className="w-100 py-3 fw-semibold"
              style={{ backgroundColor: '#0d6efd' }}
            >
              Get Quotes
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <Image
            src=" "
            alt="Bike Insurance"
            rounded
            fluid
            style={{ maxHeight: '350px' }}
          />
        </Col>
      </Row>

      {/* Modal for selecting Brand, Fuel, Variant, Year */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Step {step} of 4</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderStepContent()}
          <ProgressBar now={(step / 4) * 100} className="mt-3" />
        </Modal.Body>
        <Modal.Footer>
          {step > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Plans Display */}
      {showPlans && (
        <>
          <h4 className="text-center my-5 fw-semibold">Available Plans for {details.brand} {details.variant} ({details.year})</h4>
          <Row className="g-4">
            {plans.map((plan) => (
              <Col key={plan.id} md={6} lg={4}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title className="fw-bold">{plan.planName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Coverage: {plan.coverage}</Card.Subtitle>
                    <Card.Text>
                      <strong>Price:</strong> ₹ {plan.price} / year
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => handleBuyNow(plan)}
                      className="w-100"
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

export default BikeInsuranceForm;
