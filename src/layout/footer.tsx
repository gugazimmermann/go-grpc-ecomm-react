import React, { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";

const Footer = (): ReactElement => {
  return (
    <footer className="footer bg-primary">
      <Row>
        <Col>
          <p>
            {process.env.REACT_APP_STORE_TITLE} by{" "}
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guga-zimmermann/">
              Guga Zimmermann
            </a>
          </p>
        </Col>
        <Col className="text-right">
          <p>
            Icons made from{" "}
            <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
