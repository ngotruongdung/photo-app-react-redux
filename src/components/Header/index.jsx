import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <p
              className="header__link header__title"
            >
              ASM-REACTJS
            </p>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Photo App
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
