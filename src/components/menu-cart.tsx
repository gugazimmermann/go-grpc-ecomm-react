import React, { ReactElement, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Badge, Toast } from "react-bootstrap";
import { AppContext } from "../context";
import { ReactComponent as Cart } from "../imgs/shopping-cart.svg";
import { CART, PRODUCT_ADDED, PRODUCT_REMOVED, PRODUCT_UPDATED } from "../constants";
import { IToast } from "../interfaces";

const MenuCart = (): ReactElement => {
  const { state } = useContext(AppContext);
  const history = useHistory();
  const [toast, setToast] = useState({} as IToast);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.toast.product) {
      setToast(state.toast);
      setShowToast(true);
    }
  }, [state.toast]);

  return (
    <div className="cart position-relative">
      <Cart onClick={() => history.push(`${CART}`)} width="40" height="40" className="logo cart-img ml-sm-5" />
      <Badge variant="light" className="badge position-absolute">
        {state.cart.reduce((s, i) => s + i.quantity, 0)}
      </Badge>
      <Toast
        animation={false}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={1000}
        autohide
        className={`toast position-absolute ${
          toast.type === PRODUCT_ADDED
            ? "bg-secondary"
            : toast.type === PRODUCT_UPDATED
            ? "bg-info"
            : toast.type === PRODUCT_REMOVED
            ? "bg-danger"
            : ""
        }`}
      >
        <Toast.Header>
          <strong className="mr-auto">{toast.type}</strong>
        </Toast.Header>
        {toast.product && (
          <Toast.Body>
            <img alt={toast.product.name} src={process.env.PUBLIC_URL + `/imgs/${toast.product.id}.jpg`} />
            <strong>{toast.product.name}</strong>
            <br />$ {toast.product.value ? toast.product.value.toFixed(2) : 0.0}
          </Toast.Body>
        )}
      </Toast>
    </div>
  );
};

export default MenuCart;
