import React, { lazy, ReactElement } from "react";
import { IProductCard } from "../interfaces";

const CartItem = lazy(() => import("./cart-item"));

const CartList = ({ items }: { items: IProductCard[] }): ReactElement => {
  return (
    <ul className="list-unstyled">
      {items.map((i) => (
        <CartItem key={i.product.id} item={i} />
      ))}
      <li className="media border-bottom border-primary mb-2">
        <h5 className="mt-0 mb-1 text-right w-100">
          <strong>$ {items.reduce((s, i) => s + i.product.value * i.quantity, 0).toFixed(2)}</strong>
        </h5>
      </li>
    </ul>
  );
};

export default CartList;
