import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import hook
import 'bootstrap-icons/font/bootstrap-icons.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/buy'); // ✅ redirect to /buy route
  };

  const handleBookVisit = () => {
    navigate('/homevisitpage');
  };

  return (
    <div className="banner-container">
      <div
        id="bannerCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-5 px-3 content-container">
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <span className="badge bg-danger me-3 px-3 py-2 fs-6">LIVE</span>
                <img
                  src="lic-logo.png"
                  alt="LIC Logo"
                  className="me-3"
                  style={{ width: '60px' }}
                />
                <div>
                  <h2 className="fw-bold mb-1 fs-3">Buy New Jeevan Amar</h2>
                  <p className="mb-0 fs-5">Secure your Family's Future with LIC</p>
                </div>
              </div>
              <button
                className="btn btn-light btn-lg px-4 shadow-sm"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-5 px-3 content-container">
              <div className="d-flex align-items-center mb-4 mb-md-0">
                <i className="bi bi-house-door-fill fs-2 text-white me-3"></i>
                <div>
                  <h2 className="fw-bold mb-1 fs-3">
                    Free <span className="text-warning">Health Insurance</span>{' '}
                    Consultation
                  </h2>
                  <p className="mb-0 fs-5">
                    ✅ ID Certified Experts &nbsp; ✅ Lifetime Claim Support
                  </p>
                </div>
              </div>
              <button
                className="btn btn-light btn-lg px-4 shadow-sm"
                onClick={handleBookVisit}
              >
                Book Home Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-item.active {
          background: linear-gradient(135deg, #004aad, #1a73e8);
          color: white;
        }

        .carousel-item {
          background: linear-gradient(135deg, #0d6efd, #66a6ff);
          color: white;
        }

        .content-container {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 15px;
          padding: 1rem 2rem;
        }

        /* Optional: add smooth transition on hover for the button */
        .btn-light:hover {
          background-color: #e9ecef;
          color: #004aad;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
          .carousel-item.active {
    background: linear-gradient(135deg, #0dcaf0, #3dd5f3); /* Sky blue gradient */
    color: #004466;
  }

  .carousel-item {
    background: linear-gradient(135deg, #38d9a9, #71e1f4); /* lighter sky blue gradient */
    color: #004466;
  }

  .content-container {
    background: rgba(255, 255, 255, 0.15); /* lighter translucent */
    border-radius: 15px;
    padding: 1rem 2rem;
  }

  .btn-light:hover {
    background-color: #b3e0ff;
    color: #004466;
    transition: background-color 0.3s ease, color 0.3s ease;
      `}</style>
    </div>
  );
};

export default Banner;
