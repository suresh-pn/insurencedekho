import React, { useState } from 'react';

const BuyNowPage = () => {
  const [gender, setGender] = useState(' ');
  const [smokerStatus, setSmokerStatus] = useState(' ');
  const [income, setIncome] = useState('<2');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${fullName}, details submitted!`);
  };

  return (
    <div className="container my-5 p-4 border rounded shadow-sm" style={{ maxWidth: '700px' }}>
      <h3 className="mb-4 text-primary fw-bold">
        Get ₹1 crore Life Insurance plan starting from <span className="text-success">₹16/day</span>
      </h3>

      <div className="alert alert-info text-center fs-6 fw-semibold mb-4">
        Offer: Get Online Discount upto <span className="text-danger">15% off*</span>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Enter your Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            placeholder=" "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="btn-group" role="group" aria-label="Gender selection">
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

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input
              type="tel"
              id="mobile"
              className="form-control"
              placeholder=" "
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10}"
              title="Enter a 10-digit mobile number"
            />
          </div>
        </div>

        {/* Smoker Status */}
        <div className="mb-3">
          <label className="form-label d-block">Smoker Status</label>
          <div className="btn-group" role="group" aria-label="Smoker status">
            <input
              type="radio"
              className="btn-check"
              name="smokerStatus"
              id="nonSmoker"
              autoComplete="off"
              checked={smokerStatus === 'Non-Smoker'}
              onChange={() => setSmokerStatus('Non-Smoker')}
            />
            <label className="btn btn-outline-success" htmlFor="nonSmoker">
              <i className="bi bi-x-circle me-2"></i>Non-Smoker
            </label>

            <input
              type="radio"
              className="btn-check"
              name="smokerStatus"
              id="smoker"
              autoComplete="off"
              checked={smokerStatus === 'Smoker'}
              onChange={() => setSmokerStatus('Smoker')}
            />
            <label className="btn btn-outline-danger" htmlFor="smoker">
              <i className="bi bi-check-circle me-2"></i>Smoker
            </label>
          </div>
        </div>

        {/* Annual Income Dropdown */}
        <div className="mb-4">
          <label htmlFor="income" className="form-label">
            Annual Income (in lakhs)
          </label>
          <select
            id="income"
            className="form-select"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          >
            <option value="<2">&lt;2</option>
            <option value="2-3">2-3</option>
            <option value="3-5">3-5</option>
            <option value="5-10">5-10</option>
            <option value=">10">&gt;10</option>
          </select>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            required
          />
          <label className="form-check-label" htmlFor="terms">
            By clicking, I agree to <strong>terms & conditions</strong> and <strong>privacy policy</strong>.
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-primary px-4">
            View Plans <i className="bi bi-arrow-right ms-2"></i>
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
  );
};

export default BuyNowPage;
