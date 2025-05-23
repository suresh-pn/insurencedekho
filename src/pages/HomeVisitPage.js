import React, { useState } from 'react';

const HomeVisitPage = () => {
  const [gender, setGender] = useState('Male');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}! Your free home visit is booked.`);
  };

  return (
    <div className="container my-5 p-4 border rounded shadow-sm" style={{ maxWidth: '800px' }}>
      {/* Header */}
      <h2 className="fw-bold text-primary mb-1">
        Get Free Expert Assistance at Home for
      </h2>
      <h3 className="mb-4">your Health Insurance Plan</h3>
      <p className="lead mb-5 text-secondary">
        Secure Your Family's Health & Wealth - Compare Top Plans, Get Customized Quotes
      </p>

      {/* Advisor Info Row */}
      <div className="row text-center mb-5">
        <div className="col-md-3 mb-3">
          <i className="bi bi-person-badge fs-1 text-primary"></i>
          <h5 className="mt-2">Expert Advice</h5>
          <p className="text-muted">IRDAI Certified Professionals</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="bi bi-clock fs-1 text-primary"></i>
          <h5 className="mt-2">60 Minutes</h5>
          <p className="text-muted">Personalised Advice</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="bi bi-headset fs-1 text-primary"></i>
          <h5 className="mt-2">24 X 7</h5>
          <p className="text-muted">Claims Support</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="bi bi-house-heart fs-1 text-primary"></i>
          <h5 className="mt-2">Home Visits</h5>
          <p className="text-muted">20000+ Visits & 2000+ Experts</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="border p-4 rounded shadow-sm mb-5">
        <h4 className="fw-semibold mb-3">Fill Your Details To Book Now</h4>
        <small className="text-danger mb-3 d-block">Limited slots available</small>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Suresh"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <div className="input-group">
              <span className="input-group-text">+91</span>
              <input
                id="mobile"
                type="tel"
                className="form-control"
                placeholder="8747932167"
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                required
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="form-label d-block">Gender</label>
            <div className="btn-group" role="group" aria-label="Gender">
              <input
                type="radio"
                className="btn-check"
                name="gender"
                id="male"
                autoComplete="off"
                checked={gender === 'Male'}
                onChange={() => setGender('Male')}
              />
              <label className="btn btn-outline-primary" htmlFor="male">
                <i className="bi bi-gender-male me-2"></i>Male
              </label>

              <input
                type="radio"
                className="btn-check"
                name="gender"
                id="female"
                autoComplete="off"
                checked={gender === 'Female'}
                onChange={() => setGender('Female')}
              />
              <label className="btn btn-outline-primary" htmlFor="female">
                <i className="bi bi-gender-female me-2"></i>Female
              </label>
            </div>
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              By continuing, I agree to <strong>terms & conditions</strong> and <strong>privacy policy</strong>.
            </label>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-primary px-4">
              Book Free Home Visit <i className="bi bi-arrow-right ms-2"></i>
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => alert('Details sent on WhatsApp!')}
            >
              <i className="bi bi-whatsapp me-2"></i>Get Details on WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* What to Expect Section */}
      <div>
        <h4 className="fw-semibold mb-3">What to expect from home visits</h4>
        <p className="mb-4">
          4 quick steps to get personalised advice for your health insurance needs from experienced IRDAI certified experts.
        </p>

        <div className="row text-center">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="col-md-3 mb-4">
              <div className="border rounded p-3 h-100 d-flex flex-column align-items-center">
                <i className="bi bi-file-earmark-text fs-1 text-primary mb-3"></i>
                <h5>Step {step}</h5>
                {step === 1 && <p>Book Free Home Visit (As per your convenience)</p>}
                {step === 2 && <p>Get a perfect advisor as per your needs</p>}
                {step === 3 && <p>Get 60 min unbiased advice at home</p>}
                {step === 4 && <p>Get personalized health plans</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeVisitPage;
