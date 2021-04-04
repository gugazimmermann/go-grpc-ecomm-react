import React, { ReactElement } from "react";
import { Col, Form, Row } from "react-bootstrap";

type Props = {
  pageQty: number;
  changeQuantity: (qty: number) => void;
};

const QtyPerPage = ({ pageQty, changeQuantity }: Props): ReactElement => {
  return (
    <Form.Group as={Row}>
      <Form.Label column sm={7}>
        QTY per page:
      </Form.Label>
      <Col sm={5}>
        <Form.Control as="select" value={pageQty} onChange={(e) => changeQuantity(+e.target.value)}>
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

export default QtyPerPage;
