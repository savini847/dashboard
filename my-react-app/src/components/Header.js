import React from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import LanguageToggle from './LanguageToggle';

const Header = ({ title, language, setLanguage }) => {
  return (
    <Navbar bg="light" className="py-3 border-bottom">
      <Container>
        <Row className="w-100 align-items-center text-center">
          <Col xs="auto" className="text-start">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </Col>

          <Col className="text-center">
            <h1 className="header-title m-0">{title}</h1>
          </Col>
          <Col xs="auto" className="invisible">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
