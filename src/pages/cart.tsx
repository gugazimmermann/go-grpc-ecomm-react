import React, { lazy, ReactElement, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { CHECKOUT } from "../constants";
import { AppContext } from "../context";
import { IProductCard } from "../interfaces";

const LoginForm = lazy(() => import("../components/login-form"));
const LoggedIn = lazy(() => import("../components/logged-in"));
const CartList = lazy(() => import("../components/cart-list"));

const keycloak = {
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientID: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  clientSecret: process.env.REACT_APP_KEYCLOAK_CLIENT_SECRET,
  info: process.env.REACT_APP_KEYCLOAK_INFO,
};
const httpClient = axios.create({ baseURL: keycloak.url });

const Cart = (): ReactElement => {
  const { state, dispatch } = useContext(AppContext);
  const [items, setItems] = useState<IProductCard[]>([]);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    setItems(state.cart);
  }, [state.cart]);

  const handleCheckout = () => {
    dispatch({ type: CHECKOUT, payload: null });
    setCheckout(true);
  };

  return (
    <section className="pb-5">
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <strong>Cart</strong>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col className="cart">
            {items.length > 0 ? (
              <CartList items={items} />
            ) : (
              <h3 className="text-center w-100">{!checkout ? "Cart is empty" : "Thanks for buying!"}</h3>
            )}
          </Col>
          <Col xs={4}>
            {!state.user.token ? (
              <LoginForm keycloak={keycloak} httpClient={httpClient} setCheckout={setCheckout} />
            ) : (
              <LoggedIn keycloak={keycloak} httpClient={httpClient} handleCheckout={handleCheckout} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
