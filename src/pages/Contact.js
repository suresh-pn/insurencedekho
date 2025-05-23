import React from "react";

const contactInfo = {
  companyName: "InsuranceDhoka Pvt Ltd",
  address: "456 Demo Avenue, Sector 21, karnataka, India",
  phone: "+91 8747932167",
  email: "helpdesk@insurancedhoka.com",
  officeHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  socialMedia: {
    facebook: "https://facebook.com/InsuranceDhokaDemo",
    twitter: "https://twitter.com/InsuranceDhokaDemo",
    linkedin: "https://linkedin.com/company/InsuranceDhokaDemo",
  },
};

const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary">Contact Us</h2>
      <div className="card shadow-sm p-4">
        <h5 className="mb-3">Reach Us At:</h5>
        <ul className="list-unstyled fs-5">
          <li className="mb-2">
            <i className="bi bi-building me-2 text-primary"></i>
            <strong>Company Name:</strong> {contactInfo.companyName}
          </li>
          <li className="mb-2">
            <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
            <strong>Address:</strong> {contactInfo.address}
          </li>
          <li className="mb-2">
            <i className="bi bi-telephone-fill me-2 text-success"></i>
            <strong>Phone:</strong> {contactInfo.phone}
          </li>
          <li className="mb-2">
            <i className="bi bi-envelope-fill me-2 text-warning"></i>
            <strong>Email:</strong> {contactInfo.email}
          </li>
          <li className="mb-3">
            <i className="bi bi-clock-fill me-2 text-info"></i>
            <strong>Office Hours:</strong> {contactInfo.officeHours}
          </li>
        </ul>

        <h6 className="mb-3">Follow Us:</h6>
        <div>
          <a
            href={contactInfo.socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm me-2"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href={contactInfo.socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-info btn-sm me-2"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href={contactInfo.socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary btn-sm"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
