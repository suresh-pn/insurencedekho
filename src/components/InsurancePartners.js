import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // <-- import Link
import Slider from 'react-slick';
import { FaShieldAlt, FaBuilding, FaBriefcaseMedical, FaHeartbeat } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { name: "Bajaj Allianz", icon: <FaShieldAlt /> },
  { name: "HDFC ERGO", icon: <FaBuilding /> },
  { name: "Royal Sundaram", icon: <FaHeartbeat /> },
  { name: "Chola MS", icon: <FaBriefcaseMedical /> },
  { name: "TATA AIG", icon: <FaShieldAlt /> },
  { name: "ICICI Lombard", icon: <FaBuilding /> },
  { name: "SBI General", icon: <FaBriefcaseMedical /> },
  { name: "Reliance General", icon: <FaHeartbeat /> },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ]
};

const InsurancePartners = () => (
  <Container className="py-5 text-center">
    <h4 className="mb-4">Our Insurance Partners</h4>
    <Slider {...settings}>
      {partners.map((partner, idx) => (
        <div key={idx} className="px-3">
          <Link to={`/insurance-plans/${encodeURIComponent(partner.name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="border rounded shadow-sm p-4 bg-white d-flex flex-column align-items-center">
              <div className="text-primary fs-2 mb-2">{partner.icon}</div>
              <h6 className="mb-0">{partner.name}</h6>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  </Container>
);

export default InsurancePartners;
