import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const plansData = [
  {
    name: 'Axis Max Life Growth Plan',
    incomeBracket: '<2',
    minAge: 18,
    maxAge: 60,
    returns: '15.18%',
  },
  {
    name: 'HDFC Life Secure Plus',
    incomeBracket: '2-5',
    minAge: 25,
    maxAge: 65,
    returns: '14.58%',
  },
  {
    name: 'Bajaj Allianz Wealth Plan',
    incomeBracket: '5-10',
    minAge: 30,
    maxAge: 60,
    returns: '14.31%',
  },
  {
    name: 'TATA AIA Life Saver',
    incomeBracket: '>10',
    minAge: 18,
    maxAge: 55,
    returns: '17.98%',
  },
  {
    name: 'SBI Life Smart Champ',
    incomeBracket: '<2',
    minAge: 20,
    maxAge: 45,
    returns: '13.25%',
  },
  {
    name: 'ICICI Pru SmartKid Plan',
    incomeBracket: '2-5',
    minAge: 21,
    maxAge: 50,
    returns: '12.75%',
  },
  {
    name: 'Kotak Premier Endowment',
    incomeBracket: '5-10',
    minAge: 30,
    maxAge: 55,
    returns: '13.60%',
  },
  {
    name: 'PNB MetLife Guaranteed Future',
    incomeBracket: '>10',
    minAge: 25,
    maxAge: 45,
    returns: '16.75%',
  },
  {
    name: 'Max Life Smart Wealth Advantage',
    incomeBracket: '5-10',
    minAge: 35,
    maxAge: 60,
    returns: '14.45%',
  },
  {
    name: 'Aditya Birla Sun Life Vision Star',
    incomeBracket: '<2',
    minAge: 18,
    maxAge: 40,
    returns: '13.85%',
  },
  // Additional plans with varied age/income
  {
    name: 'SBI Life Retire Smart',
    incomeBracket: '10-20',
    minAge: 40,
    maxAge: 65,
    returns: '14.80%',
  },
  {
    name: 'HDFC Life Click 2 Wealth',
    incomeBracket: '>20',
    minAge: 30,
    maxAge: 55,
    returns: '15.95%',
  },
  {
    name: 'ICICI Pru Guaranteed Wealth',
    incomeBracket: '7-15',
    minAge: 28,
    maxAge: 60,
    returns: '14.10%',
  },
  {
    name: 'Max Life Smart Income Plan',
    incomeBracket: '3-7',
    minAge: 25,
    maxAge: 50,
    returns: '13.50%',
  },
];

const parseIncomeRange = (incomeStr) => {
  if (incomeStr.includes('<')) {
    return { min: 0, max: parseFloat(incomeStr.replace('<', '')) };
  }
  if (incomeStr.includes('>')) {
    return { min: parseFloat(incomeStr.replace('>', '')), max: Infinity };
  }
  if (incomeStr.includes('-')) {
    const [min, max] = incomeStr.split('-').map(Number);
    return { min, max };
  }
  const num = parseFloat(incomeStr);
  return { min: num, max: num };
};

const filterPlans = (age, income) => {
  const ageNum = parseInt(age, 10);
  const incomeNum = parseFloat(income);

  return plansData.filter((plan) => {
    const incomeRange = parseIncomeRange(plan.incomeBracket);
    if (incomeNum < incomeRange.min || incomeNum > incomeRange.max) {
      return false;
    }
    if (ageNum < plan.minAge || ageNum > plan.maxAge) {
      return false;
    }
    return true;
  });
};

const Plans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { age, income } = location.state || {};

  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [claimForm, setClaimForm] = useState({ claimAmount: '', claimReason: '' });
  const [claims, setClaims] = useState({});
  const [alertMsg, setAlertMsg] = useState('');

  if (!age || !income) {
    return (
      <Container className="py-5 text-center">
        <h4>Please provide age and income details first.</h4>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Container>
    );
  }

  const filteredPlans = filterPlans(age, income);

  const openDetailsModal = (plan) => {
    setSelectedPlan(plan);
    setClaimForm({ claimAmount: '', claimReason: '' });
    setAlertMsg('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
    setAlertMsg('');
  };

  const handleClaimChange = (e) => {
    const { name, value } = e.target;
    setClaimForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitClaim = (e) => {
    e.preventDefault();
    if (!claimForm.claimAmount || !claimForm.claimReason) {
      setAlertMsg('Please fill all claim details.');
      return;
    }

    setClaims((prev) => ({
      ...prev,
      [selectedPlan.name]: {
        amount: claimForm.claimAmount,
        reason: claimForm.claimReason,
        status: 'Submitted',
      },
    }));

    setAlertMsg('Claim submitted successfully!');
  };

  return (
    <Container className="py-5">
      <h3 className="mb-4 text-center text-primary">
        Plans Suggested For Age: {age} & Income: {income} Lakhs
      </h3>
      <Row className="g-3 justify-content-center">
        {filteredPlans.length ? (
          filteredPlans.map((plan, idx) => {
            const claim = claims[plan.name];
            return (
              <Col key={idx} xs={12} md={6} lg={4}>
                <Card className="shadow-sm h-100 border-0">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-success">{plan.name}</Card.Title>
                    <Card.Text>
                      Estimated Returns: <strong>{plan.returns}</strong>
                    </Card.Text>
                    <Card.Text>
                      Age Range: {plan.minAge} - {plan.maxAge} years
                    </Card.Text>
                    <Card.Text>
                      Income Bracket: {plan.incomeBracket} Lakhs
                    </Card.Text>
                    {claim ? (
                      <Alert variant="info" className="mt-auto mb-2">
                        Claim Status: <strong>{claim.status}</strong> <br />
                        Amount: ₹{claim.amount} <br />
                        Reason: {claim.reason}
                      </Alert>
                    ) : (
                      <div className="mt-auto mb-2 text-muted">No claims yet</div>
                    )}
                    <div className="d-flex gap-2">
                      <Button
                        variant="success"
                        className="fw-bold flex-grow-1"
                        onClick={() =>
                          navigate('/payment', {
                            state: { planName: plan.name, amount: 5000 },
                          })
                        }
                      >
                        Buy Now
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="fw-bold flex-grow-1"
                        onClick={() => openDetailsModal(plan)}
                      >
                        View Details / Claim
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="text-center text-muted">No plans found matching your criteria.</p>
        )}
      </Row>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPlan?.name} - Details & Claim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPlan && (
            <>
              <p>
                <strong>Returns:</strong> {selectedPlan.returns}
              </p>
              <p>
                <strong>Eligible Age Range:</strong> {selectedPlan.minAge} - {selectedPlan.maxAge} years
              </p>
              <p>
                <strong>Income Bracket:</strong> {selectedPlan.incomeBracket} Lakhs
              </p>
              <hr />
              <h5>Submit a Claim</h5>
              <Form onSubmit={submitClaim}>
                <Form.Group className="mb-3">
                  <Form.Label>Claim Amount (₹)</Form.Label>
                  <Form.Control
                    type="number"
                    name="claimAmount"
                    value={claimForm.claimAmount}
                    onChange={handleClaimChange}
                    min="1"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Reason for Claim</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="claimReason"
                    value={claimForm.claimReason}
                    onChange={handleClaimChange}
                    required
                  />
                </Form.Group>
                {alertMsg && <Alert variant="info">{alertMsg}</Alert>}
                <Button type="submit" variant="primary" className="w-100">
                  Submit Claim
                </Button>
              </Form>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Plans;
