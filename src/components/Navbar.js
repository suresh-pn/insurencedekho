import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthModal from './AuthModal';
import './Navbar.css'; // We'll add CSS here

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <FaShieldAlt className="text-primary fs-3 me-2" />
          <span className="fw-bold text-dark fs-4">InsuranceDhoka</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Insurance Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="insuranceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Insurance
              </Link>
              <ul className="dropdown-menu" aria-labelledby="insuranceDropdown">
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/car">
                    <i className="bi bi-car-front me-2"></i>Car Insurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/bike">
                    <i className="bi bi-bicycle me-2"></i>Bike Insurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/health">
                    <i className="bi bi-heart-pulse me-2"></i>Health Insurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/life">
                    <i className="bi bi-people me-2"></i>Life Insurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/term">
                    <i className="bi bi-clock-history me-2"></i>Term Insurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/insurance/travel">
                    <i className="bi bi-airplane me-2"></i>Travel Insurance
                  </Link>
                </li>
              </ul>
            </li>

            {/* Advisors Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="advisorsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Insurance Advisors
              </Link>
              <ul className="dropdown-menu" aria-labelledby="advisorsDropdown">
                <li>
                  <Link className="dropdown-item" to="/Advisers">
                    Advisers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/adviser">
                    Become an Advisor
                  </Link>
                </li>
              </ul>
            </li>

            {/* Renew */}
            <li className="nav-item">
              <Link className="nav-link" to="/renew">
                Renew
              </Link>
            </li>

            {/* Support Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="supportDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </Link>
              <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                <li>
                  <Link className="dropdown-item" to="/FAQs">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>

            {/* News Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="newsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </Link>
              <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                <li>
                  <Link className="dropdown-item" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/guides">
                    Tips & Guides
                  </Link>
                </li>
              </ul>
            </li>

            {/* Track Policy */}
            <li className="nav-item">
              <Link className="nav-link" to="/track-policy">
                Track & Policy Download
              </Link>
            </li>

            {/* Notification Bell and User/Login */}
            <li className="nav-item dropdown ms-3 d-flex align-items-center">
              {/* Notification Bell Icon with animation and badge */}
              <button
                type="button"
                className="btn btn-outline-secondary me-3 position-relative notification-btn"
                aria-label="Notifications"
                onClick={() => alert('Notifications clicked')}
                style={{ fontSize: '1.3rem', transition: 'color 0.3s ease' }}
              >
                <i className="bi bi-bell"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger notification-badge">
                  3
                  <span className="visually-hidden">unread notifications</span>
                </span>
              </button>

              {/* User Greeting / Login */}
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hello, {user.name || user.email}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <button
                    className="btn btn-danger rounded-pill px-4"
                    onClick={() => setShowModal(true)}
                  >
                    Login
                  </button>
                  <AuthModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    setUser={setUser}
                  />
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
