import React, { ReactElement } from "react";
import { Alert, Container } from "react-bootstrap";

const NotFound = (): ReactElement => {
  return (
    <section className="pb-5">
      <Container>
        <Alert variant="secondary mt-5">
          Sorry, <strong>Page Not Found</strong>!
        </Alert>
      </Container>
    </section>
  );
};

export default NotFound;
