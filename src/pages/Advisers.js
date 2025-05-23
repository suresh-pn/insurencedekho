import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const dummyAdvisers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Insurance Advisor",
    bio: "With 10+ years in insurance, Rajesh helps clients find the best plans tailored to their needs.",
    social: {
      linkedin: "https://linkedin.com/in/rajesh-kumar",
      twitter: "https://twitter.com/rajesh_kumar",
      email: "rajesh.kumar@example.com",
    },
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Health Insurance Specialist",
    bio: "Sneha specializes in health insurance and is passionate about customer care and service.",
    social: {
      linkedin: "https://linkedin.com/in/sneha-patel",
      twitter: "https://twitter.com/sneha_patel",
      email: "sneha.patel@example.com",
    },
  },
  {
    id: 3,
    name: "Anil Sharma",
    role: "Automobile Insurance Expert",
    bio: "Anil’s expertise in automobile insurance makes him a trusted advisor for vehicle owners.",
    social: {
      linkedin: "https://linkedin.com/in/anil-sharma",
      twitter: "https://twitter.com/anil_sharma",
      email: "anil.sharma@example.com",
    },
  },
  {
    id: 4,
    name: "Pooja Verma",
    role: "Life Insurance Consultant",
    bio: "Pooja focuses on life insurance and helps clients secure their family's future.",
    social: {
      linkedin: "https://linkedin.com/in/pooja-verma",
      twitter: "https://twitter.com/pooja_verma",
      email: "pooja.verma@example.com",
    },
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Travel Insurance Specialist",
    bio: "Vikram assists clients with travel insurance to keep their journeys safe and secure.",
    social: {
      linkedin: "https://linkedin.com/in/vikram-singh",
      twitter: "https://twitter.com/vikram_singh",
      email: "vikram.singh@example.com",
    },
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Property Insurance Expert",
    bio: "Meera advises clients on protecting their homes and properties with the right insurance.",
    social: {
      linkedin: "https://linkedin.com/in/meera-joshi",
      twitter: "https://twitter.com/meera_joshi",
      email: "meera.joshi@example.com",
    },
  },
  {
    id: 7,
    name: "Sandeep Rao",
    role: "Business Insurance Advisor",
    bio: "Sandeep specializes in business insurance, helping companies minimize risks.",
    social: {
      linkedin: "https://linkedin.com/in/sandeep-rao",
      twitter: "https://twitter.com/sandeep_rao",
      email: "sandeep.rao@example.com",
    },
  },
  {
    id: 8,
    name: "Anita Desai",
    role: "Senior Insurance Planner",
    bio: "Anita crafts personalized insurance plans for individuals and families.",
    social: {
      linkedin: "https://linkedin.com/in/anita-desai",
      twitter: "https://twitter.com/anita_desai",
      email: "anita.desai@example.com",
    },
  },
];

const Advisers = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center">Meet Our Advisers</h2>
      <Row>
        {dummyAdvisers.map(({ id, name, role, bio, social }) => (
          <Col key={id} md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center shadow-sm border-0 d-flex flex-column justify-content-center p-4">
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-primary">{role}</Card.Subtitle>
              <Card.Text className="text-muted" style={{ fontSize: "0.9rem", flexGrow: 1 }}>
                {bio}
              </Card.Text>
              <div className="d-flex justify-content-center gap-3 mt-3 fs-5 text-primary">
                <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href={`mailto:${social.email}`} aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Advisers;
