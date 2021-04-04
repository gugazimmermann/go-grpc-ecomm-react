import React, { lazy, ReactElement } from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Logo } from "../imgs/shield.svg";

const Menu = lazy(() => import("./menu"));

const Header = (): ReactElement => {
  return (
    <header className="header">
      <Menu />
      <Row className="justify-content-md-center mt-3">
        <Col xs lg="2" className="text-center">
          <Logo className="logo" />
        </Col>
        <Col md="auto">
          <h1>{process.env.REACT_APP_STORE_TITLE}</h1>
          <p className="lead">An example store created for the Go gRPC Ecommerce article.</p>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
