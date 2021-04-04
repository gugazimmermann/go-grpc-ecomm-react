import React, { ReactElement, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AppContext } from "../context";
import { ADD_PRODUCT } from "../constants";
import { IProduct } from "../interfaces";

const ProductCard = ({ product }: { product: IProduct }): ReactElement => {
  const { dispatch } = useContext(AppContext);

  const addProduct = (product: IProduct) => {
    if (product.quantity > 0) {
      dispatch({ type: ADD_PRODUCT, payload: product });
    }
  };

  return (
    <Card className="product overflow-hidden">
      <Card.Img variant="top" alt={product.name} src={process.env.PUBLIC_URL + `/imgs/${product.id}.jpg`} />
      {product.quantity <= 3 && <div className="ribbon few">FEW LEFT</div>}
      {product.quantity === 0 && <div className="ribbon sold">SOLD</div>}
      <Card.Body className="p-2">
        <Card.Title className="text-center">{product.name}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-right p-1">$ {product.value.toFixed(2)}</Card.Footer>
      <Card.Footer className="text-right p-0">
        <Button
          variant="secondary"
          size="sm"
          block
          onClick={() => addProduct(product)}
          disabled={product.quantity === 0}
        >
          Add To Cart
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
