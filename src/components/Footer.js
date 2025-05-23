import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const contactInfo = {
  companyName: "InsuranceDhoka Pvt Ltd",
  address: "456 Demo Avenue, Sector 21, Mumbai, Maharashtra, India",
  phone: "+91 99887 66554",
  email: "helpdesk@insurancedhoka.com",
  officeHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  socialMedia: {
    facebook: "https://facebook.com/InsuranceDhokaDemo",
    twitter: "https://twitter.com/InsuranceDhokaDemo",
    linkedin: "https://linkedin.com/company/InsuranceDhokaDemo",
  },
};

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container>
        <Row>
          <Col md={4}>
            <h5>{contactInfo.companyName}</h5>
            <p>Helping you choose the best insurance plans wisely.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/insurance">Products</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Contact Us</h6>
            <p><FaMapMarkerAlt className="me-2" /> {contactInfo.address}</p>
            <p><FaPhone className="me-2" /> {contactInfo.phone}</p>
            <p><FaEnvelope className="me-2" /> {contactInfo.email}</p>
            <p><strong>Office Hours:</strong> {contactInfo.officeHours}</p>
            <div>
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noreferrer" className="me-3 text-dark">
                <FaFacebook size={20} />
              </a>
              <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noreferrer" className="me-3 text-dark">
                <FaTwitter size={20} />
              </a>
              <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noreferrer" className="text-dark">
                <FaLinkedin size={20} />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">© 2025 InsuranceDhoka. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
