import React, { ReactElement, useContext } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { REMOVE_PRODUCT, UPDATE_PRODUCT } from "../constants";
import { AppContext } from "../context";
import { IProductCard } from "../interfaces";

const CartItem = ({ item }: { item: IProductCard }): ReactElement => {
  const { dispatch } = useContext(AppContext);

  const updateProduct = (id: number, type: "add" | "remove") => {
    dispatch({ type: UPDATE_PRODUCT, payload: { id, type } });
  };

  const removeProduct = (id: number) => {
    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };

  return (
    <li key={item.product.id} className="media border-bottom border-primary mb-2">
      <img src={process.env.PUBLIC_URL + `/imgs/${item.product.id}.jpg`} className="mr-3" alt={item.product.name} />
      <div className="media-body mt-3">
        <h5>
          <Row>
            <Col xs={9}>{item.product.name}</Col>
            <Col className="text-right">$ {(item.product.value * item.quantity).toFixed(2)}</Col>
          </Row>
        </h5>
        <Row className="mt-3">
          <Col xs={7}></Col>
          <Col className="text-right">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Quantity:</InputGroup.Text>
              </InputGroup.Prepend>
              <InputGroup.Prepend>
                <Button onClick={() => updateProduct(item.product.id, "remove")}>-</Button>
              </InputGroup.Prepend>
              <FormControl value={item.quantity} onChange={() => updateProduct(item.product.id, "add")} />
              <InputGroup.Append>
                <Button onClick={() => updateProduct(item.product.id, "add")}>+</Button>
              </InputGroup.Append>
            </InputGroup>
            <p onClick={() => removeProduct(item.product.id)}>remove from cart</p>
          </Col>
        </Row>
      </div>
    </li>
  );
};

export default CartItem;
