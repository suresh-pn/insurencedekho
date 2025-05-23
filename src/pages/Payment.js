import React, { useState, useEffect } from 'react';
import { Container, Button, Alert, Spinner, Card, Modal, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { plan, selectedPlan } = location.state || {};
  const [activePlan, setActivePlan] = useState(null);
  const [loading] = useState(false);
  const [error, setError] = useState(null);

  // Payment modal controls
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Card details state
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // Other payment method inputs
  const [upiId, setUpiId] = useState('');
  const [netBankingUser, setNetBankingUser] = useState('');
  const [walletNumber, setWalletNumber] = useState('');

  // Validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (plan) {
      setActivePlan({
        insuranceType: plan.insuranceType || 'general',
        planName: plan.planName,
        brand: plan.brand || '',
        fuel: plan.fuel || '',
        variant: plan.variant || '',
        year: plan.year || '',
        price: plan.price,
      });
    } else if (selectedPlan) {
      setActivePlan({
        insuranceType: selectedPlan.type || 'health',
        planName: selectedPlan.title,
        brand: '',
        fuel: '',
        variant: '',
        year: '',
        price: parseInt(selectedPlan.priceDisplay?.replace(/[^\d]/g, '') || 0),
        company: selectedPlan.company,
      });
    }
  }, [plan, selectedPlan]);

  const handleCheckout = () => {
    setShowPaymentModal(true);
  };

  // Validation function for card details
  const validateCardDetails = () => {
    const cardErrors = {};
    if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ''))) {
      cardErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      cardErrors.expiry = 'Expiry date must be in MM/YY format';
    }
    if (!/^\d{3}$/.test(cvv)) {
      cardErrors.cvv = 'CVV must be 3 digits';
    }
    return cardErrors;
  };

  // Validation for UPI ID (simple pattern with '@')
  const validateUpi = () => {
    const upiErrors = {};
    if (!upiId.trim()) {
      upiErrors.upiId = 'UPI ID is required';
    } else if (!/^[\w.-]+@[\w]+$/.test(upiId.trim())) {
      upiErrors.upiId = 'Invalid UPI ID format';
    }
    return upiErrors;
  };

  // Validation for Net Banking user input (just non-empty)
  const validateNetBanking = () => {
    const netErrors = {};
    if (!netBankingUser.trim()) {
      netErrors.netBankingUser = 'Net Banking username is required';
    }
    return netErrors;
  };

  // Validation for Wallet number (digits only, min 6 digits)
  const validateWallet = () => {
    const walletErrors = {};
    if (!walletNumber.trim()) {
      walletErrors.walletNumber = 'Wallet number is required';
    } else if (!/^\d{6,}$/.test(walletNumber.trim())) {
      walletErrors.walletNumber = 'Wallet number must be at least 6 digits';
    }
    return walletErrors;
  };

  const validatePayment = () => {
    let validationErrors = {};
    if (paymentMethod === 'card') {
      validationErrors = validateCardDetails();
    } else if (paymentMethod === 'upi') {
      validationErrors = validateUpi();
    } else if (paymentMethod === 'netbanking') {
      validationErrors = validateNetBanking();
    } else if (paymentMethod === 'wallet') {
      validationErrors = validateWallet();
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleDummyPayment = () => {
    setError(null);

    if (!validatePayment()) {
      return;
    }

    setPaymentProcessing(true);

    // Simulate payment delay
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setPaymentSuccess(false);
    setPaymentMethod('card');

    // Clear all inputs and errors
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setUpiId('');
    setNetBankingUser('');
    setWalletNumber('');
    setErrors({});
  };

  if (!activePlan) {
    return (
      <Container className="py-5 text-center">
        <h4>No plan selected for payment.</h4>
        <Button variant="secondary" onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h3 className="text-center mb-4">Confirm Your Insurance</h3>

        <p><strong>Type:</strong> {activePlan.insuranceType}</p>
        <p><strong>Plan:</strong> {activePlan.planName}</p>
        {activePlan.company && <p><strong>Company:</strong> {activePlan.company}</p>}
        {activePlan.brand && <p><strong>Brand:</strong> {activePlan.brand}</p>}
        {activePlan.fuel && <p><strong>Fuel:</strong> {activePlan.fuel}</p>}
        {activePlan.variant && <p><strong>Variant:</strong> {activePlan.variant}</p>}
        {activePlan.year && <p><strong>Year:</strong> {activePlan.year}</p>}
        <p><strong>Amount:</strong> ₹{activePlan.price}</p>

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="text-center">
          <Button variant="success" size="lg" onClick={handleCheckout} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Pay Now'}
          </Button>
        </div>
      </Card>

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentSuccess ? (
            <Alert variant="success" className="text-center">
              Payment Successful! 🎉<br />
              Thank you for your purchase.
            </Alert>
          ) : (
            <>
              <Form.Group>
                <Form.Label>Select Payment Method:</Form.Label>
                <div>
                  {['card', 'upi', 'netbanking', 'wallet'].map((method) => (
                    <Form.Check
                      inline
                      key={method}
                      type="radio"
                      label={
                        method === 'netbanking'
                          ? 'Net Banking'
                          : method.charAt(0).toUpperCase() + method.slice(1)
                      }
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => {
                        setPaymentMethod(method);
                        setErrors({});
                      }}
                      disabled={paymentProcessing}
                    />
                  ))}
                </div>
              </Form.Group>

              {/* Card Payment Inputs */}
              {paymentMethod === 'card' && (
                <Form className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '').slice(0, 16);
                        val = val.match(/.{1,4}/g)?.join(' ') || '';
                        setCardNumber(val);
                      }}
                      isInvalid={!!errors.cardNumber}
                      disabled={paymentProcessing}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Expiry Date (MM/YY)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={expiry}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (/^\d{2}$/.test(val)) val = val + '/';
                        if (val.length > 5) val = val.slice(0, 5);
                        setExpiry(val);
                      }}
                      isInvalid={!!errors.expiry}
                      disabled={paymentProcessing}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiry}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="123"
                      maxLength={3}
                      value={cvv}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '').slice(0, 3);
                        setCvv(val);
                      }}
                      isInvalid={!!errors.cvv}
                      disabled={paymentProcessing}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              )}

              {/* UPI Payment Inputs */}
              {paymentMethod === 'upi' && (
                <Form.Group className="mt-3">
                  <Form.Label>UPI ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="example@bank"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    isInvalid={!!errors.upiId}
                    disabled={paymentProcessing}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.upiId}
                  </Form.Control.Feedback>
                </Form.Group>
              )}

              {/* Net Banking Payment Inputs */}
              {paymentMethod === 'netbanking' && (
                <Form.Group className="mt-3">
                  <Form.Label>Net Banking Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Net Banking username"
                    value={netBankingUser}
                    onChange={(e) => setNetBankingUser(e.target.value)}
                    isInvalid={!!errors.netBankingUser}
                    disabled={paymentProcessing}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.netBankingUser}
                  </Form.Control.Feedback>
                </Form.Group>
              )}

              {/* Wallet Payment Inputs */}
              {paymentMethod === 'wallet' && (
                <Form.Group className="mt-3">
                  <Form.Label>Wallet Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your wallet number"
                    value={walletNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setWalletNumber(val);
                    }}
                    isInvalid={!!errors.walletNumber}
                    disabled={paymentProcessing}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.walletNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              )}

              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  onClick={handleDummyPayment}
                  disabled={paymentProcessing}
                >
                  {paymentProcessing ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    'Pay ₹' + activePlan.price
                  )}
                </Button>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {paymentSuccess ? (
            <Button
              variant="success"
              onClick={() => {
                closeModal();
                navigate('/'); // Redirect after success
              }}
            >
              Close
            </Button>
          ) : (
            <Button variant="secondary" onClick={closeModal} disabled={paymentProcessing}>
              Cancel
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Payment;
