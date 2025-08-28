import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Racing.css'; 

const Racing = () => {
  return (
    <Container fluid className="racing-section">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h2 className="text-center text-white">Scuderia Ferrari</h2>
          <p className="text-center text-white">
            Conoce a nuestros pilotos y el equipo técnico que impulsa la excelencia en la Fórmula 1.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="racing-card">
            <Card.Img variant="top" src="../charles.jpeg" />
            <Card.Body>
              <Card.Title className="text-center">Charles Leclerc</Card.Title>
              <Card.Text className="text-center">Piloto Principal</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="racing-card">
            <Card.Img variant="top" src="../lewis.jpeg" />
            <Card.Body>
              <Card.Title className="text-center">Lewis Hamilton</Card.Title>
              <Card.Text className="text-center">Piloto Principal</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="racing-card">
            <Card.Img variant="top" src="../fred.jpg" />
            <Card.Body>
              <Card.Title className="text-center">Frédéric Vasseur</Card.Title>
              <Card.Text className="text-center">Director Técnico</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Racing;
