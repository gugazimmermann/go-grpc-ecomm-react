import React, { ReactElement } from "react";
import Menu from "./menu";
import { ReactComponent as Logo } from "../imgs/shield.svg";
import "./layout.scss";
import { Container, Row, Col } from "react-bootstrap";

const Header = (): ReactElement => {
  return (
    <header>
      <Menu />
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col xs lg="2" className="text-center">
            <Logo className="logo" />
          </Col>
          <Col md="auto">
            <h1>{process.env.REACT_APP_STORE_TITLE}</h1>
            <p className="lead">An example store created for the Go gRPC Ecommerce article.</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
