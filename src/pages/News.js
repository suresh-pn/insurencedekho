import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaNewspaper, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const dummyNews = [
  {
    id: 1,
    title: "InsuranceDhoka Launches New Health Insurance Plans",
    date: "May 15, 2025",
    summary: "We have launched new health insurance plans to offer better coverage for your family’s wellbeing.",
    link: "#"
  },
  {
    id: 2,
    title: "Tips to Choose the Best Car Insurance",
    date: "May 10, 2025",
    summary: "Read our latest guide on how to select the most suitable car insurance for your needs.",
    link: "#"
  },
  {
    id: 3,
    title: "Insurance Fraud Awareness Month",
    date: "May 1, 2025",
    summary: "Join us in raising awareness about insurance fraud and how you can protect yourself.",
    link: "#"
  },
  {
    id: 4,
    title: "How to Renew Your Insurance Policy Online",
    date: "April 25, 2025",
    summary: "Step-by-step instructions on renewing your insurance policy quickly and safely online.",
    link: "#"
  },
  {
    id: 5,
    title: "Travel Insurance: What You Need to Know",
    date: "April 18, 2025",
    summary: "Essential information about travel insurance and how it can protect your trips worldwide.",
    link: "#"
  },
  {
    id: 6,
    title: "Life Insurance Benefits and Myths Debunked",
    date: "April 10, 2025",
    summary: "Learn about the benefits of life insurance and clear up common misconceptions.",
    link: "#"
  }
];

const News = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center">
        <FaNewspaper className="me-2" />
        Latest News
      </h2>
      <Row>
        {dummyNews.map(({ id, title, date, summary, link }) => (
          <Col key={id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Header className="d-flex align-items-center bg-primary text-white rounded-top">
                <FaCalendarAlt className="me-2" />
                <small>{date}</small>
              </Card.Header>
              <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-secondary">{summary}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button variant="outline-primary" href={link} className="d-flex align-items-center">
                  Read More <FaArrowRight className="ms-2" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
